---
layout: post
title: Docker et Symfony sur MacOs, optimisons tout cela
date: 2017-11-06 00:00:00 +0300
description: En utilisant Docker sur MacOs, je me suis aperçu que mon environnement de dev était extrêmement lent. Nous allons voir dans ce billet comment y remédier.
img: docker.png # Add image post (optional)
tags: [Symfony, Docker, PHP, MacOs, Nginx] # add tag
---

Comme base pour mes projets Symfony, j’utilise [le multicontainer Docker créé par Maxpou et partagé sur Github (merci à lui)](https://github.com/maxpou/docker-symfony).

Cependant, ça rame sévère sur MacOs. Le rendu d’une simple page me prends entre 4 et 6 secondes. Autant vous dire que c’est loin d’être ce qu’il me faut !

Voici 2 étapes permettant d’avoir une vitesse de rendu normal en dev.

> Note : J’utilise ici Symfony 3.3+

## 1/ Sortir le dossier /vendor

La première chose à faire est de sortir le dossier vendor/ de notre container.

Pour cela, il vous faut modifier votre fichier composer.json en ajoutant :

composer.json

Il vous faut ensuite modifier l’appel à votre fichier autoload.php. Vous devez donc modifier cela dans les fichiers : bin/console, web/app_dev.php et web/app.php :

```php
require '/app-vendor/autoload.php';
```

Vous pouvez désormais lancer votre composer install qui installera les différentes dépendances de votre projet.
Bien sûr, il vous faut aussi ajouter le volume /app-vendor dans votre fichier docker-compose.yml

```yaml
php:
build:
context: php7-fpm
args:
TIMEZONE: ${TIMEZONE}
    volumes:
        - ${SYMFONY_APP_PATH}:/var/www/symfony
        - ./logs/symfony:/var/www/symfony/logs
        - /app-vendor
```

## 2/ Sortir les dossiers /cache et /logs

Ici, c’est la même idée. On va sortir les dossiers de cache et de log du container.

Il vous faut updater le fichier app/AppKernel.php :

Une fois ceci fait, il faut ajouter les volumes à votre docker-compose.yml.

```yaml
php:
build:
context: php7-fpm
args:
TIMEZONE: ${TIMEZONE}
    volumes:
        - ${SYMFONY_APP_PATH}:/var/www/symfony
        - ./logs/symfony:/var/www/symfony/logs
        - /app-vendor
        - /app-cache
        - /app-logs
```

Si vous relancez votre application, vous devriez avoir un temps de réponse décent.

Un environnement de dev décent :)

N’hésitez à pas à commenter si vous avez des soucis ou d’autres solutions.

Bon dev !

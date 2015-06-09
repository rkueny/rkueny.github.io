---
title: "Démo Symfony2 avec du social login et une admin"
author: R.Kueny
layout: post
permalink: /developpement-web/une-demo-symfony2-avec-social-login-et-une-admin-facilement
categories:
  - Développement web
tags:
  - web
  - symfony2
  - developpement
  - bundles
  - bonnes pratiques
intro: Démarrer un projet Symfony2 et y mettre les bons bundles c'est ce que nous allons faire !
header-img: img/post-symfony2-login-admin.png
---

L'un des articles qui fonctionne le mieux sur mon blog, est celui traitant de [l'installation et configuration du bundle FOSUserBundle couplé à HWIOauthBundle](http://rkueny.fr/developpement-web/symfony2-fosuserbundle-et-connexion-oauth-facebook-twitter-google-github-etc/).
Symfony est monté en version depuis, et je profite de mes congés pour vous écrire un tutoriel un peu plus long remis au goût du jour.

Nous allons aborder ici :

* Installer Symfony 2.6.*
* Première configuration de l'application
* Ajout de FOSUserBundle
* Ajout de HWIOauthBundle
* Ajout de EasyAdminBundle
* Ajout d'une homepage

Le but étant à la fin d'avoir une base de site réutilisable pour tout vos projets. Si vous voyez un autre bundle ou dev indispensable, n'hésitez pas à m'en parler dans les commentaires.

Pour que vous puissiez y voir plus clair, j'ai aussi mis à votre disposition un dépôt sur Github "Symfony2 Basic" vous permettant de suivre commit par commit l'avancée de ce tutoriel. Je ferais référence aux commits dans le code, mais je continue ici de vous montrer tout le code directement sur le blog.

Vous êtes prêts ? C'est parti.

## Installation de Symfony 2.6

La nouvelle préconisation de SensioLabs est de passer par le Symfony Installer. Il s'agit d'un petit script vous permettant de faire `symfony new nameproject` pour installer un projet. Pour l'installer sur votre machine, il vous suffit de faire :

{% highlight rconsole %}
sudo curl -LsS http://symfony.com/installer -o /usr/local/bin/symfony
sudo chmod a+x /usr/local/bin/symfony 
{% endhighlight %}

Vous pouvez désormais créer votre projet facilement `symfony new symfony_basic`.

![Symfony2 Installer](/img/symfony2bigtuto/symfony_installer.png){: .center-image }

Au moment où je rédige ce tutoriel, la version installée est la version 2.6.5. Vous voici donc avec votre installation de Symfony.

> Le commit de l'étape du projet :
> [277170282199f8350307b13e4a2f8d82cd50f3b8](https://github.com/rkueny/symfony_basic/commit/277170282199f8350307b13e4a2f8d82cd50f3b8)

## Première configuration de l'application

> Je n'aborde pas l'intégration Git ici, mais bien entendu, il est bien mieux de versionner votre projet.

qsdqsd




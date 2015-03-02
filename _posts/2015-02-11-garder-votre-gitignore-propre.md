---
title: Garder votre .gitignore propre
author: R.Kueny
layout: post
permalink: /developpement-web/garder-votre-gitignore-propre
categories:
  - Développement Web
tags:
  - .gitignore
  - A voir
  - bonne pratique
  - développement
  - équipe
  - git
  - projets
  - propre
  - symfony2
  - version
---
Lorsque l&rsquo;on travaille à plusieurs développeurs sur un projet versionné, on a souvent tendance à mettre dans le .gitignore du projet les dossiers et fichiers générés par notre IDE pour ne pas pourrir le projet. C&rsquo;est déjà mieux de faire ça que pas du tout. Mais ce n&rsquo;est pas la bonne façon de faire.

Le .gitignore du projet appartient au projet et peut aider à la compréhension du projet parfois. Les réglages pour votre machine n&rsquo;ont pas à apparaitre là. Il existe une solution très simple pour cela, et qui vous servira pour tout vos projets. Il vous suffit d&rsquo;utiliser un .gitignore global sur votre machine.

Tout d&rsquo;abord créez votre fichier ~/.gitignore_global. Pour ceux qui utilise PhpStorm par exemple, votre fichier contiendra ceci :

<pre>.idea</pre>

Une fois ceci fait, configurez Git en conséquence de cette façon :

    git config --global core.excludesfile ~/.gitignore_global

&nbsp;

Vous avez désormais des commits propres **et** un .gitignore du projet propre.

&nbsp;

<a href="http://rkueny.fr/wp-content/uploads/2015/02/memegj.jpg" rel="lightbox[2196]"><img class="aligncenter  wp-image-2198" src="http://rkueny.fr/wp-content/uploads/2015/02/memegj.jpg" alt="memegj" width="231" height="231" /></a>

&nbsp;
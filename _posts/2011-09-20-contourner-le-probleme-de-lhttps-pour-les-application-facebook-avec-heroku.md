---
title: 'Contourner le problème de l&rsquo;https pour les application Facebook avec Heroku'
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/contourner-le-probleme-de-lhttps-pour-les-application-facebook-avec-heroku
categories:
  - Facebook
tags:
  - A voir
  - Actualités
  - API
  - application
  - applications
  - blog
  - code
  - développement
  - développeur
  - facebook
  - https
  - php
  - sécurité
  - site
  - social
  - tutoriel
---
Il ya quelques temps de cela, Facebook annoncé que les application allaient devoir fournir un certificat ssl. Cela devient même obligatoire au 1er octobre selon la roadmap. Plusieurs développeurs ont montrés leur mécontentement mais Facebook avait prévu le coup. En effet, ils ont annoncés il y a peu un partenariat avec &laquo;&nbsp;Heroku&nbsp;&raquo; permettant d&rsquo;héberger votre application très facilement. Nous allons rapidement voir comment faire.

<a href="http://rkueny.fr/wp-content/uploads/2011/09/facebook-security.gif" rel="lightbox[1376]"><img class="aligncenter size-medium wp-image-1377" title="http facebook application" src="http://rkueny.fr/wp-content/uploads/2011/09/facebook-security-300x175.gif" alt="http facebook application" width="300" height="175" /></a><!--more-->

## Utiliser Heroku

Après avoir crée votre application (ou sur une application déjà existante), il vous suffit de vous rendre sur l&rsquo;onglet &laquo;&nbsp;Basic&nbsp;&raquo; de la partie admin et de choisir le &laquo;&nbsp;Cloud Services&nbsp;&raquo; en cliquant sur Get started. Après avoir choisi Heroku et le language de votre application (PHP dans mon cas) vous devrez accepter les autorisations de l&rsquo;application qui gère ce service.

<a href="http://rkueny.fr/wp-content/uploads/2011/09/cloudservices.png" rel="lightbox[1376]"><img class="aligncenter size-medium wp-image-1380" title="Heroku application Facebook" src="http://rkueny.fr/wp-content/uploads/2011/09/cloudservices-300x268.png" alt="Heroku application Facebook" width="300" height="268" /></a>

Une fois ceci fait, vous n&rsquo;avez plus qu&rsquo;à configurer votre compte Heroku et vous voila parti. Remplacez l&rsquo;url de votre site par celle d&rsquo;Heroku dans la partie admin de votre application pour que cela fonctionne. Pour alimenter le dépôt Heroku, il vous faudra passer par Git. Je ne vais pas m&rsquo;attarder là dessus, vous trouverez pleins de tutoriels sur la toile.

Si vous voulez voir plus en détail les démarches à effectuer : <a title="Developper facebook blog" href="https://developers.facebook.com/blog/post/558/" target="_blank">https://developers.facebook.com/blog/post/558/</a>

<a href="http://rkueny.fr/wp-content/uploads/2011/09/heroku.jpg" rel="lightbox[1376]"><img class="aligncenter size-full wp-image-1381" title="Heroku" src="http://rkueny.fr/wp-content/uploads/2011/09/heroku.jpg" alt="Heroku" width="231" height="80" /></a>

## Ce que cela annonce

Comme je vous le dit depuis un moment maintenant, Facebook tend de plus en plus vers la professionnalisation de ses applications. Fini le temps des bidouilles (quoi que &#8230;), des applis pour tester, Facebook veut des applis pros fait pour ses utilisateurs. Le fait de s&rsquo;associer avec Heroku, peut-être Amazon par la suite, montre bien la voie.

Tout cela annonce du bon pour les développeurs Facebook. Cela est sûrement accéleré par la concurrence que commence à faire naitre Google+ d&rsquo;ailleurs &#8230;.

&nbsp;
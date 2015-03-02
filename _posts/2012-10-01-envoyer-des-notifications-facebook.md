---
title: Envoyer des notifications Facebook
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/envoyer-des-notifications-facebook
categories:
  - Facebook
  - Tips
tags:
  - API
  - application
  - applications
  - développement
  - développeur
  - facebook
  - graph
  - notifications
  - php
  - tutoriel
---
Cela fait un petit moment que je n&rsquo;avais pas pris le temps de poster un billet ici. Il faut dire que depuis que je suis entièrement à mon compte, le temps est une denrée un peu plus rare.

Bref, abordons le sujet qui nous intéresse aujourd&rsquo;hui : les notifications Facebook.

Facebook avait supprimé la possibilité donnée aux développeurs d&rsquo;utiliser les notifications. Vous avez dû vous rendre compte que les applications n&rsquo;utilisez plus cela. Seulement, désormais Facebook reviens sur ses pas avec cette fonctionnalité qui est encore en phase bêta.

Si vous voulez en savoir plus sur comment cela est implémenté niveau utilisateur, jetez un oeil sur l<a title="Notifications Facebook" href="http://developers.facebook.com/docs/app_notifications/" target="_blank">e blog des développeurs Facebook.</a>

<a href="http://rkueny.fr/wp-content/uploads/2012/10/app_notifications_three.png" rel="lightbox[1586]"><img class="aligncenter size-full wp-image-1591" title="Applications Facebook" src="http://rkueny.fr/wp-content/uploads/2012/10/app_notifications_three.png" alt="Applications Facebook" width="300" height="118" /></a><!--more-->

Etant donné que désormais nous pouvons à nouveau utiliser ce levier, nous allons voir rapidement comment mettre cela en place.

Avec le SDK PHP :

<pre>$fb-&gt;api('/' . $uid . '/notifications/', 'post',  array(
  'access_token' =&gt; $fb-&gt;getAppId() . '|' . $fb-&gt;getApiSecret(),
  'href' =&gt; '?',
  'template' =&gt; '180 caractères maximum',
  'ref' =&gt; 'Notification sent '.$date("Y-m-d") // pour les insights Facebook
));</pre>

Simple non ? En revanche, il ne faut pas oublier que vous ne pouvez envoyer de notifications aux utilisateurs ayant acceptés votre application.

N&rsquo;oubliez pas non plus qu&rsquo;il ne faut pas trop envoyer de notifications aux utilisateurs.C&rsquo;est assez mal vu <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

Et si vous avez besoin d&rsquo;un [freelance facebook][1], n&rsquo;hésitez pas à penser à moi !

&nbsp;

 [1]: http://rkueny.fr "Freelance Facebook"
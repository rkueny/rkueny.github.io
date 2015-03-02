---
title: Continuons avec les applications Facebook, mais full-php cette fois
author: R.Kueny
layout: post
permalink: /non-classe/continuons-avec-les-applications-facebook-mais-full-php-cette-fois
jd_tweet_this:
  - yes
categories:
  - Non classé
tags:
  - API
  - application
  - code
  - développement
  - développeur
  - facebook
  - php
---
Comme promis, je continue sur les applications facebook. <a title="Créer une application facebook" href="http://rkueny.fr/developpement-web/facebook-developpement-web/premier-pas-avec-la-creation-dapplications-facebook" target="_blank">Dans le précédent tutoriel</a>, la connexion se faisait via le JS. Je vous avais dit que je vous montrerai comment faire en PHP. Chose promise, chose due.

Pour effectuer une connexion via php, nous allons nous appuyer sur les méhodes getLoginUrl() et getLogoutUrl() du SDK pour l&rsquo;API facebook.

<p style="text-align: center;">
  <img class="size-full wp-image-880 aligncenter" title="elephant-elephant-php-logo" src="http://rkueny.fr/wp-content/uploads/2010/06/elephant-elephant-php-logo.png" alt="elephant-elephant-php-logo" width="168" height="127" />
</p>

**Entrons dans le code**

<pre>if($fbme){
	$logoutUrl = $facebook-&gt;getLogoutUrl();
	echo '&lt;a href="'.$logoutUrl.'"&gt;Logout&lt;/a&gt;';
}else{
       $loginUrl = $facebook-&gt;getLoginUrl();
       echo '&lt;a href="'.$loginUrl.'&gt;Login&lt;/a&gt;';
}</pre>

<!--more-->Si vous vous souvenez 

<a title="Coder une application facebook" href="http://rkueny.fr/developpement-web/facebook-developpement-web/premier-pas-avec-la-creation-dapplications-facebook" target="_blank">du code du billet précédent</a>, je vous avais rapidement parlé de la variable $fbme. Elle intervient ici. Littérallement, nous pouvons dire :

&#8211; Si on a les infos de l&rsquo;utilisateur ($fbme), cela veut dire qu&rsquo;il est connecté, on lui affiche donc l&rsquo;url de déconnexion.  
&#8211; Sinon, on lui affiche l&rsquo;url de connexion.

Ce n&rsquo;est pas plus compliqué que cela <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Si vous avez des questions ou des problèmes sur ce point là, n&rsquo;hésitez pas à réagir.
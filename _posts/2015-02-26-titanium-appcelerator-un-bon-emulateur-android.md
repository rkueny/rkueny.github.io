---
title: 'Titanium Appcelerator &#8211; Un bon émulateur Android'
author: R.Kueny
layout: post
permalink: /developpement-mobile/titanium-appcelerator/titanium-appcelerator-un-bon-emulateur-android
categories:
  - Titanium Appcelerator
tags:
  - android
  - appcelerator
  - application
  - applications
  - code
  - développement
  - emulateur
  - genymotion
  - mac
  - mobile
  - titanium
---
Combien de fois ai-je ragé sur l&rsquo;émulateur Android ? Je ne saurais vous le dire &#8230; Mais c&rsquo;était bien trop souvent. Je n&rsquo;ai jamais eu aucun soucis avec mon émulateur iOs (en étant sur mac of course), mais quelle galère avec Android.

Depuis peu j&rsquo;en ai, enfin, découvert un qui me redonne plaisir à faire des applis Android (non c&rsquo;est pas vrai, mais c&rsquo;est déjà &laquo;&nbsp;moins pire&nbsp;&raquo; ;)).

<!--more-->

<div id="attachment_2212" style="width: 265px" class="wp-caption aligncenter">
  <a href="http://rkueny.fr/wp-content/uploads/2015/02/oh-yeah.jpg" rel="lightbox[2210]"><img class=" wp-image-2212" src="http://rkueny.fr/wp-content/uploads/2015/02/oh-yeah.jpg" alt="Oh ! Un troll !" width="255" height="254" /></a>
  
  <p class="wp-caption-text">
    <strong>Oh ! Un troll !</strong>
  </p>
</div>

&nbsp;

Pour couper court au mystère je vous présente donc <a title="GenyMotion" href="https://www.genymotion.com/" target="_blank">GenyMotion</a>. Il utilise VirtualBox donc vous devez l&rsquo;avoir aussi installé au préalable.

<div id="attachment_2214" style="width: 141px" class="wp-caption aligncenter">
  <a href="http://rkueny.fr/wp-content/uploads/2015/02/genymotion.png" rel="lightbox[2210]"><img class="wp-image-2214" src="http://rkueny.fr/wp-content/uploads/2015/02/genymotion.png" alt="genymotion" width="131" height="131" /></a>
  
  <p class="wp-caption-text">
    GenyMotion
  </p>
</div>

&nbsp;

Après, pas de mystère, vous installez GenyMotion, vous configurez l&rsquo;émulateur que vous voulez puis c&rsquo;est parti.

Une erreur, risque de vous arriver :

<pre>Error: Failed to start ADB (code 255): ADB server didn't ACK</pre>

Pas de panique ! Rendez vous dans la configuration de GenyMotion et changez le chemin vers le sdk Android vers celui que vous avez sur votre ordi. Sous mac, ça devrait se trouver dans votre dossier Library

Je vous conseille grandement d&rsquo;utiliser GenyMotion pour vos tests sous émulateur pour Android. Si vous avez suivi mon article pour [utiliser Titanium Appcelerator avec Sublime Text][1], GenyMotion est supporté pour les builds directement.

Have fun !

 [1]: http://rkueny.fr/developpement-mobile/titanium-appcelerator/se-passer-de-titanium-studio-avec-sublime-text "Se passer de Titanium Studio avec Sublime Text"
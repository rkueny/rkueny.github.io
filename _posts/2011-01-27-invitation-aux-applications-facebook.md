---
title: Invitation aux applications facebook
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/invitation-aux-applications-facebook
categories:
  - Facebook
tags:
  - API
  - application
  - code
  - création
  - développement
  - développeur
  - facebook
  - geek
  - javascript
  - js
  - php
  - tutoriel
---
En ce moment le blog <a title="Blog developer facebook" href="http://developers.facebook.com/blog/post/447" target="_blank">developer Facebook</a> bouge pas mal ! Et aujourd&rsquo;hui un article est susceptible de vous intéresser. Il s&rsquo;agit de la façon de créer un pop-up pour inviter les amis de l&rsquo;utilisateur à utiliser votre application. Vous pourrez ainsi, afficher cela sur les pages des amis :

<p style="text-align: center;">
  <img class="size-full wp-image-1089 aligncenter" title="Capture d’écran 2011-01-27 à 09.34.48" src="http://rkueny.fr/wp-content/uploads/2011/01/Capture-d’écran-2011-01-27-à-09.34.48.png" alt="" width="255" height="64" /><em>Affichage sur la colonne de droite </em>
</p>

<p style="text-align: center;">
  <p style="text-align: center;">
    <a href="http://rkueny.fr/wp-content/uploads/2011/01/Capture-d’écran-2011-01-27-à-09.23.37.png" rel="lightbox[1088]"><img class="alignnone size-full wp-image-1090" title="Capture d’écran 2011-01-27 à 09.23.37" src="http://rkueny.fr/wp-content/uploads/2011/01/Capture-d’écran-2011-01-27-à-09.23.37.png" alt="" width="502" height="90" /></a>
  </p>
  
  <p style="text-align: center;">
    <em>Affichage dans les applications<br /> (après avoir cliqué sur l&rsquo;invitation de la colonne de droite)</em>
  </p>
  
  <p style="text-align: center;">
    <p style="text-align: left;">
      Et le code dans tout cela ? Vraiment, mais alors vraiment pas compliqué <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /><!--more-->
    </p>
    
    <pre>      
&lt;div id="fb-root"&gt;&lt;/div&gt;
 &lt;script src="http://connect.facebook.net/en_US/all.js"&gt;
 &lt;/script&gt;
 &lt;script&gt;
      FB.init({
         appId:'VOTRE_APP_ID',
         cookie:true,
         status:true,
         xfbml:true
      });

      FB.ui({
         method: 'apprequests',
         message: 'Here is a new Requests dialog...'
     });
 &lt;/script&gt;      </pre>
    
    <p>
      Pas compliqué non ? Et vous aurez alors cet affichage :
    </p>
    
    <p style="text-align: center;">
      <a href="http://rkueny.fr/wp-content/uploads/2011/01/Capture-d’écran-2011-01-27-à-09.23.00.png" rel="lightbox[1088]"><img class="size-full wp-image-1091 aligncenter" title="Capture d’écran 2011-01-27 à 09.23.00" src="http://rkueny.fr/wp-content/uploads/2011/01/Capture-d’écran-2011-01-27-à-09.23.00.png" alt="" width="498" height="523" /></a>
    </p>
    
    <p style="text-align: left;">
      Vous remarquez l&rsquo;ajout des trois sélecteurs : Tout vos amis, ceux utilisant l&rsquo;application ou encore ceux déjà selectionnés. Le texte de l&rsquo;invitation &laquo;&nbsp;Here is a new Requests dialog&#8230;&nbsp;&raquo; est bien entendu personalisable.
    </p>
    
    <p style="text-align: left;">
      Voilà, c&rsquo;est tout pour aujourd&rsquo;hui ! Je trouve que les <a title="Développeur facebook" href="http://rkueny.fr/" target="_blank">développeurs facebook</a> commencent à bien faire bouger les choses non ?
    </p>
    
    <p style="text-align: left;">
      <p style="text-align: left;">
        PS : n&rsquo;oubliez pas de me contacter si vous voulez <a title="Créer une application facebook" href="http://rkueny.fr/" target="_blank">créer une application facebook</a> !
      </p>
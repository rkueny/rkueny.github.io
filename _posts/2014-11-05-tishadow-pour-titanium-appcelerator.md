---
title: TiShadow pour Titanium Appcelerator
author: R.Kueny
layout: post
permalink: /developpement-mobile/titanium-appcelerator/tishadow-pour-titanium-appcelerator
categories:
  - Titanium Appcelerator
tags:
  - alloy
  - android
  - appcelerator
  - ios
  - javascript
  - js
  - mobile
  - simulateur
  - tishadow
  - titanium
---
Comme je vous le disais dans un précédent post, je fais mon petit chemin dans le monde du développement mobile avec Titanium Appcelerator.

L&rsquo;une des choses qui m&rsquo;a le plus embêté n&rsquo;est rien d&rsquo;autre que le temps de compilation. Quand je dev avec PHP aucun soucis de ce côté la <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Il suffit de rafraichir le navigateur (ou d&rsquo;avoir un outil qui le fait) et c&rsquo;est bon on a le résultat en direct. Là, il faut compiler son code, ça relance le simulateur iPhone (ou android) et enfin on peut voir les modifs. Autant vous dire que c&rsquo;est une perte de temps assez énorme !

Je me doutais bien que des gens avait trouvés une solution à ce problème. C&rsquo;est là qu’intervient TiShadow.

<img class="aligncenter size-full wp-image-2128" src="http://rkueny.fr/wp-content/uploads/2014/11/tishadow-919496-l-124x124.png" alt="tishadow-919496-l-124x124" width="124" height="124" />

J&rsquo;ai un peu galéré à trouver comment le faire fonctionner, je vais donc vous expliquer en quoi consiste TiShadow et comment le faire fonctionner pour améliorer grandement votre productivité !

<!--more-->

**TIShadow : ça fait quoi ?**

Comme je le disais, la compilation du code prends énormément de temps. Une compil prend environ 20sec. Le calcul est vite fait pour se rendre compte qu&rsquo;on perd beaucoup de temps <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

TiShadow descend ce temps là autour de 2 secondes. Le temps d&rsquo;aller sur son simulateur quoi <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> En fait, TiShadow va builder ce qui a changé et afficher directement le résultat dans le (ou les) simulateur. Le schéma du site officiel illustre bien le fonctionnement :

[<img class="aligncenter wp-image-2131 size-full" src="http://rkueny.fr/wp-content/uploads/2014/11/diagram.png" alt="TiShadow" width="480" height="400" />][1]

&nbsp;

**TiSahdow : comment on mets ça en place ?**

Tout d&rsquo;abord il faut installer TiShadow Server.

<pre>npm install -g tishadow</pre>

Ensuite, il vous faut créer l&rsquo;appli TiShadow qui embarquera vos applis par la suite. Pour cela rendez-vous dans votre dossier préféré, et créez votre app :

<pre>cd ~/
tishadow app -d tishadowapp</pre>

Vous avez la base. Une fois ceci fait, lancez le serveur :

<pre>tishadow server</pre>

Cela lance le serveur TiShadow sur le port 3000. Vous pouvez vous rendre sur http://localhost:3000 pour vérifier.

Ensuite, rendez vous dans le dossier de votre appli &laquo;&nbsp;tishadowapp&nbsp;&raquo; et buildez la.

<pre>cd ~/tishadowapp
titanium build</pre>

Enfin, rendez-vous dans le dossier de votre appli mobile sur laquelle vous travaillez et lancez la dans TiShadow

<pre>cd ~/votreAppliMobile
tishadow @ run --platform ios --update</pre>

Et voilà, votre appli se reload à chacune de vos modifs dans le simulateur <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

&nbsp;

<a href="http://rkueny.fr/wp-content/uploads/2014/11/390.gif" rel="lightbox[2127]"><img class="aligncenter size-full wp-image-2138" src="http://rkueny.fr/wp-content/uploads/2014/11/390.gif" alt="Good Job !" width="300" height="169" /></a>

L&rsquo;option &#8211;update lance le build à chaque fois que vous faites une modif de vos fichiers et l&rsquo;option &#8211;platform ios cible uniquement votre build iOs.

Voilà ! Vous avez les bases pour gagner du temps avec TiShadow. N&rsquo;hésitez pas à partager vos astuces de dev avec Appcelerator Titanium et Alloy. Je ferais un article dans les semaines à venir avec quelques tips pour TiShadow.

&nbsp;

&nbsp;

 [1]: http://tishadow.yydigital.com
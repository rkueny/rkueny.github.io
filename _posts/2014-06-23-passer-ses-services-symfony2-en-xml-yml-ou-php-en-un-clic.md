---
title: Passer ses services Symfony2 en xml, yml ou PHP en un clic
author: R.Kueny
layout: post
permalink: /developpement-web/passer-ses-services-symfony2-en-xml-yml-ou-php-en-un-clic
categories:
  - Développement Web
tags:
  - config
  - framework
  - ini
  - php
  - service
  - services
  - symfony2
  - xml
  - yml
---
Dans mon billet sur l&rsquo;[ajout des authentification OAuth avec Symfony2,][1] j&rsquo;utilise un service écrit en XML. Dans les commentaires on me demandait comment le passer en YML. <cite class="fn">ZePRiNCE</cite> a donné une solution très facile. Il suffit de passer par le site <a href="http://converter.rosstuck.com/" target="_blank">Converter Rosstuck</a>. Vous copiez-coller votre service (XML / YML / INI) et vous choissisez la sortie (XML / YML / INI / PHP / Graphviz).  
<a title="Converter Rosstuck" href="http://converter.rosstuck.com/" target="_blank"><img class="aligncenter  wp-image-2044" src="http://rkueny.fr/wp-content/uploads/2014/06/Capture-d’écran-2014-06-23-à-11.04.09.png" alt="Capture d’écran 2014-06-23 à 11.04.09" width="496" height="273" /></a>  
Merci à <cite class="fn">ZePRiNCE</cite> pour la découverte et tant mieux si cela aide d&rsquo;autres personnes !

&nbsp;

 [1]: http://rkueny.fr/developpement-web/symfony2-fosuserbundle-et-connexion-oauth-facebook-twitter-google-github-etc "Symfony2 : FOSUserBundle et Connexion OAuth (facebook / twitter / google / github / etc…)"
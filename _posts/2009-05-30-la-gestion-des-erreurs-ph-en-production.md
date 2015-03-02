---
title: La gestion des erreurs php en production
author: R.Kueny
layout: post
permalink: /developpement-web/la-gestion-des-erreurs-ph-en-production
categories:
  - Développement Web
---
Un sympathique billet est apparu hier sur le <a href="http://methylbro.titaxium.org/" target="_blank">blog de méthylbro</a> traitant de la <a href="http://methylbro.titaxium.org/post/2009/05/29/display_errors-%C3%A0-On-sur-un-serveur-de-production-c-est-mal-!" target="_blank">gestion des erreurs php en serveur de production</a>.

En effet, on ne paramètre pas de la même façon un serveur où on bosse en local et le serveur final de production. Il traite ici du non-affichage des erreurs php.

<img class="aligncenter size-full wp-image-185" title="php-display-errors-on-serveur-production (source : methylbro.titaxium.org)" src="http://rkueny.fr/wp-content/uploads/2009/05/php-display-errors-on-serveur-production.jpg" alt="php-display-errors-on-serveur-production (source : methylbro.titaxium.org)" width="539" height="165" />

Si une personne mal-intentionné (bouh le méchant hacker) arrive sur cette erreur, c&rsquo;est du pain béni !!! En effet, il va manipuler un peu le formulaire et obtenir pas mal d&rsquo;infos. Ici on a par exemple un peu l&rsquo;arborescence. Puis on s&rsquo;aperçu qu&rsquo;une méthode manque. Bref, cela peut s&rsquo;avérer être une véritable mine d&rsquo;informations pour les méchants <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

En conclusion, en production : php.ini

`error_reporting = E_ALL<br />
display_errors = off<br />
log_errors = on<br />
error_log = /chemin/vers/le/log`

ou alors via le .htacces :

`php_value display_errors off`

A bon entendeur <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
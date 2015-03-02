---
title: 'Accéder à l&rsquo;adresse et au téléphone de l&rsquo;utilisateur Facebook [Application]'
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/acceder-a-ladresse-et-au-telephone-de-lutilisateur-facebook-application
categories:
  - Facebook
tags:
  - application
  - autorisations
  - code
  - développement
  - développeur
  - facebook
  - permissions
  - perms
  - php
---
**[EDIT] Facebook a fait marche arrière. <a title="retour facebook" href="http://developers.facebook.com/blog/post/447" target="_blank">Article sur leur blog</a>. Cela reviendra surement sous peu et surement sous une autre forme.**

On continue avec un article sur la plateforme Facebook. Depuis peu, depuis ce matin en fait, les développeurs peuvent accéder à de nouvelles informations de l&rsquo;utilisateur (si celui-ci accepte leur accès bien sûr).

Vous pouvez donc désormais accéder à l&rsquo;adresse postale et au numéro téléphone de l&rsquo;utilisateur.

<p style="text-align: center;">
  <a href="http://rkueny.fr/wp-content/uploads/2011/01/current_address_mobile_phone.png" rel="lightbox[1069]"><img class="size-full wp-image-1071 aligncenter" title="current_address_mobile_phone" src="http://rkueny.fr/wp-content/uploads/2011/01/current_address_mobile_phone.png" alt="Autorisation facebook" width="553" height="336" /></a><!--more-->
</p>

Et cela de façon tout aussi simple que les autres données. Les perms à spécifier sont : user\_address, user\_mobile_phone. Et vous récupérez ça :

<p style="text-align: center;">
  <a href="http://rkueny.fr/wp-content/uploads/2011/01/current_address_fields.png" rel="lightbox[1069]"><img class="size-full wp-image-1070 aligncenter" title="current_address_fields" src="http://rkueny.fr/wp-content/uploads/2011/01/current_address_fields.png" alt="Fields" width="559" height="293" /></a>
</p>

Voilà, pas plus compliqué que ça <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> A voir si vous avez besoin de ces informations, mais cela risque d&rsquo;arriver à point pour une de mes applications <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
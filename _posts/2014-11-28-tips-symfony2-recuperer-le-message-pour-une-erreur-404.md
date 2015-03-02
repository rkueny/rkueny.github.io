---
title: '[Tips] Symfony2 : Récupérer le message pour une erreur 404'
author: R.Kueny
layout: post
permalink: /developpement-web/tips-symfony2-recuperer-le-message-pour-une-erreur-404
categories:
  - Développement Web
  - Tips
---
Si vous personalisez votre page d&rsquo;erreur (404 par exemple), et j&rsquo;espère bien que vous le faites, avec Symfony2, vous pouvez écrire quelques chose du genre dans votre controller :

<pre>throw $this-&gt;createNotFoundException('Cette url n\'est pas accessible de cette façon');</pre>

Pour récupérer le message d&rsquo;erreur dans votre template Twig, cela se fait de cette façon :

<pre>{{ exception.message }}</pre>

<a href="http://rkueny.fr/wp-content/uploads/2014/11/design-error-message-271.png" rel="lightbox[2150]"><img class="aligncenter  wp-image-2151" src="http://rkueny.fr/wp-content/uploads/2014/11/design-error-message-271.png" alt="design-error-message-271" width="503" height="246" /></a>

Voilà <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

&nbsp;

&nbsp;
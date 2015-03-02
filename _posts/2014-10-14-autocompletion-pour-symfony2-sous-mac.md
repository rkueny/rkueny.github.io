---
title: Autocomplétion pour Symfony2 sous mac
author: R.Kueny
layout: post
permalink: /developpement-web/autocompletion-pour-symfony2-sous-mac
categories:
  - Développement Web
tags:
  - autocompletion
  - bash
  - mac
  - symfony2
---
<a href="http://rkueny.fr/wp-content/uploads/2014/10/Capture-d’écran-2014-10-14-à-12.00.10.png" rel="lightbox[2112]"><img class="aligncenter  wp-image-2114" src="http://rkueny.fr/wp-content/uploads/2014/10/Capture-d’écran-2014-10-14-à-12.00.10.png" alt="Auto complétion Symfony2" width="840" height="101" /></a>

A force de chercher les commandes pour générer un bundle ou créer une entité, j&rsquo;ai cherché pour une auto-complétion pour Symfony2. Je suis tombé sur l&rsquo;autocomplète créée par KnpLabs et qui fonctionne nickel.

Voici la démarche à suivre pour l&rsquo;installer. Dans un de vos dossiers faites un :

    git clone https://github.com/KnpLabs/symfony2-autocomplete

Ensuite dans votre .bash_profile :

    vi ~/.bash_profile

<pre style="padding-left: 30px;"><code>source ~/Sites/symfony2-autocomplete/symfony2-autocomplete.bash</code></pre>

Ajoutez aussi :

<pre style="padding-left: 30px;"><code>if [ -e ~/symfony2-autocomplete.bash ]; then
    . ~/symfony2-autocomplete.bash
fi</code></pre>

Il ne vous reste plus qu&rsquo;à redémarrer votre bash et vous aurez l&rsquo;auto-complétion sur la commande ./app/console [TAB]

<p style="text-align: right;">
  <a href="https://github.com/KnpLabs/symfony2-autocomplete" target="_blank">Source : dépôt GitHub</a>
</p>
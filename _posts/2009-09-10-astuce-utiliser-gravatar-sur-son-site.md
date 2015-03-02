---
title: '[Astuce] Utiliser gravatar sur son site'
author: R.Kueny
layout: post
permalink: /developpement-web/astuce-utiliser-gravatar-sur-son-site
categories:
  - Développement Web
tags:
  - astuce
  - avatar
  - gravatar
  - php
---
Qui ne connait pas <a href="http://gravatar.com" target="_blank">Gravatar</a> ? Si vous ne connaissez pas voici une petite présentation de ce service :

*&laquo;&nbsp;Gravatar est un service web qui vous propose d&rsquo;uploader un avatar qui suivra votre adresse mail sur le web&nbsp;&raquo;*  
Pas mal non ?On va rapidement voir comment intégrer cet avatar, vous allez voir c&rsquo;est facile <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />

<!--more-->Il vous suffit d&rsquo;avoir l&rsquo;adresse mail de la personne et de faire ceci :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$avatar</span> <span style="color: #339933;">=</span> <span style="color: #990000;">md5</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$mail</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #000088;">$size</span> <span style="color: #339933;">=</span> <span style="color: #cc66cc;">100</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// taille en pixel</span>
<span style="color: #000088;">$default_picture</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'http://url.com/img.jpg'</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// url de l'image par défaut</span>
<span style="color: #000088;">$lien</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'http://gravatar.com/avatar/'</span><span style="color: #339933;">.</span><span style="color: #000088;">$avatar</span><span style="color: #339933;">.</span><span style="color: #0000ff;">'?s'</span><span style="color: #339933;">.</span><span style="color: #000088;">$size</span><span style="color: #339933;">.</span><span style="color: #0000ff;">'&amp;d'</span><span style="color: #339933;">.</span><span style="color: #000088;">$default_picture</span></pre>
      </td>
    </tr>
  </table>
</div>

Il vous suffit ensuite de mettre:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">'&lt;img src="'</span><span style="color: #339933;">.</span><span style="color: #000088;">$lien</span><span style="color: #339933;">.</span><span style="color: #0000ff;">'" alt="avatar" /&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Et voilà, c&rsquo;est fait. See you later <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
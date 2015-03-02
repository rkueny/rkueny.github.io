---
title: 'Empêcher d&rsquo;utiliser ses images hors de son site'
author: R.Kueny
layout: post
permalink: /developpement-web/empecher-dutiliser-ses-images-hors-de-son-site
categories:
  - Développement Web
tags:
  - apache
  - développement
  - développeur
  - image
  - php
  - protection
---
Tout le monde le sait, protéger ses images sur le net n&rsquo;est qu&rsquo;utopie. Dès que celle-ci est affichée, elle peut être piquée. Ne venez pas me parler d&rsquo;empêcher un clic-droit, je vous montrerai l&rsquo;impression d&rsquo;écran <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

En revanche, vous pouvez empêchez qu&rsquo;on fasse ceci :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&lt;</span>img src<span style="color: #339933;">=</span><span style="color: #0000ff;">"http://votresiteavous/image.jpg"</span> alt<span style="color: #339933;">=</span><span style="color: #0000ff;">"héhé"</span> <span style="color: #339933;">/&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

En effet, une personne faisant ceci pique votre image et **votre bande passante** !

Voici un moyen simple d&rsquo;empêcher cela depuis votre .htaccess :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">RewriteEngine On
RewriteCond <span style="color: #339933;">%</span><span style="color: #009900;">&#123;</span>HTTP_REFERER<span style="color: #009900;">&#125;</span> <span style="color: #339933;">!</span>^$
RewriteCond <span style="color: #339933;">%</span><span style="color: #009900;">&#123;</span>HTTP_REFERER<span style="color: #009900;">&#125;</span> <span style="color: #339933;">!</span>^http<span style="color: #339933;">:</span><span style="color: #666666; font-style: italic;">//(.+\.)?votresite\.votretld(/)?.*$ [NC]</span>
RewriteRule <span style="color: #339933;">.*</span>\<span style="color: #339933;">.</span><span style="color: #009900;">&#40;</span>gif<span style="color: #339933;">|</span>jpe?g<span style="color: #339933;">|</span>png<span style="color: #009900;">&#41;</span>$ <span style="color: #339933;">-</span> <span style="color: #009900;">&#91;</span>F<span style="color: #339933;">,</span>NC<span style="color: #009900;">&#93;</span></pre>
      </td>
    </tr>
  </table>
</div>

Une fois ceci en place, plus de risque que l&rsquo;on vous pique votre bande passante. Et si vous ne voulez pas qu&rsquo;on vous pique d&rsquo;image du tout &#8212;> n&rsquo;en mettez pas <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
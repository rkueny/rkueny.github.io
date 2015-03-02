---
title: Savoir si un utilisateur est fan de votre page Facebook
author: R.Kueny
layout: post
permalink: /developpement-web/savoir-si-un-utilisateur-est-fan-de-votre-page-facebook
categories:
  - Développement Web
tags:
  - aime
  - application
  - applications
  - code
  - développement
  - développeur
  - facebook
  - fan
  - page
  - php
  - social
  - tutoriel
---
<p style="text-align: center;">
  <a href="#comment-161408">Depuis fin septembre 2014, ce n&rsquo;est plus possible. Plus d&rsquo;infos.</a>
</p>

Voici un nouvel article Facebook. Sachez que je pense refondre mon site dans les mois à venir (oui je prends large maintenant ^^), et le diviser en :

  * billets (des articles assez long)
  * trucs et astuces (des billets plus cours donnant la solutions à des problèmes rencontrés), je pense peut-être permettre à des gens d&rsquo;y ajouter des billets (avec modération of-course).

Je pense aussi refaire la home (se ne sera plus le blog) pour quelque chose de plus &#8230; &laquo;&nbsp;pro&nbsp;&raquo;. Bref, si ça change à un moment, ne soyez pas étonné <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

Bref, revenons en au sujet de mon billet. Je vais vous montrer ici les 2 façons de savoir si une personne est fan de votre page. La première est si l&rsquo;application est intégrée à votre page (via un onglet), la seconde est via une application hors page. C&rsquo;est parti !

<a href="http://rkueny.fr/wp-content/uploads/2011/05/sexy_teen_fan_facebook.jpg" rel="lightbox[1324]"><img class="aligncenter size-medium wp-image-1325" title="fan facebook application" src="http://rkueny.fr/wp-content/uploads/2011/05/sexy_teen_fan_facebook-300x259.jpg" alt="fan facebook application" width="300" height="259" /></a><!--more-->

## Savoir si une personne est fan de votre page, via votre onglet

Lorsque vous êtes sur une page fan, vous pouvez récupérer des données via la variable $\_REQUEST[&lsquo;signed\_request&rsquo;]. Le problème est que ce n&rsquo;est pas &laquo;&nbsp;human readable&nbsp;&raquo;. Du coup, voici comment faire pour pouvoir récupérer les données qui nous intéressent :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$signed_request</span>  <span style="color: #339933;">=</span> <span style="color: #000088;">$_REQUEST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">"signed_request"</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span>
<span style="color: #990000;">list</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$encoded_sig</span><span style="color: #339933;">,</span> <span style="color: #000088;">$payload</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">=</span> <span style="color: #990000;">explode</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'.'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$signed_request</span><span style="color: #339933;">,</span> <span style="color: #cc66cc;">2</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #000088;">$data</span> <span style="color: #339933;">=</span> <span style="color: #990000;">json_decode</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">base64_decode</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">strtr</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$payload</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'-_'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'+/'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Le contenu de $data est désormais expoitable. N&rsquo;hésitez pas à faire un var_dump() pour voir ce que cela contient. Ce qui nous intéresse est le code suivant :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">"page"</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">"liked"</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    <span style="color: #666666; font-style: italic;">/* L'utilisateur aime votre page */</span>
<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
    <span style="color: #666666; font-style: italic;">/* L'utilisateur n'aime pas votre page, désolé :( */</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Voilà, le code est là, easy non ? Du coup, vous n&rsquo;aurez aucun mal à faire une landing page avec un contenu réservé à vos précieux fans <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

## Savoir si une personne est fan d&rsquo;une page

Cette méthode vous permet de savoir depuis une application si l&rsquo;utilisateur est fan d&rsquo;une page. Pour cela, il vous suffit d&rsquo;avoir l&rsquo;id de la-dite page, ensuite le code n&rsquo;est pas bien compliqué :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$is_fan</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$facebook</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>api<span style="color: #009900;">&#40;</span>
                         <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
                            <span style="color: #0000ff;">'method'</span>    <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span>  <span style="color: #0000ff;">'pages.isFan'</span><span style="color: #339933;">,</span>
                            <span style="color: #0000ff;">'page_id'</span>   <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span>  <span style="color: #0000ff;">'ID DE VOTRE PAGE'</span><span style="color: #339933;">,</span>
                            <span style="color: #0000ff;">'uid'</span>       <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span>  <span style="color: #0000ff;">'UID DE L UTILISATEUR'</span>
                          <span style="color: #009900;">&#41;</span>
                        <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

&nbsp;

La variable $is_fan contient un boolean. Du coup, pas compliqué de faire le test qui va bien. Vraiment pas bien compliqué non ?

&nbsp;

Pour connaitre ce genre de choses, je ne saurais que vous conseillez de fouiller la documentation Facebook ainsi que le forum des développeurs. Toutes les réponses (ou presque) s&rsquo;y trouvent. Mais vu que je sais que c&rsquo;est pas facile facile à trouver, je me permets de faire ce genre d&rsquo;articles.

See you later <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />

<p style="text-align: center;">
  <br />
</p>
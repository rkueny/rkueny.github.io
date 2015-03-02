---
title: 'Application facebook : Publiez sur un mur [php &#8211; js]'
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/api-graph-facebook-publiez-sur-un-mur-php-js
categories:
  - Facebook
tags:
  - ajax
  - amis
  - API
  - api graph
  - application
  - applications
  - développement
  - développeur
  - facebook
  - graph
  - javascript
  - mur
  - php
  - social
  - tutoriel
---
**Comment publier sur le mur d&rsquo;un utilisateur Facebook ?**

Je vois souvent cette question passer et vu qu&rsquo;il y a plusieurs façons, je vous fait un petit billet pour y répondre. On va y voir plusieurs choses :

>   * **Les principes de base**
>   * **L&rsquo;architecture de base**
>   * **La publication en php**
>   * **La publication en js**
> <li style="margin-left: 35px;">
>   <strong>avec confirmation</strong>
> </li>
> <li style="margin-left: 35px;">
>   <strong>sans confirmation</strong>
> </li>

**Les principes de &laquo;&nbsp;base&nbsp;&raquo;**

Depuis un petit moment déjà maintenant, pour pouvoir publier sur le mur d&rsquo;un utilisateur de votre application, vous devez lui en demander le droit. Ainsi, sachez que l&rsquo;accès au mur de l&rsquo;utilisateur doit être demandé et accepté par la personne utilisant votre application.

<p style="text-align: center;">
  <a href="http://rkueny.fr/wp-content/uploads/2011/02/facebook-pilules.jpg" rel="lightbox[1023]"><img class="size-full wp-image-1107 aligncenter" title="Application facebook" src="http://rkueny.fr/wp-content/uploads/2011/02/facebook-pilules.jpg" alt="Application facebook" width="234" height="234" /></a>
</p>

<!--more-->

Ici l&rsquo;autorisation qui nous intéresse est la suivante :

> `publish_stream` : *Enables your application to post content, comments, and likes to a user&rsquo;s stream and to the streams of the user&rsquo;s friends. With this permission, you can publish content to a user&rsquo;s feed at any time, without requiring offline_access. However, please note that Facebook recommends a user-initiated sharing model.*

<p style="text-align: right;">
  <em>Source : <a title="Permissions facebook graph API" href="http://developers.facebook.com/docs/authentication/permissions" target="_blank">Developers Facebook</a></em><a href="http://rkueny.fr/wp-content/uploads/2011/01/facebook-autorisation-300x225.jpg" rel="lightbox[1023]"></a>
</p>

Ainsi, avez cette permission vous pourrez publier/récupérer un post, un commentaire ou les &laquo;&nbsp;j&rsquo;aime&nbsp;&raquo; du mur.

Entrons désormais un peu plus dans le vif du sujet.

**L&rsquo;architecture de &laquo;&nbsp;base&nbsp;&raquo;**

Si vous revenez un peu sur mes anciens billets vous avez à peu près tout. Mais vu que je suis gentil, je vous mets ici le fichier de &laquo;&nbsp;base&nbsp;&raquo;. C&rsquo;est la manière que j&rsquo;utilise et qui marche bien. Attention, en copiant collant cela risque bien de ne pas marcher, ici mon but est bien ciblé sur les fonctions de publications de contenu (php/js). Si vous avez des questions techniques à la fin de cet article, n&rsquo;hésitez pas à laisser un commentaire.

Ainsi :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">&nbsp;
<span style="color: #339933;">&lt;</span>html xmlns<span style="color: #339933;">=</span><span style="color: #0000ff;">"http://www.w3.org/1999/xhtml"</span>
xmlns<span style="color: #339933;">:</span>og<span style="color: #339933;">=</span><span style="color: #0000ff;">"http://opengraphprotocol.org/schema/"</span>
xmlns<span style="color: #339933;">:</span>fb<span style="color: #339933;">=</span><span style="color: #0000ff;">"http://www.facebook.com/2008/fbml"</span><span style="color: #339933;">&gt;</span>
&nbsp;
<span style="color: #339933;">&lt;</span>head<span style="color: #339933;">&gt;</span>
<span style="color: #339933;">&lt;/</span>head<span style="color: #339933;">&gt;</span>
<span style="color: #339933;">&lt;</span>body<span style="color: #339933;">&gt;</span>
&nbsp;
 <span style="color: #339933;">&lt;</span>div id<span style="color: #339933;">=</span><span style="color: #0000ff;">"fb-root"</span><span style="color: #339933;">&gt;&lt;/</span>div<span style="color: #339933;">&gt;</span>
 <span style="color: #339933;">&lt;</span>script type<span style="color: #339933;">=</span><span style="color: #0000ff;">"text/javascript"</span><span style="color: #339933;">&gt;</span>
&nbsp;
 window<span style="color: #339933;">.</span>fbAsyncInit <span style="color: #339933;">=</span> <span style="color: #000000; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
 FB<span style="color: #339933;">.</span>init<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#123;</span>appId<span style="color: #339933;">:</span> <span style="color: #0000ff;">'xxxxxxxxx'</span><span style="color: #339933;">,</span>
 status<span style="color: #339933;">:</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">,</span>
 cookie<span style="color: #339933;">:</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">,</span>
 xfbml<span style="color: #339933;">:</span> <span style="color: #009900; font-weight: bold;">true</span>
 <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
 FB<span style="color: #339933;">.</span>Canvas<span style="color: #339933;">.</span>setAutoResize<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #009900;">&#40;</span><span style="color: #000000; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
 <span style="color: #000000; font-weight: bold;">var</span> e <span style="color: #339933;">=</span> document<span style="color: #339933;">.</span>createElement<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'script'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
 e<span style="color: #339933;">.</span>type <span style="color: #339933;">=</span> <span style="color: #0000ff;">'text/javascript'</span><span style="color: #339933;">;</span>
 e<span style="color: #339933;">.</span>src <span style="color: #339933;">=</span> document<span style="color: #339933;">.</span>location<span style="color: #339933;">.</span>protocol <span style="color: #339933;">+</span>
 <span style="color: #0000ff;">'//connect.facebook.net/fr_FR/all.js'</span><span style="color: #339933;">;</span>
 e<span style="color: #339933;">.</span>async <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
 document<span style="color: #339933;">.</span>getElementById<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'fb-root'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">.</span>appendChild<span style="color: #009900;">&#40;</span>e<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">&lt;/script&gt;</span>
<span style="color: #339933;">&lt;/</span>body<span style="color: #339933;">&gt;</span>
<span style="color: #339933;">&lt;/</span>html<span style="color: #339933;">&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Ici tout est en place pour que cela marche. Pour la récupération de l&rsquo;uid en php, la connection (php/js) référez-vous à mes anciens billets sur le sujet.

La ligne 18 &laquo;&nbsp;FB.Canvas.setAutoResize();&nbsp;&raquo; permet d&rsquo;éviter les scrollbars dans le cadre de la page Facebook.

**La publication en php**

Vous voulez publier sur le mur de votre utilisateur ? Quelque chose dans le genre :* Bidule est en train de jouer à XXXX ? *Facile !!! Il vous suffit d&rsquo;utiliser l&rsquo;appel à l&rsquo;API graph de cette façon :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$facebook</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">api</span><span style="color: #009900;">&#40;</span> <span style="color: #0000ff;">'/me/feed'</span><span style="color: #339933;">,</span>
<span style="color: #0000ff;">'post'</span><span style="color: #339933;">,</span>
<span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
<span style="color: #0000ff;">'message'</span>         <span style="color: #339933;">=&gt;;</span>     <span style="color: #0000ff;">'a commencé à utiliser XXXXXX'</span><span style="color: #339933;">,</span>
<span style="color: #0000ff;">'picture'</span>         <span style="color: #339933;">=&gt;</span>    <span style="color: #0000ff;">''</span><span style="color: #339933;">,</span>
<span style="color: #0000ff;">'link'</span>            <span style="color: #339933;">=&gt;</span>     URL_APP<span style="color: #339933;">,</span>
<span style="color: #0000ff;">'name'</span>            <span style="color: #339933;">=&gt;</span>     <span style="color: #0000ff;">'XXXXXX'</span><span style="color: #339933;">,</span>
<span style="color: #0000ff;">'description'</span>    <span style="color: #339933;">=&gt;</span>    <span style="color: #0000ff;">'Viens jouer avec lui ...... &lt;br /&gt; test'</span><span style="color: #339933;">,</span>
<span style="color: #0000ff;">'actions'</span>        <span style="color: #339933;">=&gt;</span>    <span style="color: #990000;">json_encode</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'name'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #0000ff;">'Jouez à votre tour'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'link'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> URL_APP<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>
<span style="color: #0000ff;">'cb'</span>              <span style="color: #339933;">=&gt;</span>     <span style="color: #0000ff;">''</span>
<span style="color: #009900;">&#41;</span>
<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

$facebook étant l&rsquo;instance de votre classe Facebook.

Décryptons un peu tout ça :  
On fait appel à l&rsquo;API avec 3 arguments. Le premier indique le point d&rsquo;entrée, ici le mur (feed) de l&rsquo;utilisateur connecté (me). Le deuxième indique la façon (post ou get) et le troisième ce que l&rsquo;ont veut poster. On va s&rsquo;y attarder avec cette simple image :

<p style="text-align: left;">
  <img class="size-full wp-image-1104   aligncenter" title="application facebook" src="http://rkueny.fr/wp-content/uploads/2011/02/facebook-publish.jpg" alt="application facebook" width="524" height="145" />
</p>

<p style="text-align: left;">
  1 : Il s’agit du message que vous avez défini.<br /> 2 : Il s’agit de l’image (picture) que vous avez défini (url). Ici, l’ayant laissée vide rien n’apparait <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /><br /> 3 : Il s’agit du lien avec le 4 : qui est le texte du lien (ici XXXXX)<br /> 5 : Il s’agit de la description de votre publication. Nous verrons un peu plus loin comment y insérer des liens (en effet, la balise <a href> ne fonctionne pas.<br /> 6 : Il s’agit de l’action possible (actions). Avez le lien et le texte du lien.
</p>

Pas compliqué lorsque c’est écrit non ? <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

Cependant, attention. Avec cette fonction vous pouvez publier à l’insu de l’utilisateur. Voici 3 raisons de ne pas le faire :

  * c’est interdit par Facebook <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
  * les utilisateurs n’aiment pas beaucoup ça
  * et enfin, il est possible que cela ne fonctionne plus au bout de x envoi. Votre application est limitée par Facebook. Si vous ne gérez pas cela avec une exception c’est toute votre application qui plante <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

<p style="text-align: left;">
  Du coup, ça ne sert à rien en php vous me direz ? Bien sur que si ! Cependant cela doit se déclencher après une action de l’utilisateur validant cela. Vous pouvez par exemple mettre dans les options de votre application, une case à cocher, décochée par défaut, disant de publier sur le mur après chaque partie par exemple.
</p>

<p style="text-align: left;">
  Nous verrons ensuite comment publier en javascript et comment ajouter des liens dans la description du contenu (le n°5). A bientôt <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
</p>

<p style="text-align: left;">
  PS : n&rsquo;hésitez pas à poser vos questions dans les commentaies
</p>

![][1]![][2]

<p style="text-align:center">
  <br />
</p>

 [1]: file:///Users/raphaelkueny/Library/Caches/TemporaryItems/moz-screenshot.png
 [2]: file:///Users/raphaelkueny/Library/Caches/TemporaryItems/moz-screenshot-1.png
---
title: '[Tips] Faire passer des données à un onglet de page Facebook'
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/tips-faire-passer-des-donnees-a-un-onglet-de-page-facebook
categories:
  - Facebook
  - Tips
tags:
  - API
  - application
  - applications
  - arguments
  - développement
  - développeur
  - facebook
  - freelance
  - php
  - réseau
  - social
  - tutoriel
---
<a href="http://rkueny.fr/wp-content/uploads/2012/10/images.jpg" rel="lightbox[1594]"><img class=" wp-image-1600 alignleft" style="margin: 10px;" title="Freelance facebook" src="http://rkueny.fr/wp-content/uploads/2012/10/images.jpg" alt="Freelance facebook" width="83" height="156" /></a>Quand vous développez une application dans un onglet de page Facebook, il se peut que vous vouliez faire un lien depuis un autre site vers votre onglet en lui passant certains paramètres.

Vous voudriez par exemple faire ceci : http://www.facebook.com/rkueny.freelance/app_253963564677097?data1=abc&data2=def

Seulement voilà, ça ne se fait pas comme cela <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

Voici la solution &laquo;&nbsp;magique&nbsp;&raquo;.

<pre>http://www.facebook.com/rkueny.freelance/app_253963564677097?&<strong>app_data</strong>=xxx/aaa/bbb</pre>

Et pour récupérer :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$signed_request</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$facebook</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">getSignedRequest</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// avec le PHP SDK</span>
&nbsp;
<span style="color: #000088;">$app_data</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$signed_request</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">"app_data"</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Après, un simple<a title="Explode PHP" href="http://php.net/manual/fr/function.explode.php" target="_blank"> explode() </a>sur le $app_data pour récupérer vos différentes données (xxx &#8211; aaa &#8211; bbb) et le tour est joué <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />

&nbsp;

Et si vous avez besoin d&rsquo;un [freelance facebook][1], n&rsquo;hésitez pas à penser à moi !

&nbsp;

 [1]: http://rkueny.fr "Freelance Facebook"
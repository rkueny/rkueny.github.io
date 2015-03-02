---
title: Créer un QR Code en PHP
author: R.Kueny
layout: post
permalink: /developpement-web/creer-un-qr-code-en-php
categories:
  - Développement Web
tags:
  - développement
  - développeur
  - php
  - qr code
  - qrcode
  - tutoriel
---
Les QR Codes sont de plus en plus en vogues, du coup je me suis dit que cela vous intéresserez peut-être de savoir comment en générer un en PHP.

<a href="http://rkueny.fr/wp-content/uploads/2011/03/qrcode.png" rel="lightbox[1203]"><img class="aligncenter size-full wp-image-1204" title="Un QR Code" src="http://rkueny.fr/wp-content/uploads/2011/03/qrcode.png" alt="Un QR Code" width="225" height="225" /></a>Pour générer des QR Codes, nous allons utiliser &laquo;&nbsp;PHP QR Code&nbsp;&raquo; un projet trouvé via SourceForge. Téléchargez donc cela, et une fois cela fait le code est très simple <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /><!--more-->

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #b1b100;">include</span> <span style="color: #0000ff;">"qrlib.php"</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000088;">$content</span><span style="color: #339933;">=</span> <span style="color: #0000ff;">'http://rkueny.fr'</span><span style="color: #339933;">;</span>
<span style="color: #000088;">$filename</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'qrcode.png'</span><span style="color: #339933;">;</span>
<span style="color: #000088;">$errorCorrectionLevel</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'H'</span><span style="color: #339933;">;</span>
<span style="color: #000088;">$matrixPointSize</span> <span style="color: #339933;">=</span> <span style="color: #cc66cc;">7</span><span style="color: #339933;">;</span>
&nbsp;
QRcode<span style="color: #339933;">::</span><span style="color: #004000;">png</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$content</span><span style="color: #339933;">,</span> <span style="color: #000088;">$filename</span><span style="color: #339933;">,</span>
            <span style="color: #000088;">$errorCorrectionLevel</span><span style="color: #339933;">,</span> <span style="color: #000088;">$matrixPointSize</span><span style="color: #339933;">,</span> <span style="color: #cc66cc;">2</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">'&lt;img src="qrcode.png" alt="" /&gt;'</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Le code ici utilise juste la génération du QR Code. Je vous invite à vous rendre sur leur site pour voir tout ce qui est possible de faire <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

Je finis ce billet en vous expliquant les différents paramètres :

  * $content                          : le contenu une fois le QR Code décodé
  * $filename                        : le nom de l&rsquo;image générée
  * $errorCorrectionLevel : le taux de correction du QR Code. Plus il est haut, plus le QR Code pourra être détérioré (L &#8211; M &#8211; Q &#8211; H)
  * $matrixPointSize           : il s&rsquo;agit de la taille de votre QR Code.

Voilà, à vos générations de QR Code <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

<p style="text-align:center">
  <br />
</p>
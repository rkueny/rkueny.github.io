---
title: Code pour une Like Gate (ou fan gate)
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/code-pour-une-like-gate-ou-fan-gate
categories:
  - Facebook
tags:
  - facebook
  - fan
  - gate
  - like
  - php
---
En marge de mes articles sur les créations d&rsquo;applications Facebook, voici un petit bout de code pour réaliser une Like Gate (ou une fan gate).

> Like Gate : Onglet d&rsquo;une page Facebook nécessitant un Like pour afficher le contenu

<a href="http://rkueny.fr/wp-content/uploads/2013/02/Facebook-Like-Button.png" rel="lightbox[1820]"><img class="aligncenter size-full wp-image-1825" alt="Facebook-Like-Button" src="http://rkueny.fr/wp-content/uploads/2013/02/Facebook-Like-Button.png" width="271" height="124" /></a>

Trêve de blabla voici le code :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">function</span> parse_signed_request<span style="color: #009900;">&#40;</span><span style="color: #000088;">$signed_request</span><span style="color: #009900;">&#41;</span>
<span style="color: #009900;">&#123;</span>
    <span style="color: #990000;">list</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$encoded_sig</span><span style="color: #339933;">,</span> <span style="color: #000088;">$payload</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">=</span> <span style="color: #990000;">explode</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'.'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$signed_request</span><span style="color: #339933;">,</span> <span style="color: #cc66cc;">2</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #000088;">$sig</span> <span style="color: #339933;">=</span> base64_url_decode<span style="color: #009900;">&#40;</span><span style="color: #000088;">$encoded_sig</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #b1b100;">return</span> <span style="color: #990000;">json_decode</span><span style="color: #009900;">&#40;</span>base64_url_decode<span style="color: #009900;">&#40;</span><span style="color: #000088;">$payload</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">function</span> base64_url_decode<span style="color: #009900;">&#40;</span><span style="color: #000088;">$input</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    <span style="color: #b1b100;">return</span> <span style="color: #990000;">base64_decode</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">strtr</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$input</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'-_'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'+/'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
&nbsp;
<span style="color: #000088;">$datas</span> <span style="color: #339933;">=</span> parse_signed_request<span style="color: #009900;">&#40;</span><span style="color: #000088;">$_REQUEST</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'signed_request'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$datas</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'page'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'liked'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    <span style="color: #666666; font-style: italic;">// Contenu pour les utilisateurs ayant "likés" la page</span>
<span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
    <span style="color: #666666; font-style: italic;">// Page incitant au "like"</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

SI vous dumpez la variable &laquo;&nbsp;$datas&nbsp;&raquo; vous vous apercevrez que vous pouvez aussi détecter la langue de l&rsquo;utilisateur par exemple.
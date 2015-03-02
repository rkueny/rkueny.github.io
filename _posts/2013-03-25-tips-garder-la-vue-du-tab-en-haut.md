---
title: '[Tips] Garder la vue du tab en haut'
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/tips-garder-la-vue-du-tab-en-haut
categories:
  - Facebook
---
Un peu de difficulté à nommer ce tips je dois dire. En fait, il répond à un problème tout simple. Lorsque vous développez votre application dans un tab (onglet) facebook, il se peut que vous ayiez plusieurs pages. Imaginons un formulaire assez long. Vous êtes obligé de scroller pour appuyer sur valider. Et bien, après rafraichissement de la page, l&rsquo;internaute se retrouve bien sur la nouvelle page mais avec la vue située au scroll précédant. Embêtant non ? Il serait bien mieux de le remettre en haut de page.

Pas de panique ! Pour cela, il vous faudra utiliser la méthode &laquo;&nbsp;FB.Canvas.scrollTo&nbsp;&raquo;. La voici en action :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&lt;</span>div id<span style="color: #339933;">=</span><span style="color: #0000ff;">"fb-root"</span><span style="color: #339933;">&gt;&lt;/</span>div<span style="color: #339933;">&gt;</span>
<span style="color: #339933;">&lt;</span>script<span style="color: #339933;">&gt;</span>
<span style="color: #009900;">&#40;</span><span style="color: #000000; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span>d<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
    <span style="color: #000000; font-weight: bold;">var</span> js<span style="color: #339933;">,</span> id <span style="color: #339933;">=</span> <span style="color: #0000ff;">'facebook-jssdk'</span><span style="color: #339933;">,</span> ref <span style="color: #339933;">=</span> d<span style="color: #339933;">.</span>getElementsByTagName<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'script'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#91;</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#93;</span><span style="color: #339933;">;</span>
    <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span>d<span style="color: #339933;">.</span>getElementById<span style="color: #009900;">&#40;</span>id<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span><span style="color: #b1b100;">return</span><span style="color: #339933;">;</span><span style="color: #009900;">&#125;</span>
    js <span style="color: #339933;">=</span> d<span style="color: #339933;">.</span>createElement<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'script'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> js<span style="color: #339933;">.</span>id <span style="color: #339933;">=</span> id<span style="color: #339933;">;</span> js<span style="color: #339933;">.</span>async <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
    js<span style="color: #339933;">.</span>src <span style="color: #339933;">=</span> <span style="color: #0000ff;">"//connect.facebook.net/fr_FR/all.js"</span><span style="color: #339933;">;</span>
    ref<span style="color: #339933;">.</span>parentNode<span style="color: #339933;">.</span>insertBefore<span style="color: #009900;">&#40;</span>js<span style="color: #339933;">,</span> ref<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span><span style="color: #009900;">&#40;</span>document<span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
window<span style="color: #339933;">.</span>fbAsyncInit <span style="color: #339933;">=</span> <span style="color: #000000; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    FB<span style="color: #339933;">.</span>init<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#123;</span>
        appId      <span style="color: #339933;">:</span> <span style="color: #0000ff;">'myAppID'</span><span style="color: #339933;">,</span>
        status     <span style="color: #339933;">:</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">,</span>
        cookie     <span style="color: #339933;">:</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">,</span>
        xfbml      <span style="color: #339933;">:</span> <span style="color: #009900; font-weight: bold;">true</span>
    <span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    FB<span style="color: #339933;">.</span>Canvas<span style="color: #339933;">.</span>scrollTo<span style="color: #009900;">&#40;</span><span style="color: #cc66cc;"></span><span style="color: #339933;">,</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> 
<span style="color: #000000; font-weight: bold;">&lt;/script&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Seule chose à savoir, il faut mettre une taille en hauteur dans le panel de l&rsquo;application. Il vous faudra donc généralement lier cette fonction à [FB.Canvas.setAutoGrow()][1].

Source : <a href="http://developers.facebook.com/docs/reference/javascript/FB.Canvas.scrollTo/" title="FB.Canvas.scrollTo()" target="_blank">FB.Canvas.scrollTo() Facebook doc</a>

 [1]: http://developers.facebook.com/docs/reference/javascript/FB.Canvas.setAutoGrow/ "FB.Canvas.setAutoGrow()"
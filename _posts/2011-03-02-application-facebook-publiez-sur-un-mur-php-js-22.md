---
title: 'Application facebook : Publiez sur un mur [php &#8211; js] [2/2]'
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/application-facebook-publiez-sur-un-mur-php-js-22
categories:
  - Facebook
tags:
  - API
  - application
  - applications
  - code
  - développement
  - développeur
  - facebook
  - javascript
  - js
  - php
  - tutoriel
---
Ce billet fait suite au précédent qui vous expliquez comment <a title="Publier sur un mur facebook" href="http://rkueny.fr/developpement-web/facebook-developpement-web/api-graph-facebook-publiez-sur-un-mur-php-js" target="_blank">publier sur un mur</a> depuis <a title="Développer une application facebook" href="http://rkueny.fr/developpement-web/facebook-developpement-web/api-graph-facebook-publiez-sur-un-mur-php-js" target="_blank">une application facebook</a>. Nous y avons vu comment publier, sans confirmation de l&rsquo;utilisateur, sur son mur via PHP. Je dis sans confirmation mais il faut tout de même que celui-ci ai donné les droits à votre application.

Comme je le disais, il faut faire attention à cela. En effet, moi le premier, les utilisateurs n&rsquo;aiment pas trop qu&rsquo;on publient à leur insu. Ainsi, ici nous allons d&rsquo;abord voir comment publier suite à un &laquo;&nbsp;pop-up&nbsp;&raquo; de confirmation de l&rsquo;utilsateur. Enfin, nous verrons comment publier sans demander d&rsquo;autorisation mais via js. Après ce billet, vous aurez fait le tour de la publication sur les murs. Nous y verrons même comment publier sur le mur d&rsquo;un ami (mais je suis sur que si vous avez quelque peu décortiqué mon précédent billet, vous savez déjà le faire !!!)

<a href="http://rkueny.fr/wp-content/uploads/2011/03/facebook-login.jpg" rel="lightbox[1136]"><img class="size-medium wp-image-1137 aligncenter" title="Publier sur un mur Facebook" src="http://rkueny.fr/wp-content/uploads/2011/03/facebook-login-300x230.jpg" alt="Publier sur un mur Facebook" width="255" height="195" /><!--more--></a>

Je ne reviendrais pas sur la configuration de votre page ni le code à mettre en header et footer. Je vous montre ici la fonction de publication uniquement. Allons donc direct à l&rsquo;essentiel <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

**Publier sur un mur avec confirmation de l&rsquo;utilisateur**

Tout d&rsquo;abord voici le code :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">FB<span style="color: #339933;">.</span>ui<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#123;</span>
&nbsp;
     method<span style="color: #339933;">:</span> stream<span style="color: #339933;">.</span>publish<span style="color: #0000ff;">',
          message: '</span>Variable message<span style="color: #0000ff;">',
          attachment: {
               name: '</span>Variable name<span style="color: #0000ff;">',
               caption: '</span>Variable caption<span style="color: #0000ff;">',
               description: ('</span>Variable description<span style="color: #0000ff;">'),
               href: '</span>http<span style="color: #339933;">:</span><span style="color: #666666; font-style: italic;">//rkueny.fr'</span>
          <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span>action_links<span style="color: #339933;">:</span> <span style="color: #009900;">&#91;</span><span style="color: #009900;">&#123;</span>
             text<span style="color: #339933;">:</span> <span style="color: #0000ff;">'Variable action_links'</span><span style="color: #339933;">,</span>
             href<span style="color: #339933;">:</span> <span style="color: #0000ff;">'http://rkueny.fr'</span> <span style="color: #009900;">&#125;</span>
          <span style="color: #009900;">&#93;</span><span style="color: #339933;">,</span>
          user_prompt_message<span style="color: #339933;">:</span> <span style="color: #0000ff;">'Variable message'</span>
      <span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span><span style="color: #000000; font-weight: bold;">function</span><span style="color: #009900;">&#40;</span>response<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
<span style="color: #009900;">&#125;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

<div>
  <p>
    Et plutôt qu&rsquo;un long discours, voici deux screenshots pour voir où se place les variables <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <div id="attachment_1142" style="width: 310px" class="wp-caption aligncenter">
    <a href="http://rkueny.fr/wp-content/uploads/2011/03/Capture-d’écran-2011-03-01-à-23.01.34.png" rel="lightbox[1136]"><img class="size-medium wp-image-1142" title="Pop-up de publication" src="http://rkueny.fr/wp-content/uploads/2011/03/Capture-d’écran-2011-03-01-à-23.01.34-300x134.png" alt="Pop-up de publication" width="300" height="134" /></a>
    
    <p class="wp-caption-text">
      Pop-up de publication
    </p>
  </div>
</div>

<div>
  <div id="attachment_1141" style="width: 310px" class="wp-caption aligncenter">
    <a href="http://rkueny.fr/wp-content/uploads/2011/03/Capture-d’écran-2011-03-01-à-23.01.20.png" rel="lightbox[1136]"><img class="size-medium wp-image-1141" title="Résultat sur le mur de l'utilisateur" src="http://rkueny.fr/wp-content/uploads/2011/03/Capture-d’écran-2011-03-01-à-23.01.20-300x91.png" alt="Résultat sur le mur de l'utilisateur" width="300" height="91" /></a>
    
    <p class="wp-caption-text">
      Résultat sur le mur de l'utilisateur
    </p>
  </div>
</div>

<div>
  <p style="text-align: center;">
    N&rsquo;hésitez pas à cliquer sur les images pour mieux voir.
  </p>
  
  <p style="text-align: center;">
    &nbsp;
  </p>
  
  <p style="text-align: left;">
    Je pense qu&rsquo;il n&rsquo;y a rien à dire de plus là dessus. Simple non ?Vous remarquerez que l&rsquo;utilisateur peux modifier la &laquo;&nbsp;variable message&nbsp;&raquo;.
  </p>
  
  <p style="text-align: left;">
    Passons désormais à la publication en javascript sans pop-up.
  </p>
  
  <p style="text-align: left;">
    <strong>Publier sur un mur sans confirmation de l&rsquo;utilisateur &#8230; mais en js <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /><br /> </strong>
  </p>
</div>

<div>
  Ici l&rsquo;utilisateur ne pourra bien sûr pas modifier le message <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Mais cela peut être utile en js. De nouveau, du code <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
</div>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">var</span> attachment    <span style="color: #339933;">=</span>    <span style="color: #009900;">&#123;</span>
     <span style="color: #0000ff;">'name'</span>            <span style="color: #339933;">:</span>    <span style="color: #0000ff;">'variable name'</span>
     <span style="color: #0000ff;">'caption'</span>        <span style="color: #339933;">:</span>    <span style="color: #0000ff;">'variable caption'</span> <span style="color: #339933;">,</span>
     <span style="color: #0000ff;">'picture'</span>        <span style="color: #339933;">:</span>    <span style="color: #0000ff;">'http://rkueny.fr/image.png'</span><span style="color: #339933;">,</span>
     <span style="color: #0000ff;">'link'</span>            <span style="color: #339933;">:</span>    <span style="color: #0000ff;">'http://rkueny.fr'</span><span style="color: #339933;">,</span>
     <span style="color: #0000ff;">'description'</span>    <span style="color: #339933;">:</span>    <span style="color: #0000ff;">'variable description'</span><span style="color: #339933;">,</span>
     <span style="color: #0000ff;">'properties'</span>    <span style="color: #339933;">:</span>    <span style="color: #009900;">&#123;</span>
     <span style="color: #0000ff;">'Ici'</span> <span style="color: #339933;">:</span> <span style="color: #009900;">&#123;</span>
          <span style="color: #0000ff;">'text'</span> <span style="color: #339933;">:</span> <span style="color: #0000ff;">'Le text ici'</span><span style="color: #339933;">,</span>
          <span style="color: #0000ff;">'href'</span> <span style="color: #339933;">:</span> <span style="color: #0000ff;">'http://rkueny.fr'</span>
     <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span><span style="color: #339933;">,</span>
     <span style="color: #0000ff;">'actions'</span>        <span style="color: #339933;">:</span>    <span style="color: #009900;">&#123;</span>
          name <span style="color: #339933;">:</span> <span style="color: #0000ff;">'action possible'</span><span style="color: #339933;">,</span>
          <span style="color: #990000;">link</span> <span style="color: #339933;">:</span> <span style="color: #0000ff;">'http://rkueny.fr'</span>
     <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span><span style="color: #339933;">;</span>
&nbsp;
FB<span style="color: #339933;">.</span>api<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'/me/feed/'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'post'</span><span style="color: #339933;">,</span> attachment<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

<div>
  Ce qui vous donnera :
</div>

<div>
  <div id="attachment_1147" style="width: 310px" class="wp-caption aligncenter">
    <a href="http://rkueny.fr/wp-content/uploads/2011/03/Capture-d’écran-2011-03-01-à-23.10.47.png" rel="lightbox[1136]"><img class="size-medium wp-image-1147" title="Résultat sur le mur de l'utilisateur" src="http://rkueny.fr/wp-content/uploads/2011/03/Capture-d’écran-2011-03-01-à-23.10.47-300x90.png" alt="Résultat sur le mur de l'utilisateur" width="300" height="90" /></a>
    
    <p class="wp-caption-text">
      Résultat sur le mur de l'utilisateur
    </p>
  </div>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    Et voilà <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Pas compliqué non plus une fois le code écrit non ? <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
  </p>
  
  <p>
    Pour conclure, on va voir comment publier sur le mur d&rsquo;une autre personne.
  </p>
  
  <p>
    <strong>Publier sur le mur d&rsquo;un autre utilisateur</strong>
  </p>
  
  <p>
    Comment ??? Vous n&rsquo;avez pas encore deviné comment faire ? Si ? Ah vous me rassurez <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
  </p>
  
  <p>
    Il suffit de remplacer ceci : /me/feed/ par /L&rsquo;ID DE L&rsquo;UTILISATEUR/feed/ et vous aurez un message en provenance de l&rsquo;utilisateur connecté sur le mur de cet autre utilisateur.
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    J&rsquo;espère que ces deux billets vous auront aidé. Il y a peu de ressources en français pour Facebook, et la doc n&rsquo;est pas souvent très claire. N&rsquo;hésitez pas si vous avez des questions bien sûr <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
  </p>
  
  <p>
    Et si vous voulez réaliser une <a title="Développeur application facebook" href="http://rkueny.fr" target="_blank">application facebook</a>, il suffit de me <a title="Développeur facebook" href="http://rkueny.fr/contact" target="_blank">contacter</a> <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <p>
    &nbsp;
  </p>
</div>
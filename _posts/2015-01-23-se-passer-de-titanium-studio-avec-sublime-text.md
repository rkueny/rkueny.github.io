---
title: Se passer de Titanium Studio avec Sublime Text
author: R.Kueny
layout: post
permalink: /developpement-mobile/titanium-appcelerator/se-passer-de-titanium-studio-avec-sublime-text
categories:
  - Titanium Appcelerator
tags:
  - android
  - App
  - appcelerator
  - appli
  - code
  - ide
  - ios
  - javascript
  - js
  - mobile
  - sublime text
  - tidev
  - titanium
---
Je pense que beaucoup de monde est d&rsquo;accord avec moi, Titanium Studio n&rsquo;est pas le meilleur IDE que l&rsquo;on puisse rêver. Une des choses qui me fait le plus râler par exemple, est l&rsquo;obligation d&rsquo;être connecté à internet pour l&rsquo;utiliser.

Personnellement, j&rsquo;aime beaucoup utiliser Sublime Text pour développer, je vais donc vous montrer comment utiliser ST (Sublime Text) au mieux pour cela. Le fait de passer de l&rsquo;un à l&rsquo;autre, m&rsquo;a aussi beaucoup fait utiliser Titanium-cli, et par là mieux comprendre tout le cheminement de build, clean etc&#8230;

<a href="http://rkueny.fr/wp-content/uploads/2015/01/sublime.png" rel="lightbox[2169]"><img class="  wp-image-2171 aligncenter" src="http://rkueny.fr/wp-content/uploads/2015/01/sublime.png" alt="sublime" width="193" height="195" /></a>Allez c&rsquo;est parti.

<!--more-->

## Installons ce qu&rsquo;il faut

&nbsp;

Tout d&rsquo;abord, si vous ne l&rsquo;avez pas déjà fait il vous faut installer Node. Je vous laisse regarder comment faire selon votre système d&rsquo;exploitation. Vous trouvez votre bonheur sur <a title="Télécharger NodeJs" href="http://nodejs.org/download/" target="_blank">cette page de téléchargement officiel</a>.

Une fois Node installé, il vous faut installer Titanium. Rien de bien sorcier rassurez vous. Cela vous permettra de builder directement depuis ST par exemple. Dans votre terminal, installez donc Titanium :

<pre>sudo npm install titanium -g</pre>

L&rsquo;option &laquo;&nbsp;-g&nbsp;&raquo; étant ici pour dire que vous voulez installer globalement Titanium. Ensuite, installez la version que vous utilisez pour le SDK. Si vous avez déjà fait des projets avec Titanium Studio, plusieurs versions doivent déjà être installées. En tout cas, c&rsquo;est très simple à faire :

<pre>sudo titanium sdk install --branch 3_5_X --default</pre>

Ensuite, updatez le sdk :

<pre>sudo titanium sdk update -install</pre>

<div class="codecolorer-container bash blackboard">
  <p class="bash codecolorer">
    Vous voici avec Titanium complétement installé et configuré sur votre machine. Si vous développez avec Titanium, vous utilisez sans doute le framework Alloy (et si vous ne le faites pas vous devriez). Installons-le aussi :
  </p>
  
  <pre class="bash codecolorer">sudo npm install -g alloy</pre>
  
  <p class="bash codecolorer">
    Avouez qu&rsquo;il y a plus compliqué quand même !
  </p>
  
  <p class="bash codecolorer">
    Si vous voulez ajouter un module à votre projet, je vous conseille de vous tourner vers gitTio. Cela vous permet ensuite de rapatrier un module dans votre projet en une simple ligne de commande. <a title="Gittio Cli" href="http://gitt.io/cli" target="_blank">Le guide d&rsquo;installation et d&rsquo;utilisation</a> est très bien fait.
  </p>
  
  <div class="bash codecolorer">
  </div>
  
  <h2 class="bash codecolorer">
    Passons à Sublime Text
  </h2>
  
  <p class="bash codecolorer">
    Si vous voulez passer à Sublime Text, j&rsquo;imagine que vous connaissez déjà le Package Control. SI vous ne l&rsquo;avez pas encore installé, <a title="Package Control Installation" href="https://packagecontrol.io/installation" target="_blank">allez voir comment faire par ici</a>. C&rsquo;est ok ? Voyons donc quels plugins installer :
  </p>
  
  <p class="bash codecolorer">
    <ul>
      <li class="bash codecolorer">
        <strong>SublimeCodeIntel</strong> : il devrait déjà être installé d&rsquo;ailleurs ! Il s&rsquo;agit d&rsquo;un bon plugin qui support pas mal d&rsquo;auto-complétions.
      </li>
      <li class="bash codecolorer">
        <strong>SublimeLinter</strong> : pareil, il devrait déjà être installé. Ça détecte très bien les erreurs de syntaxes dans votre code.
      </li>
      <li class="bash codecolorer">
        <strong>Titanium Build</strong> : le plugin de référence pour Titanium et Sublime Text. Je vais le détailler.
      </li>
    </ul>
    
    <p class="bash codecolorer">
      <p class="bash codecolorer">
        Le plugin Titanium Build va permettre une auto-complétion du code, il supporte la syntaxe des fichiers TSS et il vous permet de builder votre projet. 2 bugs sont connus avec ce plugin. Une fois installés, faites donc :
      </p>
      
      <div class="bash codecolorer">
      </div>
      
      <pre class="bash codecolorer">sudo ln -s /usr/local/bin/titanium /usr/bin/titanium</pre>
      
      <div class="bash codecolorer">
      </div>
      
      <div class="bash codecolorer">
        et
      </div>
      
      <div class="bash codecolorer">
      </div>
      
      <pre class="bash codecolorer">sudo ln -s /usr/local/bin/node /usr/bin/node</pre>
      
      <div class="bash codecolorer">
      </div>
      
      <p class="bash codecolorer">
        Une fois ceci fait, redémarrez ST puis dans votre projet d&rsquo;application, fait cmd + B (sur mac) et vous devriez pouvoir builder votre projet. Si vous rencontrez des soucis, n&rsquo;hésitez pas à en parler via les commentaires.
      </p>
      
      <p class="bash codecolorer">
        </div> 
        
        <p>
          Bon, c&rsquo;est cool on peut écrire du code avec l&rsquo;auto-complétion, on peut builder mais comment on créée un nouveau projet ? Ma solution est d&rsquo;utiliser la ligne de commande. Il vous suffit de suivre la doc de Titanium CLI, accessible ici, ou même de juste exécuter :
        </p>
        
        <pre>titanium create</pre>
        
        <p>
          Et de vous laisser guider !
        </p>
        
        <p>
          Voilà, désormais vous pouvez vous passer complétement de Titanium Studio et utiliser votre Sublime Text préféré <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
        </p>
        
        <div id="attachment_2181" style="width: 260px" class="wp-caption aligncenter">
          <a href="http://rkueny.fr/wp-content/uploads/2015/01/giphy.gif" rel="lightbox[2169]"><img class="size-full wp-image-2181" src="http://rkueny.fr/wp-content/uploads/2015/01/giphy.gif" alt="HAVE FUN !!!" width="250" height="193" /></a>
          
          <p class="wp-caption-text">
            HAVE FUN !!!
          </p>
        </div>
        
        <p>
          &nbsp;
        </p>
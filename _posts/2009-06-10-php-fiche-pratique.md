---
title: 'PHP : fiche pratique'
author: R.Kueny
layout: post
permalink: /developpement-web/php-fiche-pratique
categories:
  - Développement Web
---
Au tout début de l&rsquo;apprentissage de php, on apprend de façon assez disparate. Bien souvent, c&rsquo;est du copier-coller de différents tutoriels, de différents personnes (se prétendant développeur ou pas). Du coup, on se retrouve avec différentes syntaxes plus ou moins proches. On peut se retrouver avec ce genre de choses :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;">     <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">"Hello world"</span><span style="color: #339933;">;</span>
     <span style="color: #b1b100;">require</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'conf.php'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
     <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">'Stop'</span><span style="color: #339933;">;</span>
     <span style="color: #b1b100;">include_once</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">"stop.php"</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Et là&#8230; ben voilà quoi. Si vous tombez un jour sur un code comme celui là, soyez sûr que le type qui est passé avant vous à usé et abusé des Ctrl+C, Ctrl+V&#8230;

On va voir aujourd&rsquo;hui la différence entre : &lsquo; et &nbsp;&raquo; ainsi qu&rsquo;entre require, include, require\_once et include\_once.

<!--more-->

**Simple quotes et guillements**

Comme vous avez pu le voir dans l&rsquo;exemple de code que j&rsquo;ai montré plus haut on peut entouré du texte avec des simple quotes ou des guillements. Cela est valable pour plusieurs autres instructions dans php (include, echo, mail, &#8230;).

Il existe donc deux syntaxes. S&rsquo;il y a deux possibilités cela implique automatiquement une différence entre le deux. Celle-ci est simple. Ce qui est contenu dans des simples quotes (&lsquo;) n&rsquo;est pas interprété par PHP tandis qu&rsquo;entre guillemets oui. Ceci devrait vous expliquer ce comportement :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$texte</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'bonjour'</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #666666; font-style: italic;">// affichera bonjour toi !</span>
<span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">"<span style="color: #006699; font-weight: bold;">$texte</span> toi !"</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #666666; font-style: italic;">// affichera $texte toi !</span>
<span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">'$texte toi !'</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Du coup, utilisez ces syntaxes en sachant pourquoi vous les utilisez. Avec des guillemets le temps de traitement sera plus long qu&rsquo;avec des simples quotes. Le tout est de savoir ce que vous faites et de le faire bien <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

**Require, include et  _once**

Il existe plusieurs façons d&rsquo;intégrer un fichier dans un autre. Les fonctions *require* et *include* ont ce rôle là. Un rôle, deux fonctions. Quelles sont les différences ?  Une fois de plus, le manuel PHP est là pour nous aider.

La différence se situe au niveau des erreurs générées lorsque un fichier appellé n&rsquo;existe pas. La fonction *require()* va génèrer une [erreur fatale][1]{.link}, tandis que *include()* ne fera qu&rsquo;une simple Warning. Ainsi, *require()* stoppera l&rsquo;exécution du fichier tandis que *include()* n&rsquo;en fera rien.

Si vous incluez un fichier ce que vous devez en avoir sûrement besoin&#8230; Du coup j&rsquo;utilise tout le temps *require() *personnellement.

Regardons maintenant *include_once()* et *require_once()*. Ces fonctions vérifient si le fichier demandé n&rsquo;a pas déjà été inclus. La consommation en ressource est donc plus grande. De plus, en structurant bien votre pensée et donc votre code vous ne devriez pas être amené à inclure plusieurs fois le même fichier. C&rsquo;est pourquoi je n&rsquo;utilise jamais ces fonctions là.

Voilà, j&rsquo;espère que vous aurez appris quelque chose et que cela pourra vous aider par la suite.  
See you later <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />

 [1]: http://www.php.net/manual/fr/errorfunc.constants.php#errorfunc.constants.errorlevels.e-error
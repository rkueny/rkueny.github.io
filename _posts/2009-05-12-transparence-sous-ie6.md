---
title: Transparence sous IE6
author: R.Kueny
layout: post
permalink: /developpement-web/transparence-sous-ie6
categories:
  - Développement Web
---
Hier au boulot, (en stage) j&rsquo;ai eu une petite découpe à faire. Et bien sûr IE6 est venu y mettre son grain de sel. Vivement qu&rsquo;il meurt lui d&rsquo;ailleurs ^^.

Certains développeurs on d&rsquo;ailleurs arrêté d&rsquo;assurer la compatibilité pour cette version d&rsquo;internet explorer. Autant je suis d&rsquo;accord avec eux pour les projets personnelles,  mais bon dans le cadre d&rsquo;une entreprise&#8230; le client est roi parait-il :).

Bref, je pense que vous avez été confronté au moins une fois à ce problème voici comme j&rsquo;ai résolu le mien.

<!--more-->Tout d&rsquo;abord dans la page html, pour la sélection du css :

<pre id="line1"><em> &lt;<span class="start-tag">style</span><span class="attribute-name"> type</span>=<span class="attribute-value">"text/css"</span>&gt;
    &lt;!--
    @import url("style/style.css");
    --&gt;
    &lt;/<span class="end-tag">style</span>&gt;
</em></pre>

<pre id="line16"><em>    <span class="comment">&lt;!--[if lte IE 6]&gt;
    &lt;style type="text/css"&gt;
    &lt;!--
    @import url("style/ie6.style.css");
    --&gt;
    &lt;/style&gt;
    &lt;![endif]--&gt;</span></em></pre>

Le premier <style type=&nbsp;&raquo;text/css&nbsp;&raquo;> correspond à la feuille de style pour tout les naviguateurs et la seconde est spéciale pour IE6 (comme son nom l&rsquo;indique).

Ensuite dans : ie6.style.css, là où je veux gérer la transparence voici ce que j&rsquo;ai mis :

    .div_png {
        background: none;
        filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='ADRESSE_DE_L_IMAGE.png', sizingMethod='scale');
    }
    

L&rsquo;adresse de l&rsquo;image doit être sans les ../ même si c&rsquo;est dans un autre répertoire.

Pour l&rsquo;attribut *sizingMethod* voici ce qu&rsquo;il peut recevoir :

  * *image* —Valeur par défaut, adapte le bloc à l&rsquo;image,
  * *scale* — Adapte l&rsquo;image au bloc,
  * *crop* — Coupe l’image pour qu’elle tienne dans le bloc.

J&rsquo;espère que cela a pu vous aider.

Ah oui, un dernier point. Je conseille d&rsquo;utiliser les *@import* plutôt que les  *<<span class="start-tag">link</span><span class="attribute-name"> href</span>=<span class="attribute-value">&laquo;&nbsp;&nbsp;&raquo; </span><span class="attribute-name">rel</span>=<span class="attribute-value">&laquo;&nbsp;stylesheet&nbsp;&raquo; </span><span class="attribute-name">type</span>=<span class="attribute-value">&laquo;&nbsp;text/css&nbsp;&raquo; </span><span class="error"><span class="attribute-name">/</span></span>*>. Pourquoi ?

Je dois dire que j&rsquo;utilisais *link* jusqu&rsquo;à pas longtemps. Mais [Methylbro][1] m&rsquo;a donné une bonne raison qui est d&rsquo;ailleurs très bien expliquée chez [Alsacreations][2]. Les vieux navigateurs, tel que Netscape 4, n&rsquo;interpréteront pas le *@import*. Il vaut mieux ne rien interpréter que mal l&rsquo;interpréter. Les personnes utilisant cela navigueront donc sans feuille de style mais pourront tout de même avoir une navigation plus ou moins agréable (à vous de faire un code html comme il faut).

See you later <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />

 [1]: http://methylbro.titaxium.org/
 [2]: http://www.alsacreations.com/actu/lire/160-link-ou-import.html
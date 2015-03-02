---
title: Créer, développer un plugin wordpress
author: R.Kueny
layout: post
permalink: /developpement-web/creer-developper-un-plugin-wordpress
categories:
  - Développement Web
tags:
  - création
  - développement
  - développeur
  - php
  - plugin
  - rank
  - wordpress
---
Comme j&rsquo;en ai parlais dans mon précédent article, je me suis lancé dans la création d&rsquo;un plugin wordpress. La première partie de mon périple, que dis-je de mon odyssée fut de trouver des tutoriels sur le net. J&rsquo;ai pas mal cherché et pas vraiment trouvé ce qui me plaisait. En fait, il n&rsquo;y a pas de tutoriel qui explique tout du début à la fin (ou alors je n&rsquo;ai pas trouvé). Du coup, j&rsquo;ai pas mal tâtonné, cherché dans la doc (qui est excellente mais en anglais), et regardé sur les plugins existants.

Du coup, n&rsquo;ayant pas trouvé mon bonheur sur la toile je me suis dis que j&rsquo;allais créer cet article que j&rsquo;aurai aimé avoir. De plus, cela permettra à moi aussi de me clarifier les idées. C&rsquo;est gagnant-gagnant non ? ^^Alors, commençons donc ce tutoriel qui se découpera en plusieurs parties (c&rsquo;est plus facile à digérer <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" /> )

<!--more-->

**Les plugins de wordpress**

Avant de se lancer tête baissée dans le code, je vais vous donner quelques liens à visiter. Le premier est le listing des plugins existants. En effet, développer un plugin alors qu&rsquo;il en existe déjà un&#8230; utile ? A vous de juger. Le second mène à la documentation wordpress. C&rsquo;est une véritable mine et elle m&rsquo;a bien souvent guidée lors de mon développement. A mettre dans vos favoris <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />

&#8211; <a href="http://wordpress.org/extend/plugins/" target="_blank">Les plugins wordpress</a>  
&#8211; <a href="http://codex.wordpress.org/Main_Page" target="_blank">La documentation wordpress</a> et <a href="http://codex.wordpress.org/Function_Reference/" target="_blank">le guide des fonctions</a>

Je vous mettrai souvent des liens vers ses parties pour que vous approfondissiez le sujet. En effet, je ne connais pas tout des plugins wordpress mais assez pour commencer à faire un plugin qui tient la route et assez pour vous donner les éléments pour vous débrouiller par la suite. De plus, si vous avez des questions n&rsquo;hésitez pas à laisser un commentaire.

Encore un mot sur les plugins wordpress. J&rsquo;imagine que vous savez où ils sont stockés : wp-content/plugins/ et où on les installe dans la partie admin : Extensions (menu déroulant sur la gauche).

Enfin, il existe quelques conventions de nommages pour votre fichier. Votre dossier et votre fichier principal doivent avoir le même nom. De plus ils doivent être unique, ainsi que votre nom de plugin d&rsquo;ailleurs. En effet, cela peut entrainer des collisions sinon. Pour éviter cela &#8211;> <a href="http://wordpress.org/extend/plugins/" target="_blank">moteur de recherche cité plus haut</a>.

Pour ne pas vous lâcher sans que vous n&rsquo;ayez ouvert votre IDE préféré, voici le début du tutoriel proprement dit.

**La carte d&rsquo;identité de votre plugin**

Pour que le système de wordpress reconnaisse votre fichier php principal (qui porte le nom du dossier) comme un plugin wordpress il vous faut ajouter sa carte d&rsquo;identité, appellée cartouche, en début en fichier. Voici la syntaxe :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">&lt;?php</span>
<span style="color: #666666; font-style: italic;">/*
     Plugin Name: Le nom de votre plugin
     Plugin URI:  L'url de votre projet
     Description: La description de votre plugin (rapide)
     Author:      Votre nom ou pseudo
     Version:     La version de votre plugin
     Author URI:  Votre site/blog/forum
*/</span>
<span style="color: #000000; font-weight: bold;">?&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Cela identifiera donc votre plugin. Cela permettra à wordpress d&rsquo;afficher ceci :

<div id="attachment_436" style="width: 559px" class="wp-caption alignnone">
  <img title="Cartouche du plugin wordpress" src="http://rkueny.fr/wp-content/uploads/2009/08/cartouche_plugin_wordpress.jpg" alt="Cartouche du plugin wordpress" width="549" height="64" />
  
  <p class="wp-caption-text">
    Cartouche du plugin wordpress
  </p>
</div>

La classe non ? ^^

Précision : ce cartouche n&rsquo;apparait que sur le premier fichier.

Je vous laisse pour aujourd&rsquo;hui. La suite viendra avant la fin de la semaine avec l&rsquo;activation du plugin, la création de menu dans la partie admin et peut-être l&rsquo;utilisation des bases de données.

Si vous avez des envies des besoins, n&rsquo;hésitez pas à laisser des commentaires. See you later <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
---
title: Créer, développer un plugin wordpress (2)
author: R.Kueny
layout: post
permalink: /developpement-web/creer-developper-un-plugin-wordpress-2
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
Lors de mon premier article &laquo;&nbsp;<a href="http://rkueny.fr/developpement-web/creer-developper-un-plugin-wordpress" target="_blank">Créer, développer un plugin wordpress</a>&laquo;&nbsp;, nous avons abordé les grandes lignes ainsi que la conception du cartouche wordpress. Avec l&rsquo;article d&rsquo;aujourd&rsquo;hui nous allons entré dans le vif du sujet. Pour que vous suiviez bien le tutoriel nous allons nous appuyer sur un exemple. Cet exemple sera mon <a href="http://rkueny.fr/developpement-web/myranks-plugin-et-site" target="_blank">plugin &laquo;&nbsp;My Ranks&nbsp;&raquo;</a> (encore en cours de réalisation). Le but de ce plugin est de permettre au propriétaire du blog de connaitre son positionnement Google sur différentes requêtes. Nous n&rsquo;allons donc pas agir sur l&rsquo;affichage des visiteurs mais simplement dans la partie admin. Une fois ce tutoriel fini, je le compléterai avec la partie visiteur (ajout d&rsquo;un widget par exemple).

Bon, trêve de bavardage, on y va !!!

<!--more-->

  
Après avoir regardé si le nom de<a href="http://wordpress.org/extend/plugins/search.php?q=myranks" target="_blank"> mon plugin était unique</a>, je l&rsquo;ai donc nommé &laquo;&nbsp;My Ranks&nbsp;&raquo;. Ce qui dans l&rsquo;architecture donne : *wp-content/plugins/myranks/myranks.php*.

Je vais développer en utilisant une classe et en PHP5. Pourquoi une classe ? Tout d&rsquo;abord cela est bien plus propre. Ensuite, je suis habitué à développer en objet désormais. Enfin, chaque fonction doit être unique dans tout les plugins activés dans votre blog. En passant par une classe il n&rsquo;y a que le nom de la classe qui doit être unique. Vu que c&rsquo;est le même que le nom de mon plugin ça passe. A ce stade, mon fichier php ressemble à ça :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #666666; font-style: italic;">/* ----------------------------------------------------
			CARTOUCHE D'IDENTIFICATION
---------------------------------------------------- */</span>
&nbsp;
<span style="color: #666666; font-style: italic;">/*
	Plugin Name: My Ranks
	Plugin URI: http://rkueny.fr
	Description: Plugin servant à suivre la position de mots clés
                     choisis sur le moteur de recherche google
	Author: R.Kueny
	Version: 0.1
	Author URI: http://rkueny.fr
*/</span>
<span style="color: #000000; font-weight: bold;">class</span> myranks<span style="color: #009900;">&#123;</span>
&nbsp;
     <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> __construct<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
     <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span>
&nbsp;
<span style="color: #000088;">$ranks</span> <span style="color: #339933;">=</span> <span style="color: #000000; font-weight: bold;">new</span> myranks<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Je ne vous représente pas la cartouche d&rsquo;identification. Si vous avez loupé le premier tutoriel sur la <a href="http://rkueny.fr/developpement-web/creer-developper-un-plugin-wordpress" target="_blank">création d&rsquo;un plugin wordpress</a> retournez le lire ;).

Ici donc, rien de bien compliqué. Je déclare ma classe et son constructeur. Ensuite je l&rsquo;initialise. A chaque fois que vous irez dans la partie plugins ou sur le plugin vous créez donc un objet *myranks*.

**Installer/activer son plugin  
**

Lorsqu&rsquo;un admin met en route un plugin il y a deux étapes. L&rsquo;installation et l&rsquo;activation. Vous pouvez commencer à agir lors de l&rsquo;activation. Pour cela, WordPress met à votre disposition des *hooks*. Un *hook* vous permets d&rsquo;agir sur le cœur du système wordpress. Nous allons ici voir votre premier hook, celui de l&rsquo;activation.

Syntaxe : <span style="color: #3366ff;"><em>register_activation_hook($file, $fonctions);</em></span>  
Documentation : ce hook va agir lors de l&rsquo;activation de votre plugin.

Le premier paramètre $file correspond au chemin de votre fichier principal (*myranks.php* dans ce cas là). Étant donné que vous êtes déjà dessus vous pouvez utiliser <a href="http://www.php.net/manual/fr/language.constants.predefined.php" target="_blank">__FILE__</a>. Ce paramètre est obligatoire.

Le second paramètre correspond à la fonction à exécuter lors de l&rsquo;activation de votre plugin. Ici nous allons faire appel à une fonction dans notre classe *myranks*. Ce sera la fonction *install()*. Du coup on l&rsquo;appellera ainsi : *<a href="http://www.php.net/manual/fr/language.types.array.php" target="_blank">array</a>(&lsquo;myranks&rsquo;,&rsquo;install&rsquo;)*. Si la fonction n&rsquo;avait pas été dans une classe nous aurions juste fait *&lsquo;install&rsquo;*

Cela va donc vous donner :

<span style="color: #3366ff;"><em>register_activation_hook(<a href="http://www.php.net/manual/fr/language.constants.predefined.php" target="_blank">__FILE__</a>, <a href="http://www.php.net/manual/fr/language.types.array.php" target="_blank">array</a>(&lsquo;myranks&rsquo;,&rsquo;install&rsquo;));</em></span>

**Désinstaller/désactiver son plugin**

De nouveau, vous ne pourrez agir que lors de la désactivation du plugin. Cela se passe de la même façon mais avec cette syntaxe :

<span style="color: #3366ff;"><em>register_deactivation_hook(<a href="http://www.php.net/manual/fr/language.constants.predefined.php" target="_blank">__FILE__</a>, <a href="http://www.php.net/manual/fr/language.types.array.php" target="_blank">array</a>(&lsquo;myranks&rsquo;,&rsquo;desinstall&rsquo;));</em></span>

Un point important à souligner. Vos fonctions install et desinstall doivent être en accès public, sinon le *hook* ne pourra pas y accéder.

Pour la documentation officielle des deux hooks :

<a href="http://codex.wordpress.org/Function_Reference/register_activation_hook" target="_blank">Hook activation</a>

<a href="http://codex.wordpress.org/Function_Reference/register_deactivation_hook" target="_blank">Hook desactivation</a>

C&rsquo;est fini pour aujourd&rsquo;hui. Dans le prochain billet nous verrons l&rsquo;accès à la base de donnée et peut-être la création d&rsquo;un menu dans la partie admin.

See you later <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
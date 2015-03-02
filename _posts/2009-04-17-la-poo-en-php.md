---
title: La POO en PHP
author: R.Kueny
layout: post
permalink: /developpement-web/la-poo-en-php
categories:
  - Développement Web
---
Bonjour à tout le monde.  
Ces derniers temps je suis à fond sur l&rsquo;objet en PHP. En effet, cela a beaucoup d&rsquo;avantage et surtout cela m&rsquo;aide à structurer mon code.

Beaucoup de personnes ne savent pas comment débuter. En effet, les livres sur le sujet sont moyens et les tutoriels ne sont pas foison sur le sujet !

Je vous ai donc déniché un tutoriel en 6 parties. Il est écrit par Methylbro, un développeur web toulousain. Voici le lien :

<p style="text-align: center;">
  <a href="http://methylbro.titaxium.org/post/2008/04/13/Introduction-a-la-POO-avec-PHP">Article POO avec PHP</a>
</p>

<p style="text-align: left;">
  C&rsquo;est pas mal écrit et le concept assez bien expliqué. En revanche, dans le dernier billet il nous lâche une classe sans commentaire ni quoi que se soit et je vais donc essayer de vous l&rsquo;expliquer un peu plus.
</p>

<p style="text-align: left;">
  <!--more-->
</p>

<p style="text-align: left;">
  Tout d&rsquo;abord la classe en question :
</p>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">class</span> Stylo <span style="color: #009900;">&#123;</span>
&nbsp;
static <span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000088;">$niveau_encre_max</span> <span style="color: #339933;">=</span> <span style="color: #cc66cc;">100</span><span style="color: #339933;">;</span>
static <span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000088;">$niveau_encre_min</span> <span style="color: #339933;">=</span> <span style="color: #cc66cc;">25</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000088;">$niveau_encre</span><span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$couleur_normale</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'#000000'</span><span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$couleur_fin</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'#C0C0C0'</span><span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000088;">$statut</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000000; font-weight: bold;">function</span> peutEcrire<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
     <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>statut<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
          <span style="color: #000088;">$result</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span>
     <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">elseif</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>niveau_encre<span style="color: #339933;">&</span>lt<span style="color: #339933;">;=</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
          <span style="color: #000088;">$result</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span>
     <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
          <span style="color: #000088;">$result</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
     <span style="color: #009900;">&#125;</span>
  <span style="color: #b1b100;">return</span> <span style="color: #000088;">$result</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> __construct<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
      <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>statut <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span>
      <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>niveau_encre <span style="color: #339933;">=</span> <span style="color: #000000; font-weight: bold;">self</span><span style="color: #339933;">::</span><span style="color: #000088;">$niveau_encre_max</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> click<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
     <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>statut<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
          <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>statut <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span>
     <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
          <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>statut <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
     <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span>
<span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> ecrire<span style="color: #009900;">&#40;</span><span style="color: #000088;">$texte</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
     <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>peutEcrire<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
          <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">'&lt; style="color:'</span><span style="color: #339933;">.</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>couleur_normale<span style="color: #339933;">.</span><span style="color: #0000ff;">'"&gt;'</span><span style="color: #339933;">;</span>
          <span style="color: #000088;">$nb_caracteres</span> <span style="color: #339933;">=</span> <span style="color: #990000;">strlen</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$texte</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
          <span style="color: #000088;">$texte</span> <span style="color: #339933;">=</span> <span style="color: #990000;">htmlentities</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$texte</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
          <span style="color: #000088;">$texte</span> <span style="color: #339933;">=</span> <span style="color: #990000;">str_split</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$texte</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
          <span style="color: #000088;">$i</span> <span style="color: #339933;">=</span> <span style="color: #cc66cc;"></span><span style="color: #339933;">;</span>
&nbsp;
          <span style="color: #b1b100;">while</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>peutEcrire<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&</span>amp<span style="color: #339933;">;&</span>amp<span style="color: #339933;">;</span> <span style="color: #000088;">$i</span><span style="color: #339933;">=</span><span style="color: #000088;">$nb_caracteres</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
               <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>niveau_encre<span style="color: #339933;">==</span><span style="color: #000000; font-weight: bold;">self</span><span style="color: #339933;">::</span><span style="color: #000088;">$niveau_encre_min</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
                    <span style="color: #000088;">$format</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">'&lt;span&gt;%s'</span><span style="color: #339933;">;</span>
               <span style="color: #009900;">&#125;</span> <span style="color: #b1b100;">else</span> <span style="color: #009900;">&#123;</span>
                    <span style="color: #000088;">$format</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">"<span style="color: #009933; font-weight: bold;">%s</span>"</span><span style="color: #339933;">;</span>
               <span style="color: #009900;">&#125;</span>
     <span style="color: #990000;">printf</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$format</span><span style="color: #339933;">,</span> <span style="color: #000088;">$texte</span><span style="color: #009900;">&#91;</span><span style="color: #000088;">$i</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
     <span style="color: #000088;">$i</span><span style="color: #339933;">++;</span>
     <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>niveau_encre <span style="color: #339933;">--;</span>
     <span style="color: #009900;">&#125;</span>
&nbsp;
     <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>niveau_encre<span style="color: #339933;">&</span>lt<span style="color: #339933;">;=</span><span style="color: #000000; font-weight: bold;">self</span><span style="color: #339933;">::</span><span style="color: #000088;">$niveau_encre_min</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
          <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">""</span><span style="color: #339933;">;</span>
     <span style="color: #009900;">&#125;</span>
&nbsp;
     <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">"
&nbsp;
n"</span><span style="color: #339933;">;</span>
     <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span>
&nbsp;
<span style="color: #009900;">&#125;</span>
<span style="color: #339933;">&lt;/</span>span<span style="color: #339933;">&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

*(cliquez sur la flèche vers le bas pour voir le code)*

Aïe ça fait mal si vous êtes totalement débutant non ?* Je ne* vais pas reprendre et expliquer tout le code ligne à ligne mais les points qui me semblent flou à la première lecture seulement. Si des questions subsistent n&rsquo;hésitez pas à me poser des questions via des commentaires ou sur le [blog de Methylbro][1].

1/ La déclaration des variables ne devraient pas vous poser de problème. Ils en parlent un peu dans le commentaires de l&rsquo;article d&rsquo;ailleurs.

2/ La fonction *peutEcrire()* ne devrait pas poser de problème non plus.

3/ Dans le constructeur il fait appel au mot clé *&laquo;&nbsp;::self&nbsp;&raquo;*. C&rsquo;est très simple en fait. Cela permet d&rsquo;appeller les propriétés déclarés en statique. Cela peut aussi être utilisé avec une méthode statique.

4/ La fonction *click() *est simple aussi. Elle permet de fermer le stylo s&rsquo;il est ouvert et inversement.

5/ La fonction *ecrire()* est compliquée, enfin pas tellement, mais un peu longue au premier abord ^^. Prenez votre courage à deux mains, elle n&rsquo;est pas dure à comprendre. Elle écrit ce qu&rsquo;on lui demande selon le niveau d&rsquo;encre. Quand on arrive à la fin du niveau d&rsquo;encre la couleur d&rsquo;écriture change (simulation du manque d&rsquo;encre) puis n&rsquo;écris plus quand il n&rsquo;y a plus d&rsquo;encres.  
N&rsquo;hésitez pas à copier-coller la classe pour voir ce que cela donne dans votre naviguateur. Ainsi vous comprendrez mieux le fonctionnement de cette classe et vous pourrez donc mieux réutiliser cet outil.

Utilisation de la classe :

<pre>// on initialise l'objet
     $monBic = new Stylo();
// ça n'écrira pas, car le stylo est fermé de base
     $monBic-&gt;ecrire(‘Essayez d’écrire sans enlever le capuchon…’) ;
// on "ouvre" le stylo"
     $monBic-&gt;click() ;
// écriture normale
     $monBic-&gt;ecrire(‘Un premier paragraphe.’) ;
// ça va être long, ça va couper avant la fin car plus d'encre.
     $monBic-&gt;ecrire(‘Un second paragraphe qui n’iras pas jusque au bout car mon stylo va certainement manquer d’encre.’);</pre>

Voilà, j&rsquo;espère que ce complément d&rsquo;aide vous aura aider. Accrochez vous à la POO si vous codez en php. Il y&rsquo;a un petit moment d&rsquo;adaptation mais le confort arrive très vite croyez moi.

A bientôt.

 [1]: http://methylbro.titaxium.org/
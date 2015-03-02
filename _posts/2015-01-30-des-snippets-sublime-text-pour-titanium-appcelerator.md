---
title: Des snippets Sublime Text pour Titanium Appcelerator
author: R.Kueny
layout: post
permalink: /developpement-mobile/titanium-appcelerator/des-snippets-sublime-text-pour-titanium-appcelerator
categories:
  - Titanium Appcelerator
tags:
  - astuces
  - dump
  - mobile
  - snippet
  - sublime text
  - Ti
  - titanium
  - titanium appcelerator
  - titanium studio
  - var_dump
---
Si vous [développez vos applications mobiles en vous passant de Titanium Studio avec Sublime Text, ][1]on va voir comment créer des snippets.

La création d&rsquo;un snippet va vous permettre de faire par exemple : **alloyview** + **TAB **et de voir apparaitre :

<pre>&lt;Alloy&gt;
    &lt;Window&gt;
        &lt;Label&gt;&lt;/Label&gt;
    &lt;/Window&gt;
&lt;/Alloy&gt;</pre>

Ca peut vous faire gagner du temps n&rsquo;est ce pas ? Voyons donc comment créer un snippet avec Sublime Text.

<!--more-->

Faites **Tools > New Snippet**. Vous voici avec un snippet de base. Reprenons l&rsquo;exemple d&rsquo;avant, nous allons écrire :

<pre>&lt;snippet&gt;
    &lt;content&gt;&lt;![CDATA[
&lt;Alloy&gt;
    &lt;Window&gt;
        &lt;Label&gt;$1&lt;/Label&gt;
    &lt;/Window&gt;
&lt;/Alloy&gt;
]]&gt;&lt;/content&gt;
    &lt;tabTrigger&gt;alloyview&lt;/tabTrigger&gt;
&lt;/snippet&gt;</pre>

Dans la balise **<![CDATA[]]>** vous mettez donc le code que vous voulez voir être généré. Ici le **$1**, sert à indiquer où le curseur se trouvera après avoir fait un **TAB**.

Dans la balise **<tabTrigger>** vous mettez le nom du raccourci qui déclenchera le snippet. Si vous mettez un $2, vous pourrez passer de l&rsquo;un à l&rsquo;autre via un tab. Vous pouvez aussi mettre une variable par défaut en faisant : **${1:default}** par exemple.

Il ne vous reste plus qu&rsquo;à enregistrer votre snippet au format **lenomdusnippet.sublime-snippet**.

Et voilà, votre snippet est fonctionnel.

Pour un exemple de plus, et une astuce, voici un snippet que j&rsquo;utilise :

**Un var-dump() avec Titanium :**

<pre>&lt;snippet&gt;
    &lt;content&gt;&lt;![CDATA[Ti.UI.info(JSON.stringify($1));]]&gt;&lt;/content&gt;
    &lt;tabTrigger&gt;tidump&lt;/tabTrigger&gt;
&lt;/snippet&gt;</pre>

&nbsp;

Have fun !

 [1]: http://rkueny.fr/developpement-mobile/titanium-appcelerator/se-passer-de-titanium-studio-avec-sublime-text "Se passer de Titanium Studio avec Sublime Text"
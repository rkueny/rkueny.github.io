---
title: Autocomplétion pour Git sous Mac
author: R.Kueny
layout: post
permalink: /developpement-web/autocompletion-pour-git-sous-mac
categories:
  - Développement Web
tags:
  - git
  - mac
  - terminal
---
<img class="alignleft wp-image-2030 size-medium" style="margin: 0 25px 10px 0;" src="http://rkueny.fr/wp-content/uploads/2014/06/git-logo-300x125.png" alt="git-logo" width="300" height="125" />C&rsquo;est quand même mieux d&rsquo;avoir l&rsquo;auto-complétion lorsque l&rsquo;on utilise Git avec la console sous mac non ? Ce n&rsquo;est même pas compliqué à mettre en place. Il vous suffit de créer un fichier ~/.git-autocomplete.bash par exemple, y mettre le contenu du fichier disponible à cette adresse : <a href="https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash" target="_blank">https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash</a> puis de mettre dans votre terminal :

<pre class="line-pre">echo "source ~/.git-autocomplete.bash" &gt;&gt; ~/.bash_profile</pre>

Redémarrez votre terminal et c&rsquo;est ok. Ca facilite la vie quand même !
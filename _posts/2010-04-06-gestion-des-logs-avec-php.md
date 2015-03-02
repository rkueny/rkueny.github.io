---
title: Gestion des logs avec PHP
author: R.Kueny
layout: post
permalink: /developpement-web/gestion-des-logs-avec-php
categories:
  - Développement Web
tags:
  - développement
  - développeur
  - log
  - logs
  - php
  - puissance du PHP
---
Je me suis aperçu la dernière fois que tout le monde ne connaissait pas la puissance des logs qu&rsquo;intègre directement PHP. Du coup, pour essayer de rectifier cela, je me suis dit qu&rsquo;un petit article valait le coup <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

Tout d&rsquo;abord, et parce que vous avez le droit de ne pas connaître, qu&rsquo;est ce qu&rsquo;un log ?

C&rsquo;est tout bête et ça simplifie la vie. Cela peut grandement vous aider à vous sortir d&rsquo;un mauvais pas. Il s&rsquo;agit d&rsquo;enregistrer les erreurs dans un fichier. Cela vous sert d&rsquo;historique par exemple. Un fichier de log se présente de cette façon (ou cela s&rsquo;approche en tout cas) :

<pre>[01-Apr-2010] PHP Parse error:  syntax error, unexpected '}' in /Applications/www/index.php on line 6</pre>

On y retrouve donc souvent la date, l&rsquo;erreur et le fichier avec la ligne concernée. Pratique n&rsquo;est ce pas ?

Et comment mettre cela en place avec le système de log propre à PHP ? Pas compliqué du tout.<!--more-->

****

**Première étape : Configurer le serveur**

Normalement, vous devriez déjà avoir fait cela sur votre serveur. J&rsquo;y fait mention dans l&rsquo;article sur <a title="La gestion des erreurs php en production" href="http://rkueny.fr/developpement-web/la-gestion-des-erreurs-ph-en-production" target="_blank">la gestion des erreurs php en production</a> (relatif à un article sur le blog de <a href="http://methylbro.titaxium.org/post/2009/05/29/display_errors-%C3%A0-On-sur-un-serveur-de-production-c-est-mal-!" target="_blank">Méthylbro</a>)

Il vous faut donc activer le système de log et définir un fichier de log. Cela se fait via deux lignes de votre php.ini fétiche.

> log_errors = On
> 
> error_log = /www/log/log.txt

Vous pouvez aussi affiner votre configuration en ignorant les erreurs répétées. Cela vous permettra d&rsquo;y voir plus clair dans votre fichier en regroupant 100 lignes en 1 seule par exemple. Pour cela il vous faut activer la directive : ignore\_repeated\_errors

> ignore\_repeated\_errors = On

Une fois cela en place, vous pouvez utiliser les logs dans votre développement.

**Deuxième étape : utilisation du système**

Nous allons nous attarder sur l&rsquo;utilisation manuelle du système. Je reviendrai dans un autre article sur l&rsquo;utilisation d&rsquo;un journal système.

Le pivot de cette utilisation est la fonction <a title="error_log()" href="http://php.net/manual/en/errorfunc.configuration.php" target="_blank">error_log()</a>.

Nous allons ici voir plusieurs utilisations. Tout d&rsquo;abord une utilisation &laquo;&nbsp;basique&nbsp;&raquo;. Une simple écriture dans le fichier défini dans votre php.ini :

<p style="text-align: center;">
  <em>error_log(&lsquo;une erreur est survenue ici&rsquo;);</em>
</p>

Mais cette fonction est bien plus puissante que ça !!! Vous pouvez aussi être prévenu par mail d&rsquo;une erreur. Il vous faudra l&rsquo;utiliser ainsi :

<p style="text-align: center;">
  <em>error_log(&lsquo;une erreur est survenue ici&rsquo;, 1, &lsquo;votre_mail@mail.fr&rsquo;);</em>
</p>

Le 1 est ici pour indiquer que vous désirez être prévenu de cette erreur à l&rsquo;adresse mail qui suit. Être prévenu par mail est une bonne pratique, quitte à vous mettre une adresse dédiée à cela. Je parle ici une fois votre site en publication et non plus en production.

En effet, lorsque quelqu&rsquo;un vient pirater votre site, il efface bien souvent son passage des logs. Cependant, si vous êtes prévenu par mail il ne pourra y toucher vu que cela sera stocké sur un autre serveur. Pas mal non ?

Enfin, vous pouvez aussi dire à la fonction d&rsquo;utiliser un autre fichier en utilisant le paramètre 3.

<p style="text-align: center;">
  <em>error_log(&lsquo;une erreur est survenue ici&rsquo;, 3, &lsquo;votre_fichier.txt&rsquo;);</em>
</p>

Et voilà, vous savez ce qu&rsquo;il y a à savoir sur le système de log php. Si vous avez des questions ou des astuces à partager n&rsquo;hésitez pas à laisser un commentaire !

<p style="text-align:center">
  <br />
</p>
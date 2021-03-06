---
title: 'Développeur web php : 50 commandements'
author: R.Kueny
layout: post
permalink: /developpement-web/developpeur-web-php-50-commandements
categories:
  - Développement Web
tags:
  - développement
  - développeur
  - php
---
Je me permets de reprendre le billet publié sur la<a href="http://www.lafermeduweb.net/billet/les-50-commandements-du-developpement-php-497.html" target="_blank"> Ferme du web</a> depuis un article anglais posté sur le site <a onclick="window.open(this.href); return false;" href="http://www.hm2k.com/posts/50-php-optimisation-tips-revisited" target="_blank">HM2K</a>. Je pense que plus cela sera lu mieux ce sera.

C&rsquo;est 50 conseils pour les développeurs php. Ce ne sont pas des ordres à prendre tous au pied de la lettre mais je pense que les lire et s&rsquo;y intéresser un peu ne fera de mal à personne.

Voyons lesquels ils sont&#8230;

<!--more-->

<li style="margin-bottom: 8px;">
  <a onclick="window.open(this.href); return false;" href="http://www.php.net/echo"><em>echo</em></a> est plus rapide que <a onclick="window.open(this.href); return false;" href="http://www.php.net/print"><em>print</em></a>. <a onclick="window.open(this.href); return false;" href="http://web.archive.org/web/20050407085143/http://dynacker.dotgeek.org/printvsecho/">[Citation] </a>
</li>
<li style="margin-bottom: 8px;">
  Mettre ses chaines de caractères entre simple quotes &lsquo;&#8230;&rsquo; est plus rapide qu&rsquo;entre des doubles quotes &laquo;&nbsp;&#8230;&nbsp;&raquo; car PHP analyse s&rsquo;il y&rsquo;a des variables entre les doubles quotes. Utiliser les simple quote pour du texte pur.
</li>
<li style="margin-bottom: 8px;">
  Utiliser sprintf au lieu de mettre des variables dans des double quotes, C&rsquo;est 10x plus rapide. <a onclick="window.open(this.href); return false;" href="http://teroheikkinen.iki.fi/blog/php-s_different_echo_methods_performance_comparison/">[Citation] </a>
</li>
<li style="margin-bottom: 8px;">
  Utiliser les paramètres multiples dans un <a onclick="window.open(this.href); return false;" href="http://www.php.net/echo">echo</a> au lieu de la concaténation des chaines. <a onclick="window.open(this.href); return false;" href="http://blog.libssh2.org/index.php?/archives/28-How-long-is-a-piece-of-string.html">[Citation] </a>
</li>
<li style="margin-bottom: 8px;">
  Utiliser le plus possible des variables pour les calculs, éviter de les mettre dans les boucles. Exemple <div id="highlighter_866549">
    <div>
      <div>
        <a style="width: 16px; height: 16px;" title="view source" href="http://www.lafermeduweb.net/billet/les-50-commandements-du-developpement-php-497.html#viewSource">view source</a><a style="width: 16px; height: 16px;" title="print" href="http://www.lafermeduweb.net/billet/les-50-commandements-du-developpement-php-497.html#printSource">print</a><a style="width: 16px; height: 16px;" title="?" href="http://www.lafermeduweb.net/billet/les-50-commandements-du-developpement-php-497.html#about">?</a>
      </div>
    </div>
    
    <div>
      <div>
        <code>1.</code><span><span style="margin-left: 0px ! important;"><code>&lt;a onclick=</code><code>"window.open(this.href); return false;"</code> <code>href=</code><code>"&lt;a href="http://www.php.net/for">http://www.php.net/for&lt;/a>"</code><code>&gt;</code><code>for</code><code>&lt;/a&gt; (</code><code>$x</code><code>=0; </code><code>$x</code> <code>&lt; </code><code>count</code><code>(</code><code>$array</code><code>); </code><code>$x</code><code>)</code></span></span>
      </div>
    </div>
  </div>
  
  <p>
    La fonction count est appelée à chaque boucle, mieux vaut utiliser $max=count($array) pour stocker le résultat du calcul avant la boucle. <a onclick="window.open(this.href); return false;" href="http://www.php.lt/benchmark/phpbench.php">[Citation] </a></li> 
    
    <li style="margin-bottom: 8px;">
      Pensez à unset ou rendre null vos variables, en particulier les gros tableaux. <a onclick="window.open(this.href); return false;" href="http://lists.nyphp.org/pipermail/talk/2003-January/001855.html">[Citation] </a>
    </li>
    <li style="margin-bottom: 8px;">
      Eviter les méthodes magiques comme <a onclick="window.open(this.href); return false;" href="http://uk2.php.net/manual/en/language.oop5.overloading.php">__get, __set</a>, <a onclick="window.open(this.href); return false;" href="http://www.php.net/__autoload">__autoload</a>. <a onclick="window.open(this.href); return false;" href="http://www.ilia.ws/files/zend_performance.pdf">[Citation] </a>
    </li>
    <li style="margin-bottom: 8px;">
      Utiliser require() au lieu de require_once() quand c&rsquo;est possible. <a onclick="window.open(this.href); return false;" href="http://peter.mapledesign.co.uk/weblog/archives/writing-faster-php-code-1-require_once">[Citation] </a>
    </li>
    <li style="margin-bottom: 8px;">
      Utilisez desz chemins complets dans vos include et require. C&rsquo;est du temps gagné pour la résolution du chemin au niveau de votre OS. <a onclick="window.open(this.href); return false;" href="http://t3.dotgnu.info/blog/php/include_once-mostly-harmless.html">[Citation] </a>
    </li>
    <li style="margin-bottom: 8px;">
      require() et include() sont identiques à part que require arrete le script si le fichier n&rsquo;est pas trouvé. Les performances sont quasi identiques. <a onclick="window.open(this.href); return false;" href="http://groups.google.com/group/php.general/browse_thread/thread/72332fe1ed21e104/b1650148cd6e3c17?lnk=st&q=php+require+vs+include+performance#b1650148cd6e3c17">[Citation] </a>
    </li>
    <li style="margin-bottom: 8px;">
      Depuis PHP5, l&rsquo;heure de démarrage d&rsquo;un script peut être trouvé grâce à $_SERVER[’REQUEST_TIME’], à utiliser à la place de time() ou microtime(). <a onclick="window.open(this.href); return false;" href="http://www.php.net/time">[Citation] </a>
    </li>
    <li style="margin-bottom: 8px;">
      <a onclick="window.open(this.href); return false;" href="http://www.php.net/pcre">PCRE</a> regex est plus rapide que <a onclick="window.open(this.href); return false;" href="http://www.php.net/ereg">EREG</a>, mais il faut toujours regarder s&rsquo;il n&rsquo;est pas posssible d&rsquo;utiliser une fonction native comme <a onclick="window.open(this.href); return false;" href="http://www.php.net/strncasecmp">strncasecmp</a>, <a onclick="window.open(this.href); return false;" href="http://www.php.net/strpbrk">strpbrk</a> et <a onclick="window.open(this.href); return false;" href="http://www.php.net/stripos">stripos</a> à la place. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/36">[Citation] </a>
    </li>
    <li style="margin-bottom: 8px;">
      Quand vous parsez du XML en PHP essayez <a onclick="window.open(this.href); return false;" href="http://www.bin-co.com/php/scripts/xml2array/">xml2array</a>, qui permet d&rsquo;utiliser les <a onclick="window.open(this.href); return false;" href="http://www.php.net/xml">fonctions PHP XML</a>, pour du HTML vous pouvez essayer <a onclick="window.open(this.href); return false;" href="http://www.php.net/dom">DOM document</a> ou <a onclick="window.open(this.href); return false;" href="http://www.php.net/domxml">DOM XML</a> en PHP4. <a onclick="window.open(this.href); return false;" href="http://htmlparsing.icenine.ca/">[Citation] </a>
    </li>
    <li style="margin-bottom: 8px;">
      <a onclick="window.open(this.href); return false;" href="http://www.php.net/str_replace">str_replace</a> est plus rapide que <a onclick="window.open(this.href); return false;" href="http://www.php.net/preg_replace">preg_replace</a>, str_replace est globalement le meilleur dans tous les cas, même si quelques fois <a onclick="window.open(this.href); return false;" href="http://www.php.net/strtr">strtr</a> est plus rapide avec des chaines longues. Utiliser un array() dans str_replace est plus rapide que d&rsquo;utiliser plusieurs str_replace. <a onclick="window.open(this.href); return false;" href="http://www.tummblr.com/web-development/php/php-speed-of-string-replacement-functions/">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      “else if” est plus rapide qu&rsquo;un <a onclick="window.open(this.href); return false;" href="http://www.php.net/switch">case/switch</a>. <a onclick="window.open(this.href); return false;" href="http://www.php.lt/benchmark/phpbench.php">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      La suppression d&rsquo;erreurs avec @ est très lent. <a onclick="window.open(this.href); return false;" href="http://michelf.com/weblog/2005/bad-uses-of-the-at-operator/">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Pour réduire l&rsquo;utilisation de la bande passante, il faut activer le mode mod_deflate dans Apache2 <a onclick="window.open(this.href); return false;" href="http://howtoforge.com/apache2_mod_deflate">[Citation]</a> ou mod_gzip pour Apache1. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/40">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Fermer les connexions aux BDD après les avoir utilisé. <a onclick="window.open(this.href); return false;" href="http://uk.php.net/manual/en/function.mysql-close.php#69063">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      $row[’id’] est <a onclick="window.open(this.href); return false;" href="http://www.moskalyuk.com/blog/php-optimization-tips/1272">7 fois plus rapide</a> que $row[id], car si vous ne mettez pas les quotes, PHP Pense qu&rsquo;il va s&rsquo;agir d&rsquo;une constante. <a onclick="window.open(this.href); return false;" href="http://www.php.net/constants#language.constants.syntax">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      L&rsquo;utilisation de tags d&rsquo;un autre style ou des shorts tags pour ouvrir du code PHP est déconseillé. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/10">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      L&rsquo;utilisation d&rsquo;un code strict permettant de supprimer toutes les erreurs, warning etc est conseillé. <a onclick="window.open(this.href); return false;" href="http://www.php.net/error_reporting">error_reporting(E_ALL)</a> doit toujours être activé. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/11">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Les scripts PHP sont rendus 2 à 10 fois moins rapidement par Apache qu&rsquo;une page statique. Essayez d&rsquo;utiliser au maximum des pages statiques. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/34">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Les scripts PHP sont compilés à la volée (si pas de cache). Installez un système de cache PHP (comme <a onclick="window.open(this.href); return false;" href="http://www.php.net/memcache">memcached</a>, <a onclick="window.open(this.href); return false;" href="http://eaccelerator.net/">eAccelerator</a> ou <a onclick="window.open(this.href); return false;" href="http://sourceforge.net/projects/turck-mmcache/">Turck MMCache</a>) permet d&rsquo;augmenter de 25-100% les performances. <a onclick="window.open(this.href); return false;" href="http://www.phpfive.net/php-opcode-caching-with-eaccelerator-article45.htm">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Une alternative aux systèmes de cache est de générer régulièrement le rendu en HTML statique. Essayez <a onclick="window.open(this.href); return false;" href="http://smarty.php.net/">Smarty</a> ou <a onclick="window.open(this.href); return false;" href="http://pear.php.net/Cache_Lite">Cache Lite</a>. <a onclick="window.open(this.href); return false;" href="http://phplens.com/phpeverywhere/tuning-apache-php">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Utilisez isset où c&rsquo;est possible au lieu de strlen. (ie: if (strlen($foo) < 5) { echo “Foo is too short”; } vs. if (!isset($foo{5})) { echo “Foo is too short”; } ). <a onclick="window.open(this.href); return false;" href="http://blog.dynom.nl/archives/String-length-vs-isset-to-check-string-lengths_20070807_5.html">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      ++$i est plus rapide que $ i++, donc <a onclick="window.open(this.href); return false;" href="http://www.hudzilla.org/phpwiki/index.php?title=Pre-increment_where_possible">utilisez le pre-increment quand c&rsquo;est possible</a>. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/32">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Ne réinventez pas la roue, utilisez les fonctions natives de PHP qui seront toujouts plus rapides; Si vous avez le temps de réecrire, faites le sous forme de modules C / C++. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/31">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Analysez votre code (Profiler). Utilisez <a onclick="window.open(this.href); return false;" href="http://xdebug.org/">Xdebug debugger</a> pour profilker du code PHP. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/39">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Documentez  votre code. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/16">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Apprenez les différences entre du bon et du mauvais code. <a onclick="window.open(this.href); return false;" href="http://www.sitepoint.com/blogs/2007/05/25/good-and-bad-php-code/">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Utilisez les standarts pour une meilleure compréhension de votre code par les autres. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/15">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Séparez les couches: Contenu, PHP et HTML. HTML dans un autre fichier que le PHP. <a onclick="window.open(this.href); return false;" href="http://www.ibm.com/developerworks/library/wa-phprock1/index.html">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      IL n&rsquo;est pas obligatoire d&rsquo;utiliser des systèmes de templates complexes comme Smarty, PHP en intègre déjà, regardez  <a onclick="window.open(this.href); return false;" href="http://www.php.net/ob_get_contents">ob_get_contents</a> et <a onclick="window.open(this.href); return false;" href="http://www.php.net/extract">extract</a>. <a onclick="window.open(this.href); return false;" href="http://www.massassi.com/php/articles/template_engines/">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Ne jamais avoir confiance en les variables utilisateurs: $_POST et $_GET. Utilisez <a onclick="window.open(this.href); return false;" href="http://www.php.net/mysql_real_escape_string">mysql_real_escape_string</a> quand vous utilisez MySQL, et <a onclick="window.open(this.href); return false;" href="http://www.php.net/htmlspecialchars">htmlspecialchars</a> quand vous rendez du HTML. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/19">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Pour des raisons de sécurité, ne dévoillez jamais d&rsquo;infos concernant vos paths, extensions et configuration, comme utiliser display_errors ou <a onclick="window.open(this.href); return false;" href="http://www.php.net/phpinfo">phpinfo</a>(). <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/24">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Désactivez <a onclick="window.open(this.href); return false;" href="http://www.php.net/register_globals">register_globals</a> (Normalement désactivé par défaut, pas pour rien!). L&rsquo;utiliser = risque de sécurité. Bientôt, le PHP6 supprimera complètement cette fonction ! <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/27">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Ne jamais utiliser du texte clair pour stocker les mots de passe ou les comparer. Utilisez un hash <a onclick="window.open(this.href); return false;" href="http://www.php.net/md5">md5</a> au minimum. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/28">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Utilisez <a onclick="window.open(this.href); return false;" href="http://www.php.net/ip2long">ip2long</a>() et <a onclick="window.open(this.href); return false;" href="http://www.php.net/long2ip">long2ip</a>() pour stocker les adresses IP en INT plutôt qu&rsquo;en STRING. <a onclick="window.open(this.href); return false;" href="http://blog.rightbrainnetworks.com/2006/09/18/10-things-you-probably-didnt-know-about-php/">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Pour ne pas réinventer la roue, vous pouvez utiliser les nombreux projets PEAR souvent standarts. <a onclick="window.open(this.href); return false;" href="http://www.moskalyuk.com/blog/php-optimization-tips/1272">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Quand vous utilisez header(’Location: ‘.$url); n&rsquo;oubliez pas d&rsquo;y faire suivre un die(); car le script continue de tourner même après l&rsquo;instruction. <a onclick="window.open(this.href); return false;" href="http://richardlynch.blogspot.com/2007/06/php-header-location-redirect-refresh.html">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      En <a onclick="window.open(this.href); return false;" href="http://www.php.net/oop">POO</a>, si une méthode peut être <a onclick="window.open(this.href); return false;" href="http://en.wikipedia.org/wiki/Method_%28computer_science%29#Static_methods">static</a>, alors déclarez la en static. Elle sera 4 fois plus rapide. <a onclick="window.open(this.href); return false;" href="http://ilia.ws/files/frankfurt_perf.pdf">[Citation]</a>.
    </li>
    <li style="margin-bottom: 8px;">
      Incrémenter une variable locale dans une méthode POO est le plus rapide. <a onclick="window.open(this.href); return false;" href="http://phplens.com/lens/php-book/optimizing-debugging-php.php">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Incrémenter une propriété d&rsquo;un objet (eg. $this->prop++) est 3 fois plus lent qu&rsquo;une variable locale. <a onclick="window.open(this.href); return false;" href="http://phplens.com/lens/php-book/optimizing-debugging-php.php">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Incrémenter une variable indéfinie est 9-10 fois plus lent qu&rsquo;une variable pré définie. <a onclick="window.open(this.href); return false;" href="http://phplens.com/lens/php-book/optimizing-debugging-php.php">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Déclarer une variable globale dans une fonction sans l&rsquo;utiliser ralenti les choses. PHP doit faire une sorte de check sur la variable pour vérifier qu&rsquo;elle existe. <a onclick="window.open(this.href); return false;" href="http://phplens.com/lens/php-book/optimizing-debugging-php.php">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Le nombre de méthodes dans une classe ne change rien aux performances d&rsquo;appel d&rsquo;une méthode. <a onclick="window.open(this.href); return false;" href="http://phplens.com/lens/php-book/optimizing-debugging-php.php">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Les méthodes d&rsquo;une classe dérivée vont plus vite que celles de la classe mère. <a onclick="window.open(this.href); return false;" href="http://phplens.com/lens/php-book/optimizing-debugging-php.php">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Une fonction appelée avec un ou zéro paramètre prend environ 7-8 fois un $localvar++. 15 $localvar++ pour l&rsquo;appel d&rsquo;une méthode similaire. <a onclick="window.open(this.href); return false;" href="http://phplens.com/lens/php-book/optimizing-debugging-php.php">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Tout ne doit pas être objet, chaque méthode et propriété consomme de la mémoire. <a onclick="window.open(this.href); return false;" href="http://talks.php.net/show/php-best-practices/33">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Echappez les chaines provenant de l&rsquo;extérieur avec <a onclick="window.open(this.href); return false;" href="http://www.php.net/mysql_real_escape_string">mysql_real_escape_string</a>, au lieu de mysql_escape_string ou addslashes. Si <a onclick="window.open(this.href); return false;" href="http://www.php.net/magic_quotes_gpc">magic_quotes_gpc</a> est activé, mieux vaut utiliser <a onclick="window.open(this.href); return false;" href="http://www.php.net/stripslashes">stripslashes</a> en premier. <a onclick="window.open(this.href); return false;" href="http://www.jemjabella.co.uk/articles/php-security-tips">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Attention lors de l&rsquo;utilisation de mail() et de ses headers, il y&rsquo;a des failles de sécurité. <a onclick="window.open(this.href); return false;" href="http://uk3.php.net/manual/en/function.mail.php#56788">[Citation]</a>
    </li>
    <li style="margin-bottom: 8px;">
      Il faut unset les variables que l&rsquo;on ne se sert plus après s&rsquo;être connecté à la BDD
    </li></ol> 
    
    <p>
      Source : <a href="http://www.lafermeduweb.net" target="_blank">la ferme du web</a>
    </p>
    
    <p>
      Ca fait toujours du bien de relire ça non ?
    </p>
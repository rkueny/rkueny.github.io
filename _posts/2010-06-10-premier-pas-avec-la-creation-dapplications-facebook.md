---
title: 'Premier pas avec la création d&rsquo;applications Facebook'
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/premier-pas-avec-la-creation-dapplications-facebook
jd_tweet_this:
  - yes
wp_jd_clig:
  - http://cli.gs/Q27Wv
wp_jd_target:
  - http://cli.gs/Q27Wv
categories:
  - Facebook
tags:
  - API
  - application
  - code
  - création
  - développement
  - développeur
  - facebook
  - jeu
  - jeux
  - php
  - SDK PHP facebook
  - tutoriel
---
<p style="text-align: left;">
  Je me décide enfin à écrire un tutoriel pour le développement d&rsquo;une application Facebook. Et je dois dire que je me félicite de ne pas l&rsquo;avoir fait avant <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
</p>

<p style="text-align: left;">
  Pourquoi donc ? Et bien, l&rsquo;API vient de changer de A à Z, fin-avril de cette année. Du coup, l&rsquo;ancienne API (the old REST-API sur le wiki Facebook) est désormais obsolète et risque de ne plus être supportée. Écrire un tuto pour devoir le changer le mois suivant… Espérons que ce ne sera pas la même chose avec la nouvelle API ! J&rsquo;ai donc nommée &laquo;&nbsp;Graph API&nbsp;&raquo;
</p>

<p style="text-align: left;">
  <strong>Graph API : quoi de neuf ?</strong>
</p>

<p style="text-align: left;">
  Ça a changé de A à Z. OK. Mais parlons un peu de cette nouvelle API. Du côté des développeurs, il faut savoir que cette API se base désormais sur OAuth 2.0 comme Yahoo, Google ou encore Twitter. Facebook commencerait t&rsquo;il à s&rsquo;ouvrir ?
</p>

<p style="text-align: left;">
  Du côté utilisateur, une avancée, qui me plait beaucoup, est apparue lorsqu&rsquo;on doit autoriser une application. On a ce genre de fenêtre désormais :
</p>

<p style="text-align: left;">
  <img class="size-full wp-image-856 aligncenter" title="27198_395095088552_19292868552_3995134_1102397_n" src="http://rkueny.fr/wp-content/uploads/2010/06/27198_395095088552_19292868552_3995134_1102397_n.jpg" alt="27198_395095088552_19292868552_3995134_1102397_n" width="465" height="257" />
</p>

<p style="text-align: left;">
  Du coup, on sait à quoi on donne accès et on peut ainsi mieux contrôler ses données. Si une application de pronostic, par exemple, demande l&rsquo;accès à toutes vos données, on peut légitiment se demander pourquoi&#8230;
</p>

<p style="text-align: left;">
  Après ce petit état des lieux, entrons donc dans le vif du sujet !<!--more-->Ce premier article va vous permettre de mettre en place le système FBConnect sur votre site. Il va aussi vous permettre de commencer à prendre en main l&rsquo;API, chose pas si facile que ça au premier abord. Le tutoriel s&rsquo;oriente bien sûr vers le PHP 
  
  <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> FBConnect vous permet de récolter des informations sur l&rsquo;utilisateur Facebook depuis votre propre serveur.
</p>

<p style="text-align: left;">
  <strong>Téléchargeons le SDK PHP pour Facebook</strong>
</p>

<p style="text-align: left;">
  Rendez vous donc sur <a title="Dépot Git Facebook API" href="http://github.com/facebook/php-sdk" target="_blank">le dépôt Git Facebook PHP SDK</a>. Téléchargez simplement le fichier /src/facebook.php<br /> Mettez le dans un dossier src/ à la racine de vos projets Facebook.
</p>

<p style="text-align: left; padding-left: 30px;">
  /projetsfb<br /> /src<br /> /test<br /> /autre
</p>

<p style="text-align: left;">
  <strong>Créez votre application sur Facebook</strong>
</p>

<p style="text-align: left;">
  Pour que votre bouton FBConnect fonctionne, il vous faut créer une application Facebook. Pour cela, rendez vous donc sur <a title="Create app" href="http://www.facebook.com/developers/createapp.php" target="_blank">&laquo;&nbsp;Créez une application Facebook&nbsp;&raquo;</a>. Renseignez le nom de votre application et acceptez les termes des Condition d&rsquo;utilisations de Facebook.<br /> Une fois ceci fait, allez dans l&rsquo;onglet &laquo;&nbsp;Connexion&nbsp;&raquo;, et dans le champ Url Connect entrez le chemin du dossier contenant le index.php (<em>exemple : http://localhost:8888/facebook/test/</em>). Une fois ceci fait, gardez cet onglet ouvert et passons à la suite.
</p>

<p style="text-align: left;">
  <img class="size-full wp-image-862 aligncenter" title="APERCU-APPLI" src="http://rkueny.fr/wp-content/uploads/2010/06/APERCU-APPLI.png" alt="APERCU-APPLI" width="522" height="230" />
</p>

<p style="text-align: left;">
  <strong>Téléchargez la base pour le FBConnect</strong>
</p>

<p style="text-align: left;">
  Tout le code de ce tutoriel est présent sur un de <a title="GitHub R.Kueny Facebook" href="http://github.com/rkueny/fbconnect" target="_blank">mes repositories GitHub</a>.
</p>

<p style="text-align: left;">
  Téléchargez donc tout les fichiers (le bouton Download Source en haut à droite). Vous n&rsquo;aurez qu&rsquo;à toucher au fichier conf.php et au fichier index.php pour indiquer le chemin vers le fichier facebook.php. Le fichier facebook.php étant celui que vous avez téléchargé auparavant.
</p>

<p style="text-align: left;">
  Je vais d&rsquo;abord vous guider pour utiliser ceci puis j&rsquo;expliquerai les fichiers. Ainsi, dans le fichier conf.php, entrez les données que vous trouverez dans l&rsquo;administration de votre application sur Facebook (l&rsquo;onglet que vous avez gardé ouvert).
</p>

<pre style="text-align: left;">define('APP_ID',        '');
define('APP_KEY',        '');
define('APP_SECRET',     '');
define('APP_URL',        'http://localhost:8888/api_test/facebook/tests/fbconnect3/index.php');</pre>

<p style="text-align: left;">
  APP_ID         &#8211;>    l&rsquo;Id de votre application<br /> APP_KEY     &#8211;>    la clé API de votre application<br /> APP_SECRET     &#8211;>    la clé secrète de votre application<br /> APP_URL        &#8211;>    l&rsquo;url de l&rsquo;index.php de votre FBConnect
</p>

<p style="text-align: left;">
  N&rsquo;oubliez pas de régler le chemin pour votre facebook.php dans le index.php.
</p>

<p style="text-align: left;">
  Une fois ceci fait, testez le script et tout devrait marcher. Nous verrons dans un autre billet comme ensuite intéragir avec Facebook (récupérer des infos ou mettre un statut à jour par exemple).
</p>

<p style="text-align: left;">
  Si vous avez des erreurs, n&rsquo;hésitez pas à aller voir à la fin de ce billet, j&rsquo;en ai répertorié plusieurs. Si votre erreur n&rsquo;est pas dans la liste, n&rsquo;hésitez pas à poster sur le wiki de mon repository FBConnect.
</p>

<p style="text-align: left;">
  <strong>Comprenons un peu le code</strong>
</p>

<p style="text-align: left;">
  Maintenant que cela fonctionne (ou que vous avez une erreur non résolue ^^), décortiquons un peu le code fichier par fichier voulez vous ?
</p>

<p style="text-align: left;">
  <strong>conf.php</strong>
</p>

<p style="text-align: left;">
  Commençons par le fichier que vous avez modifié. Celui-ci contient donc :<br /> &#8211; l&rsquo;Id de votre application<br /> &#8211; la clé publique de celle-ci<br /> &#8211; la clé privée<br /> &#8211; et enfin, l&rsquo;url de votre application sur votre serveur.
</p>

<p style="text-align: left;">
  Les clés servent à l&rsquo;authentification via le protocole OAuth.<br /> L&rsquo;id de votre application, contribue aussi à cette authentification.<br /> Enfin, l&rsquo;url de celle-ci, vous sert pour les méthodes de login ou de logout.
</p>

<p style="text-align: left;">
  Pour en finir avec ce fichier, j&rsquo;y ai mit une méthode me permettant d&rsquo;économiser quelques lignes lorsque je veux afficher des infos proprement.
</p>

<p style="text-align: left;">
  C&rsquo;en est fini pour le fichier de configuration. Passons à la suite.
</p>

<p style="text-align: left;">
  <strong>index.php</strong>
</p>

<p style="text-align: left;">
  Je vous épargne l&rsquo;explication des deux premières lignes <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Passons à la création d&rsquo;une instance pour la classe Facebook.<br /> Si vous avez déjà utilisé une API s&rsquo;appuyant sur OAuth, cette syntaxe doit vous être familière. On lui passe donc un tableau avec l&rsquo;Id de votre application et votre clé secrète. Le troisième argument concerne la gestion des cookies. Mettez les à &lsquo;true&rsquo;, en effet, nous nous basons ensuite sur la méthode getSession() et celle-ci s&rsquo;appuie sur l&rsquo;utilisation de cookies. Si vous mettez à &lsquo;false&rsquo; cela peut marcher, mais les urls seront franchement moches (Passage de l&rsquo;Array séralizé).
</p>

<p style="text-align: left;">
  Ensuite, $facebook->getSession() vous retourne les renseignements sur la session actuelle. Elle vous retourne donc :<br /> &#8211; rien si l&rsquo;utilisateur n&rsquo;est pas connecté<br /> &#8211;
</p>

<pre style="text-align: left;">Array(
[access_token] =&gt; xxx
[expires] =&gt; 0
[secret] =&gt; xxx
[session_key] =&gt;  xxx
[sig] =&gt; xxx
[uid] =&gt; xxx
)</pre>

<p style="text-align: left;">
  si l&rsquo;utilisateur est connecté. Ce sont donc les informations de la session en cours, ainsi que l&rsquo;uid de l&rsquo;utilisateur.
</p>

<p style="text-align: left;">
  Ainsi, si $session existe, on pourra essayer de récupérer des informations sur l&rsquo;utilisateur par la suite.
</p>

<p style="text-align: left;">
  On met $fbme à null pour pouvoir la tester ensuite même si le test sur $session n&rsquo;est pas ok.
</p>

<p style="text-align: left;">
  Lorsque l&rsquo;on fait if($session), on vérifie en fait la session est bien initialisé et donc si l&rsquo;utilisateur est bien connecté.
</p>

<p style="text-align: left;">
  Ensuite, si $session est ok, on récupère l&rsquo;uid de l&rsquo;utilisateur via la méthode getUser(). On pourrait aussi utiliser $session[&lsquo;uid&rsquo;] bien entendu. C&rsquo;est plus joli comme ça non ? <img src="http://rkueny.fr/wp-includes/images/smilies/icon_biggrin.gif" alt=":D" class="wp-smiley" /><br /> Puis on récupère toutes les informations auxquelles l&rsquo;utilisateur nous a donné accès. Mais où y a t&rsquo;il autorisé l&rsquo;accès ? Vous verrez ça dans la suite <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
</p>

<p style="text-align: left;">
  Passons maintenant au fichier contenant le js.
</p>

<p style="text-align: left;">
  <strong>js.php</strong>
</p>

<p style="text-align: left;">
  Tout d&rsquo;abord, l&rsquo;extension est en .php pour pouvoir y insérer l&rsquo;Id de notre application ainsi que l&rsquo;url de notre serveur.<br /> Attardons nous sur le code maintenant. Je préviens de suite, je ne suis pas un génie du js <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Ce code est fonctionnel, je vais plus ou moins vous l&rsquo;expliquer. Si quelqu&rsquo;un se sent de l&rsquo;expliquer plus en profondeur je suis preneur <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /><br /> De plus, dans un billet qui suivra, j&rsquo;expliquerai aussi le système de connexion via le php.
</p>

<p style="text-align: left;">
  Si vous avez remarqué, on n&rsquo;a encore demandé nulle part l&rsquo;identification de l&rsquo;utilisateur. Et bien, nous allons effectuer cela via ce fichier js.
</p>

<p style="text-align: left;">
  Les premières lignes permettent un chargement asynchrone de la librairie JS SDK de Facebook. Du coup, ce lancement doit se situer après l&rsquo;ouverture du tag <body>. Les lignes 2 à 19 font cela. Je vais tout de même vous en dire plus <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
</p>

<p style="text-align: left;">
  Le FB.init permet l&rsquo;initialisation de l&rsquo;objet. Il a besoin de l&rsquo;Id de votre application, de mettre les cookies à true aussi. L&rsquo;option status doit aussi être à true. Cela vous permet de connaitre l&rsquo;état de login (connecté/déconnecté) de l&rsquo;utilisateur. Enfin, activez le xfbml pour permettre le parsage du XFBML (HTML spécial Facebook).<br /> Ensuite, les FB.Event déclenchent les fonctions login ou logout. Celles-ci sont liées à un bouton spécial Facebook que nous verrons dans view.php. (login(); est appelé lorsque l&rsquo;événement &lsquo;auth.login&rsquo; est joué par exemple).
</p>

<p style="text-align: left;">
  Les fonctions login et logout redirigent l&rsquo;utilisateur vers l&rsquo;url de votre application. Nous verrons dans le fichier view.php ce qui se passe en même temps.
</p>

<p style="text-align: left;">
  Enfin, la fonction qui se déclenche en même temps que le FB.init inclut simplement la librairie JS SDK de Facebook dans la langue désirée (fr_FR ou en_US par exemple).
</p>

<p style="text-align: left;">
  Nous avons donc fait le tour du js (y&rsquo;en pas plus promis ;), passons donc au dernier fichier.
</p>

<p style="text-align: left;">
  <strong>view.php</strong>
</p>

<p style="text-align: left;">
  Vous remarquez que l&rsquo;en-tête est un peu bizarre. En effet, pour parser le XFBML il nous faut ajouter xmlns:fb=&nbsp;&raquo;http://www.facebook.com/2008/fbml&nbsp;&raquo;.
</p>

<p style="text-align: left;">
  Le <div id=&nbsp;&raquo;fb-root&nbsp;&raquo;> est présent pour intégrer la librairie JS SDK de Facebook via le js.php.
</p>

<p style="text-align: left;">
  Enfin, la seule chose réellement intéressante de ce fichier est le bouton <fb:login-button>. C&rsquo;est celui-là qui sert à la connexion et à la déconnexion de l&rsquo;utilisateur.
</p>

<p style="text-align: left;">
  L&rsquo;option &laquo;&nbsp;autologoutlink&nbsp;&raquo; est mise à true. Cela permet de transformer le bouton &laquo;&nbsp;Se connecter&nbsp;&raquo; en &laquo;&nbsp;Se déconnecter&nbsp;&raquo; lorsque l&rsquo;utilisateur n&rsquo;est plus connecté. Si vous mettez à false, vous devrez cacher le bouton via le js (et je vous ai promis qu&rsquo;il n&rsquo;y en aurait plus <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
</p>

<p style="text-align: left;">
  Ensuite, l&rsquo;option &laquo;&nbsp;perms&nbsp;&raquo; vous permet de définir ce dont vous avez besoin dans votre application. Vous n&rsquo;aurez accès qu&rsquo;à cela. Dans l&rsquo;exemple nous avons accès à l&rsquo;email de l&rsquo;utilisateur, sa date d&rsquo;anniversaire. Nous pouvons aussi mettre à jour son profil et publier quelque chose sur son mur. Les infos &laquo;&nbsp;de base&nbsp;&raquo; sont tout le temps accessibles (nom/prénom/ville/etc…).
</p>

<p style="text-align: left;">
  Pour la liste des arguments pour &laquo;&nbsp;perms&nbsp;&raquo;, je vous renvois à <a title="Les permissions facebook" href="http://developers.facebook.com/docs/authentication/permissions" target="_blank">cette page du wiki</a>.
</p>

<p style="text-align: center;">
  <img class="size-full wp-image-753 aligncenter" title="facebook-small-logo" src="http://rkueny.fr/wp-content/uploads/2010/01/facebook-small-logo.png" alt="facebook-small-logo" width="229" height="229" />
</p>

<p style="text-align: left;">
  Et voilà, nous en avons fini de l&rsquo;analyse du code <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
</p>

<p style="text-align: left;">
  J&rsquo;ai encore quelques petites choses à vous dire. Tout d&rsquo;abord, sachez que lorsque que vous autorisez une application à accéder à votre mail, celle-ci y a accès en clair. Vous êtes prévenus <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
</p>

<p style="text-align: left;">
  Voyons maintenant les erreurs rencontrées durant différents test. Je tiens à remercier _who qui a été assez bon dans la rencontre d&rsquo;erreurs <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Et du coup, cela nous a permis de les résoudre. Ainsi :
</p>

<p style="text-align: left;">
  <strong>Quelques erreurs ou les péripéties de _who !</strong>
</p>

<p style="text-align: left;">
  Si vous avez :
</p>

<pre style="text-align: left;">(#2500) An active access token must be used to query information about the current user.</pre>

<p style="text-align: left;">
  Cela provient surement du fait que vous tentez d&rsquo;accéder à un utilisateur inactif ou inexistant. Vérifiez vos données (clés et id de l&rsquo;appli). Cela arrive typiquement lorsque vous utilisez la méthode api(&lsquo;/me&rsquo;) sans être connecté. Cette erreur est évité en ajoutant la vérification sur $session avant d&rsquo;appeler la méthode api(&lsquo;/me&rsquo;) (comme dans l&rsquo;exemple fourni).
</p>

<p style="text-align: left;">
  La deuxième erreur rencontré est une erreur sans détail <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Juste le mot erreur. Cela provient du fait que Facebook n&rsquo;arrive pas à accéder à votre serveur distant. Cela peut par exemple venir du fait que votre routeur ne forward pas ou/et que les identifiants de connexion (clés et id) ne sont pas corrects.
</p>

<p style="text-align: left;">
  Lorsque des erreurs seront rencontrées et résolues, je mettrais à jour cette partie.
</p>

<p style="text-align: left;">
  Enfin, comme je l&rsquo;ai déjà dit n&rsquo;hésitez pas à écrire vos remarques/questions en commentaires de ce billet. Pour ce qui est des &laquo;&nbsp;bugs&nbsp;&raquo; je préfère que vous passiez via GitHub. Au pire, vous pouvez passer par les commentaires. Je ne répondrai pas aux questions par mail en revanche <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />
</p>

<p style="text-align: left;">
  <strong>Et la suite ?</strong>
</p>

<p style="text-align: left;">
  Il y aura d&rsquo;autres billets sur la nouvelle API de Facebook. Il y en aura un sur l&rsquo;intégration d&rsquo;une application sur la plateforme (via Iframe) et aussi <a title="Fbconnect php facebook" href="http://rkueny.fr/non-classe/continuons-avec-les-applications-facebook-mais-full-php-cette-fois" target="_blank">un petit pour l&rsquo;identification via PHP pour le FBConnect.</a>
</p>

<p style="text-align: left;">
  See you later <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
</p>

<p style="text-align:center">
  <br />
</p>
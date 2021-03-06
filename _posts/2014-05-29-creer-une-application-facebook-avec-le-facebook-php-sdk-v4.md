---
title: Créer une application Facebook avec le Facebook PHP SDK v4
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/creer-une-application-facebook-avec-le-facebook-php-sdk-v4
categories:
  - Facebook
---
Cela fait un ou deux mois désormais, Facebook a lancé une nouvelle version de son SDK PHP. Il s&rsquo;agit désormais de la v4. L&rsquo;ancienne version fonctionne encore sans soucis, mais je vous conseille tout de même de passer sur cette nouvelle version.

> <span style="color: #993366;">/!\ La V4 du SDK Facebook demande PHP 5.4 ou supérieur.</span>

Ayant joué un peu avec depuis sa sortie, je publie ici un petit article pour vous montrer comment démarrer. J&rsquo;ai installé le SDK avec composer. <!--more-->

Avec un simple composer.json :

<pre>{
  "require" : {
    "facebook/php-sdk-v4" : "4.0.*"
  }
}</pre>

Puis :

<pre>php composer.phar install</pre>

Vous voilà désormais avec le SDK dans votre dossier. Voici le code pour démarrer avec :

<noscript>
  <pre><code class="language-php php">&lt;?php

// obligatoire
session_start();

require('config/config.inc.php');
require('vendor/autoload.php'); // load des fichiers Facebook

use Facebook\FacebookSession;
use Facebook\FacebookRedirectLoginHelper;
use Facebook\FacebookRequest;
use Facebook\FacebookResponse;
use Facebook\FacebookSDKException;
use Facebook\FacebookRequestException;
use Facebook\FacebookAuthorizationException;
use Facebook\GraphObject;
use Facebook\CurlHttpClient;
use Facebook\GraphUser;

FacebookSession::setDefaultApplication($config['appid'], $config['secret']);

$helper = new FacebookRedirectLoginHelper('http://sdkv4.local/');

if(isset($_GET['logout'])) {
	unset($_SESSION['fb_token']);
}

// enregistrement du token facebook
if(isset($_SESSION) && isset($_SESSION['fb_token'])) {

	$session = new FacebookSession($_SESSION['fb_token']);
  
	try {
    	if(!$session-&gt;validate()) $session = null;
  	} catch (Exception $e) {
    	$session = null;
  	}
} else {  

	try {
    	
    	$session = $helper-&gt;getSessionFromRedirect();
  	} catch( FacebookRequestException $ex ) {

    	echo $ex-&gt;message; // Facebook exception
  	} catch( Exception $ex ) {
    	
    	echo $ex-&gt;message; // Other exception
  	}
}

// si connect&eacute;
if(isset($session)) {
  
	$_SESSION['fb_token'] 	= $session-&gt;getToken();
  	$session 				= new FacebookSession( $session-&gt;getToken() );
  
 	$request  = new FacebookRequest($session, 'GET', '/me');
  	$response = $request-&gt;execute();

	$graphObject = $response-&gt;getGraphObject()-&gt;asArray();
  
  	// infos accessibles
	var_dump($graphObject);
  
  	echo '&lt;a href="' . $helper-&gt;getLogoutUrl($session, 'http://sdkv4.local?logout=true') . '"&gt;Logout&lt;/a&gt;';
  
} else {
	// nouvelles fa&ccedil;on de d&eacute;clarer les "scopes"
	echo '&lt;a href="' . $helper-&gt;getLoginUrl( array( 'email', 'user_friends' ) ) . '"&gt;Login&lt;/a&gt;';
}</code></pre>
</noscript>

(si l&rsquo;embed du gist ne fonctionne pas &#8211;> <a title="Facebook PHP SDK v4" href="https://gist.github.com/rkueny/6db5a611c796762221d9" target="_blank">https://gist.github.com/rkueny/6db5a611c796762221d9 </a>)

Vous trouverez d&rsquo;autres exemples ici : <a title="Facebook examples" href="https://developers.facebook.com/docs/php/gettingstarted/4.0.0" target="_blank">https://developers.facebook.com/docs/php/gettingstarted/4.0.0</a>

Je ne vois pas trop quoi ajouter, si vous avez des questions, n&rsquo;hésitez pas à laisser un commentaire.
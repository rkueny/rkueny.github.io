---
title: 'Symfony2 : FOSUserBundle et Connexion OAuth (facebook / twitter / google / github / etc&#8230;)'
author: R.Kueny
layout: post
permalink: /developpement-web/symfony2-fosuserbundle-et-connexion-oauth-facebook-twitter-google-github-etc
categories:
  - Développement Web
tags:
  - bundle
  - code
  - développement
  - développeur
  - facebook
  - github
  - login
  - oauth
  - php
  - symfony2
  - tutoriel
  - twitter
---
Dans un précédent article, [&laquo;&nbsp;Intégrer facilement Facebook Connect et Twitter Connect avec FosUserBundle pour Symfony 2.1&Prime;][1], je vous parlais de l&rsquo;intégration d&rsquo;un Facebook Connect et d&rsquo;un Twitter Connect. Le dit-billet étant un peu passé d&rsquo;actualité désormais, je vais vous présentez une autre solution. Cette solution s&rsquo;appuie sur un bundle plus générique et ne se limitant pas qu&rsquo;à Facebook/Twitter.

> Ce tutoriel est pour Symfony2 version >= 2.3, et utilise les bundles &laquo;&nbsp;FOSUserBundle&nbsp;&raquo; et &laquo;&nbsp;HWIOAuthBundle&nbsp;&raquo;.
> 
> &nbsp;

<!--more-->

### FOSUserBundle

Pour ce passage, référez vous à l&rsquo;article cité plus haut. Cela vous expliquera comment [récupérer et configurer le bundle FOSUser.][1]

Si vous êtes en train de lire cet article, c&rsquo;est que vous voulez implémenter d&rsquo;autres authentification et inscription que la &laquo;&nbsp;basique&nbsp;&raquo; user / password. Si vous doutez encore de l&rsquo;utilité, je suis tombé dernièrement sur une infographie assez sympa. D&rsquo;ailleurs, je ne pensais pas que le Google Login était autant utilisé. Cependant, ça tombe bien, le bundle que je vais vous présenter et vous aider à configurer réponds tout à fait à ce besoin aussi !

<a href="http://rkueny.fr/wp-content/uploads/2014/02/infographie-social-login-gigya.jpg" rel="lightbox[1950]"><img class="size-full wp-image-1964 aligncenter" src="http://rkueny.fr/wp-content/uploads/2014/02/infographie-social-login-gigya.jpg" alt="infographie-social-login-gigya" width="310" height="1600" /></a>

&nbsp;

### HWIOAuthBundle

<a href="http://rkueny.fr/wp-content/uploads/2014/02/598px-Oauth_logo.svg_.png" rel="lightbox[1950]"><img class="wp-image-1962 alignleft" style="margin: 10px;" src="http://rkueny.fr/wp-content/uploads/2014/02/598px-Oauth_logo.svg_.png" alt="OAuth" width="224" height="225" /></a>C&rsquo;est parti pour voir comment nous allons implémenter dans notre appli Symfony2 les différents logins. Dans cet exemple, je vais vous montrer le Facebook login. Vous ne devriez pas avoir de soucis d&rsquo;ajouter les autres par la suite. Si vous rencontrez des soucis, n&rsquo;hésitez pas à regarder le repo Github du projet ou à laisser un commentaire avec votre question.

Adresse du repo du bundle : <a title="HWIOAuthBundle Symfony2" href="https://github.com/hwi/HWIOAuthBundle" target="_blank">https://github.com/hwi/HWIOAuthBundle</a>

Les logins supportées : 37signals, **Amazon**, Bitbucket, Bitly, Box, Dailymotion, DeviantArt, **Disqus**, Dropbox, **Facebook**, Flickr, Foursquare, **GitHub**, **Google**, Instagram, JIRA, LinkedIn, Mail.ru Odnoklassniki, QQ, Salesforce, **Sensio Connect**, Sina, Weibo, Stack Exchange, Stereomood, Twitch, **Twitter**, VKontakte, Windows Live, **WordPress**, **Yahoo**, Yandex.

Autant vous dire, que vous avez l&rsquo;embarras du choix. Bien entendu, je ne vous conseille pas de tous les mettre ! Choisissez ceux adaptés à votre cible et essayez de vous limiter.

Bref, commençons. Tout d&rsquo;abord, comme d&rsquo;hab, il faut ajouter dans votre composer.json / require :

<pre>{
    "require": {
        "hwi/oauth-bundle": "0.4.*@dev"
    }
}</pre>

Une fois ceci fait, ajouter dans votre app/AppKernel.php :

<pre>public function registerBundles()
{
    $bundles = array(
        // ...
        new HWI\Bundle\OAuthBundle\HWIOAuthBundle(),
    );
}</pre>

Jusqu&rsquo;ici rien de compliqué, on est dans la démarche habituelle d&rsquo;installation d&rsquo;un nouveau bundle.

Une fois ceci fait, ajoutez la propriété facebookId à votre entité User. Puis générez les getters/setters via la console.

<pre>protected $facebookId;
</pre>

<pre>php app/console doctrine:generate:entities Acme/UserBundle/Entity/User
</pre>

Nous allons nous attaquer à la configuration  du security.yml. Rien de bien compliqué à nouveau.  
Tout d&rsquo;abord, dans votre parameters.yml ajoutez l&rsquo;id de votre application Facebook ainsi que la clé secrète.

<pre>oauth.facebook.id = "id_app"
oauth.facebook.secret = "secret_key_app"</pre>

Puis mettez à jour votre fichier de config, en ajoutant ceci :

<pre>hwi_oauth:
  firewall_name: main
  resource_owners:
    facebook:
      type: facebook
      client_id: %oauth.facebook.id%
      client_secret: %oauth.facebook.secret%
</pre>

Vous voila avec une configuration propre. Vous pouvez désormais configurer votre fichier security.yml de la sorte :``

<pre>security:
  firewalls:
    main:
      context: user
      pattern: /.*
      oauth:
        resource_owners:
          facebook: "/login/check-facebook"
        login_path: /connect
        failure_path: /connect
        oauth_user_provider:
          service: rkueny.oauth.user_provider
      logout: true
      anonymous: true</pre>

Pour le fichier complet, n&rsquo;oubliez pas de vous référer au premier billet sur [l&rsquo;installation du bundle FOSUserBundle][1].

Vous ne devriez pas avoir rencontré de problèmes jusqu&rsquo;ici. Avant de créer le service rkueny.oauth.user_provider nous allons configurer (et oui encore de la configuration !), le fichier de routing.

Il vous suffit d&rsquo;importer les routes du plugin et d&rsquo;ajouter la route Facebook configurée. Pour éviter certains bugs (d&rsquo;après la doc officielle), l&rsquo;import des routes du plugin doit être avant les votres. Ainsi nous avons dans le fichier de routing :

<pre>hwi_oauth_redirect:
    resource: "@HWIOAuthBundle/Resources/config/routing/redirect.xml"
    prefix:   /connect

facebook_login:
    pattern: /login/check-facebook
</pre>

Créons à présent le service rkueny.oauth.user_provider. Pour cela créez le fichier src/RKueny/UserBundle/UserProvider.php et mettez y ce qui suit :

<pre>&lt;?php

namespace RKUENY\UserBundle\OAuth;

use FOS\UserBundle\Model\UserInterface as FOSUserInterface;

use HWI\Bundle\OAuthBundle\OAuth\Response\UserResponseInterface;
use HWI\Bundle\OAuthBundle\Security\Core\User\FOSUBUserProvider;

use RKUENY\UserBundle\Entity\User;

use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Loading and ad-hoc creation of a user by an OAuth sign-in provider account.
 *
 * @author Fabian Kiss &lt;fabian.kiss@ymc.ch&gt;
 */
class UserProvider extends FOSUBUserProvider
{
	/**
	 * {@inheritDoc}
	 */
	public function loadUserByOAuthUserResponse(UserResponseInterface $response)
	{
		try {
			return parent::loadUserByOAuthUserResponse($response);
		} catch (UsernameNotFoundException $e) {
			if (null === $user = $this-&gt;userManager-&gt;findUserByEmail($response-&gt;getEmail())) {
				return $this-&gt;createUserByOAuthUserResponse($response);
			}

			return $this-&gt;updateUserByOAuthUserResponse($user, $response);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	public function connect(UserInterface $user, UserResponseInterface $response)
	{
		$providerName = $response-&gt;getResourceOwner()-&gt;getName();
		$uniqueId = $response-&gt;getUsername();
		$user-&gt;addOAuthAccount($providerName, $uniqueId);

		$this-&gt;userManager-&gt;updateUser($user);
	}

	/**
	 * Ad-hoc creation of user
	 *
	 * @param UserResponseInterface $response
	 *
	 * @return User
	 */
	protected function createUserByOAuthUserResponse(UserResponseInterface $response)
	{
		$user = $this-&gt;userManager-&gt;createUser();
		$this-&gt;updateUserByOAuthUserResponse($user, $response);

		// set default values taken from OAuth sign-in provider account
		if (null !== $email = $response-&gt;getEmail()) {
			$user-&gt;setEmail($email);
		}

		if (null === $this-&gt;userManager-&gt;findUserByUsername($response-&gt;getNickname())) {
			$user-&gt;setUsername($response-&gt;getNickname());
		}

		$user-&gt;setEnabled(true);

		return $user;
	}

	/**
	 * Attach OAuth sign-in provider account to existing user
	 *
	 * @param FOSUserInterface      $user
	 * @param UserResponseInterface $response
	 *
	 * @return FOSUserInterface
	 */
	protected function updateUserByOAuthUserResponse(FOSUserInterface $user, UserResponseInterface $response)
	{
		$providerName = $response-&gt;getResourceOwner()-&gt;getName();
		$providerNameSetter = 'set'.ucfirst($providerName).'Id';
		$user-&gt;$providerNameSetter($response-&gt;getUsername());

		if(!$user-&gt;getPassword()) {
			// generate unique token
			$secret = md5(uniqid(rand(), true));
			$user-&gt;setPassword($secret);
		}

		return $user;
	}
}
</pre>

Je vous conseille de vous attarder un peu sur ce fichier pour bien le comprendre et le maitriser. La seule chose &laquo;&nbsp;bizarre&nbsp;&raquo; que j&rsquo;ai réalisée est dans la méthode &laquo;&nbsp;updateUserByOAuthUserResponse&nbsp;&raquo;. C&rsquo;est lorsqu&rsquo;un utilisateur utilise le Facebook Connect je lui génère un mot de passe. Il ne l&rsquo;utilise en fait pas par la suite. Si vous voulez faire un Facebook Connect qui ne remplit que les infos il ne faudra bien sûr pas faire comme cela.

Après la création de ce fichier, il vous faut le déclarer comme service. Ce n&rsquo;est pas compliqué à faire, il y a plusieurs façons voici la mienne, dans le fichier src/RKueny/UserBundle/Resources/config/services.xml :

<pre>&lt;?xml version="1.0" encoding="UTF-8"?&gt;

&lt;container xmlns="http://symfony.com/schema/dic/services"
           xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
           xsi:schemaLocation="http://symfony.com/schema/dic/services
                               http://symfony.com/schema/dic/services/services-1.0.xsd"&gt;

    &lt;parameters&gt;
        &lt;parameter key="rkueny.oauth.user_provider.class"&gt;RKueny\UserBundle\OAuth\UserProvider&lt;/parameter&gt;
    &lt;/parameters&gt;

    &lt;services&gt;
        &lt;service id="rkueny.oauth.user_provider" class="%rkueny.oauth.user_provider.class%"&gt;
            &lt;argument type="service" id="fos_user.user_manager" /&gt;
            &lt;argument type="collection"&gt;
                &lt;argument key="facebook"&gt;facebookId&lt;/argument&gt;
            &lt;/argument&gt;
        &lt;/service&gt;
    &lt;/services&gt;

&lt;/container&gt;</pre>

Nous avons fini ici la configuration du plugin. Vous pouvez ajouter les logins à votre site via le render du plugin :

<pre><span class="cp">{{</span> <span class="nv">render</span><span class="o">(</span><span class="nv">url</span><span class="o">(</span><span class="s1">'hwi_oauth_connect'</span><span class="o">))</span> <span class="cp">}}</span></pre>

En ajoutant bien entendu la route qui va bien avec :

<pre>hwi_oauth_login:
  resource: "@HWIOAuthBundle/Resources/config/routing.login.xml
  prefix: /login</pre>

Vous avez désormais un site acceptant les logins de différents services <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> N&rsquo;hésitez pas si vous avez des questions, je suis peut être passé trop vite sur certains points.

&nbsp;

 [1]: http://rkueny.fr/developpement-web/integrer-facilement-facebook-connect-et-twitter-connect-avec-fosuserbundle-pour-symfony-2-1 "Intégrer facilement Facebook Connect et Twitter Connect avec FosUserBundle pour Symfony 2.1"
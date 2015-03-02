---
title: Intégrer facilement Facebook Connect et Twitter Connect avec FosUserBundle pour Symfony 2.1
author: R.Kueny
layout: post
permalink: /developpement-web/integrer-facilement-facebook-connect-et-twitter-connect-avec-fosuserbundle-pour-symfony-2-1
categories:
  - Développement Web
tags:
  - bundle
  - facebook
  - facebook connect
  - fosFacebookBundle
  - fosTwitterBundle
  - fosUserBundle
  - framework
  - php
  - symfony
  - symfony2
  - twitter
  - twitter connect
---
> Avertissement : Cet article estime que vous savez travailler avec Symfony2, que vous savez récupérer vos clés d&rsquo;API pour Twitter et Facebook qui seront nécessaires lors de la configuration.
> 
> De plus, j&rsquo;utiliserai uniquement Doctrine lors de ce tutoriel. La version de Symfony est la 2.1.

## Configurer FosUserBundle

Comme à chaque fois que l&rsquo;on veut installer un nouveau Bundle, il vous faut l&rsquo;ajouter dans votre composer.json.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">{
    "require": {
        "friendsofsymfony/user-bundle": "*"
    }
}</pre>
      </td>
    </tr>
  </table>
</div>

Une fois cette ligne ajoutée, vous pouvez faire tourner votre composer.phar pour télécharger le bundle. Dans votre terminal :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="terminal" style="font-family:monospace;">$ php composer.phar update friendsofsymfony/user-bundle</pre>
      </td>
    </tr>
  </table>
</div>

<!--more-->

Ca y est, vous voila avec le bundle &laquo;&nbsp;FosUserBundle&nbsp;&raquo; dans votre dossier vendor/.

Une fois ceci effectué, il vous faut l&rsquo;enregistrer dasn votre AppKernel.php. Pour cela :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php
<span style="color: #666666; font-style: italic;">// app/AppKernel.php</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> registerBundles<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
<span style="color: #009900;">&#123;</span>
    <span style="color: #000088;">$bundles</span> <span style="color: #339933;">=</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
        <span style="color: #666666; font-style: italic;">// ...</span>
        <span style="color: #000000; font-weight: bold;">new</span> FOS\UserBundle\FOSUserBundle<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>
    <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Vous suivez toujours ? Jusqu&rsquo;ici rien de bien compliqué normalement. C&rsquo;est la façon habituelle de commencer à installer les bundles que vous pouvez utiliser avec Symfony2. Maintenant passons à la configuration du-dit bundle.

Je redis que cet article vous guide pour installer les 3 bundles en utilisant l&rsquo;ORM Doctrine. Ainsi, il vous suffit d&rsquo;ajouter ces quelques lignes dans votre config.yml

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;"># app/config/config.yml
fos_user:
    db_driver: orm
    firewall_name: main
    user_class: Your\UserBundle\Entity\User</pre>
      </td>
    </tr>
  </table>
</div>

Si vous suivez, vous vous rendez compte que l&rsquo;on définie ici une nouvelle entité User. En effet, il va vous falloir la créer. Et cela est à nouveau très simple, suivez le guide !

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php
<span style="color: #666666; font-style: italic;">// src/Your/UserBundle/Entity/User.php</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">namespace</span> Your\UserBundle\Entity<span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">use</span> FOS\UserBundle\Entity\User <span style="color: #b1b100;">as</span> BaseUser<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Doctrine\ORM\Mapping <span style="color: #b1b100;">as</span> ORM<span style="color: #339933;">;</span>
&nbsp;
<span style="color: #009933; font-style: italic;">/**
 * @ORM\Entity
 * @ORM\Table(name="user")
 */</span>
<span style="color: #000000; font-weight: bold;">class</span> User <span style="color: #000000; font-weight: bold;">extends</span> BaseUser
<span style="color: #009900;">&#123;</span>
    <span style="color: #009933; font-style: italic;">/**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$id</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> __construct<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        parent<span style="color: #339933;">::</span>__construct<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

<p style="padding-left: 30px;">
  <em>Attention : vous devez préciser un @ORM\Table(name=&nbsp;&raquo;user&nbsp;&raquo;) car le nom &laquo;&nbsp;User&nbsp;&raquo; est un mot-clé reservé par SQL et ne peut dont être utilisé comme nom de table.</em>
</p>

C&rsquo;est dans cet entité que vous pourrez rajouter de nouveau champ à votre entité User.

Allez l&rsquo;installation de ce premier bundle est bientôt terminé. Encore un peu de configuration et de ligne de commandes et nous y sommes.

Il vous faut encore importer les routes par défaut utilisées par FosUserBundle.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;"># app/config/routing.yml
fos_user_security:
    resource: "@FOSUserBundle/Resources/config/routing/security.xml"
&nbsp;
fos_user_profile:
    resource: "@FOSUserBundle/Resources/config/routing/profile.xml"
    prefix: /profile
&nbsp;
fos_user_register:
    resource: "@FOSUserBundle/Resources/config/routing/registration.xml"
    prefix: /register
&nbsp;
fos_user_resetting:
    resource: "@FOSUserBundle/Resources/config/routing/resetting.xml"
    prefix: /resetting
&nbsp;
fos_user_change_password:
    resource: "@FOSUserBundle/Resources/config/routing/change_password.xml"
    prefix: /profile</pre>
      </td>
    </tr>
  </table>
</div>

Ceci fait, configurons le security.yml de notre application.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;"># app/config/security.yml
security:
    encoders:
        FOS\UserBundle\Model\UserInterface: sha512
&nbsp;
    role_hierarchy:
        ROLE_ADMIN:       ROLE_USER
        ROLE_SUPER_ADMIN: ROLE_ADMIN
&nbsp;
    providers:
        fos_userbundle:
            id: fos_user.user_provider.username
&nbsp;
    firewalls:
        main:
            pattern: ^/
            form_login:
                provider: fos_userbundle
                csrf_provider: form.csrf_provider
            logout:       true
            anonymous:    true
&nbsp;
    access_control:
        - { path: ^/login$, role: IS_AUTHENTICATED_ANONYMOUSLY }
        - { path: ^/register, role: IS_AUTHENTICATED_ANONYMOUSLY }
        - { path: ^/resetting, role: IS_AUTHENTICATED_ANONYMOUSLY }
        - { path: ^/admin/, role: ROLE_ADMIN }</pre>
      </td>
    </tr>
  </table>
</div>

La partie acces_control est largement modulable par vous. Cela vous évitant de vérifier si votre utilisateur est bien identifié dans vos controlers. Le contrôle se fait directement par le path, un gain de temps et de lisibilité assez appréciable, n&rsquo;est ce pas ?

La partie role\_hierarchy vous permet d&rsquo;établir l&rsquo;ordre d&rsquo;importances des différents rôles pour les utilisateurs. Ici les droits de ROLE\_ADMIN contiennent les droits de ROLE\_USER en plus des siens, et ROLE\_SUPER\_ADMIN contient les droit détenus par ROLE\_ADMIN et donc ROLE_USER.

Nous retoucherons pas mal ces fichiers pour intégrer les connexion Facebook et Twitter.

Pour finir l&rsquo;installation et la configuration de ce premier bundle, mettons à jour la base de donnée.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="terminal" style="font-family:monospace;">$ php app/console doctrine:schema:update --force</pre>
      </td>
    </tr>
  </table>
</div>

Voilà, tout est ok ! Pour en savoir plus sur la configuration vous pouvez lire <a title="Readme " href="https://github.com/FriendsOfSymfony/FOSUserBundle/blob/master/Resources/doc/index.md" target="_blank">le readme [en]</a>, <a title="Overriding template" href="https://github.com/FriendsOfSymfony/FOSUserBundle/blob/master/Resources/doc/overriding_templates.md" target="_blank">pour la partie template [en]</a> [billet en cours de rédaction sur ce blog aussi]

&nbsp;

> ATTENTION : Cet article commence à être assez vieux. Un article mis à jour et utilisant un autre bundle est en cours de rédaction. Vous pouvez suivre celui-ci, mais certaines informations peuvent être erronées.

&nbsp;

## Configurer FosFacebookBundle

Attaquons nous désormais à l&rsquo;intégration du bundle permettant le Facebook Connect. Comme je le disais plus haut, je ne décrirai pas ici la configuration du côté de Facebook. Vous avez juste besoin de l&rsquo;id de votre application, et de votre clé secrète pour configurer le bundle.

On ajoute donc le bundle au composer.json puis on le rapatrie dans notre dossier /vendor comme pour le précédent bundle

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">{
    "require": {
         "friendsofsymfony/facebook-bundle": "1.1.*"
    }
}</pre>
      </td>
    </tr>
  </table>
</div>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="terminal" style="font-family:monospace;">$ php composer.phar update friendsofsymfony/facebook-bundle</pre>
      </td>
    </tr>
  </table>
</div>

On l&rsquo;ajoute à notre AppKernel. Oui comme tout à l&rsquo;heure si vous suivez bien.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> registerBundles<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
<span style="color: #009900;">&#123;</span>
    <span style="color: #b1b100;">return</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
        <span style="color: #666666; font-style: italic;">// ...</span>
        <span style="color: #000000; font-weight: bold;">new</span> FOS\FacebookBundle\FOSFacebookBundle<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>
        <span style="color: #666666; font-style: italic;">// ...</span>
    <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Une fois ceci fait, on ajoute les routes spécifiques à notre Facebook Connect.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">_security_check:
    pattern:  /fb/login_check
_security_logout:
    pattern:  /fb/logout
_facebook_secured:
    pattern: /secured/</pre>
      </td>
    </tr>
  </table>
</div>

Une chose de moins à faire. Ici, la documentation officielle propose de mettre votre appId et votre secret key Facebook directement dans votre fichier de config. Pour ma part, je mets celles-ci ainsi que les permissions et la langue dans le fichier parameters.ini. Vous pouvez faire comme vous voulez bien entendu. Ce qui donne :

Fichier config.yml

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">fos_facebook:
   file:   %kernel.root_dir%/../vendor/facebook/src/base_facebook.php
   alias:  facebook
   app_id: %app_id%
   secret: %secret%
   cookie: true
   permissions: [%permissions%]
   culture: %facebook_culture%</pre>
      </td>
    </tr>
  </table>
</div>

Fichier parameters.ini

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">   ; Facebook
   app_id                 = id_de_l_application_facebook
   secret                  = clé_secrète_de_l_application_facebook
   permissions         = email
   facebook_culture = fr_FR</pre>
      </td>
    </tr>
  </table>
</div>

Une fois ces fichiers configurés, passons au fichier security.yml. Il y a pas mal de choses à rajouter je dois dire. Voici à quoi il devrait correspondre désormais

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">security:
    providers:
        fos_userbundle:
            id: fos_user.user_provider.username
        my_fos_facebook_provider:
            id: my.facebook.user
&nbsp;
    encoders:
        FOS\UserBundle\Model\UserInterface: sha512
&nbsp;
    firewalls:
        main:
            pattern:      ^/
            fos_facebook:
                app_url: ""
                server_url: "http://your_url.dev"
                login_path: /fb/login
                check_path: /fb/login_check
                default_target_path: /
                provider: my_fos_facebook_provider
            form_login:
                login_path: /login
                check_path: /login_check
                provider: fos_userbundle
            logout:
                path: /logout
                anonymous: true
&nbsp;
    access_control:
        - { path: ^/login$, role: IS_AUTHENTICATED_ANONYMOUSLY }
        - { path: ^/register, role: IS_AUTHENTICATED_ANONYMOUSLY }
        - { path: ^/resetting, role: IS_AUTHENTICATED_ANONYMOUSLY }
&nbsp;
        # FOS facebook
        - { path: ^/secured/.*, role: [IS_AUTHENTICATED_FULLY] }
        - { path: ^/login_check, role: IS_AUTHENTICATED_ANONYMOUSLY }
        - { path: ^/.*, role: [IS_AUTHENTICATED_ANONYMOUSLY] }
&nbsp;
    role_hierarchy:
        ROLE_ADMIN:       ROLE_USER
       ROLE_SUPER_ADMIN: ROLE_ADMIN
&nbsp;
    services:
        my.facebook.user:
             class: Your\UserBundle\Security\User\Provider\FacebookProvider
             arguments:
                 facebook: "@fos_facebook.api"
                 userManager: "@fos_user.user_manager"
                 validator: "@validator"
                 container: "@service_container"</pre>
      </td>
    </tr>
  </table>
</div>

Cela fait beaucoup d&rsquo;infos d&rsquo;un coup mais on ne va s&rsquo;attarder que sur le dernier point qui nous concerne directement pour la suite de la configuration pour la bonne marche du bundle. Vous voyez que l&rsquo;on renseigne un chemin vers un Provider qui &#8230; n&rsquo;existe pas encore <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Remédions à cela immédiatement !

Ajouter donc un fichier au chemin suivant : Your\UserBundle\Security\User\Provider\FacebookProvider

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php
&nbsp;
<span style="color: #000000; font-weight: bold;">namespace</span> Your\MyBundle\Security\User\Provider<span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\Security\Core\Exception\UsernameNotFoundException<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\Security\Core\Exception\UnsupportedUserException<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\Security\Core\User\UserProviderInterface<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\Security\Core\User\UserInterface<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> \BaseFacebook<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> \FacebookApiException<span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">class</span> FacebookProvider implements UserProviderInterface
<span style="color: #009900;">&#123;</span>
    <span style="color: #009933; font-style: italic;">/**
     * @var \Facebook
     */</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$facebook</span><span style="color: #339933;">;</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$userManager</span><span style="color: #339933;">;</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$validator</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> __construct<span style="color: #009900;">&#40;</span>BaseFacebook <span style="color: #000088;">$facebook</span><span style="color: #339933;">,</span> <span style="color: #000088;">$userManager</span><span style="color: #339933;">,</span> <span style="color: #000088;">$validator</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>facebook <span style="color: #339933;">=</span> <span style="color: #000088;">$facebook</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager <span style="color: #339933;">=</span> <span style="color: #000088;">$userManager</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>validator <span style="color: #339933;">=</span> <span style="color: #000088;">$validator</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> supportsClass<span style="color: #009900;">&#40;</span><span style="color: #000088;">$class</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>supportsClass<span style="color: #009900;">&#40;</span><span style="color: #000088;">$class</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> findUserByFbId<span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbId</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>findUserBy<span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'facebookId'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #000088;">$fbId</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> loadUserByUsername<span style="color: #009900;">&#40;</span><span style="color: #000088;">$username</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #000088;">$user</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>findUserByFbId<span style="color: #009900;">&#40;</span><span style="color: #000088;">$username</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
        try <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$fbdata</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>facebook<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>api<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'/me'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span> catch <span style="color: #009900;">&#40;</span>FacebookApiException <span style="color: #000088;">$e</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$fbdata</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">null</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
                <span style="color: #000088;">$user</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>createUser<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setEnabled<span style="color: #009900;">&#40;</span><span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setPassword<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
            <span style="color: #009900;">&#125;</span>
&nbsp;
            <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setFBData<span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
            <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">count</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>validator<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;;</span>validate<span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'Facebook'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
                <span style="color: #b1b100;">throw</span> <span style="color: #000000; font-weight: bold;">new</span> UsernameNotFoundException<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'The facebook user could not be stored'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
            <span style="color: #009900;">&#125;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>updateUser<span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #b1b100;">throw</span> <span style="color: #000000; font-weight: bold;">new</span> UsernameNotFoundException<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'The user is not authenticated on facebook'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$user</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> refreshUser<span style="color: #009900;">&#40;</span>UserInterface <span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>supportsClass<span style="color: #009900;">&#40;</span><span style="color: #990000;">get_class</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">||</span> <span style="color: #339933;">!</span><span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>getFacebookId<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #b1b100;">throw</span> <span style="color: #000000; font-weight: bold;">new</span> UnsupportedUserException<span style="color: #009900;">&#40;</span><span style="color: #990000;">sprintf</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Instances of "%s" are not supported.'</span><span style="color: #339933;">,</span> <span style="color: #990000;">get_class</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>loadUserByUsername<span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>getFacebookId<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Si vous avez un peu analysé ce fichier, vous vous rendrez compte qu&rsquo;il va vous falloir ajouter des propriétés à votre entité User. Elle devrait ressembler à quelque chose dans le genre désormais :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&lt;</span>code<span style="color: #339933;">&gt;&</span>lt<span style="color: #339933;">;</span>?php
&nbsp;
<span style="color: #000000; font-weight: bold;">namespace</span> Acme\MyBundle\Entity<span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">use</span> FOS\UserBundle\Entity\User <span style="color: #b1b100;">as</span> BaseUser<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Doctrine\ORM\Mapping <span style="color: #b1b100;">as</span> ORM<span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">class</span> User <span style="color: #000000; font-weight: bold;">extends</span> BaseUser
<span style="color: #009900;">&#123;</span>
    <span style="color: #009933; font-style: italic;">/**
     * @var string
     *
     * @ORM\Column(name="firstname", type="string", length=255)
     */</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$firstname</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * @var string
     *
     * @ORM\Column(name="lastname", type="string", length=255)
     */</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$lastname</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * @var string
     *
     * @ORM\Column(name="facebookId", type="string", length=255)
     */</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$facebookId</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> <span style="color: #990000;">serialize</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">return</span> <span style="color: #990000;">serialize</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>facebookId<span style="color: #339933;">,</span> parent<span style="color: #339933;">::</span><span style="color: #990000;">serialize</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> <span style="color: #990000;">unserialize</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #990000;">list</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>facebookId<span style="color: #339933;">,</span> <span style="color: #000088;">$parentData</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">=</span> <span style="color: #990000;">unserialize</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$data</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        parent<span style="color: #339933;">::</span><span style="color: #990000;">unserialize</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$parentData</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * @return string
     */</span>
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> getFirstname<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>firstname<span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * @param string $firstname
     */</span>
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> setFirstname<span style="color: #009900;">&#40;</span><span style="color: #000088;">$firstname</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>firstname <span style="color: #339933;">=</span> <span style="color: #000088;">$firstname</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * @return string
     */</span>
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> getLastname<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>lastname<span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * @param string $lastname
     */</span>
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> setLastname<span style="color: #009900;">&#40;</span><span style="color: #000088;">$lastname</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>lastname <span style="color: #339933;">=</span> <span style="color: #000088;">$lastname</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * Get the full name of the user (first + last name)
     * @return string
     */</span>
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> getFullName<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>getFirstname<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">.</span> <span style="color: #0000ff;">' '</span> <span style="color: #339933;">.</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>getLastname<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * @param string $facebookId
     * @return void
     */</span>
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> setFacebookId<span style="color: #009900;">&#40;</span><span style="color: #000088;">$facebookId</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>facebookId <span style="color: #339933;">=</span> <span style="color: #000088;">$facebookId</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setUsername<span style="color: #009900;">&#40;</span><span style="color: #000088;">$facebookId</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>salt <span style="color: #339933;">=</span> <span style="color: #0000ff;">''</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * @return string
     */</span>
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> getFacebookId<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>facebookId<span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #009933; font-style: italic;">/**
     * @param Array
     */</span>
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> setFBData<span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'id'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;;</span>setFacebookId<span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'id'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>addRole<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'ROLE_FACEBOOK'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'first_name'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setFirstname<span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'first_name'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'last_name'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setLastname<span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'last_name'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setEmail<span style="color: #009900;">&#40;</span><span style="color: #000088;">$fbdata</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'email'</span><span style="color: #009900;">&#93;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
    <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span><span style="color: #339933;">&lt;/</span>code<span style="color: #339933;">&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

Vous pouvez modifier la méthode &lsquo;setFBData&rsquo; selon comment vous voulez que cela fonctionne. Par exemple, à ce moment là même si l&rsquo;utilisateur change son email ou son pseudo, à chaque connexion Facebook il reviendra à celui de Facebook. A vous de voir si c&rsquo;est le fonctionnement que vous désirez &#8230; ou pas.

En ce qui concerne l&rsquo;intégration dans vos templates, c&rsquo;est une nouvelle fois assez simple

<div id="fb-root">
</div>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">\{\{ facebook_initialize({'xfbml': true, 'fbAsyncInit': 'onFbInit();'}) }}&lt;script type="text/javascript"&gt;// &lt;![CDATA[
function goLogIn(){
      window.location.href="{{path('_security_check')}}";
   }
   function onFbInit(){
      if(typeof(FB)!='undefined' &#038;&#038; FB!=null ) {
         FB.Event.subscribe('auth.statusChange', function(response){
            if(response.session||response.authResponse){
               goLogIn();
            }else{
               window.location.href="{{ path('_security_logout') }}";
            }
         });
      }
   }
   function fblogin(){
      FB.login(function(response){},{scope:'email'});
   }
// ]]&gt;&lt;/script&gt;</pre>
      </td>
    </tr>
  </table>
</div>

Il vous suffira d’appeler la fonction fblogin() pour déclencher le tout <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" /> Vous voilà désormais avec une connexion via Facebook opérationnel.

N&rsquo;hésitez pas à explorer les fichiers, à les modifier pour bien comprendre leur fonctionnement si vous avez des doutes sur certains passages. Certes, vous déléguez votre développement à des bundles tierces mais il vous faut aussi quelque peu les maitriser pour bien les intégrer et en tirer tout la puissance. Ceci est valable pour les bundles Symfony2, mais aussi pour les librairies ou les scripts que vous utilisez. N&rsquo;oubliez pas que le copier-coller est quand même l&rsquo;ennemi du développeur !

## Configurer FosTwitterBundle

Attaquons nous désormais à installation du bundle pour permettre la connexion à votre application avec Twitter. Avouez que se serait bête de s&rsquo;arrêter là non ?

Si vous lisez l&rsquo;article depuis le début vous pourriez même l&rsquo;écrire vous même cette première partie non ? On ajoute au composer.json, on le rapatrie et on l&rsquo;ajoute au Kernel.

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">{
    "require": {
        "friendsofsymfony/twitter-bundle": "*"
    }
}</pre>
      </td>
    </tr>
  </table>
</div>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="terminal" style="font-family:monospace;">$ php composer.phar update friendsofsymfony/twitter-bundle</pre>
      </td>
    </tr>
  </table>
</div>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> registerBundles<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
  <span style="color: #009900;">&#123;</span>
      <span style="color: #b1b100;">return</span> <span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span>
          <span style="color: #666666; font-style: italic;">// ...</span>
          <span style="color: #000000; font-weight: bold;">new</span> FOS\TwitterBundle\FOSTwitterBundle<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span>
          <span style="color: #666666; font-style: italic;">// ...</span>
      <span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
  <span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Une fois ceci fait, passons au fichier config.yml. Comme je l&rsquo;ai fait pour le bundle Facebook la consumer key, et la consumer secret sont à mettre dans le parameters.ini

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">fos_twitter:
        file: %kernel.root_dir%/../vendor/twitteroauth/twitteroauth/twitteroauth.php
        consumer_key: %twitter_key%
        consumer_secret: %twitter_secret%
        callback_url: http://votre_site.dev/twitter/login_check # à renseigner dans votre appli twitter aussi</pre>
      </td>
    </tr>
  </table>
</div>

Dans votre fichier security.yml, il vous faut ajouter les lignes pour twitter. Vous verrez, cela est très semblable au bundle pour Facebook

Dans la partie providers :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">my_fos_twitter_provider:
    id: my.twitter.user</pre>
      </td>
    </tr>
  </table>
</div>

Dans la partie firewalls &#8211; main :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">fos_twitter:
    login_path: /twitter/login
    check_path: /twitter/login_check
    default_target_path: /
    provider: my_fos_twitter_provider</pre>
      </td>
    </tr>
  </table>
</div>

Dans la partie services :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="yml" style="font-family:monospace;">my.twitter.user:
        class: Your\MainBundle\Security\User\Provider\TwitterProvider
        arguments:
            twitter_oauth: "@fos_twitter.api"
            userManager: "@fos_user.user_manager"
            validator: "@validator"
            session: "@session"
    ajax_success_handler:
        class: FOS\TwitterBundle\Security\AjaxSuccessHandler
    ajax_failure_handler:
        class: FOS\TwitterBundle\Security\AjaxFailureHandler</pre>
      </td>
    </tr>
  </table>
</div>

Une nouvelle fois, vous aurez noté l’apparition d&rsquo;un nouveau provider. Le voici :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php
&nbsp;
<span style="color: #000000; font-weight: bold;">namespace</span> Your\YourBundle\Security\User\Provider<span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\Security\Core\Exception\UsernameNotFoundException<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\Security\Core\Exception\UnsupportedUserException<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\Security\Core\User\UserProviderInterface<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\Security\Core\User\UserInterface<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\HttpFoundation\Session<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> \TwitterOAuth<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> FOS\UserBundle\Entity\UserManager<span style="color: #339933;">;</span>
<span style="color: #000000; font-weight: bold;">use</span> Symfony\Component\Validator\Validator<span style="color: #339933;">;</span>
&nbsp;
<span style="color: #000000; font-weight: bold;">class</span> TwitterUserProvider implements UserProviderInterface
<span style="color: #009900;">&#123;</span>
    <span style="color: #009933; font-style: italic;">/** 
     * @var \Twitter
     */</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$twitter_oauth</span><span style="color: #339933;">;</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$userManager</span><span style="color: #339933;">;</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$validator</span><span style="color: #339933;">;</span>
    <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$session</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> __construct<span style="color: #009900;">&#40;</span>TwitterOAuth <span style="color: #000088;">$twitter_oauth</span><span style="color: #339933;">,</span> UserManager <span style="color: #000088;">$userManager</span><span style="color: #339933;">,</span>Validator <span style="color: #000088;">$validator</span><span style="color: #339933;">,</span> Session <span style="color: #000088;">$session</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>   
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>twitter_oauth <span style="color: #339933;">=</span> <span style="color: #000088;">$twitter_oauth</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager <span style="color: #339933;">=</span> <span style="color: #000088;">$userManager</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>validator <span style="color: #339933;">=</span> <span style="color: #000088;">$validator</span><span style="color: #339933;">;</span>
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>session <span style="color: #339933;">=</span> <span style="color: #000088;">$session</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>   
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> supportsClass<span style="color: #009900;">&#40;</span><span style="color: #000088;">$class</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>   
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>supportsClass<span style="color: #009900;">&#40;</span><span style="color: #000088;">$class</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>   
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> findUserByTwitterId<span style="color: #009900;">&#40;</span><span style="color: #000088;">$twitterID</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>   
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>findUserBy<span style="color: #009900;">&#40;</span><span style="color: #990000;">array</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'twitterID'</span> <span style="color: #339933;">=&</span>gt<span style="color: #339933;">;</span> <span style="color: #000088;">$twitterID</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>   
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> loadUserByUsername<span style="color: #009900;">&#40;</span><span style="color: #000088;">$username</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #000088;">$user</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>findUserByTwitterId<span style="color: #009900;">&#40;</span><span style="color: #000088;">$username</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>twitter_oauth<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setOAuthToken<span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>session<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>get<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'access_token'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">,</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>session<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>get<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'access_token_secret'</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
        try <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$info</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>twitter_oauth<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>get<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'account/verify_credentials'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span> catch <span style="color: #009900;">&#40;</span>Exception <span style="color: #000088;">$e</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$info</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">null</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$info</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
                <span style="color: #000088;">$user</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>createUser<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setEnabled<span style="color: #009900;">&#40;</span><span style="color: #009900; font-weight: bold;">true</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setPassword<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setAlgorithm<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
            <span style="color: #009900;">&#125;</span>
&nbsp;
            <span style="color: #000088;">$username</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$info</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>screen_name<span style="color: #339933;">;</span>
&nbsp;
            <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setTwitterID<span style="color: #009900;">&#40;</span><span style="color: #000088;">$info</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>id<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
            <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setTwitterUsername<span style="color: #009900;">&#40;</span><span style="color: #000088;">$username</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
            <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setEmail<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
            <span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setFirstname<span style="color: #009900;">&#40;</span><span style="color: #000088;">$info</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>name<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>userManager<span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>updateUser<span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #990000;">empty</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #b1b100;">throw</span> <span style="color: #000000; font-weight: bold;">new</span> UsernameNotFoundException<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'The user is not authenticated on twitter'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$user</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
&nbsp;
    <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> refreshUser<span style="color: #009900;">&#40;</span>UserInterface <span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span>
    <span style="color: #009900;">&#123;</span>
        <span style="color: #b1b100;">if</span> <span style="color: #009900;">&#40;</span><span style="color: #339933;">!</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>supportsClass<span style="color: #009900;">&#40;</span><span style="color: #990000;">get_class</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">||</span> <span style="color: #339933;">!</span><span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>getTwitterID<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #b1b100;">throw</span> <span style="color: #000000; font-weight: bold;">new</span> UnsupportedUserException<span style="color: #009900;">&#40;</span><span style="color: #990000;">sprintf</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'Instances of "%s" are not supported.'</span><span style="color: #339933;">,</span> <span style="color: #990000;">get_class</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>loadUserByUsername<span style="color: #009900;">&#40;</span><span style="color: #000088;">$user</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>getTwitterID<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Il vous faudra aussi ajouter certaines chose à votre entité User :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php
&nbsp;
        <span style="color: #009933; font-style: italic;">/** 
         * @var string
         */</span>
        <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$twitterID</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #009933; font-style: italic;">/** 
         * @var string
         */</span>
        <span style="color: #000000; font-weight: bold;">protected</span> <span style="color: #000088;">$twitter_username</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #009933; font-style: italic;">/**
         * Set twitterID
         *
         * @param string $twitterID
         */</span>
        <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> setTwitterID<span style="color: #009900;">&#40;</span><span style="color: #000088;">$twitterID</span><span style="color: #009900;">&#41;</span>
        <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>twitterID <span style="color: #339933;">=</span> <span style="color: #000088;">$twitterID</span><span style="color: #339933;">;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>setUsername<span style="color: #009900;">&#40;</span><span style="color: #000088;">$twitterID</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>salt <span style="color: #339933;">=</span> <span style="color: #0000ff;">''</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #009933; font-style: italic;">/**
         * Get twitterID
         *
         * @return string 
         */</span>
        <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> getTwitterID<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
        <span style="color: #009900;">&#123;</span>
            <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>twitterID<span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #009933; font-style: italic;">/**
         * Set twitter_username
         *
         * @param string $twitterUsername
         */</span>
        <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> setTwitterUsername<span style="color: #009900;">&#40;</span><span style="color: #000088;">$twitterUsername</span><span style="color: #009900;">&#41;</span>
        <span style="color: #009900;">&#123;</span>
            <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>twitter_username <span style="color: #339933;">=</span> <span style="color: #000088;">$twitterUsername</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
&nbsp;
        <span style="color: #009933; font-style: italic;">/**
         * Get twitter_username
         *
         * @return string 
         */</span>
        <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> getTwitterUsername<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
        <span style="color: #009900;">&#123;</span>
            <span style="color: #b1b100;">return</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>twitter_username<span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Enfin dans le controller de votre choix :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span>?php
&nbsp;
        <span style="color: #009933; font-style: italic;">/** 
        * @Route("/connectTwitter", name="connect_twitter")
        *
        */</span>
        <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> connectTwitterAction<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span>
        <span style="color: #009900;">&#123;</span>   
&nbsp;
          <span style="color: #000088;">$request</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>get<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'request'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
          <span style="color: #000088;">$twitter</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>get<span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'fos_twitter.service'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
          <span style="color: #000088;">$authURL</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$twitter</span><span style="color: #339933;">-</span>∂<span style="color: #339933;">&</span>gt<span style="color: #339933;">;</span>getLoginUrl<span style="color: #009900;">&#40;</span><span style="color: #000088;">$request</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
          <span style="color: #000088;">$response</span> <span style="color: #339933;">=</span> <span style="color: #000000; font-weight: bold;">new</span> RedirectResponse<span style="color: #009900;">&#40;</span><span style="color: #000088;">$authURL</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
          <span style="color: #b1b100;">return</span> <span style="color: #000088;">$response</span><span style="color: #339933;">;</span>
&nbsp;
        <span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Cela vous permettant de faire facilement dans vos templates :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html" style="font-family:monospace;">&lt;a href="{{ path ('connect_twitter')}}"&gt;Twitter Connect&lt;/a&gt;</pre>
      </td>
    </tr>
  </table>
</div>

&nbsp;

## Conclusion

Nous venons ainsi de voir comment intégrer ces 3 bundles. J&rsquo;espère que cet article vous a bien aidé. Si vous rencontrez des soucis, n&rsquo;hésitez pas à laisser un commentaire. De l&rsquo;aide vous sera apportée. Je me répète, mais cet article est une base. Pour approfondir, consultez la doc de ces 3 bundles (dispo sur Github), faites des essais, cassez tout et vous comprendrez bien mieux comment cela marche !

&nbsp;
---
title: Créer le compte développeur, sa première application et la configurer
author: R.Kueny
layout: post
permalink: /developpement-web/creer-le-compte-developpeur-sa-premiere-application-et-la-configurer
categories:
  - Développement Web
  - Facebook
---
Nous voici donc pour le 2ème article sur la création des applications Facebook. Si vous n&rsquo;avez pas lu le premier article, vous pouvez le retrouver ici : &laquo;&nbsp;<a title="Débuter avec les applications Facebook" href="http://rkueny.fr/developpement-web/facebook-developpement-web/debuter-avec-les-applications-facebook" target="_blank">Débuter avec les applications Facebook</a>&laquo;&nbsp;.

Nous allons donc aborder aujourd&rsquo;hui la création de son compte développeur, la création de sa première application et les premières étapes de configuration.

  * <a title="Débuter avec les applications Facebook" href="http://rkueny.fr/developpement-web/facebook-developpement-web/debuter-avec-les-applications-facebook" target="_blank">Les différentes applications Facebook</a>
  * **Compte développeur et création de son application**
  * A la découverte des différentes sdk et de la Graph API
  * Application Canvas : &laquo;&nbsp;Devine le secret de tes amis !&nbsp;&raquo;
  * Application Onglet : &laquo;&nbsp;Un petit jeu concours&nbsp;&raquo;
  * La puissance de Facebook hors de la plateforme &#8211; Plugins Facebook
  * Héberger son application Facebook avec Heroku
  * Open Graph, liez vos utilisateurs et engrangez de la visibilité
  * Astuces de développement en veux-tu ? En voilà

<!--more-->

## Création de son compte développeur

Pour développer une application Facebook vous devez, bien sûr, avoir un compte Facebook. Nous allons voir ici comment l&rsquo;assigner en tant que compte développeur et ainsi pouvoir accéder à la création d&rsquo;application.

Tout d&rsquo;abord rendez-vous à l&rsquo;url suivante :<a title="Developper Apps" href=" https://developers.facebook.com/apps" target="_blank"> https://developers.facebook.com/apps</a>

<p style="text-align: center;">
  <img class="aligncenter" alt="" src="http://rkueny.fr/wp-content/uploads/2012/10/Capture-d’écran-2012-10-14-à-15.14.28.png" width="421" height="332" />
</p>

Cliquez sur le bouton &laquo;&nbsp;Register as a Developer&nbsp;&raquo;. Une pop-up va apparaitre vous demandant (si vous ne l&rsquo;avez encore jamais fait) de vérifier votre compte. Cliquez sur &laquo;&nbsp;validez votre compte&nbsp;&raquo;, entrez votre numéro de téléphone, validez le compte et revenez à cette étape.

<p style="text-align: center;">
  <img class="aligncenter" alt="" src="http://rkueny.fr/wp-content/uploads/2012/10/Capture-d’écran-2012-10-14-à-15.14.46.png" width="490" height="188" />
</p>

&nbsp;

Une fois votre compte validé, continuez les 3 étapes en renseignant les champs demandés.

<p style="text-align: center;">
  <img class="aligncenter" alt="" src="http://rkueny.fr/wp-content/uploads/2012/10/Capture-d’écran-2012-10-14-à-15.16.14.png" width="563" height="246" />
</p>

Et voilà, vous êtes un développeur Facebook ! Enfin &#8230; vous en avez le titre quoi !

## Créer et configurer sa première application Facebook

Ça y est vous avez votre compte développeur. Nous allons donc pouvoir créer une application et surtout la configurer. Nous nous attardons sur les différents champs bien que nous y reviendrons tout au long des articles.

Retournez sur l&rsquo;url de départ : <a title="Developper Apps" href=" https://developers.facebook.com/apps" target="_blank">https://developers.facebook.com/apps</a> et cliquez cette fois ci sur &laquo;&nbsp;+ Créer une application&nbsp;&raquo;. Vous aurez la pop-up suivante qui apparaitra.

<a href="http://rkueny.fr/wp-content/uploads/2012/10/Capture-d’écran-2012-10-14-à-15.17.121.png" rel="lightbox[1655]"><img class="aligncenter size-full wp-image-1700" title="Créer une application Facebook" alt="" src="http://rkueny.fr/wp-content/uploads/2012/10/Capture-d’écran-2012-10-14-à-15.17.121.png" width="633" height="216" /></a>

Les champs à remplir sont assez simple :

  * **- Nom de l&rsquo;application :** Le nom de votre application
  * **- App Namespace :** Le nom qui apparaitre dans l&rsquo;url de votre application (https://app.facebook.com/app-namespace ). Il doit être unique.
  * **- Web Hosting :** Ne cochez pas cette case pour le moment. Vous devez la cocher pour utiliser l&rsquo;hébergement avec Heroku. Nous y reviendrons plus tard dans cette série d&rsquo;article.

Une fois les 2 champs renseignés cliquez sur &laquo;&nbsp;Continuer&nbsp;&raquo; et voilà, votre première application est enregistrée ! Vous verrez apparaitre vos clés (après avoir validé un captcha).

<a href="http://rkueny.fr/wp-content/uploads/2012/10/Capture-d’écran-2012-10-15-à-15.50.22.png" rel="lightbox[1655]"><img class="aligncenter size-full wp-image-1701" title="Frelance facebook" alt="" src="http://rkueny.fr/wp-content/uploads/2012/10/Capture-d’écran-2012-10-15-à-15.50.22.png" width="749" height="189" /></a>

Votre App Secret doit rester secrète. (je l&rsquo;affiche ici mais je l&rsquo;ai ensuite réinitialisée).

Pour cette première description du panel de votre application, nous allons rester dans l&rsquo;onglet &laquo;&nbsp;Essentiel&nbsp;&raquo;. Nous reviendrons plus tard sur les différents onglets. Nous avons donc au programme :

<a href="http://rkueny.fr/wp-content/uploads/2012/10/Capture-d’écran-2012-10-15-à-15.53.52.png" rel="lightbox[1655]"><img class="size-full wp-image-1704 alignnone" style="margin: 10px;" title="Panel d'application" alt="" src="http://rkueny.fr/wp-content/uploads/2012/10/Capture-d’écran-2012-10-15-à-15.53.52.png" width="692" height="556" /></a>

### Infos générales :

  * **- Display name :** vous pouvez changer ici le nom qui s&rsquo;affiche.
  * **- Namespace :** vous pouvez changer ici le nom apparaissant dans l&rsquo;url
  * **- Adresse électronique de contact :** le mail de contact depuis votre appli et celui par lequel Facebook peut vous contacter pour votre application. Mettez en un valide et que vous consultez régulièrement !
  * **- App Domains :** le domaine de votre application. Vous pouvez en mettre plusieurs. Attention à bien le renseigner ! Pas mal de messages d&rsquo;erreurs peuvent venir de là.
  * **- Catégorie :** choisissez la catégorie de votre application.
  * **- Hosting URL :** si vous êtes hébergé par Heroku.
  * **- Mode bac à sable :** l&rsquo;application ne sera disponible qu&rsquo;aux admins ou testeurs de l&rsquo;application.

Nous verrons les autres parties au moment opportun. Néanmoins les noms sont assez explicites à mon goût.

N’hésitez pas à vous balader dans le panel de configuration de votre application.Nous aborderons le début de la partie technique avec les SDK et la Graph API.

&nbsp;

&nbsp;
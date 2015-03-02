---
title: Traquer les spams dans vos formulaires
author: R.Kueny
layout: post
permalink: /developpement-web/traquer-les-spams-dans-vos-formulaires
categories:
  - Développement Web
tags:
  - antispam
  - askimet
  - code
  - développement
  - formulaire
  - php
  - spams
---
Vous avez un site ? Un blog ? Ou vous créez des sites ? Nécessairement vous avez donc un formulaire de contact&#8230; Il ne vous ai jamais arrivé de recevoir des mails bizarres ? Vous savez&#8230; des spams !!! <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

Voici un petit moyen d&rsquo;éviter que cela ne vous arrive de nouveau. Ce n&rsquo;est pas compliqué et cela pourra vous éviter de recevoir encore plus de spams <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

**Askimet est ton ami**

Si vous tenez un blog, vous avez sûrement déjà le plugin &laquo;&nbsp;Askimet&nbsp;&raquo; installé pour filtrer les spams pour vos commentaires. Et bien nous allons utiliser le même fonctionnement pour vos formulaires. Vous pourrez l&rsquo;utiliser pour vos formulaires de contact, votre livre d&rsquo;or ou encore vos commentaires sur un article.

Allez on est partis <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" /><!--more-->

**Première étape : obtenir une clé &laquo;&nbsp;Askimet&nbsp;&raquo;**

Ce système utilisant une clé il vous faudra l&rsquo;obtenir. Rien de plus simple pour cela. Rendez vous sur <a title="Système d'enregistrement d'une clé askimet" href="http://akismet.com/personal/" target="_blank">le système d&rsquo;enregistrement</a>, entrez votre adresse mail et vous recevrez un beau mail avec votre clé &laquo;&nbsp;Askimet&nbsp;&raquo;.

> *Your Akismet API key is: \***\***\***\****

**Deuxième étape : télécharger &laquo;&nbsp;Askimet&nbsp;&raquo;**

Une fois votre clé acquise, vous devez télécharger le système. Je vous propose de télécharger la classe PHP 5 crée par <a title="Aching Brain - site personnel" href="http://www.achingbrain.net/" target="_blank">Aching Brain</a>.

<p style="text-align: center;">
  <a title="Classe PHP 5 : Askimet" href="http://www.achingbrain.net/files/PHP5Akismet/PHP5Akismet.0.4.tar.gz" target="_blank"><img class="aligncenter" src="http://akismet.com/i/download-button.png" alt="" /></a>
</p>

**Troisième étape : mettre en place le code**

Une fois la classe téléchargée nous allons voir comment mettre &laquo;&nbsp;Askimet&nbsp;&raquo; en place.

<pre>// définition des variables utiles
$apiKey  = '<em>************</em>';
$siteUrl = 'http://rkueny.fr';

// vous devrez sans doute gérer les variables de votre formulaire ici
// exemple : $authorComment = $_POST['authorComment'];

/*
* initialisation de la classe
* ajout des informations utiles (auteur, email, url, contenu)
*/
$askimet = new Askimet($siteUrl, $apiKey);
$askimet-&gt;setCommentAuthor($authorComment);
$askimet-&gt;setCommentAuthorEmail($emailComment);
$askimet-&gt;setCommentAuthorURL($urlComment);
$askimet-&gt;setCommentContent($contentComment);

// on test s'il s'agit d'un spam ou pas
if($askimet-&gt;isCommentSpame()){
     // c'est un spam
}else{
     // ce n'est pas un spam
}</pre>

Et voilà, rien de plus simple <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" /> Vous avez un très bon système de filtrage de spam en place.

Un dernier conseil. &laquo;&nbsp;Askimet&nbsp;&raquo; n&rsquo;est pas fiable à 100%. Du coup, enregistrez tout de même les commentaires considérés comme du spam, avec possibilité de les valider par la suite ou de les supprimer. (un simple champ dans la BDD : validate / 1 ou 0).

Si vous avez des questions, ou si vous voulez plus de renseignement, n&rsquo;hésitez pas à laisser un commentaire.
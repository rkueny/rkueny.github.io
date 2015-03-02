---
title: Classe membre
author: R.Kueny
layout: post
permalink: /developpement-web/classe-membre
categories:
  - Développement Web
---
Nous allons aujourd&rsquo;hui commencer à aborder le développement en lui même. Nous allons construire les briques pour un jeu. Des petits bout de code qui sont là pour vous montrer comment moi je vois les choses. Les lignes ne sont pas à copier-coller !!! Elles sont là pour vous montrer dans quel esprit je développe.

Aujourd&rsquo;hui nous allons aborder la classe membre. On va la créer assez minimaliste pour commencer. Voici ce qu&rsquo;elle devra gérer :

  * Création d&rsquo;un utilisateur avec diverses vérifications : 
      * Unicité du login
      * Adresse email valide
      * Attribut désiré de bonne taille
      * Encodage du mot de passe en md5
  * Récapitulatif de toutes les infos
  * Sauvegarde des données

Cette classe sera en PHP 5, utilisera PDO en global.

<!--more-->

<span style="color: #ff0000;">Utilisation de PDO : </span>

<span style="color: #ff0000;">On inclus le fichier config/pdo.php pour que la classe fonctionne correctement. Voici comment il est composé :</span>

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #666666; font-style: italic;">/*
     Fichier de configuration de PDO
     Mise à jour : 11 mai 2009
     Auteur : SorenS
*/</span>
&nbsp;
<span style="color: #666666; font-style: italic;">/*
     Constantes pour la connexion
*/</span>
<span style="color: #990000;">define</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'DB_HOST'</span><span style="color: #339933;">,</span><span style="color: #0000ff;">'localhost'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// hôte pour la BDD</span>
<span style="color: #990000;">define</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'DB_NAME'</span><span style="color: #339933;">,</span><span style="color: #0000ff;">'test'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// nom de la base</span>
<span style="color: #990000;">define</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'DB_LOGIN'</span><span style="color: #339933;">,</span><span style="color: #0000ff;">'root'</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// login d'identification à la base</span>
<span style="color: #990000;">define</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'DB_PASSWORD'</span><span style="color: #339933;">,</span><span style="color: #0000ff;">''</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// mot de passe de la base</span>
&nbsp;
<span style="color: #666666; font-style: italic;">// dsn nécessair pour PDO (mysql)</span>
<span style="color: #990000;">define</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'DSN_MYSQL'</span><span style="color: #339933;">,</span><span style="color: #0000ff;">'mysql:host='</span><span style="color: #339933;">.</span>DB_HOST<span style="color: #339933;">.</span><span style="color: #0000ff;">';dbname='</span><span style="color: #339933;">.</span>DB_NAME<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #666666; font-style: italic;">// connexion à la bdd</span>
try<span style="color: #009900;">&#123;</span>
     <span style="color: #000088;">$pdo</span> <span style="color: #339933;">=</span> <span style="color: #000000; font-weight: bold;">new</span> PDO<span style="color: #009900;">&#40;</span>DSN_MYSQL<span style="color: #339933;">,</span>DB_LOGIN<span style="color: #339933;">,</span>DB_PASSWORD<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
catch<span style="color: #009900;">&#40;</span>PDOExeception <span style="color: #000088;">$e</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
     <span style="color: #990000;">die</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">"erreur!: "</span><span style="color: #339933;">.</span> <span style="color: #000088;">$e</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;;</span>getMessage<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span>
&nbsp;
<span style="color: #666666; font-style: italic;">/*
     On passe $pdo en global pour pouvoir l'utiliser à traver les classes
*/</span>
<span style="color: #000000; font-weight: bold;">global</span> <span style="color: #000088;">$pdo</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Certains utilisent l&rsquo;héritage pour utiliser PDO dans leur classes mais je préfère ma méthode :).

Abordons désormais la classe en elle même. Elle est commentée en doc php. C&rsquo;est les commentaires qui sont ainsi :

/**  
* Commentaire  
* @author SorenS  
*/

D&rsquo;ailleurs dans un futur proche vous aurez droit à un petit billet là dessus. J&rsquo;ai découvert cela il n&rsquo;y a pas longtemps et c&rsquo;est quand même pas mal. Vous verrez ça améliore pas mal la lisibilité et ça a d&rsquo;autres atouts. Enfin, on verra ça bientôt ;=)

Voici donc la classe commentée :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #009933; font-style: italic;">/**
* Classe de gestion de membre
* - Inscription avec diverses vérifications
* - Récapitulatif du membre
* - Génération de l'âge via la date de naissance (&lt;em&gt;source : &lt;a href="http://blog.jaysalvat.com/articles/snippet-php-calculer-un-age-a-partir-date-de-naissance.php"&gt;ce billet&lt;/a&gt;&lt;/em&gt;)
* @author SorenS
*/</span>
<span style="color: #000000; font-weight: bold;">class</span> Member<span style="color: #009900;">&#123;</span>
&nbsp;
     <span style="color: #009933; font-style: italic;">/**
     * Login de l'utilisateur
     * @access private
     * @type String
     */</span>
     <span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000088;">$login</span><span style="color: #339933;">;</span>
&nbsp;
     <span style="color: #009933; font-style: italic;">/**
     * Mot de passe de l'utilisateur
     * @access private
     * @type String || md5
     */</span>
     <span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000088;">$password</span><span style="color: #339933;">;</span>
&nbsp;
     <span style="color: #009933; font-style: italic;">/**
     * Adresse email de l'utilisateur
     * @access private
     * @type String
     */</span>
     <span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000088;">$mail</span><span style="color: #339933;">;</span>
&nbsp;
     <span style="color: #009933; font-style: italic;">/**
     * Date de naissance de l'utilisateur
     * @type Timestamp
     */</span>
     <span style="color: #000000; font-weight: bold;">private</span> <span style="color: #000088;">$birthDate</span><span style="color: #339933;">;</span>
&nbsp;
     <span style="color: #666666; font-style: italic;">/*
          Méthodes classiques de la classe
          - get (prendre), set(modifier), display(afficher)
     */</span>
          <span style="color: #009933; font-style: italic;">/**
          * Méthode pour prendre un attribut de la classe
          * @access public
          * @param $attribute String Nom de l'attribut visé
          * @return Mixed
          */</span>
          <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> __get<span style="color: #009900;">&#40;</span><span style="color: #000088;">$attribute</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
               <span style="color: #666666; font-style: italic;">// on vérifie que l'attribut demandé existe</span>
               <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span><span style="color: #000088;">$attribute</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>
                    <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span><span style="color: #000088;">$attribute</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// on renvoi la valeur</span>
               <span style="color: #b1b100;">else</span>
                    <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// on renvoi faux car l'attribut n'existe pas</span>
&nbsp;
               <span style="color: #b1b100;">return</span> <span style="color: #000088;">$return</span><span style="color: #339933;">;</span>
          <span style="color: #009900;">&#125;</span>
&nbsp;
          <span style="color: #009933; font-style: italic;">/**
          * Méthode pour modifier un attribut
          * @access public
          * @param $attribute String Nom de l'attribut visé
          * @param $value Mixed Valeur désirée pour l'attribut visé
          * @return boolean
          */</span>
          <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> __set<span style="color: #009900;">&#40;</span><span style="color: #000088;">$attribute</span><span style="color: #339933;">,</span> <span style="color: #000088;">$value</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
               <span style="color: #666666; font-style: italic;">// on met $return a true</span>
               <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
&nbsp;
               <span style="color: #666666; font-style: italic;">// on vérifie que l'attribut demandé existe</span>
               <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span><span style="color: #000088;">$attribute</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>
                    <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span><span style="color: #000088;">$attribute</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$value</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// on remplace la valeur de l'attribut</span>
               <span style="color: #b1b100;">else</span>
                    <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// on renvoi faux car l'attribut n'existe pas          </span>
&nbsp;
               <span style="color: #b1b100;">return</span> <span style="color: #000088;">$return</span><span style="color: #339933;">;</span>
          <span style="color: #009900;">&#125;</span>
&nbsp;
          <span style="color: #009933; font-style: italic;">/**
          * Méthode pour afficher la valeur de l'attribut désiré
          * @access public
          * @param $attribute String Nom de l'attribut visé
          * @return void
          */</span>
          <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> display<span style="color: #009900;">&#40;</span><span style="color: #000088;">$attribute</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
               <span style="color: #666666; font-style: italic;">// on vérifie que l'attribut demandé existe</span>
               <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">isset</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span><span style="color: #000088;">$attribute</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>
                    <span style="color: #b1b100;">echo</span> <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span><span style="color: #000088;">$attribute</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// on affiche la valeur de l'attribut désiré</span>
               <span style="color: #b1b100;">else</span>
                    <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">'Error : attribute not exist'</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// affichage d'une erreur</span>
          <span style="color: #009900;">&#125;</span>
&nbsp;
          <span style="color: #666666; font-style: italic;">/*
               Vérifications
          */</span>
&nbsp;
          <span style="color: #009933; font-style: italic;">/**
          * Vérification de la taille d'une chaine (mot de passe ou login par exemple)
          * /! Pour la vérification de la longueur du mot de passe, il faut l'appeller
          * avant la fonction checkPassword /!
          * @access public
          * @param $attribute String Nom de l'attribut visé
          * @param $length Integer Longueur désirée pour la chaine
          * @return boolean
          */</span>
          <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> checkLength<span style="color: #009900;">&#40;</span><span style="color: #000088;">$attribute</span><span style="color: #339933;">,</span> <span style="color: #000088;">$length</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
               <span style="color: #666666; font-style: italic;">// Si la longueur de la chaine est trop petite</span>
               <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">strlen</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span><span style="color: #000088;">$attribute</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">&</span>lt<span style="color: #339933;">;</span> <span style="color: #000088;">$length</span><span style="color: #009900;">&#41;</span>
                    <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// on retourne faux</span>
               <span style="color: #b1b100;">else</span>
                    <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// sinon c'est ok</span>
&nbsp;
               <span style="color: #b1b100;">return</span> <span style="color: #000088;">$return</span><span style="color: #339933;">;</span>
          <span style="color: #009900;">&#125;</span>
&nbsp;
          <span style="color: #009933; font-style: italic;">/**
          * Vérification de l'unicité du login
          * /! PDO requit /!
          * @access public
          * @return boolean
          */</span>
          <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> checkLogin<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
               <span style="color: #666666; font-style: italic;">// récupération du nombre d'occurrence du login</span>
	       <span style="color: #000088;">$sql</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">"SELECT COUNT(*)
		       AS count_pseudo
		       FROM member
		       WHERE login = '<span style="color: #006699; font-weight: bold;">$this</span>-&gt;login'"</span><span style="color: #339933;">;</span>
	       <span style="color: #000088;">$st</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$GLOBALS</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'pdo'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>query<span style="color: #009900;">&#40;</span><span style="color: #000088;">$sql</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">// passage en objet</span>
		<span style="color: #000088;">$result</span> <span style="color: #339933;">=</span> <span style="color: #000088;">$st</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>fetch<span style="color: #009900;">&#40;</span>PDO<span style="color: #339933;">::</span><span style="color: #004000;">FETCH_OBJ</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
		<span style="color: #666666; font-style: italic;">// si le login est libre</span>
		<span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$result</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>count_pseudo <span style="color: #339933;">==</span> <span style="color: #cc66cc;"></span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
		     <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span>
		<span style="color: #b1b100;">else</span><span style="color: #009900;">&#123;</span> <span style="color: #666666; font-style: italic;">// si pseudo déjà utilisé</span>
		     <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">&#125;</span>
&nbsp;
		<span style="color: #b1b100;">return</span> <span style="color: #000088;">$result</span><span style="color: #339933;">;</span>
          <span style="color: #009900;">&#125;</span>
&nbsp;
          <span style="color: #009933; font-style: italic;">/**
          * MD5 du mot de passe et suppression des espaces
          * @access public
          * @return void
          */</span>
          <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> md5password<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
               <span style="color: #666666; font-style: italic;">// on enlève les espaces en début et en fin de chaine</span>
               <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>password <span style="color: #339933;">=</span> <span style="color: #990000;">trim</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>password<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
               <span style="color: #666666; font-style: italic;">// on md5 le mot de passe</span>
               <span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>password <span style="color: #339933;">=</span> <span style="color: #990000;">md5</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>password<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
          <span style="color: #009900;">&#125;</span>
&nbsp;
          <span style="color: #009933; font-style: italic;">/**
          * Vérification de la bonne forme de l'email
          * @access public
          * @return boolean
          */</span>
          <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> checkMail<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
              <span style="color: #666666; font-style: italic;">//regex de vérification du format de l'email</span>
	      <span style="color: #b1b100;">if</span><span style="color: #009900;">&#40;</span><span style="color: #990000;">preg_match</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">'`^[[:alnum:]]([-_.]?[[:alnum:]_?])*@[[:alnum:]]([-.]?[[:alnum:]])+.([a-z]{2,6})$`'</span><span style="color: #339933;">,</span><span style="color: #000088;">$this</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span><span style="color: #990000;">mail</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span>
	           <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// ok</span>
	      <span style="color: #b1b100;">else</span>
		   <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span> <span style="color: #666666; font-style: italic;">// mauvais format</span>
&nbsp;
	      <span style="color: #b1b100;">return</span> <span style="color: #000088;">$return</span><span style="color: #339933;">;</span>
          <span style="color: #009900;">&#125;</span>
&nbsp;
          <span style="color: #009933; font-style: italic;">/**
          * Affichage de toute les infos de la classe
          * A utiliser en développement pas en production
          * Affichage brut des données
          * @access public
          * @return void
          */</span>
          <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> displayAll<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
               <span style="color: #990000;">var_dump</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$this</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
          <span style="color: #009900;">&#125;</span>
&nbsp;
          <span style="color: #009933; font-style: italic;">/**
          * Méthode pour sauvegarder le membre
          * A utiliser après les diverses méthodes check de préférence
          * /! PDO requit /!
          * Cette méthode doit sûrement être optimisable
          * @access public
          * @return boolean
          */</span>
          <span style="color: #000000; font-weight: bold;">public</span> <span style="color: #000000; font-weight: bold;">function</span> save<span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
               <span style="color: #666666; font-style: italic;">// requête sql</span>
               <span style="color: #000088;">$sql</span> <span style="color: #339933;">=</span> <span style="color: #0000ff;">"INSERT INTO member
	       VALUES('','<span style="color: #006699; font-weight: bold;">$this</span>-&gt;;login','<span style="color: #006699; font-weight: bold;">$this</span>-&gt;password','<span style="color: #006699; font-weight: bold;">$this</span>-&gt;mail','<span style="color: #006699; font-weight: bold;">$this</span>-&gt;birthDate')"</span><span style="color: #339933;">;</span>
	       <span style="color: #000088;">$GLOBALS</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'pdo'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>query<span style="color: #009900;">&#40;</span><span style="color: #000088;">$sql</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
               try<span style="color: #009900;">&#123;</span>
                    <span style="color: #000088;">$GLOBALS</span><span style="color: #009900;">&#91;</span><span style="color: #0000ff;">'pdo'</span><span style="color: #009900;">&#93;</span><span style="color: #339933;">-&</span>gt<span style="color: #339933;">;</span>query<span style="color: #009900;">&#40;</span><span style="color: #000088;">$sql</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                    <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">true</span><span style="color: #339933;">;</span>
               <span style="color: #009900;">&#125;</span>catch <span style="color: #009900;">&#40;</span>Exception <span style="color: #000088;">$e</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#123;</span>
                    <span style="color: #b1b100;">echo</span> <span style="color: #0000ff;">'Error PDO : '</span><span style="color: #339933;">.</span><span style="color: #000088;">$e</span><span style="color: #339933;">;</span>
                    <span style="color: #000088;">$return</span> <span style="color: #339933;">=</span> <span style="color: #009900; font-weight: bold;">false</span><span style="color: #339933;">;</span>
               <span style="color: #009900;">&#125;</span>
&nbsp;
                <span style="color: #b1b100;">return</span> <span style="color: #000088;">$return</span><span style="color: #339933;">;</span>
           <span style="color: #009900;">&#125;</span>
&nbsp;
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Attention : il se peut que des bugs subsistent dans le code. N&rsquo;oubliez pas que cela n&rsquo;a pas pour but de servir pour du copier-coller <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

Si vous ne connaissez pas l&rsquo;une des fonctions php utilisées (md5, strlen,&#8230;) cliquez dessus pour accéder au manuel PHP.

Je pense qu&rsquo;il n&rsquo;y a pas besoin de plus commenter. Si vous avez des optimisations, des avis, des critiques à émettre, n&rsquo;hésitez pas.

See you later <img src="http://rkueny.fr/wp-includes/images/smilies/icon_wink.gif" alt=";)" class="wp-smiley" />
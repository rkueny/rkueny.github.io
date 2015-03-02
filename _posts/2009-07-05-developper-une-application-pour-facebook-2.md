---
title: Développer une application pour Facebook (2)
author: R.Kueny
layout: post
permalink: /developpement-web/developper-une-application-pour-facebook-2
categories:
  - Développement Web
  - Jeu Web
tags:
  - création
  - développement
  - facebook
  - jeu
  - php
  - réseau
  - social
---
<p style="text-align: justify;">
  Nous allons voir aujourd&rsquo;hui comment développer une application pour Facebook. En fait, cet article va se décomposer en deux.
</p>

<ul style="text-align: justify;">
  <li>
    <a href="http://rkueny.fr/developpement-web/developper-une-application-pour-facebook-2" target="_blank">développer son application</a>
  </li>
  <li>
    l&rsquo;intégrer à facebook
  </li>
</ul>

<p style="text-align: justify;">
  Nous allons voir aujourd&rsquo;hui le développement d&rsquo;une petite application que nous intégrerons à Facebook par la suite.
</p>

<p style="text-align: justify;">
  <!--more-->
</p>

<p style="text-align: justify;">
  Un point intéressant sur Facebook est la possibilité d&rsquo;accéder aux informations de l&rsquo;utilisateur. Cependant, le réseau ne permet pas automatiquement d&rsquo;accéder à toutes les infos. De base, votre application aura accés à la liste des réseaux de l&rsquo;utilisateur, son nom, son prénom et son identifiant. Le reste dépendra si l&rsquo;utilisateur a ouvert ses infos ou pas.
</p>

<p style="text-align: justify;">
  Pour servir d&rsquo;exemple j&rsquo;ai développé un comparateur de climat. L&rsquo;utilisateur entre sa ville et une autre ville est l&rsquo;application décide où il fait le plus beau temps. Les paramètres pris en compte sont : température max, vent max et pourcentage d&rsquo;humidité.
</p>

<p style="text-align: justify;">
  Je me suis servi de l&rsquo;API Weather de Google. Au début j&rsquo;ai utilisé <a href="http://www.ycerdan.fr/php/google-weather-api-en-php/" target="_blank">cette API PHP</a>. Au final je n&rsquo;ai gardé que l&rsquo;extraction du fichier xml&#8230; Voici ma classe :  (vous trouverez le code complet en annexe)
</p>

<p style="text-align: justify;">
  <em>class GoogleWeatherAPI {</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>private $cityCode;</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>private $city;</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>private $domain = &lsquo;www.google.com';</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>private $prefix_images;</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>private $current_conditions;</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>private $forecast_conditions;</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>private $is_found = true;</em>
</p>

<p style="text-align: justify;">
  <em><br /> </em>
</p>

<p style="text-align: justify;">
  <em>public function __construct ($city_code,$lang=&rsquo;fr&rsquo;);</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>private function __get($attribut);</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>public function exist();</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>public function getHumidity();</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>public function getTemp();</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span>
</p>

<p style="text-align: justify;">
  <em>public function getWind();</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>public function information();</em>
</p>

<p style="text-align: justify;">
  <span><em> </em></span><em>public function compareTo($data);</em>
</p>

<p style="text-align: justify;">
  <em>}</em>
</p>

<p style="text-align: justify;">
   
</p>

<p style="text-align: justify;">
  Vous pouvez télécharger la classe ici : <a href="http://rkueny.fr/wp-content/scripts">weather.class.php.</a>
</p>

<p style="text-align: justify;">
  Nous verrons dans le prochain article comment intégrer cela à facebook et demander des infos (la ville par exemple)
</p>

<p style="text-align: justify;">
   
</p>

<p style="text-align: justify;">
  PS : si vous voyez comment améliorer la méthode compareTo() je suis preneur. J&rsquo;ai un peu bâclé cette méthode mais je compte bien l&rsquo;optimiser. 
</p>
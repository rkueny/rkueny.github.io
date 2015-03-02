---
title: Formulaire et ergonomie
author: R.Kueny
layout: post
permalink: /developpement-web/formulaire-et-ergonomie
categories:
  - Développement Web
tags:
  - développement
  - ergonomie
  - php
---
Lors de mon stage dans une start-up toulousaine, j&rsquo;ai été amené à développer un formulaire de validation de petites annonces. Un formulaire était déjà en place. Voyez ici un aperçu :

<p style="text-align: center;">
  <div id="attachment_293" style="width: 310px" class="wp-caption aligncenter">
    </p> 
    
    <div class="mceTemp mceIEcenter">
      <dl id="attachment_295" class="wp-caption aligncenter" style="width: 310px;">
        <dt class="wp-caption-dt">
          <img class="size-medium wp-image-295" title="tw-form1" src="http://rkueny.fr/wp-content/uploads/2009/06/tw-form1-300x187.jpg" alt="Formulaire précédent" width="300" height="187" />
          
          <p class="wp-caption-text">
            Formulaire précédent
          </p></div>
        </dt>
        
        <dd class="wp-caption-dd">
          Formulaire précédent
        </dd>
      </dl>
    </div>
    
    <p style="text-align: center;">
      <!--more-->
    </p>
    
    <p>
      Cette présentation, bien que cohérente pour une boite email, ne correspondait pas du tout aux besoins de l&rsquo;entreprise. En effet, les informations qui s&rsquo;affichaient directement étaient :
    </p>
    
    <ul>
      <li>
        le titre de l&rsquo;annonce
      </li>
      <li>
        le mail de l&rsquo;auteur
      </li>
      <li>
        le nom de l&rsquo;auteur
      </li>
      <li>
        la date d&rsquo;écriture
      </li>
    </ul>
    
    <p>
      Pour avoir le contenu il fallait laisser le curseur deux secondes sur la ligne correspondante. Ensuite, il fallait cliquer sur la checkbox si on désirait supprimer l&rsquo;annonce ciblée
    </p>
    
    <p>
      Plusieurs défauts sont ici nommés.
    </p>
    
    <ol>
      <li>
        Le formulaire demande la précision pour le clic
      </li>
      <li>
        Si on déconnecte son esprit du formulaire, comment savoir où on en était ?
      </li>
      <li>
        Les informations ne nous sautent pas aux yeux
      </li>
      <li>
        On a pas toutes les cartes en main pour juger une annonce
      </li>
    </ol>
    
    <p>
      Du coup, je me suis penché là dessus et j&rsquo;ai pondu un nouveau système.
    </p>
    
    <p>
      Voici les grandes lignes, et un aperçu.
    </p>
    
    <ul>
      <li>
        Une annonce à la fois
      </li>
      <li>
        Validation au clavier (flèche gauche : valider, flèche droite : supprimer). Les boutons Valider et Supprimer sont toujours présent au cas ou le JavaScript soit désactivé.
      </li>
      <li>
        Les informations les plus importantes mises en valeur
      </li>
      <li>
        Présence de toutes les informations
      </li>
    </ul>
    
    <div id="attachment_280" style="width: 310px" class="wp-caption aligncenter">
      <img class="size-medium wp-image-280" title="petites-annonces" src="http://rkueny.fr/wp-content/uploads/2009/06/petites-annonces-300x196.png" alt="Validation de petites-annonces" width="300" height="196" />
      
      <p class="wp-caption-text">
        Validation de petites-annonces
      </p>
    </div>
    
    <p>
      La personne pour qui j&rsquo;ai fait ce petit soft a apprécié le travail. Gain de temps et de précision. Comme quoi, l&rsquo;ergonomie &#8230;
    </p>
    
    <p>
      Un dessin qui résume parfaitement ma pensée :
    </p>
    
    <div id="attachment_286" style="width: 165px" class="wp-caption aligncenter">
      <img class="size-medium wp-image-286" title="apple_google_you" src="http://rkueny.fr/wp-content/uploads/2009/06/apple_google_you-155x300.jpg" alt="Apple Google Vous" width="155" height="300" />
      
      <p class="wp-caption-text">
        Apple Google Vous
      </p>
    </div>
    
    <p>
      Un livre à conseiller pour<a href="http://methylbro.titaxium.org/post/2008/04/19/Ergonomie-Web" target="_blank"> l&rsquo;ergonomie plus générale d&rsquo;un site web sur le blog de Méthylbro</a>.
    </p>
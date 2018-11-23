---
title: "Poster une réponse à un tweet via l'API Twitter"
author: R.Kueny
layout: post
permalink: /developpement-web/poster-une-reponse-a-un-tweet-via-lapi-twitter
categories:
  - Développement web
tags:
  - API
  - php
  - post
  - replies
  - reply
  - twitter
  - update
---

Poster un tweet via l’API twitter est très facile est la doc est très bien fournie sur le sujet. En revanche, pour répondre à un tweet précis il y a une chose à laquelle faire attention.

En effet, ceci ne marchera pas :

<pre>
<code class="php">$this->twitterClient->post
    (
        'statuses/update.json',
         null,
         array
         (
             'in_reply_to_status_id' =>  $idMessageToReply,
             'status'                =>  '@rkueny Réponse à ton tweet !'
         )
     )
->send();</code></pre>

Mais ceci oui :

<pre>
<code class="php">$this->twitterClient->post
    (
        'statuses/update.json',
         null,
         array
         (
             'in_reply_to_status_id' =>  $idMessageToReply,
             'status'                =>  'Réponse à ton tweet @rkueny !'
         )
     )
->send();</code></pre>

Il suffit de ne pas commencer votre message par un @ et le reply fonctionnera. En revanche, si vous ne mettez pas du tout le pseudo de la personne le reply ne fonctionnera pas.

C’est tout bête, mais si ça vous évite une prise de tête tant mieux !
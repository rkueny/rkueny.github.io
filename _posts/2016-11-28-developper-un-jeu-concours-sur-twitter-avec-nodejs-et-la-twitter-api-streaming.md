---
layout: post
title: Développer un jeu concours sur Twitter avec Node.Js et la Twitter API Streaming
date: 2016-11-28 00:00:00 +0300
description: Récemment, pour le match France / Nouvelle-Zélande en rugby le compte twitter @avecleXV a organisé un jeu concours sur Twitter que je n’avais jamais vu jusque là. Cela fait un moment que je me demande comment organiser des jeux concours autre que Follow+RT et en voici la réponse.
img: twitter-api.jpeg # Add image post (optional)
tags: [NodeJs, API, Twitter] # add tag
---

Récemment, pour le match France / Nouvelle-Zélande en rugby le compte twitter @avecleXV a organisé un jeu concours sur Twitter que je n’avais jamais vu jusque là. Cela fait un moment que je me demande comment organiser des jeux concours autre que Follow+RT et en voici la réponse.

## Remportez la bataille face aux All-Blacks

![Bataille All Blacks]({{site.baseurl}}/assets/img/twitter_orange_1.png)

Ainsi, avec un tweet de départ, le compte invite les utilisateurs à jouer.

Une fois la personne ayant répondu, un tweet automatique lui répond. Ici, il lui donne 3 cartes et attends sa réponse pour continuer le jeu.

![Bataille All Blacks]({{site.baseurl}}/assets/img/twitter_orange_2.png)

Une fois que la personne réponds, un nouveau tweet automatique arrive avec le résultat de l’action, et invite à nouveau l’utilisateur à jouer pour continuer, ou donne le résultat final de la partie.

C’est ensuite un classique tirage au sort pour tous les participants et pour ceux ayant remporté leur partie la suite se passe en DM. Je ne m’attarderai pas plus sur le côté novateur et engageant de l’opération, mais voyons comment cela se passe côté technique.

## Bot twitter, API Streaming et Node.js

> Disclaimer: je ne sais absolument pas comment est codé cette opération par les développeur d’Orange, j’ai juste imaginé un moyen de reproduire cela.

Pour que tout fonctionne, il vous faut :

- un tweet de départ. Ici “Remportez la bataille ….”
- récupérer les réponses
- faire les actions en conséquences, ici poster un nouveau tweet en réponse à la question.

### Configuration du projet

Tout d’abord, démarrez votre projet :

`npm init`

Remplissez les données comme il vous convient. Ensuite, nous allons utiliser la dépendance Twitter

`npm i twitter --save`

Vous devriez avoir un fichier _package.json_ ressemblant à :

```json
{
  "name": "twittercontest",
  "version": "0.0.1",
  "description": "A twitter contest",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "rkueny",
  "license": "MIT",
  "dependencies": {
    "twitter": "^1.4.0"
  }
}
```

## Script node

Ensuite créez un fichier _index.js_

```js
#!/usr/bin/env node
const Twitter = require("twitter");
console.log("Hi Twitter");
```

Ici, nous mettons que le fichier sera utilisé en cli et nous utilisons le package twitter.

Si vous lancez node index.js dans votre terminal, vous verrez s’afficher

**Hi Twitter**

### Application Twitter

Créez votre application Twitter https://apps.twitter.com/, générez votre Token et renseignez tout cela dans votre fichier index.js

```js
const twitterApi = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: "",
});
```

### Twitter Streaming API

Pour voir comment cela fonctionne, n’hésitez pas à jeter un oeil à la documentation : [https://dev.twitter.com/streaming/overview](https://dev.twitter.com/streaming/overview)

Nous allons d’abord streamer tout ce qui passe sur le hashtag #NewYork

Il vous suffit d’écrire (toujours dans votre fichier _index.js_) :

```js
#!/usr/bin/env node
const Twitter = require("twitter");
const twitterApi = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: "",
});
twitterApi.stream("statuses/filter", { track: "#NewYork" }, function (stream) {
  stream.on("data", function (data) {
    console.log(data.text);
  });
  stream.on("error", function (error) {
    console.error(error);
  });
});
```

Si vous lancez la commande node index.js vous devriez voir défiler les tweets avec le hashtag #NewYork. Vous voila branchés sur le stream des tweets !

![Console]({{site.baseurl}}/assets/img/twitter_orange_3.png)

Pour notre jeu, nous allons streamer les tweets mentionnant notre compte. Ici, je vais streamer tout ce qui mentionne mon compte [@rkueny](https://twitter.com/rkueny) :

```js
twitterApi.stream("statuses/filter", { track: "@rkueny" }, function (stream) {
  stream.on("data", function (data) {
    const tweet = {
      createdAt: data.created_at,
      id: data.id_str,
      message: data.text,
      reply: data.in_reply_to_status_id,
      from: {
        id: data.user.id,
        name: data.user.screen_name,
      },
    };
    console.log(tweet);
  });
  stream.on("error", function (error) {
    console.error(error);
  });
});
```

Dès qu’une personne vous mentionnera vous aurez le tweet. De plus, si c’est une reply à un de vos messages vous aurez l’id dans **tweet.reply**.

Si vous voulez répondre, il vous suffit d’ajouter :

```js
twitterApi.post(
  "statuses/update",
  {
    status: "Hi @" + tweet.from.name + " you are playing now !",
    in_reply_to_status_id: tweet.id,
  },
  function (stream) {
    console.log(stream);
  }
);
```

Le champ status étant le tweet, et le champ **in_reply_to_status_id** étant l’id du tweet auquel répondre. Attention, si vous voulez répondre à un tweet, vous devez obligatoirement mentionner la personne dans votre tweet avec le @.

### Le code complet

```js
#!/usr/bin/env node
const Twitter = require("twitter");
const twitterApi = new Twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: "",
});
twitterApi.stream("statuses/filter", { track: "@rkueny" }, function (stream) {
  stream.on("data", function (data) {
    const tweet = {
      createdAt: data.created_at,
      id: data.id_str,
      message: data.text,
      reply: data.in_reply_to_status_id,
      replyUser: data.in_reply_to_screen_name,
      from: {
        id: data.user.id,
        name: data.user.screen_name,
      },
    };
    console.log(tweet);
    twitterApi.post(
      "statuses/update",
      {
        status: "Hi @" + tweet.from.name + " you are playing now !",
        in_reply_to_status_id: tweet.id,
      },
      function (stream) {
        console.log(stream);
      }
    );
  });
  stream.on("error", function (error) {
    console.error(error);
  });
});
```

Il vous suffit ensuite de faire tourner votre bot en permanence avec [forever](https://github.com/foreversd/forever) par exemple.

Vous avez désormais tout les ingrédients en main pour utiliser l’API Streaming de Twitter.

Have fun ! ;)

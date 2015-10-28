---
title: "Persist or not Persist"
author: R.Kueny
layout: post
permalink: /symfony/persist-or-not-persist
categories:
  - Symfony
tags:
  - Symfony
  - Symfony2
  - doctrine
  - persist
  - flush
intro: Utiliser persist() ou ne pas utiliser persist() telle est la question ... Le persist(), flush() est un couple que l'on sépare rarement alors que ...
header-img: img/tobeornottobe.jpg
---

Utiliser `persist()` ou ne pas utiliser `persist()` telle est la question ... Le `persist()`, `flush()` est un couple que l'on sépare rarement alors qu'en fait s'il y a deux méthodes ce n'est pas pour rien.

Je me suis aperçu que cela n'était pas clair pour tout le monde, donc voici un petit rappel qui pourra vous être utile.

> Notice that calling `$em->persist($product)` isn't necessary. 
> Recall that this method simply tells Doctrine to manage or "watch" the $product object. 
> In this case, since you fetched the $product object from Doctrine, it's already managed.
> [Source](http://symfony.com/doc/current/book/doctrine.html#updating-an-object)

Cela vous explique simplement, que lorsque vous déclarez un nouvel objet, vous devez dire à Doctrine de le garder en mémoire 
avec le `persist()`. 

{% highlight php linenos %}
$product = new Product();
$product->setName('Product name');

$em->persist($product);
$em->flush();
{% endhighlight %}

En revanche, si vous récupérez l'objet depuis Doctrine, vous n'avez pas besoin de lui redire de le garder en mémoire.

{% highlight php linenos %}
$product = $em->getRepository("AppBundle:Product")->findOneById($id);
$product->setName('Product name');

$em->flush();
{% endhighlight %}

De plus, Doctrine est suffisament évolué pour savoir que si vous ne modifiez pas l'objet qu'il vous a donné, il n'aura pas 
besoin de faire un `UPDATE` lors du `flush()`.

Le `flush()` équivaut en fait à ouvrir une transaction et à enregister tout les données surveillées depuis le dernier `flush()`.

> Un dernier petit point, n’oubliez pas qu’à chaque fois que vous faites un/des 
> `persist()` puis un `flush()`, Doctrine fera autant d’`INSERT` que de `persist()`.

C'est tout pour aujourd'hui, je ne veux plus voir trainer de `persist()` la où ça n'a pas lieu d'être !

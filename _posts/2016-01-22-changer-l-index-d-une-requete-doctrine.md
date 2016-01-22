---
title: "Changer facilement l'index d'une requête avec Doctrine"
author: R.Kueny
layout: post
permalink: /doctrine/changer-l-index-d-une-requete-doctrine
categories:
  - Symfony
  - Doctrine
tags:
  - Symfony
  - Symfony2
  - doctrine
  - index
  - request
intro: Doctrine indexe de 0 à X les résultats de vos requêtes, mais vous avez peut être envie d'avoir l'id de l'entity en index ?
header-img: img/deadpool.jpg
---

Doctrine indexe de 0 à X les résultats de vos requêtes, mais vous avez peut être envie d'avoir l'id de l'entity en index ?

Voici une astuce toute simple à utiliser dans la méthode de votre repository.

{% highlight php linenos %}
$query = $this->_em->createQueryBuilder();

return $query->select("p")
    ->from("AppBundle:Post", "p", 'p.id')
   ->getQuery()
   ->getResult();
{% endhighlight %}

Il vous suffit donc d'ajouter un paramètre à la fonction `->from()`. Ici en ajoutant `"p.id"`, le tableau de retour sera :

{% highlight text linenos %}
array
    1 => object(AppBundle\Entity\Post)
        private 'id' => int 1
        private 'name' => string 'XXXY fjidshif'
        private 'slug' => string 'test'
    2 => object(AppBundle\Entity\Post)
        private 'id' => int 2
        private 'name' => string 'XXXY Bonjour tout le monde !fjidshif'
        private 'slug' => string 'bonjour-tout-le-monde'
{% endhighlight %}

Le paramètre doit faire parti du select. Et attention, s'il n'est pas unique la clé écrasera une précédente.

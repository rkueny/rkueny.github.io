---
title: "Meet the bundle MobileDetectBundle"
author: R.Kueny
layout: post
permalink: /symfony/meet-the-bundle/mobile-detect-bundle
categories:
  - Meet the bundle
tags:
  - Symfony
  - Symfony2
  - Meet the bundle
  - bundle
  - official
  - translate
  - mobile
intro: "Les téléphones portables sont de plus en plus utilisés de par le monde et, par extension, sur le web. Mis à part la croissance du 
responsive design, de plus en plus de sites développent une version spécifique de leur site pour les utilisateurs mobiles. Voyons un bundle 
pour vous aider à mettre cela en place."
header-img: img/post-bg-mobiledetectbundle.jpg
---

> Cet article est une traduction/adaptation du post de Javier Eguiluz : ["Meet the bundle: MobileDetectBundle"](http://symfony.com/blog/meet-the-bundle-mobiledetectbundle).
> 
> Cet article fait partie d'une série intitulé "Meet the bundle" qui présente plusieurs bundles Symfony2. Merci à Javier Eguiluz pour cette initiative.

## Meet the bundle : MobileDetectBundle

Les téléphones portables sont de plus en plus utilisés de par le monde et, par extension, sur le web. Mis à part la croissance du 
responsive design, de plus en plus de sites développent une version spécifique de leur site pour les utilisateurs mobiles.

Dans cet article, nous allons parler de [MobileDetectBundle](https://github.com/suncat2000/MobileDetectBundle) qui détecte les mobiles 
et vous aide à rediriger l'utilisateur vers la bonne version de votre site. Une fois installé, ceci est la seule configuration dont vous 
aurez besoin pour rediriger les utilisateurs mobiles vers le sous-domaine `.m` de votre site :

{% highlight yaml linenos %}
# app/config/config.yml
mobile_detect:
    redirect:
        mobile:
            is_enabled: true
            host: http://m.example.com
            action: redirect
        detect_tablet_as_mobile: true
{% endhighlight %}

Lisez la [documentation officielle](https://github.com/suncat2000/MobileDetectBundle/blob/master/README.md) du bundle pour apprendre 
comment configurer des scénarios de redirection plus complexes.

En plus de rediriger les utilisateurs, ce bundle fournit également un service appellé : `mobile_detector` qui va vous permettre de 
détecter le type de mobile et l'OS :

{% highlight php linenos %}
$device = $this->get('mobile_detect.mobile_detector');

// détection du mobile
$device->isMobile();
$device->isTablet();

// détection plus poussée
$device->isIphone();
$device->isIpad();
$device->isSamsung();

// détection de l'OS du mobile
$device->isIOS();
$device->isAndroidOS();
{% endhighlight %}

Toutes ces méthodes sont aussi disponibles dans vos templates Twig :

{% highlight js linenos %}
{% raw %}
{% extends is_mobile() ? 'mobile/layout.html.twig': 'layout.html.twig' %}

{% if is_android_os() %}
    Download our application from the store.
{% endif %}

{% if is_device('samsung') %}
    Thinking about buying an iPhone? Check out our deals!
{% endif %}
{% endraw %}
{% endhighlight %}

### À propos de l'auteur

[MobileDetectBundle](https://github.com/suncat2000/MobileDetectBundle) est développé par 
[Nikolay Ivlev](https://connect.sensiolabs.com/profile/kotovsky), un développeur Symfony de Moscou (Russie).

### À propos de "Meet the bundle"

Cette série d'article est publiée sur le site officiel de Symfony. Je ne fais ici que traduire ces articles pour 
que les personnes ayant énormément de mal en anglais, puissent profiter du travail de Javier Eguiluz. Encore 
merci à lui pour tout le travail qu'il abat dans la communauté Symfony. Le prochain article sera la traduction 
du premier billet : [Meet the bundle: ControllerExtraBundle](http://symfony.com/blog/meet-the-bundle-controllerextrabundle)

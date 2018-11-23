---
title: "Accélérez vos développements Appcelerator avec TiFaster"
author: R.Kueny
layout: post
permalink: /mobile/accelerez-vos-developpements-appcelerator-avec-tifaster
categories:
  - Mobile
  - Titanium Appcelerator
  - Alloy
tags:
  - Mobile
  - Titanium Appcelerator
  - Alloy
  - LiveView
  - TiShadow
intro: "On peut perdre énormément de temps lors des builds. Je vous ai déjà parlé de TiShadow pour remédier à ce problème, voici une autre solution plus simple : TiFaster."
header-img: img/tifaster.png
---

On peut perdre énormément de temps lors des builds. Je vous ai déjà parlé de TiShadow pour remédier à ce problème, voici une autre solution plus simple : TiFaster.

{: .center-image}
![Un développeur attendant la find du build](/img/boring.gif)
*Un développeur attendant la fin du build ...*

Cette fois-ci pas besoin de créer une application TiShadow, de lancer un serveur etc..., il vous suffit d'installer TiFaster :

```
$ npm install -g faster-titanium
```

Si vous l'installez avec sudo :

```
$ sudo npm install -g faster-titanium --unsafe-perm
```

Ensuite, dans le dossier de votre application, vous pouvez builder :

```
$ ti build -p ios --faster
```

{: .center-image}
![TiFaster](/img/tifaster.gif)


Et voilà :)

[Dépôt GitHub : Ti Faster](https://github.com/CureApp/faster-titanium)

---
title: 'TiShadow &#8211; Erreur lors du build de l&rsquo;application'
author: R.Kueny
layout: post
permalink: /developpement-mobile/titanium-appcelerator/tishadow-erreur-lors-du-build-de-lapplication
categories:
  - Titanium Appcelerator
tags:
  - appcelerator
  - bug
  - clean
  - cli
  - error
  - Ld build/TiShadow.build/Debug-iphonesimulator/TiShadow-universal.build/Objects-normal/x86_64/TiShadow normal x86_64
  - tishadow
  - titanium
---
Si vous utilisez TiShadow dans vos développements Titanium Appcelerator (et si vous ne le faites pas voici [comment utiliser TiShadow avec Titanium Appcelerator][1]), vous êtes peut-être déjà tombé sur cette erreur lors de la build de votre tishadowApp :

<pre>[TRACE] clang: error: linker command failed with exit code 1 (use -v to see invocation)
[ERROR] ** BUILD FAILED **
[ERROR] The following build commands failed:
[ERROR]         Ld build/TiShadow.build/Debug-iphonesimulator/TiShadow-universal.build/Objects-normal/i386/TiShadow normal i386
[ERROR]         Ld build/TiShadow.build/Debug-iphonesimulator/TiShadow-universal.build/Objects-normal/x86_64/TiShadow normal x86_64
[ERROR] (2 failures)</pre>

Pour corrigez cela, il vous faut cleaner votre app de cette façon :

<pre>titanium clean</pre>

Re-buildez votre App TiShadow et tout est ok !

 [1]: http://rkueny.fr/developpement-mobile/titanium-appcelerator/tishadow-pour-titanium-appcelerator "TiShadow pour Titanium Appcelerator"
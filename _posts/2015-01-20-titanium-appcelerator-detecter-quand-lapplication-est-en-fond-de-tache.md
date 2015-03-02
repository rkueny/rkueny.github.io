---
title: 'Titanium Appcelerator &#8211; Détecter quand l&rsquo;application est en fond de tâche'
author: R.Kueny
layout: post
permalink: /developpement-mobile/titanium-appcelerator/titanium-appcelerator-detecter-quand-lapplication-est-en-fond-de-tache
categories:
  - Titanium Appcelerator
tags:
  - android
  - appcelerator
  - ios
  - resume
  - tâche de fond
  - titanium
---
Cela peut parfois être utile de savoir si votre application tourne en tâche de fond ou si l&rsquo;utilisateur y revient dessus par exemple.

Voici la façon de faire pour iOs :

<pre>Ti.App.addEventListener('pause',function(e){
   Ti.API.info("APP In background");
});

Ti.App.addEventListener('resume',function(e){
   Ti.API.info("APP alive");
});</pre>

Et pour Android :

<pre>Ti.Android.currentActivity.addEventListener('pause', function(e){
  Ti.API.info("APP in background");
});</pre>

<pre>Ti.Android.currentActivity.addEventListener('resume', function(e){
 Ti.API.info("APP alive");
});

</pre>

&nbsp;
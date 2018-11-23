---
title: "Changer le Return Key et le type de clavier avec Titanium Appcelerator"
author: R.Kueny
layout: post
permalink: /developpement-mobile/return-key-et-type-de-clavier-avec-titanium-appcelerator
categories:
  - Développement mobile
tags:
  - mobile
  - titanium
  - appcelerator
  - return key
  - clavier
  - type
intro: Voyons comment adapter le bouton du clavier et le type de clavier pour qu'il soit en adéquation avec l'action possible
header-img: img/iphones.png
---

Quoi de plus frustant lorsque vous utilisez votre clavier virtuel de ne pas pouvoir passer d'input en input lorsque vous remplissez un formulaire par exemple ? Ou quand vous arrivez au dernier input de ne pas pouvoir valider le formulaire directement depuis le clavier ?
Il serait bien aussi si vous voulez qu'il vous donne son numéro de téléphone, vous lui proposiez le clavier adapté.

Si vous voulez faciliter la vie de vos utilisateurs, et vous le voulez, on va voir comment faire cela très facilement avec Titanium Appcelerator.

Pour définir votre input et son clavier vous utilisez surement déjà ce code :

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10
});
{% endhighlight %}

C'est ici que vous pouvez spécifier le type de clavier avec `keyboardType` et le bouton avec `returnKeyType`. Cela donne :

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType: 	Ti.UI.RETURNKEY_NEXT 
});
{% endhighlight %}

Voyons maintenant en code et en image les différents types de clavier et de boutons.

## Les types de clavier

###Ti.UI.KEYBOARD_DEFAULT

Le clavier par défaut :

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT
});
{% endhighlight %}

![Ti.UI.KEYBOARD_DEFAULT](/img/2015-03-25/Ti.UI.KEYBOARD_DEFAULT.png){: .center-image }

###Ti.UI.KEYBOARD_EMAIL

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_EMAIL
});
{% endhighlight %}

![Ti.UI.KEYBOARD_EMAIL](/img/2015-03-25/Ti.UI.KEYBOARD_EMAIL.png){: .center-image }

###Ti.UI.KEYBOARD_ASCII

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_ASCII
});
{% endhighlight %}

![Ti.UI.KEYBOARD_ASCII](/img/2015-03-25/Ti.UI.KEYBOARD_ASCII.png){: .center-image }

###Ti.UI.KEYBOARD_URL

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_URL
});
{% endhighlight %}

![Ti.UI.KEYBOARD_URL](/img/2015-03-25/Ti.UI.KEYBOARD_URL.png){: .center-image }

###Ti.UI.KEYBOARD_NUMBER_PAD

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_NUMBER_PAD
});
{% endhighlight %}

![Ti.UI.KEYBOARD_NUMBER_PAD](/img/2015-03-25/Ti.UI.KEYBOARD_NUMBER_PAD.png){: .center-image }

###Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION
});
{% endhighlight %}

![Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION](/img/2015-03-25/Ti.UI.KEYBOARD_NUMBERS_PUNCTUATION.png){: .center-image }

###Ti.UI.KEYBOARD_PHONE_PAD

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_PHONE_PAD
});
{% endhighlight %}

![Ti.UI.KEYBOARD_PHONE_PAD](/img/2015-03-25/Ti.UI.KEYBOARD_PHONE_PAD.png){: .center-image }

Comme vous le voyez, il existe quand même des types de clavier très pratique. Voyons maintenant comment changer le bouton de retour.

Une des choses à savoir est que si vous utilisez des claviers qui n'affichent que des chiffres, vous ne pourrez malheureusement pas modifier le bouton :/

## Les types de "Return Key"

Les différents aperçus d'écrans sont fait avec le `Ti.UI.KEYBOARD_DEFAULT`.

###Ti.UI.RETURNKEY_DEFAULT

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_DEFAULT
});
{% endhighlight %}

![Ti.UI.RETURNKEY_DEFAULT](/img/2015-03-25/RETURNKEY_DEFAULT.png){: .center-image }

###Ti.UI.RETURNKEY_GO

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_GO
});
{% endhighlight %}

![Ti.UI.RETURNKEY_GO](/img/2015-03-25/RETURNKEY_GO.png){: .center-image }

###Ti.UI.RETURNKEY_GOOGLE

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_GOOGLE
});
{% endhighlight %}

![Ti.UI.RETURNKEY_GOOGLE](/img/2015-03-25/RETURNKEY_GOOGLE.png){: .center-image }

###Ti.UI.RETURNKEY_JOIN

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_JOIN
});
{% endhighlight %}

![Ti.UI.RETURNKEY_JOIN](/img/2015-03-25/RETURNKEY_JOIN.png){: .center-image }

###Ti.UI.RETURNKEY_NEXT

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_NEXT
});
{% endhighlight %}

![Ti.UI.RETURNKEY_NEXT](/img/2015-03-25/RETURNKEY_NEXT.png){: .center-image }

###Ti.UI.RETURNKEY_ROUTE

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_ROUTE
});
{% endhighlight %}

![Ti.UI.RETURNKEY_ROUTE](/img/2015-03-25/RETURNKEY_ROUTE.png){: .center-image }

###Ti.UI.RETURNKEY_SEARCH

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_SEARCH
});
{% endhighlight %}

![Ti.UI.RETURNKEY_SEARCH](/img/2015-03-25/RETURNKEY_SEARCH.png){: .center-image }

###Ti.UI.RETURNKEY_SEND

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_SEND
});
{% endhighlight %}

![Ti.UI.RETURNKEY_SEND](/img/2015-03-25/RETURNKEY_SEND.png){: .center-image }

###Ti.UI.RETURNKEY_YAHOO

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_YAHOO
});
{% endhighlight %}

![Ti.UI.RETURNKEY_YAHOO](/img/2015-03-25/RETURNKEY_YAHOO.png){: .center-image }

###Ti.UI.RETURNKEY_DONE

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_DONE
});
{% endhighlight %}

![Ti.UI.RETURNKEY_DONE](/img/2015-03-25/RETURNKEY_DONE.png){: .center-image }

###Ti.UI.RETURNKEY_EMERGENCY_CALL

{% highlight javascript %}
var nameText = Titanium.UI.createTextField({
  color:			'#ffffff',
  hintText: 		'Nom',
  clearOnEdit: 		true,
  paddingLeft: 		10,
  keyboardType:		Ti.UI.KEYBOARD_DEFAULT,
  returnKeyType:    Ti.UI.RETURNKEY_EMERGENCY_CALL
});
{% endhighlight %}

![Ti.UI.RETURNKEY_EMERGENCY_CALL](/img/2015-03-25/RETURNKEY_EMERGENCY_CALL.png){: .center-image }

Tout les aperçus d'écrans ont été faits sous l'émulateur iOs (clavier QWERTY). Si vous le faites sous votre iphone vous aurez l'équivalent en français bien entendu.

Vous n'avez plus d'excuses pour ne pas faciliter la vie à vos utilisateurs désormais !


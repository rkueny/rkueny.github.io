---
title: "Forcer l'orientation de l'application pour iOS et Android avec Titanium"
author: R.Kueny
layout: post
permalink: /developpement-mobile/forcer-l-orientation-de-l-application-pour-ios-et-android
categories:
  - Développement mobile
tags:
  - mobile
  - titanium
  - appcelerator
  - device
  - orientation
  - ios
  - android
  - google
  - apple
intro: Vous avez déjà dû vouloir forcer l'orientation de votre application. Nous allons rapidement voir comment faire cela pour iOS et Android.
header-img: img/post-bg-device-orientation.jpg
---

Vous avez déjà dû vouloir forcer l'orientation de votre application. Nous allons rapidement voir comment faire cela pour iOS et Android.

## Forcer l'orientation pour iOS

Commençons par le plus simple. En effet, pour iOS, il vous suffit d'enlever quelques lignes. Cela se passe dans le fichier `tiapp.xml` :

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<ti:app xmlns:ti="http://ti.appcelerator.org">
    <ios>
        <plist>
            <dict>
                <key>UISupportedInterfaceOrientations~iphone</key>
                <array>
                    <string>UIInterfaceOrientationPortrait</string>
                </array>
                <key>UISupportedInterfaceOrientations~ipad</key>
                <array>
                    <string>UIInterfaceOrientationPortrait</string>
                    <string>UIInterfaceOrientationPortraitUpsideDown</string>
                    <string>UIInterfaceOrientationLandscapeLeft</string>
                    <string>UIInterfaceOrientationLandscapeRight</string>
                </array>
            </dict>
        </plist>
    </ios>
</ti:app>
{% endhighlight %}

Si vous voulez n'avoir que l'orientation portrait il vous suffit d'enlever les lignes :
`<string>UIInterfaceOrientationLandscapeLeft</string>` et `<string>UIInterfaceOrientationLandscapeRight</string>`.

Pas bien compliqué n'est-ce pas ? Passons à Android.

## Forcer l'orientation pour Android

L'opération est un poil plus compliquée. Tout d'abord, buildez votre application. Une fois le build fini, ouvrez le fichier `tiapp.xml`. Remplacez la ligne :
`<android xmlns:android="http://schemas.android.com/apk/res/android"/>`
par 
{% highlight xml %}
<android xmlns:android="http://schemas.android.com/apk/res/android">
  <manifest>
  </manifest>
</android>
{% endhighlight %}

Ouvrez ensuite le fichier `<PROJECT_NAME>/build/android/AndroidManifest.xml` et copiez le noeud <application> qui contient les noeuds <activity>.

Par exemple :

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.myapp.app" android:versionCode="1" android:versionName="1.0">
  <uses-sdk android:minSdkVersion="10" android:targetSdkVersion="19"/>
 
    <!-- Start Copying Here -->
 
  <application android:icon="@drawabe/appicon" android:label="MyApp" android:name="MyappApplication" android:debuggable="false" android:theme="@style/Theme.AppCompat">
    <activity android:name=".MyappActivity" android:label"@string/app_name" android:theme="@style/Theme.Titanium" android:configChanges="keyboardHidden|orientation|screenSize">
      <intent-filter>
        <action android:name="android.intent.action.MAIN"/>
        <category android:name="android.intent.category.LAUNCHER"/>
      </intent-filter>
    </activity>
    <activity android:name="org.appcelerator.titanium.TiActivity" android:configChanges="keyboardHidden|orientation|screenSize"/>
    <activity android:name="org.appcelerator.tianium.TiTranslucentActivity" android:configChanges="keyboardHidden|orientation|screenSize" android:theme="@style/Theme.AppCompat.Translucent"/>
    <activity android:name="ti.modules.titanium.ui.android.TiPreferencesActivity" android:configChanges="screenSize"/>
  </application>
 
    <!-- Stop Copying Here -->
  <uses-permission android:name="android.permission.INTERNET"/>
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
  <uses-permission android:name="android.permission.ACCESS_MOCK_LOCATION"/>
</manifest>
{% endhighlight %}

Collez cela entre les <manifest></manifest> de votre fichier `tiapp.xml`. Ensuite, dans chaque noeud <activity> ajoutez : 

- android:screenOrientation="VALUE"

La liste des valeurs possibles est disponible <a href="http://developer.android.com/guide/topics/manifest/activity-element.html#screen" target="_blank">sur la documentation officielle</a>. ("portrait", "landscape", etc...).

Cela donnerait par exemple :

{% highlight xml %}
<android xmlns:android="http://schemas.android.com/apk/res/android">
  <manifest>
    <application android:icon="@drawabe/appicon" android:label="MyApp" android:name="MyappApplication" android:debuggable="false" android:theme="@style/Theme.AppCompat">
      <activity android:screenOrientation="portrait" android:name=".MyappActivity" android:label"@string/app_name" android:theme="@style/Theme.Titanium" android:configChanges="keyboardHidden|orientation|screenSize">
        <intent-filter>
          <action android:name="android.intent.action.MAIN"/>
          <category android:name="android.intent.category.LAUNCHER"/>
        </intent-filter>
      </activity>
      <activity android:screenOrientation="portrait" android:name="org.appcelerator.titanium.TiActivity" android:configChanges="keyboardHidden|orientation|screenSize"/>
      <activity android:screenOrientation="portrait" android:name="org.appcelerator.tianium.TiTranslucentActivity" android:configChanges="keyboardHidden|orientation|screenSize" android:theme="@style/Theme.AppCompat.Translucent"/>
      <activity android:screenOrientation="portrait" android:name="ti.modules.titanium.ui.android.TiPreferencesActivity" android:configChanges="screenSize"/>
    </application>
  </manifest>
</android>
{% endhighlight %}

C'est bon, vous savez désormais comment indiquer à votre application iOS ou Android l'orientation que vous désirez.

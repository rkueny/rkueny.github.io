---
title: '[Tips &#8211; Symfony2] Coloration de la console &#8211; app/console sur mac'
author: R.Kueny
layout: post
permalink: /developpement-web/tips-symfony2-coloration-de-la-console-appconsole-sur-mac
categories:
  - Développement Web
  - Tips
---
C&rsquo;est tout de même plus sympa d&rsquo;avoir la coloration dans votre console lorsque vous utilisez php app/console avec Symfony2.

<p style="text-align: center;">
  <a href="http://rkueny.fr/wp-content/uploads/2013/04/symfony2.png" rel="lightbox[1879]"><img class="size-full wp-image-1882 aligncenter" alt="Symfony2" src="http://rkueny.fr/wp-content/uploads/2013/04/symfony2.png" width="323" height="111" /></a>
</p>

Sur mac, rien de bien compliqué, il vous faut le paquet **php-posix**.

Pour ça :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="batch" style="font-family:monospace;">sudo port install php5-posix</pre>
      </td>
    </tr>
  </table>
</div>

Et voilà, rien d&rsquo;autre à faire.
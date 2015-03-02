---
title: '[Tips] Paginer avec Symfony2 et Doctrine2'
author: R.Kueny
layout: post
permalink: /developpement-web/tips-paginer-avec-symfony2-et-doctrine2
categories:
  - Développement Web
  - Tips
tags:
  - A voir
  - dev
  - pagination
  - php
  - symfony2
---
Lorsque l&rsquo;on crée un site, le &laquo;&nbsp;problème&nbsp;&raquo; de la pagination apparait souvent. J&rsquo;ai souvent vu dans des projets Symfony2 les personnes utiliser le bundle de KNP KnpPaginatorBundle (<a title="Github Repo KnpPaginatorBundle" href="https://github.com/KnpLabs/KnpPaginatorBundle" target="_blank">Repo Github</a>).

Le problème de ce bundle est qu&rsquo;il charge et hydrate tout les objets avant de faire la pagination. Ça va si vous n&rsquo;avez pas beaucoup d&rsquo;items, mais avec un très gros volume &#8230; c&rsquo;est très loin d&rsquo;être le top.

<div id="attachment_1926" style="width: 310px" class="wp-caption aligncenter">
  <a href="http://rkueny.fr/wp-content/uploads/2013/07/ca-rame-au-gouter.jpg" rel="lightbox[1899]"><img class="size-full wp-image-1926" alt="Ça rame" src="http://rkueny.fr/wp-content/uploads/2013/07/ca-rame-au-gouter.jpg" width="300" height="300" /></a>
  
  <p class="wp-caption-text">
    Ça rame &#8230;
  </p>
</div>

<!--more-->

Je vous propose une autre solution, bien plus efficace et propre à mon goût. Il s&rsquo;agit d&rsquo;utiliser le paginator de Doctrine2.

<div id="attachment_1928" style="width: 222px" class="wp-caption aligncenter">
  <a href="http://rkueny.fr/wp-content/uploads/2013/07/Capture-d’écran-2013-07-31-à-09.58.22.png" rel="lightbox[1899]"><img class="size-full wp-image-1928" alt="Paginons, paginons !" src="http://rkueny.fr/wp-content/uploads/2013/07/Capture-d’écran-2013-07-31-à-09.58.22.png" width="212" height="60" /></a>
  
  <p class="wp-caption-text">
    Paginons, paginons !
  </p>
</div>

Pour cela, ce n&rsquo;est pas très compliqué. Il vous faut passer par le Query builder, et ajouter (dans votre Repository bien sûr) :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
4
</pre>
      </td>
      
      <td class="code">
        <pre class="php" style="font-family:monospace;"><span style="color: #000088;">$query</span><span style="color: #339933;">-&gt;</span><span style="color: #004000;">setFirstResult</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$page</span><span style="color: #339933;">-</span><span style="color: #cc66cc;">1</span><span style="color: #009900;">&#41;</span> <span style="color: #339933;">*</span> <span style="color: #000088;">$nombreParPage</span><span style="color: #009900;">&#41;</span>
    <span style="color: #339933;">-&gt;</span><span style="color: #004000;">setMaxResults</span><span style="color: #009900;">&#40;</span><span style="color: #000088;">$nombreParPage</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #b1b100;">return</span> <span style="color: #000000; font-weight: bold;">new</span> Paginator<span style="color: #009900;">&#40;</span><span style="color: #000088;">$query</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span></pre>
      </td>
    </tr>
  </table>
</div>

Une fois ceci fait, dans votre vue (Twig)

<div class="wp_syntax">
  <table>
    <tr>      
      <td class="code">
        <pre class="html" style="font-family:monospace;">{% for p in range(1, nombrePage) %}
  &lt;li{% if p == page %} class="active"{% endif %}&gt;
    &lt;a href="\{\{ path('sdzblog_accueil', {'page': p}) }}"&gt;\{\{ p }}&lt;/a&gt;
  &lt;/li&gt;
{% endfor %}</pre>
      </td>
    </tr>
  </table>
</div>

Et voilà, Enjoy !
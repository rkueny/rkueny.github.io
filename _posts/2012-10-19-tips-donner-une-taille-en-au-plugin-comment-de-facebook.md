---
title: '[Tips] Donner une taille en % au plugin Comment de Facebook'
author: R.Kueny
layout: post
permalink: /developpement-web/facebook-developpement-web/tips-donner-une-taille-en-au-plugin-comment-de-facebook
categories:
  - Facebook
  - Tips
---
Un petit tips où j&rsquo;ai un peu galéré. Si vous voulez par exemple que votre module de commentaire Facebook prenne toute la largeur de la page, voici le style css à appliquer :

<div class="wp_syntax">
  <table>
    <tr>
      <td class="line_numbers">
        <pre>1
2
3
</pre>
      </td>
      
      <td class="code">
        <pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.fbcomments</span><span style="color: #00AA00;">,</span> <span style="color: #6666ff;">.fb_iframe_widget</span><span style="color: #00AA00;">,</span> .fb_iframe_widget<span style="color: #00AA00;">&#91;</span>style<span style="color: #00AA00;">&#93;</span><span style="color: #00AA00;">,</span> <span style="color: #6666ff;">.fb_iframe_widget</span> iframe<span style="color: #00AA00;">&#91;</span>style<span style="color: #00AA00;">&#93;</span><span style="color: #00AA00;">,</span> <span style="color: #6666ff;">.fbcomments</span> iframe<span style="color: #00AA00;">&#91;</span>style<span style="color: #00AA00;">&#93;</span><span style="color: #00AA00;">,</span> <span style="color: #6666ff;">.fb_iframe_widget</span> span<span style="color: #00AA00;">&#123;</span>
<span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span> <span style="color: #933;">100%</span> !important<span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

Bon boulot avec ça maintenant !
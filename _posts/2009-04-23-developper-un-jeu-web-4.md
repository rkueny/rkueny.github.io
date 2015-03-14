---
title: Développer un jeu web (4)
author: R.Kueny
layout: post
permalink: /developpement-web/developper-un-jeu-web-4
categories:
  - Développement Web
  - Jeu Web
---
4ème jour, 4ème article.

J&rsquo;espère que les trois premiers vous ont plu. J&rsquo;ai quelques critiques, des encouragements, je pense que cette série d&rsquo;articles sert donc je continue :).

J&rsquo;ai annoncé dans le dernier article que nous allions aborder la conception qui se tourne vers les joueurs. Cela peut sembler flou et ça l&rsquo;ait. Cet article va aborder plusieurs points tourné vers l&rsquo;utilisateur. En effet, il ne faut pas oublier que votre jeu s&rsquo;adresse aux joueurs. Ce n&rsquo;est pas qu&rsquo;un défi technique, ou une aventure.

De part votre thème vous avez déjà choisi de viser un panel précis de joueurs. Mais comment les contenter ? Comment faire que votre jeu leur plaise ? Nous allons abordé ici ces point et nous attarder sur ce qu&rsquo;il faut absolument dans un jeu. Etant donné que je parle de la conception d&rsquo;un jeu web, et non pas d&rsquo;un style défini, certains point seront à laisser pour votre propre jeu.

<!--more-->

  
**Créateur de jeu web, mais avant tout serviteur**

Je l&rsquo;ai déjà dit dans un précédent billet mais le premier point est le design de l&rsquo;accueil. Il vous faut le soigner. L&rsquo;utilisateur se fait une idée du site de part son visu. On ne voit pas le moteur de jeu ni le concept lors de la première visite. Sur ce point, je ne pourrai pas vous aider malheuresement ! Je peux tout de même vous dire qu&rsquo;il y a deux façon de concevoir sa page d&rsquo;accueil.

&#8211; Immerger le joueur dans le jeu avant même son inscription. Dès la première page le joueur est dans le jeu. Pas de blabla sur le développement, sur la vie du chien de votre belle-mère ou billet de genre. On peut citer labrute.fr par exemple. Si vous ne voyez pas le concept voici un petit exemple.

Vous faites un jeu où un dangereuse virus se propage. Tout les gens doivent prendre un vaisseau pour quitter la terre et coloniser une nouvelle planète. Il peut y avoir sur votre page d&rsquo;accueil un lien &laquo;&nbsp;Je suis déjà parti&nbsp;&raquo; et un autre &laquo;&nbsp;Mettez moi le vaccin et go vers l&rsquo;espace&nbsp;&raquo;. Vous voyez le genre ? Ainsi l&rsquo;utilisateur n&rsquo;est plus sur un site mais sur un jeu à part entière.

&#8211; Vous pouvez aussi mettre une page d&rsquo;accueil normale. C&rsquo;est ce que choisissent la plupart des sites. Cela permet de tenir au courant les visiteurs de l&rsquo;évolution du site, de votre vie si vous le désirez aussi.

Les deux méthodes se valent même si je penche plutôt vers l&rsquo;immersion totale du joueur. Pour tenir les joueurs au courant un blog de développement fait l&rsquo;affaire je pense. A vous de choisir ! Et oui, c&rsquo;est bien d&rsquo;être le créateur vous pouvez choisir ce que vous voulez !

Une fois le premier aperçu passé ne perdez pas le visiteur ! Le design, l&rsquo;ergonomie et la navigation sont très liés. Ne polluez pas le joueur par des liens de partout, des boutons sans logique etc&#8230; L&rsquo;interface de votre jeu doit être pensée jusque dans les détails. N&rsquo;oubliez pas que même si vous avez la meilleure façon de résoudre les combats par exemple, il faut que votre interface soit intuitive et confortable.

De nos jours, beaucoup de joueurs jugent un jeu sur son interface, son design. Pouvons-nous les blamer ? Que voient-ils ? Tous ne sont pas des développeur web en puissance ! J&rsquo;avoue que moi-même je ne joue pas à certains jeux super bien pensé, car non-ergonomique,non-intuitif et franchement moche ! Prenez donc le temps de penser à cela c&rsquo;est très important.

Continuons le cheminement de l&rsquo;utilisateur. Avant de s&rsquo;inscrire le joueur aime savoir si cela vaut le coup. Il y a plusieurs façons de faire pour lui montrer un aperçu.

&#8211; le compte test. Un login et un mot de passe de test pour lui montrer un peu comment est le jeu. Personnellement je n&rsquo;aime pas ça. On n&rsquo;est pas audébut du jeu sur ce compte, on fait un peu clic-clic et voilà. Mais je comprends que des personnes mettent cela, après tout on voit vraiment le jeu !

&#8211; une page contenant des screenshots. On voit ainsi l&rsquo;interface du jeu une fois que l&rsquo;on est connecté. Il faut qu&rsquo;il y en ait quelqu&rsquo;uns, qu&rsquo;ils montrent bien les différentes phases du jeu et qu&rsquo;ils soient visibles en grande taille (plein écran par exemple). Cela est une solution sympa et rapide à mettre en place.

&#8211; ma préférée, la visite guidée. Un sorte de mini-tutoriel du jeu. Le site chicken-fight le propose (pas très bien mis en page je trouve). Il y a aussi des screenshots mais accompagnés d&rsquo;explication, d&rsquo;aide. C&rsquo;est un peu plus long à mettre en place mais c&rsquo;est assez représentatif du jeu je trouve.

Allez plus que deux points à aborder et nous arriverons à la fin de cet article ^^ courage ! Nous allons parlé de l&rsquo;inscription et des premières minutes dans le jeu.

Au niveau de l&rsquo;inscription à votre jeu deux écoles s&rsquo;affrontent. Certains disent que plus l&rsquo;inscription est développée plus cela montre une profondeur de jeu, et il y a ceux qui fuient dès qu&rsquo;il y a plus de trois champs. De mon côté je conseille un petit mix des deux. Je conseil une inscription en plusieurs temps.

La première étape doit être rapide, il faut que les visiteurs puissent rapidement jouer s&rsquo;ils veulent, et petit à petit dans le jeu vous étoffez les informations. Le plus bel exemple est le jeu &laquo;&nbsp;Morrowind&nbsp;&raquo; (ce n&rsquo;est pas un jeu web). Vous débarquez d&rsquo;un bateau, un homme vous demande quel est votre nom, puis on vous demande votre race pour un recensement. Ensuite on vous demande votre travail (classe) pour vous ficher. Et entre temps vous avez déjà eu le temps de diriger votre jouer, de voir le décor etc&#8230; Je trouve cela excellent et très role-play.

Ensuite, l&rsquo;inscription finie (courte, longue ou mix) le joueur se retrouve tout seul devant votre jeu. Dur !!! Pour vous tout est clair, simple (enfin je l&rsquo;espère) mais pour lui&#8230; c&rsquo;est pas le même topo. Il vous faut guider le joueur. Vous pouvez proposer un tutoriel par exemple. Un site qui le fait très bien est le nouveau jeu de Zeffyr : [Raid Of Chaos][1].

J&rsquo;ai abandonné le jeu adelhian.net, par exemple, car je ne savais pas trop ce qu&rsquo;il fallait faire. Pourtant, très beau graphisme, très belle ergonomie mais voilà&#8230; j&rsquo;aime pas être perdu <img src="http://rkueny.fr/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley" />

Je ne peux que vous conseiller d&rsquo;essayer le jeu [Raid Of Chaos][1]. Je pense que c&rsquo;est un très bon exemple pour ce tutoriel. Inspirez vous en !
J&rsquo;espère que vous avez saisi les différentes pistes que je vous ai fournies. C&rsquo;est une étape très importante et qui demande du travail. Quand je vous disais que ce n&rsquo;est pas facile de créer un jeu !!!

Je tiens aussi à dire que cette série d&rsquo;article se concentre sur la conception théorique d&rsquo;un jeu. Après cette série de billets il y aura d&rsquo;autres articles (indépendants) sur la programmation d&rsquo;un jeu web. Je dis cela au vu des différentes remarques que l&rsquo;on m&rsquo;a faites.

See you later !

 [1]: http://www.raidofchaos.com

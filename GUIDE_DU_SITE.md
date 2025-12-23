# Guide d'Utilisation et de Modification du Site - Saint Hilaire 46

Ce fichier rassemble toutes les instructions pour modifier et faire vivre votre site web. Il est enregistré dans votre dossier, donc vous ne le perdrez plus !

## 1. Structure du Site
- **index.html** : C'est la page d'accueil principale. Elle contient le menu, la présentation, la section Botanique (Fleurs), et la liste des articles récents.
- **bernadette_benne.html** : Exemple d'une page d'article complet (l'article sur Bernadette).
- **modele_article.txt** : Un modèle à copier-coller pour créer de nouveaux "blocs" d'articles sur la page d'accueil.
- **images/** : Le dossier où vous devez déposer toutes vos photos.
- **assistant.html** : Une page qui nous a servi d'outil (peut être ignorée pour l'instant).

---

## 2. Comment modifier le texte de la page d'accueil (index.html)

1. Ouvrez `index.html` dans votre éditeur.
2. Utilisez la fonction "Rechercher" (Ctrl+F ou Cmd+F) pour trouver le texte que vous voulez changer (ex: "Notre Héritage").
3. Modifiez le texte qui se trouve **entre les balises** (les chevrons `<` et `>`).
   * *Exemple :* `<h2>Notre Héritage</h2>` -> changez juste "Notre Héritage".
4. Enregistrez (Ctrl+S ou Cmd+S).

---

## 3. Comment ajouter un nouvel article "Actualité"

Pour ajouter une nouvelle carte dans la section "Actualités" de la page d'accueil :

1. Ouvrez le fichier `modele_article.txt`.
2. Copiez tout son contenu.
3. Ouvrez `index.html`.
4. Cherchez la section où se trouvent les articles existants (cherchez le texte "Nos Actualités").
5. Collez le bloc copié à la suite des autres articles (juste avant la fermeture de la grille ou du conteneur).
6. **Personnalisez** :
   - Changez le chemin de l'image (`src="images/votre_image.jpg"`).
   - Changez la date.
   - Changez le titre.
   - Changez le résumé.

---

## 4. Section Botanique (Fleurs)

Pour ajouter ou modifier une fleur :

1. Cherchez "Patrimoine Naturel" ou le nom d'une fleur existante dans `index.html`.
2. Chaque fleur est un bloc. Pour en ajouter une, copiez le bloc d'une fleur existante et collez-le à la suite.
3. Pour l'image, assurez-vous que votre fichier photo est dans le dossier `images`.
4. Mettez à jour le `src="images/nom_de_la_fleur.jpg"` et le texte descriptif.

---

## 5. Astuces Générales

- **Images** : Essayez d'utiliser des noms de fichiers simples sans espaces ni accents (ex: `fleur_rouge.jpg` plutôt que `Fleur rouge (1).jpg`).
- **Sauvegarde** : Pensez à enregistrer vos fichiers régulièrement.
- **Prévisualisation** : Laissez votre navigateur ouvert sur le site et rafraîchissez la page (touche F5 ou la flèche ronde) après chaque enregistrement pour voir le résultat.

*Si vous avez un doute, demandez-moi, je suis là pour aider !*

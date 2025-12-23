#!/bin/zsh

# Script pour automatiser le push vers GitHub
# Usage: ./deploy.sh "Votre message de mise à jour"

# 1. Vérifier si un message de commit a été fourni
if [ -z "$1" ]
then
  echo "Erreur : Vous devez fournir un message de mise à jour entre guillemets."
  echo "Exemple : ./deploy.sh \"Ajout de nouvelles photos\""
  exit 1
fi

echo "🚀 Préparation de l'envoi vers GitHub..."

# 2. Ajouter tous les fichiers
git add .

# 3. Créer le commit avec le message passé en argument
git commit -m "$1"

# 4. Envoyer vers GitHub
git push

echo "✅ Terminé ! Votre site sera mis à jour dans quelques instants."
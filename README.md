# Argent Bank - Système d'Authentification Bancaire

Ce projet consistait à créer le tableau de bord des utilisateurs d'Argent Bank en utilisant **React** et **Redux**. L'objectif principal était de permettre l'authentification des clients et la gestion de leur profil de manière sécurisée et fluide.

## 🛠️ Fonctionnalités implémentées
* **Authentification sécurisée** : Page de connexion avec gestion du Token (JWT) pour maintenir la session utilisateur.
* **Gestion d'état globale (Redux)** : Utilisation de Redux Toolkit pour stocker et diffuser les informations de l'utilisateur dans toute l'application.
* **Profil Utilisateur** : Possibilité pour l'utilisateur connecté de consulter ses comptes et de modifier son pseudonyme via une interface dédiée.
* **Persistance des données** : Interaction avec une API REST pour les opérations de connexion et de mise à jour du profil.

## 🚀 Compétences techniques
* **React** : Développement de composants fonctionnels et routage.
* **Redux Toolkit** : Architecture du Store, création de Slices et gestion des actions asynchrones (Thunk).
* **API REST** : Utilisation de Swagger pour comprendre les points de terminaison (endpoints) de l'API et effectuer les appels `POST` et `PUT`.
* **CSS / Sass** : Stylisation rigoureuse basée sur les fichiers fournis pour une cohérence visuelle bancaire.

## ⚙️ Architecture du projet
L'application utilise une approche **State-First**. Le flux de données est centralisé dans Redux, garantissant que l'interface utilisateur est toujours synchronisée avec les données du serveur.

## 🛠️ Outils utilisés
* **React**
* **Redux / Redux Toolkit**
* **React Router**
* **Axios / Fetch API**
* **Swagger** (pour la documentation API)

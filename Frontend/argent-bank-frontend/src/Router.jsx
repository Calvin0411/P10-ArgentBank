const express = require('express');
const router = express.Router();

// Exemple de modèle utilisateur
const User = require('./models/User'); // Assurez-vous que le chemin est correct

// Route pour le login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Ici, vous devrez vérifier les identifiants
  try {
    // Remplacez par votre logique d'authentification
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // En cas de succès, renvoyez l'utilisateur
    res.json(user);
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;


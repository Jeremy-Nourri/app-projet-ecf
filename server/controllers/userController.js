const { Utilisateur } = require('../config/database');
const bcrypt = require('bcrypt');

const userController = {
    signUp: async function (req, res) {
        try {
            const { nom, prenom, email, password } = req.body;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const data = await Utilisateur.create({ nom, prenom, email, password: hashedPassword });

            res.status(201).json(data);
        }
        catch (error) {
            res.status(400).json({ message: "Erreur lors de la création d'un nouvel utilisateur", error: error.message });
        }
    }
}

module.exports = userController;
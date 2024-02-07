const { Projet } = require('../config/database')

const projectController = {
    createProject: async function (req, res) {
        try {
            const { denomination, details, userId } = req.body;
            await Projet.create({ denomination, details, utilisateur_id: userId });
            res.status(201).json({ message: "Projet créé avec succès"});
        }
        catch (error) {
            res.status(400).json({ message: "Erreur lors de la création d'un nouveau projet", error: error.message });
        }
    }
}

module.exports = projectController;
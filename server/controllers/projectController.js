const { Projet } = require('../config/database')

const projectController = {
    
    createProject: async function (req, res) {
        try {
            const { denomination, details, userId } = req.body;
            if (!denomination && !details) {
                return res.status(400).json({ message: "La dénomination ou le détails sont requis" });
              }
            await Projet.create({ denomination, details, utilisateur_id: userId });
            res.status(201).json({ message: "Projet créé avec succès"});
        }
        catch (error) {
            res.status(400).json({ message: "Erreur lors de la création d'un nouveau projet", error: error.message });
        }
    },

    getProjectsByUser: async function (req, res) {
        try {
            const { id } = req.params;
            const projet = await Projet.findAll({ where: { utilisateur_id: id } });
            res.status(201).json(projet);
        }
        catch (error) {
            res.status(400).json({ message: "Erreur lors de la récupération du projet", error: error.message });
        }
    },
    updateProject: async function (req, res) {
        try {
          const { id, projectId } = req.params;
          const { denomination, details } = req.body;
    
          if (!denomination) {
            return res.status(400).json({ message: "Vous devez ajouter un titre à votre projet" });
          }
    
          const project = await Projet.findOne({ where: { utilisateur_id: id, id: projectId } });
    
          if (!project) {
            return res.status(404).json({ message: "Projet non trouvé" });
          }

          
          const newProject = await task.update(req.body)

          res.json({ message: "Tâche mise à jour avec succès", newProject });

    
          res.json({ message: "Projet mise à jour avec succès", project });
        } catch (error) {
          res.status(400).json({ message: "Erreur lors de la mise à jour du projet", error: error.message });
        }
    },

    deleteProject: async function (req, res) {
        try {
            const { id, projectId } = req.params;
            await Projet.destroy(
                {
                    where: { 
                        utilisateur_id: id,
                        id: projectId
                    }
                });
            res.status(201).json({ message: "Projet supprimé avec succès"});
        }
        catch (error) {
            res.status(400).json({ message: "Erreur lors de la suppression du projet", error: error.message });
        }
    },
}

module.exports = projectController;
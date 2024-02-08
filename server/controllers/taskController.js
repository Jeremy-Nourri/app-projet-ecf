const { Tache } = require("../config/database");

const taskController = {

    createTask: async function (req, res) {
        try {
            const {
                titre,
                description,
                priorite,
                statut,
                dateEcheance,
                projetId,
                utilisateurId,
            } = req.body;

        if (!titre && !description && !statut) {
            return res.status(400).json({
                message: "Le titre, la description et le statut sont requis",
            });
        }

        const tache = await Tache.create({
            titre,
            description,
            priorite,
            statut,
            date_echeance: dateEcheance,
            projet_id: projetId,
            utilisateur_id: utilisateurId,
        });
        res.status(201).json({ 
            tache,
            message: "Tâche créée avec succès" 
        });

        } catch (error) {
            res.status(400).json({
                message: "Erreur lors de la création d'une nouvelle tâche",
                error: error.message,
            });
        }
    },

    updateTask: async function (req, res) {
        try {
            const { projectId, taskId } = req.params;
            const { titre, description, statut } = req.body;

            if (!titre && !description && !statut) {
                return res.status(400).json({
                    message: "Le titre, la description et le statut sont requis",
                });
            }

            const task = await Tache.findOne({
                where: { id: taskId, projet_id: projectId },
            });

            if (!task) {
                return res.status(404).json({ message: "Tâche non trouvée" });
            }

            const newTask = await task.update(req.body)

            res.json({ message: "Tâche mise à jour avec succès", newTask });

        } catch (error) {
            res.status(400).json({
                message: "Erreur lors de la mise à jour de la tâche",
                error: error.message,
            });
        }
    },

    deleteTask: async function (req, res) {
        try {
            const { projectId, taskId } = req.params;

            await Tache.destroy(
                {
                    where: { 
                        projet_id: projectId,
                        id: taskId
                    }
                });
            res.status(201).json({ message: "Tâche supprimée avec succès"});
        }
        catch (error) {
            res.status(400).json({ message: "Erreur lors de la suppression de la tâche", error: error.message });
        }
    },
};

module.exports = taskController;

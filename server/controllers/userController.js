const { Utilisateur } = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const expiryDate = new Date(Date.now() + 60 * 60 * 7000)

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
    },

    login: async function (req, res) {
        try {
            const { email, password } = req.body;
            const user = await Utilisateur.findOne({ where: { email } });
            const validPassword = await bcrypt.compare(password, user.password);

            if (!user || !validPassword) {
                return res.status(401).json({ message: "Email ou/et mot de passe invalide(s)" });
            }

            const token = jwt.sign({ userdId: user.id }, process.env.RANDOM_TOKEN_SECRET, { expiresIn: "1d" });

            res.cookie("accessToken", token, {
                httpOnly: true,                
                secure: true,
                sameSite: "none",
                expires: expiryDate
            });
        
            res.header('Authorization', `Bearer ${token}`).json({ message: `${user.prenom} vous étes connecté` });
        } 
        catch (error) {
            res.status(400).json({ message: "Erreur lors de l'authentification de l'utilisateur", error: error.message });
        }
    },

    getUser: async function (req, res) {
        try {
            const user = await Utilisateur.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Utilisateur non trouvé' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération du profil", error: error.message })
        }
    }
}


module.exports = userController;
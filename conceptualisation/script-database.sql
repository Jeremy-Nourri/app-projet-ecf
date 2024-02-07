CREATE DATABASE projet;

USE projet;

CREATE TABLE Utilisateur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE Projet (
    id INT PRIMARY KEY AUTO_INCREMENT,
    denomination VARCHAR(255) NOT NULL,
    details TEXT,
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES Utilisateur(id)
);

CREATE TABLE Tache (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    priorite INT,
    statut BOOLEAN NOT NULL,
    date_echeance DATE,
    projet_id INT,
	utilisateur_id INT,
    FOREIGN KEY (projet_id) REFERENCES Projet(id),
	FOREIGN KEY (utilisateur_id) REFERENCES Utilisateur(id)
);

const competenceData = {
    developpement: {
        code: "Compétence 1",
        title: "Réaliser un développement d'application",
        summary: "Concevoir et implémenter une solution répondant à un besoin utilisateur.",
        description:
            "Cette compétence regroupe mes projets de programmation et de création d'outils. J'y montre ma capacité à structurer une application, à faire évoluer une interface et à livrer une solution fonctionnelle.",
        projects: [
            {
                code: "S1.01",
                title: "Sokoban en C",
                summary: "Développement du jeu Sokoban en langage C avec logique de déplacement et affichage terminal.",
                tech: "C, logique de jeu, terminal",
                image: "images/competences/S1.01Sokoban.png",
                imageAlt: "Capture d'écran du projet S1.01 Sokoban",
            },
            {
                code: "S1.05",
                title: "Argentine - site statique",
                summary: "Création d'un site vitrine statique autour d'un pays, avec mise en page et contenu organisé.",
                tech: "HTML, CSS, mise en page responsive",
                image: "images/competences/SAE1.05Argentine.png",
                imageAlt: "Capture d'écran du projet S1.05 Argentine",
            },
        ],
    },
    optimisation: {
        code: "Compétence 2",
        title: "Optimiser des applications informatiques",
        summary: "Produire un code plus fiable, lisible et adapté à son contexte d'utilisation.",
        description:
            "Ici, je peux détailler mes efforts de refactorisation, mes choix d'architecture et les améliorations apportées à un projet existant pour le rendre plus clair, plus robuste et plus efficace.",
        image: null,
        projects: [
            {
                code: "C2P1",
                title: "Exploration algorithmique",
                summary: "Analyse et comparaison de solutions pour choisir une approche plus pertinente.",
                tech: "Algorithmique, tests, comparaison de performances",
                image: "images/competences/exploration_algorithmique_dun_probleme.png",
                imageAlt: "Capture du projet d'exploration algorithmique",
            },
            {
                code: "C2P2",
                title: "Site dynamique",
                summary: "Mise en place d'un environnement Apache, PHP et SQL pour faire évoluer un site.",
                tech: "Apache, PHP, SQL",
                image: "images/competences/Instaladion_dun_service_reseau_apache.png",
                imageAlt: "Capture du projet Apache",
            },
        ],
    },
    systemes: {
        code: "Compétence 3",
        title: "Administrer des systèmes communicants complexes",
        summary: "Comprendre l'environnement technique, le déploiement et les contraintes matérielles.",
        description:
            "Cette page peut présenter mes expériences autour des environnements Linux, du déploiement sur Raspberry Pi et de la configuration de systèmes communicants dans un cadre pédagogique.",
        image: null,
        projects: [
            {
                code: "C3P1",
                title: "Environnement de travail",
                summary: "Mise en place d'un environnement avec Bash, PHP et Docker pour travailler proprement.",
                tech: "Bash, PHP, Docker",
                image: "images/competences/poste_pour_le_developpement.png",
                imageAlt: "Capture du poste pour le développement",
            },
            {
                code: "C3P2",
                title: "Déploiement web",
                summary: "Installation et configuration d'un serveur pour faire fonctionner une application dynamique.",
                tech: "Apache, PHP, SQL",
                image: "images/competences/Instaladion_dun_service_reseau_apache.png",
                imageAlt: "Capture de l'installation d'un service réseau Apache",
            },
        ],
    },
    donnees: {
        code: "Compétence 4",
        title: "Gérer des données de l'information",
        summary: "Collecter, structurer, manipuler et exploiter des données utiles à un projet.",
        description:
            "Cette compétence met en avant mon travail sur les bases de données, les structures de données et la manière dont je transforme une information brute en résultat exploitable.",
        image: null,
        projects: [
            {
                code: "C4P1",
                title: "Base TutorialD",
                summary: "Génération d'une base de données à partir d'un besoin défini en cours.",
                tech: "TutorialD, modélisation de données",
                image: "images/competences/bddTotoD.png",
                imageAlt: "Capture de la base TutorialD",
            },
            {
                code: "C4P2",
                title: "Travail SQL",
                summary: "Manipulation et interrogation de données pour obtenir des résultats précis.",
                tech: "SQL, requêtes, organisation des données",
                image: "images/competences/bddSql.png",
                imageAlt: "Capture du projet base de données SQL",
            },
        ],
    },
    projet: {
        code: "Compétence 5",
        title: "Conduire un projet",
        summary: "Organiser le travail, définir des objectifs et avancer de manière claire et pragmatique.",
        description:
            "Cette page peut détailler ma manière de planifier, documenter et suivre un projet, avec un regard sur les livrables, la répartition des tâches et le suivi d'avancement.",
        image: null,
        projects: [
            {
                code: "C5P1",
                title: "Gestion de projet",
                summary: "Organisation du travail, planification des tâches et suivi d'avancement sur un projet structuré.",
                tech: "Planification, coordination, gestion de projet",
                image: "images/competences/gestion_de_projet.png",
                imageAlt: "Capture du projet de gestion de projet",
            },
            {
                code: "C5P2",
                title: "Praxis",
                summary: "Pilotage d'un projet entrepreneurial avec répartition des taches, communication et promotion.",
                tech: "Organisation, communication, coordination",
                image: "images/competences/praxis.png",
                imageAlt: "Capture du projet Praxis",
            },
        ],
    },
    collaboration: {
        code: "Compétence 6",
        title: "Collaborer au sein d'une équipe informatique",
        summary: "Travailler efficacement avec d'autres profils, communiquer et contribuer à un objectif commun.",
        description:
            "Cette compétence rassemble mes expériences de travail collectif, de coordination et d'entraide sur des projets scolaires, professionnels ou associatifs.",
        image: null,
        projects: [
            {
                code: "Praxis",
                title: "Pilotage de la Junior-Entreprise",
                summary: "Organisation des tâches, suivi opérationnel et coordination de l'équipe via Trello dans un cadre entrepreneurial.",
                tech: "Gestion d'equipe, coordination, communication",
                image: "images/competences/TrelloPraxis.png",
                imageAlt: "Capture Trello du projet Praxis",
            },
            {
                code: "Stage",
                title: "Collaboration en entreprise",
                summary: "Intégration dans un environnement de travail avec des échanges réguliers et des objectifs partagés.",
                tech: "Travail d'équipe, échanges, autonomie",
            },
        ],
    },
};

const pageTitle = document.getElementById("detail-title");
const pageCode = document.getElementById("detail-code");
const pageSummary = document.getElementById("detail-summary");
const pageDescription = document.getElementById("detail-description");
const projectGrid = document.getElementById("detail-project-grid");
const projectsTitle = document.getElementById("projects-title");

const searchParams = new URLSearchParams(window.location.search);
const competenceId = searchParams.get("c") || "developpement";
const competence = competenceData[competenceId] || competenceData.developpement;

document.title = `${competence.title} | Portfolio`;
pageTitle.textContent = competence.title;
pageCode.textContent = competence.code;
pageSummary.textContent = competence.summary;
pageDescription.textContent = competence.description;
projectsTitle.textContent = `Projets liés à ${competence.code.toLowerCase()}`;

projectGrid.innerHTML = competence.projects
    .map(
        (project) => `
            <article class="card project-card ${project.image ? "project-card-featured" : ""}">
                <span class="project-code">${project.code}</span>
                <h3>${project.title}</h3>
                <p>${project.summary}</p>
                ${project.image ? `<div class="project-image-frame"><img class="project-image" src="${project.image}" alt="${project.imageAlt || project.title}" loading="lazy"></div>` : ""}
                <p class="project-tech">${project.tech}</p>
            </article>
        `
    )
    .join("");

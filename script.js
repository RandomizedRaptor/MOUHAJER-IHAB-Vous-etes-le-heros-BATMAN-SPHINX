const chapters = {
  debut: {
    titre: `Batman: le retour du Sphinx`,
    description: `Le Sphinx tient un immeuble en otage avec une bombe. Le symbol de Batman apparait dans le ciel.`,
    image: "./assets/images/logo.png",
    boutons: [{ titre: `Repondre a l'appel`, destination: `enigme` }],
  },
  enigme: {
    titre: `L'enigme`,
    description: "Le Sphinx vous donne une enigme a resoudre.",
    image: "./assets/images/enigme.webp",
    boutons: [
      { titre: `Abandonner`, destination: `reputation` },
      { titre: `Resoudre l'enigme`, destination: `compte` },
      { titre: `Analyser l'immeuble`, destination: `secret` },
    ],
  },
  reputation: {
    titre: `Votre reputation est ruinee`,
    description: " ",
    image: "./assets/images/reputation.webp",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
  compte: {
    titre: `Compte a rebours`,
    description: `Plus loin dans l'immeuble, un ecran afficheun compte a rebours.`,
    image: "./assets/images/compte.jpg",
    boutons: [{ titre: `Continuer`, destination: `bombe` }],
  },
  secret: {
    titre: `La carte`,
    description: `Vous trouvez la carte de l'immeuble!`,
    image: "./assets/images/carte.jpg",
    boutons: [{ titre: `Retourner`, destination: `debut` }],
  },
  bombe: {
    titre: `Il y a une bombe`,
    description: `La bombe est sur le point d'exploser!`,
    image: "./assets/images/bombe.webp",
    boutons: [
      { titre: `Fuir`, destination: `reputation` },
      { titre: `Desamorcer la bombe`, destination: `sphinx` },
      { titre: `Appeler a l'aide`, destination: `mort` },
    ],
  },
  sphinx: {
    titre: `Le Sphinx`,
    description:
      "Il se cache derriere une barriere, il y a une sortie en arriere de lui.",
    image: "./assets/images/sphinx.jpg",
    boutons: [{ titre: `Continuer`, destination: `enigmeFinal` }],
  },
  mort: {
    titre: `Ouch!`,
    description: `Il n'y a pas assez de temps pour recevoir de l'aide. Vous mourrez...`,
    image: "./assets/images/mort.webp",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
  enigmeFinal: {
    titre: `L'enigme final`,
    description: "Le Sphinx vous donne une enigme final a resoudre.",
    image: "./assets/images/enigmeFinal.jpg",
    boutons: [
      { titre: `Resoudre l'enigme`, destination: `sphinxConfusion` },
      {
        titre: `Affronter le Sphinx (grace a la carte)`,
        destination: `victoire`,
      },
      { titre: `Le convaincre de se rendre`, destination: `sphinxRefuse` },
    ],
  },
  sphinxConfusion: {
    titre: `Confusion`,
    description: `Le Sphinx s'enfuit durant la confusion.`,
    image: "./assets/images/confusion.jpg",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
  victoire: {
    titre: `Victoire!`,
    description: "Vous trouver, battez et capturer le Sphinx!",
    image: "./assets/images/batman.webp",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
  sphinxRefuse: {
    titre: `Il... refuse?`,
    description: `Le Sphinx refuse et s'enfuit`,
    image: "./assets/images/confusion.jpg",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
};

function goToChapter(chapter) {
  const boutons = document.querySelector(".boutons");
  while (boutons.firstChild) {
    boutons.removeChild(boutons.firstChild);
  }

  if (chapters[chapter]) {
    document.querySelector(".titre2").innerText = chapters[chapter].titre;
    document.querySelector(".fictif").innerText = chapters[chapter].description;
    document.querySelector("img").src = chapters[chapter].image;
    for (let i = 0; i < chapters[chapter].boutons.length; i++) {
      const nouveauBtn = document.createElement("button");
      nouveauBtn.textContent = chapters[chapter].boutons[i].titre;
      nouveauBtn.addEventListener("click", () => {
        goToChapter(chapters[chapter].boutons[i].destination);
      });
      boutons.appendChild(nouveauBtn);
    }
  } else {
    console.log("Erreur 🤓");
  }
}

twist

goToChapter("debut");

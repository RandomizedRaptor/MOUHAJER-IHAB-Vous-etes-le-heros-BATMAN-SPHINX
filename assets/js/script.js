const chapters = {
  debut: {
    titre: ``,
    description: `Le Sphinx tient un immeuble en otage avec une bombe. Le symbol de Batman apparait dans le ciel.`,
    image: "./assets/images/logo.png",
    audio: "./assets/audio/Batman.mp3",
    boutons: [{ titre: `Repondre a l'appel`, destination: `enigme` }],
  },
  enigme: {
    titre: `L'enigme`,
    description: "Le Sphinx vous donne une enigme a resoudre.",
    image: "./assets/images/enigme.jpg",
    audio: "./assets/audio/Whoosh.mp3",
    boutons: [
      { titre: `Abandonner`, destination: `reputation` },
      { titre: `Resoudre l'enigme`, destination: `compte` },
      { titre: `Analyser l'immeuble`, destination: `secret` },
    ],
  },
  reputation: {
    titre: `Votre reputation est ruinee`,
    description: "womp womp ",
    image: "./assets/images/reputation.webp",
    audio: "./assets/audio/Error.mp3",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
  compte: {
    titre: `Compte a rebours`,
    description: `Plus loin dans l'immeuble, un ecran afficheun compte a rebours.`,
    image: "./assets/images/compte.jpg",
    audio: "./assets/audio/Whoosh.mp3",
    boutons: [{ titre: `Continuer`, destination: `bombe` }],
  },
  secret: {
    titre: `La carte`,
    description: `Vous trouvez la carte de l'immeuble!`,
    image: "./assets/images/carte.jpg",
    audio: "./assets/audio/Secret.mp3",
    boutons: [{ titre: `Retourner`, destination: `enigme` }],
  },
  bombe: {
    titre: `Il y a une bombe`,
    description: `La bombe est sur le point d'exploser!`,
    image: "./assets/images/bombe.webp",
    video: "./assets/images/bombe.mp4",
    audio: "./assets/audio/Whoosh.mp3",
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
    audio: "./assets/audio/Whoosh.mp3",
    boutons: [{ titre: `Continuer`, destination: `enigmeFinal` }],
  },
  mort: {
    titre: `Ouch!`,
    description: `Il n'y a pas assez de temps pour recevoir de l'aide. Vous mourrez...`,
    image: "./assets/images/mort.webp",
    audio: "./assets/audio/Boom.mp3",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
  enigmeFinal: {
    titre: `L'enigme final`,
    description: "Le Sphinx vous donne une enigme final a resoudre.",
    image: "./assets/images/enigmeFinal.jpg",
    audio: "./assets/audio/Whoosh.mp3",
    boutons: [
      { titre: `Resoudre l'enigme`, destination: `sphinxConfusion` },
      { titre: `Le convaincre de se rendre`, destination: `sphinxRefuse` },
    ],
  },
  sphinxConfusion: {
    titre: `Confusion`,
    description: `Le Sphinx s'enfuit durant la confusion.`,
    image: "./assets/images/confusion.jpg",
    audio: "./assets/audio/Bamboo.mp3",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
  victoire: {
    titre: `Victoire!`,
    description: "Vous trouver, battez et capturer le Sphinx!",
    image: "./assets/images/batman.jpg",
    video: "./assets/images/dance.mp4",
    audio: "./assets/audio/Batman.mp3",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
  sphinxRefuse: {
    titre: `Il... refuse?`,
    description: `Le Sphinx refuse et s'enfuit`,
    image: "./assets/images/confusion.jpg",
    audio: "./assets/audio/Bamboo.mp3",
    boutons: [{ titre: `Recommencer`, destination: `debut` }],
  },
};

let hasVisitedSecret = false;
let hasVideo = false;

function goToChapter(chapter) {
  localStorage.setItem('chapter', chapter);

  const boutons = document.querySelector(".boutons");
  while (boutons.firstChild) {
    boutons.removeChild(boutons.firstChild);
  }

  if (chapters[chapter]) {
    document.querySelector(".titre2").innerText = chapters[chapter].titre;
    document.querySelector(".fictif").innerText = chapters[chapter].description;
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

  if (chapters[chapter] && chapter === "secret") {
    localStorage.setItem('hasVisitedSecret', 'yes');
  }

  if (chapters[chapter] && chapter === "debut") {
    localStorage.setItem('hasVisitedSecret', 'no');
  }

  if (localStorage.getItem('hasVisitedSecret') === 'yes') {
    hasVisitedSecret = true;
  }

  if (localStorage.getItem('hasVisitedSecret') === 'no') {
    hasVisitedSecret = false;
  }

  //twist
  if (chapter === "enigmeFinal" && hasVisitedSecret === true) {
    const boutons = document.querySelector(".boutons");
    const btnVictoire = document.createElement("button");
    btnVictoire.textContent = "Affronter le Sphinx";
    btnVictoire.addEventListener("click", () => {
      goToChapter("victoire");
    });
    boutons.appendChild(btnVictoire);
  }

  //creation des medias
  const media = document.querySelector(".media");
  const video = document.createElement("video");
  const image = document.createElement("img");
  const audio = document.createElement("audio");

  if (chapters[chapter].video) {
    media.innerHTML = "";
    hasVideo = true;
    video.src = chapters[chapter].video;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    media.appendChild(video);
  } else {
    media.innerHTML = "";
    hasVideo = false;
    image.src = chapters[chapter].image;
    media.appendChild(image);
  }

  if (chapters[chapter].audio) {
    audio.src = chapters[chapter].audio;
    audio.autoplay = true;
    media.appendChild(audio);
  }

  //verificateurs
  console.log("Voici le chapitre:", chapter);
  console.log("hasVisitedSecret:", hasVisitedSecret);
  console.log("hasVideo", hasVideo);
}

const reini = document.querySelector(".reini");
reini.addEventListener("click", function () {
  localStorage.clear();
  goToChapter("debut");
});

//local storage
if (localStorage.getItem('chapter') === null) {
  goToChapter('debut');
} else {
  goToChapter(localStorage.getItem('chapter'));
}

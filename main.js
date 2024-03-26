let next = document.getElementById("next");
let prev = document.getElementById("prev");
let desc = document.querySelector("testimonial-text");
let author = document.querySelector("testimonial-author");
let position = document.querySelector("testimonial-position");
let image = (document.getElementById("Tanya").src = "./image/image-john.jpg");

next.addEventListener("click", avance);
prev.addEventListener("click", recule);

let compteur = [0, 1, 2, 3]

function avance() {
  compteur.
  position.textContent = "Junior Front-end Developer";
  author.textContent = "John Tarkpor";
  desc.textContent = "Si vous souhaitez poser les meilleures bases possibles, je vous recommande de suivre ce cours. Il m'a aidé à prendre confiance en moi et à devenir un meilleur développeur."
}

function recule() {}

let carousel = [
  {
    img: (src = "./image/image-tanya.jpg"),
    author: "Tanya Sinclar",
    position: "UX Engineer",
    desc: "La programmation m'intéressait depuis un certain temps mais je n'avais jamais sauté le pas. Ce cours a été une révélation pour moi. Il m'a permis d'obtenir le job de mes rêves.",
  },
  {
    img: (src = "./image/image-john.jpg"),
    author: "John Tarkpor",
    position: "Junior Front-end Developer",
    desc: "Si vous souhaitez poser les meilleures bases possibles, je vous recommande de suivre ce cours. Il m'a aidé à prendre confiance en moi et à devenir un meilleur développeur.",
  },
  {
    img: (src = "./image/image.png"),
    author: "Lorem Ipsum",
    position: "Lorem ipsum dolor sit amet",
    desc: "aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident",
  },
  {
    img: (src = "./image/image2.png"),
    author: "Dolor Sit",
    position: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
  },
];
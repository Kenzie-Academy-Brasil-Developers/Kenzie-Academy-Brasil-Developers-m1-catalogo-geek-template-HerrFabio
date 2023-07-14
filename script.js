const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3 (adicione os produtos restantes abaixo)
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "Pacman",
    price: "R$160,00",
    type: "Paintings",
  },
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

const actionFiguresArray = [];
const paintingsArray = [];

function separateItems(products) {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    if (product.type === "Paintings") {
      paintingsArray.push(product);
    } else if (product.type === "Action Figures") {
      actionFiguresArray.push(product);
    }
  }
}

separateItems(productsArray);

function createCards(products, listClass) {
  const productList = document.querySelector(listClass);

  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const card = document.createElement("li");
    card.classList.add("container");

    const cardContent = document.createElement("div");
    if (product.type === "Paintings") {
      cardContent.classList.add("card-paintings");
    } else if (product.type === "Action Figures") {
      cardContent.classList.add("card-action-figure");
    }

    const image = document.createElement("img");
    image.classList.add("card-img");
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement("h3");
    name.classList.add("nome-robo");
    name.textContent = product.name;

    const price = document.createElement("span");
    price.classList.add("preço-robo");
    price.textContent = product.price;

    cardContent.appendChild(image);
    cardContent.appendChild(name);
    cardContent.appendChild(price);

    card.appendChild(cardContent);

    productList.appendChild(card);
  }
}

createCards(paintingsArray, ".lista-paintings");
createCards(actionFiguresArray, ".lista-action-figure");

busca.onkeyup = () => {
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=> {
    cards.innerHTML = '';
    json.forEach(card => {
      if (card.title.toLowerCase().search(busca.value.toLowerCase()) != -1) {
        addCard(card);
      }
    });
  })
    
}

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=> {
  json.forEach(card => {
    addCard(card);
  });
})

function addCard(card) {
  var novocard = document.createElement('div');
  novocard.className = "card";
  var textoHTML = '';
  textoHTML += '      <div class="card-image">';
  textoHTML += `        <img id="imagesrc2" src="${card.image}" alt="">`;
  textoHTML += '      <div class="card-content">';
  textoHTML += `        <h2 id="price1">US$ ${card.price}</h2>`;
  textoHTML += `        <h3 id="title1">${card.title}</h3>`;
  textoHTML += `        <p id="description1">${card.description}</p>`;
  textoHTML += '      </div>';
  novocard.innerHTML = textoHTML;
  cards.appendChild(novocard);
}
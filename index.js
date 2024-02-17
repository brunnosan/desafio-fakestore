busca.onkeyup = () => {
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=> {
    cards.innerHTML = '';
    orderBy(json);
    json.forEach(card => {
      addCard(card);
    });
  })
    
}

sort.onchange = () => {
  fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=> {
    cards.innerHTML = '';
    orderBy(json);
    json.forEach(card => {
      addCard(card);
    });  
 })
}

function addCard(card) {
  if (card.title.toLowerCase().search(busca.value.toLowerCase()) != -1) {
    console.log(card.title + ' - ' + card.rating.rate);
    var novocard = document.createElement('div');
    novocard.className = "card";
    var textoHTML = '';
    textoHTML += '      <div class="card-image">';
    textoHTML += `        <img id="imagesrc2" src="${card.image}" alt="">`;
    textoHTML += '      </div>';
    textoHTML += '      <div class="card-content">';
    textoHTML += `        <h2 id="price1">US$ ${card.price}</h2>`;
    textoHTML += `        <i data-star="${card.rating.rate}"></i>`;
    textoHTML += `        <h3 id="title1">${card.title}</h3>`;
    textoHTML += `        <p id="description1">${card.description}</p>`;
    textoHTML += '      </div>';
    novocard.innerHTML = textoHTML;
    cards.appendChild(novocard);
  }
}

function orderBy(cards) {
  if (sort.options[sort.selectedIndex].value == 'price-asc') {
    cards.sort((menor, maior) => parseFloat(menor.price) - parseFloat(maior.price));
  } else if (sort.options[sort.selectedIndex].value == 'price-desc') {
    cards.sort((menor, maior) => parseFloat(maior.price) - parseFloat(menor.price));
  } else if (sort.options[sort.selectedIndex].value == 'most-popular') {
    cards.sort((menor, maior) => parseFloat(maior.rating.rate) - parseFloat(menor.rating.rate));
  }
}

fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=> {
  json.forEach(card => {
    addCard(card);
  });
})

const myAPI_KEY = 'GTKqfjVVmJJPQWTV8WOyBsQO9en5qcKcidYAgNpyaJAqddlGX5K3vnK0';

function getData() {
    return fetch("https://api.pexels.com/v1/search?query=mountain", {
        headers: {
            'Authorization': myAPI_KEY
        },
    })
    .then(res => res.json())
    .catch(error => {
        console.error('Error:', error);
    });
}

getData()
    .then(data => {
        if (data.photos) {
            const images = data.photos;
            populateCards(images);
        } else {
            console.error('No photos found.');
        }
    })
    .catch(error => console.error('Error:', error));

//Creo la card utilizzando le classi di Bootstrap

function createCard(imageUrl) {
    const colDiv = document.createElement('div');
    colDiv.classList.add('col');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('card-img-top');

    cardDiv.appendChild(img);
    colDiv.appendChild(cardDiv);

    return colDiv;
}

//Funzione per inserire le cards nella section

function populateCards(images) {
    const cardsRow = document.getElementById('cards-row');

    images.forEach(image => {
        const card = createCard(image.src.medium);
        cardsRow.appendChild(card);
    });
}

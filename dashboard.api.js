function GetCharacters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

GetCharacters(data => (
    data.results.forEach(personaje => {

        const article = document.createRange().createContextualFragment(/*html*/`
       <article>
       <div class="image-container">
       <img src="${personaje.image}" alt="Personaje">
      </div>
      <h2>${personaje.name}</h2>
      <span>${personaje.status}</span>
      <p>${personaje.type}</p>
      <p>${personaje.id}</p>
      <p>${personaje.gender}</p>
      <span>${personaje.species}</span>

      </article>
 `);

        const main = document.querySelector("main");
        main.append(article);

    })

));


fetch(`https://www.omdbapi.com/?s=batman&apikey=8c8f0b3f`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.Search.forEach((element) => {
      document.querySelector(".modals .carousel-inner").innerHTML += `
        <div class="carousel-item" data-bs-interval="3000">
         <img src=${element.Poster} class="d-block w-50" alt="...">
         <div class="carousel-caption d-none d-md-block">
         <h5>${element.Title}</h5>
         </div>
        </div>`;
      console.log(element);
    });
  });

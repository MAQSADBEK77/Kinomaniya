let form = document.querySelector("form");
const down_site = async (API) => {
  document.querySelector(".backdrop").classList = "backdrop d-b";
  document.querySelector(".lds-ellipsis").classList = "lds-ellipsis d-b";
  const request = await fetch(API);
  let data = await request.json();
  document.querySelector(".backdrop").classList = "backdrop d-n";
  document.querySelector(".lds-ellipsis").classList = "lds-ellipsis d-n";
  let parent_h = document.querySelector(".parent");
  let data_all = document.querySelector(".data-all");
  parent_h.innerHTML = "";
  if (document.querySelector(".form-select").value == "name") {
    data_all.innerHTML = "";
    document.querySelector(".back").classList = "back d-none";
    if (data.Response === "True") {
      data.Search.forEach((element) => {
        parent_h.innerHTML += `
        <a href="view_all.html?/${element.imdbID}" class="card" style="width: 18rem;">
        <img src=${element.Poster} class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${element.Title}</h5>
        <p class="card-text">${element.Year}</p>
        </div>
        </a>`;
      });
    } else {
      parent_h.innerHTML = "<h1>Afsuski hech nima topilmadi... 🙃</h1>";
    }
  } else if (document.querySelector(".form-select").value == "id") {
    parent_h.innerHTML = "";
    document.querySelector(".back").classList = "back";
    data_all.innerHTML = `
            <div class="data">
                <div class="left-data">
                    <img src=${data.Poster}>
                </div>
                <div class="right-data">
                    <a href=${data.Poster} class="viev">View online</a>
                    <div>
                        <h5>Title: </h5><span class="title">${data.Title}</span>
                    </div>
                    <div>
                        <p>Year: </p><span class="year">${data.Year}</span>
                    </div>
                    <div>
                        <p>Runtime: </p><span class="time">${data.Runtime}</span>
                    </div>
                    <div>
                        <p>Awards: </p><span class="awards">${data.Awards}</span>
                    </div>
                    <div>
                        <p>Actors: </p><span class="actors">${data.Actors}</span>
                    </div>
                    <div>
                        <p>Country: </p><span class="country">${data.Country}</span>
                    </div>
                    <div>
                        <p>Language: </p><span class="language">${data.Language}</span>
                    </div>
                    <div>
                        <p>Genre: </p><span class="genre">${data.Genre}</span>
                    </div>
                    <div>
                        <p>Film Id: </p><span class="id">${data.imdbID}</span>
                    </div
                </div>
                </div>
                <div class="bottom-text">
                    <h6>${data.Plot}</h6>
                </div>
    `;
  }
};
down_site(`https://www.omdbapi.com/?s=${arr_generate[random]}&apikey=8c8f0b3f`);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let search_in = document.querySelector("#search_in");
  let search_val = search_in.value.trim().toLowerCase();
  if (search_val.length == "") {
    down_site(
      `https://www.omdbapi.com/?s=${arr_generate[random]}&apikey=8c8f0b3f`
    );
  } else if (search_val.length > 3) {
    document.querySelector(".modals").innerHTML = "";
    search_in.classList = "form-control";
    if (document.querySelector(".form-select").value == "name") {
      down_site(`https://www.omdbapi.com/?s=${search_val}&apikey=8c8f0b3f`);
    } else if (document.querySelector(".form-select").value == "id") {
      down_site(`https://www.omdbapi.com/?i=${search_val}&apikey=8c8f0b3f`);
    }
  } else {
    search_in.classList = "form-control bg-danger";
  }
});
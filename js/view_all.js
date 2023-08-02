let data_all = document.querySelector(".data-all");
let id = window.location.search.slice(2);
console.log(id);

const down_site = async (API) => {
  document.querySelector(".backdrop").classList = "backdrop d-b";
  document.querySelector(".lds-ellipsis").classList = "lds-ellipsis d-b";
  const request = await fetch(API);
  let data = await request.json();
//   console.log(data);
  document.querySelector(".backdrop").classList = "backdrop d-n";
  document.querySelector(".lds-ellipsis").classList = "lds-ellipsis d-n";
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
};
down_site(`https://www.omdbapi.com/?i=${id}&apikey=8c8f0b3f`);

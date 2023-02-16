const KEY = "awAHTVBcw3P4To9ERShgBkYZbOOtY3FFVN09N74N6jqWEgjKpVIBb1gO";

const galleryImages = document.querySelector(".gallery-images");
const form = document.querySelector(".gallery__search");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector(".search__input").value;
  console.log(input);
  if (input === "") return;
  const query = `search?query=${input}}&`;
  GetImg(query);
});

//https://api.pexels.com/v1/curated?per_page=24;
async function GetImg(query) {
  const url = `https://api.pexels.com/v1/${query}per_page=24`;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: KEY,
    },
  });
  let data = await response.json();
  let photos = data.photos;

  generateHTML(photos);
}

function generateHTML(photos) {
  galleryImages.innerHTML = "";
  photos.forEach((photo) => {
    // console.log(photo);
    const item = document.createElement("div");
    item.classList.add("gallery-element");
    item.innerHTML = `
    <img
    src="${photo.src.medium}"
    alt="random image"
    class="gallery-img"
  />
  <a href="${photo.photographer_url}" class="gallery-text" target="_blank">${photo.photographer}</a>
    `;
    galleryImages.appendChild(item);
  });
}

GetImg("curated?");

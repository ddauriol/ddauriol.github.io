const gifDeninho = document.getElementById("gifDeninho");
const linkURL = document.getElementById("linkURL");
const btnNewDeninho = document.getElementById("btnNewDeninho");

async function getGif() {
  const searchs = ["sock%20puppet", "sock%20puppets", "socks"];
  const search = searchs[Math.floor(Math.random() * searchs.length + 0)];
  console.log(search);

  const PUBLIC_KEY = "R5EVcCzIjgEePx7py9RoMvci7CDdCzmV";
  const BASE_URL = "https://api.giphy.com/v1/gifs/search?";
  const LIMIT = 25;
  const RATING = "pg";

  btnNewDeninho.disabled = true;
  btnNewDeninho.textContent = "Loading";

  await axios
    .get(
      BASE_URL +
        "q=" +
        search +
        "&limit=" +
        LIMIT +
        "&rating=" +
        RATING +
        "&api_key=" +
        PUBLIC_KEY
    )
    .then((res) => {
      this.gif = res.data;
      let index = Math.floor(Math.random() * LIMIT + 0);
      this.gifSrc = res.data.data[index].images.original.url;
    })
    .catch(function (error) {
      console.log(error);
    });

  await loadImage(this.gifSrc, gifDeninho);
  linkURL.value = this.gifSrc;
  btnNewDeninho.disabled = false;
  btnNewDeninho.textContent = "Get Deninho";
}

function CopyTextToClipboard() {
  var copyText = document.getElementById("linkURL");
  copyText.focus();
  copyText.select();
  document.execCommand("copy");
}

async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

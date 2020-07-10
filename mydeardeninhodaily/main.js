async function getGif() {
  const searchs = ["sock%20puppet", "sock%20puppets", "socks"];
  const search = searchs[Math.floor(Math.random() * searchs.length + 0)];
  console.log(search);

  const PUBLIC_KEY = "R5EVcCzIjgEePx7py9RoMvci7CDdCzmV";
  const BASE_URL = "https://api.giphy.com/v1/gifs/search?";
  const LIMIT = 25;
  const RATING = "pg";

  document.getElementById("btnNewDeninho").disabled = true;

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
  document.getElementById("gifDeninho").src = this.gifSrc;
  document.getElementById("linkURL").value = this.gifSrc;
  document.getElementById("btnNewDeninho").disabled = false;
}

function CopyTextToClipboard() {
  var copyText = document.getElementById("linkURL");
  copyText.focus();
  copyText.select();
  document.execCommand("copy");
}

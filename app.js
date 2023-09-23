const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
async function getQote(url) {
  const respone = await fetch(url);
  let data = await respone.json();

  quote.innerHTML = data.content;
  author.innerHTML = data.author;
  //   console.log(data);
}
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ---by " +
      author.innerHTML,
    "Tweet Window",
    "width=600",
    "height=300"
  );
}

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
const quoteText = document.querySelector(".quote"),
  authorName = document.querySelector(".author .name"),
  soundBtn = document.querySelector(".sound"),
  copyBtn = document.querySelector(".copy"),
  twitterBtn = document.querySelector(".twitter"),
  quoteBtn = document.querySelector("button");

function randomQuote() {
  quoteBtn.classList.add("Loading");
  quoteBtn.innerText = "Loading Quate...";
  fetch(`http://api.quotable.io/random`)
    .then((res) => res.json())
    .then((result) => {
      quoteText.innerText = result.content;
      authorName.innerText = result.author;
      quoteBtn.innerText = "New Quote";
      quoteBtn.classList.remove("Loading");
    });
}

twitterBtn.addEventListener("click", function () {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
  window.open(tweetUrl, "_blank");
});

copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(quoteText.innerText);
});

soundBtn.addEventListener("click", function () {
  let utternance = new SpeechSynthesisUtterance(
    `${quoteText.innerText} by ${authorName.innerText}`
  );
  speechSynthesis.speak(utternance);
});

quoteBtn.addEventListener("click", randomQuote);

const bookmarkImage = document.querySelector('[data-js="bookmark"]');
let isBookmarked = true;

bookmarkImage.addEventListener("click", () => {
  if (isBookmarked) {
    bookmarkImage.src = "./image/bookmark_filled.png";
  } else {
    bookmarkImage.src = "./image/bookmark_transparent.png";
  }
  isBookmarked = !isBookmarked;
});

const answerButton = document.querySelector('[data-js="answerButton"]');
const answer = document.querySelector(".answer");

answerButton.addEventListener("click", function () {
  answer.classList.toggle("hidden");
  if (answer.classList.contains("hidden")) {
    answerButton.textContent = "Show Answer";
  } else {
    answerButton.textContent = "Hide Answer";
  }
});
answer.classList.add("hidden");

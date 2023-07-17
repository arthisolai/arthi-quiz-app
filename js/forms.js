const form = document.querySelector('[data-js="form"]');
const cardContainer = document.querySelector('[data-js="cardContainer"]');

const submitButton = form.querySelector('[data-js="submitButton"]');
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const questionInput = form.querySelector('[name="question"]');
  const answerInput = form.querySelector('[name="answer"]');
  const tagsInput = form.querySelector('[name="tag"]');

  const questionValue = questionInput.value;
  const answerValue = answerInput.value;
  const tagsValue = tagsInput.value;

  const card = createCard(questionValue, answerValue, tagsValue);
  cardContainer.appendChild(card);

  form.reset();
  updateCharCount(questionInput, questionCharCount);
  updateCharCount(answerInput, answerCharCount);
});

function createCard(question, answer, tags) {
  const card = document.createElement("section");
  card.classList.add("main--QuesCard1");

  const bookmark = document.createElement("img");
  bookmark.src = "./image/bookmark_transparent.png";
  bookmark.alt = "bookmark image";
  bookmark.classList.add("main--QuesCard1--bookmark");
  card.appendChild(bookmark);

  const questionElement = document.createElement("h2");
  questionElement.textContent = question;
  card.appendChild(questionElement);

  const showAnswer = document.createElement("button");
  showAnswer.classList.add("main--QuesCard-Button");
  showAnswer.textContent = "Show Answer";
  card.appendChild(showAnswer);

  const tagsElement = document.createElement("ul");
  const listItem = document.createElement("li");
  tagsElement.classList.add("main--QuesCard1--AnsTag");
  const tagInput = document.createElement("span");
  tagInput.textContent = "#" + tags;
  listItem.appendChild(tagInput);
  tagsElement.appendChild(listItem);
  card.appendChild(tagsElement);

  return card;
}

const questionCharCount = document.querySelector(".questionCharLeft");
const answerCharCount = document.querySelector(".answerCharLeft");

form.addEventListener("input", (event) => {
  const target = event.target;

  if (target.name === "question") {
    updateCharCount(target, questionCharCount);
  } else if (target.name === "answer") {
    updateCharCount(target, answerCharCount);
  }
});

function updateCharCount(inputField, charCountElement) {
  const maxLength = 150;
  const remainingChars = maxLength - inputField.value.length;
  charCountElement.textContent = `${remainingChars} characters left`;
  if (inputField.value.length === 0) {
    charCountElement.textContent = `${maxLength} characters left`;
  }
}

window.onload = () => {
  document.getElementById("sentence-form").onsubmit = (e) => {
    e.preventDefault();
    let userSentence = document.querySelector("#sentence-form > input").value.trim();
    console.log(userSentence)
    countWords(userSentence);
    for (let word in wordCounts) {
      let count = wordCounts[word];
      let newListItem = document.createElement('li');
      newListItem.innerText = `${word}: ${count}`;
      document.getElementById("output-area").append(newListItem);
      document.getElementById("output-area").classList.add('showing');
    }
  }
}

const wordCounts = {};

function getUniqueWords(userSentence) {
  let sentenceArray = userSentence.split(' ');
  let uniqueWordsArray = [];
  sentenceArray.forEach(word => {
    let isDuplicate = uniqueWordsArray.indexOf(word) !== -1;
    if (!isDuplicate) {
      uniqueWordsArray.push(word);
    } else {
      wordCounts[word] = wordCounts[word] += 1;
    }
  });
  return uniqueWordsArray;
}

function countWords(userSentence) {

  let sentenceArray = userSentence.split(' ');
  let uniqueWordsArray = getUniqueWords(userSentence);

  uniqueWordsArray.forEach(uniqueWord => {
    let count = 0;
    sentenceArray.forEach(word => {
      if (uniqueWord === word) {
        count++;
      }
    })
    wordCounts[uniqueWord] = count;
  })
}
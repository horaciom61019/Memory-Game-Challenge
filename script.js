const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);


    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let cardArray = [];
let count = 0

// TODO: Implement this function!
function handleCardClick(event) {
  
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  // Start here
  count += 1;
  
  let currentCard = event.target;

  //Check if div has class "active"
  if (currentCard.classList.contains("active")){
    // console.log("It contains active");
  }
  else{
    // console.log("Does not contain active");

    //Adds the class "active"
    currentCard.classList.add("active");

    //Updates the background color to be the color of the class it has
    let currentCardClassColor = currentCard.classList[0];
    currentCard.style.backgroundColor = currentCardClassColor;

    //Limits users to only change two cards at a time
    if (count == 2){
      console.log("Clicked on two cards");
      count = 0;
      cardArray.push(currentCardClassColor);

      //Gets color of both cards
      console.log(`Card one is ${cardArray[0]} and card two is ${cardArray[1]}`)
      if (cardArray[0] == cardArray[1]){
        console.log("Cards Match!");
        let selectedCards = document.getElementsByClassName(cardArray[0]);
        selectedCards = document.getElementsByClassName("active");

        let cardOne = selectedCards[0];
        let cardTwo = selectedCards[1];

        cardOne.classList.remove("active");
        cardTwo.classList.remove("active");
        cardArray = [];
      }
      else{
        console.log("Cards don't Match.")
        let selectedCards = document.getElementsByClassName(cardArray[0]);
        selectedCards = document.getElementsByClassName("active");

        let cardOne = selectedCards[0];
        let cardTwo = selectedCards[1];

        setTimeout(function(){
          cardOne.style.backgroundColor = "";
          cardTwo.style.backgroundColor = "";
        }, 1000);

        cardOne.classList.remove("active");
        cardTwo.classList.remove("active");
        
        cardArray = [];
      }
    }
    else{
      cardArray.push(currentCardClassColor);
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);

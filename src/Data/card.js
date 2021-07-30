import { elementalImages, nameImages } from "./images";

function CardData(){
  this.name = "";
  this.priority = 0;
  this.nameImage = "";
  this.type = "";
  this.typePriority = 0.0;
  this.typeImage = "";
};

const createDeck = () => {
  let deckData = [];

  for (const [key, value] of Object.entries(elementalImages)) {
    let newCardData = new CardData()

    newCardData.type = key
    newCardData.image = value

    switch (key) {
      case "air":
        newCardData.typePriority = 0.4;
        break
      case "water":
        newCardData.typePriority = 0.3
        break
      case "earth":
        newCardData.typePriority = 0.2
        break
      default:
        newCardData.typePriority = 0.1
    }

    let priority = 1
    for (const [key, value] of Object.entries(nameImages)) {
      newCardData.name = key
      newCardData.priority = priority
      newCardData.nameImage = value

      deckData.push(newCardData)
      priority+=1 
    }
  }
  console.log('End');
  return deckData
};

export {createDeck}
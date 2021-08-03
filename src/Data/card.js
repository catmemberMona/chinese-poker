import { elementalImages, nameImages } from "./images";

function CardData() {
  this.id = 0.0
  this.name = "";
  this.priority = 0;
  this.nameImage = "";
  this.type = "";
  this.typePriority = 0.0;
  this.typeImage = "";
  this.isSelected = false;
};

const createDeck = () => {
  let deckData = [];

  for (const [typeKey, typeValue] of Object.entries(elementalImages)) {
    let newCardData;

    for (const [nameKey, nameValue] of Object.entries(nameImages)) {
      newCardData = new CardData();

      // Assign the Name Data
      newCardData.name = nameKey;
      newCardData.priority = nameValue.priority;
      newCardData.nameImage = nameValue.image;

      // Assign the Type Data
      newCardData.type = typeKey;
      newCardData.typeImage = typeValue;

      switch (typeKey) {
        case 'air':
          newCardData.typePriority = 0.4;
          break;
        case 'water':
          newCardData.typePriority = 0.3;
          break;
        case 'earth':
          newCardData.typePriority = 0.2;
          break;
        default:
          newCardData.typePriority = 0.1;
      }

      newCardData.id = newCardData.priority + newCardData.typePriority;

      deckData.push(newCardData);
    }
  }
  
  return deckData
};


export default createDeck
const generateNewExcuseButton = document.querySelector("#generate-new-excuse");
const newExcuse = document.querySelector("#new-excuse");

const randomItemFromArray = target => {
  const randomItem = Math.floor(Math.random() * target.length);
  return target[randomItem];
};

const excuses = {
  intros: [
    `Sorry I can't come,`,
    "Please forgive my absence,",
    "This is going to sound crazy but",
    `You ain't gonna believe this:`,
    `I can't go because`,
    "I know you are going to hate me but",
    "I was minding my own business and boom!",
    "I feel terrible but",
    "I regretfully cannot attend,",
    "This is going to sound like an excuse but",
    `I can't make it because`,
    "This is going to sound like a joke but actually",
    `I can't leave the office now,`,
    `, I can't tell you the real reason, but let's say that`
  ],
  scapegoats: [
    "my nephew",
    "the ghost ",
    "the Pope",
    "my ex",
    "a highschool marching band",
    "Darth Vader",
    "a sad clown",
    "my Tinder date",
    "a professional cricket team",
    "my grandma",
    "my llama",
    "a zebra"
  ],
  delays: [
    "just sleep the bed",
    "died in front of me",
    `won't stop telling me knock knock jokes`,
    "is having a nervous breakdown",
    "gave me syphilis",
    "poured lemonade in my gas tank",
    "loved me",
    "found my bag of human teeth",
    "stole my bicycle",
    "posted my photo on Instagram",
    "poisoned me again",
    `wouldn't stop fighting`,
    "is staring at me"
  ]
};

const generateNewExcuse = () => {
  const intro = randomItemFromArray(excuses.intros);
  const scapegoat = randomItemFromArray(excuses.scapegoats);
  const delay = randomItemFromArray(excuses.delays);
  const excuse = `${intro} ${scapegoat} ${delay}`;
  newExcuse.innerText = excuse;
};

generateNewExcuseButton.addEventListener("click", generateNewExcuse);

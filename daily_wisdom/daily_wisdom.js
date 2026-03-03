const luckyNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100

const animaloftheDay = ['Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Kangaroo', 'Panda', 'Dolphin', 'Eagle', 'Wolf'];
const randomAnimalIndex = Math.floor(Math.random() * animaloftheDay.length);  // Generate a random index for the animal array
const animalToday = animaloftheDay[randomAnimalIndex]; // Select a random animal  

const stoicWisodomMessages = ['"Waste no more time arguing about what is and is not.  Make your life what you want it to be." – Marcus Aurelius',
  '"He who fears death will never do anything worth of a man\'s name." – Seneca',
  '"We suffer more often in imagination than in reality." – Seneca',
  '"The happiness of your life depends upon the quality of your thoughts." – Marcus Aurelius',
  '"It is not that we have a short time to live, but that we waste a lot of it." – Seneca',
  '"If it is not right, do not do it; if it is not true, do not say it." – Marcus Aurelius',
  '"The best revenge is to be unlike him who performed the injury." – Marcus Aurelius',
  '"Difficulties strengthen the mind, as labor does the body." – Seneca',
  '"First say to yourself what you would be; and then do what you have to do." – Epictetus',
  '"No man is free who is not master of himself." – Epictetus',
  '"Wealth consists not in having great possessions, but in having few wants." – Epictetus',];
  // Array of Stoic wisdom messages

let randomIndex = Math.floor(Math.random() * stoicWisodomMessages.length); // Generate a random index

let dailyWisdom = stoicWisodomMessages[randomIndex]; // Select a random message

console.log(`Your lucky number of the day is: ${luckyNumber}`); // Output the lucky number of the day
console.log(`Your animal of the day is: ${animalToday}`); // Output the animal of the day
console.log(dailyWisdom); // Output the daily wisdom message



const pokemon = require('./data.js');
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  ;
//console.dir(pokemon, { maxArrayLength: null })


  /*
Exercise 3Add a new prope
1. rty to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/
game.difficulty = "Hard";

console.log (game.difficulty)

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/
 game.party.push(pokemon[0]);
 console.log (game.party);



 /*
Exercise 5
1. d them to yourChoose three more Pokémon from the `pokemon` array and ad party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/
game.party.push( pokemon [6,24,3]);
console.log(game.party);


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/
let gyms = [
  { location: "Pewter City", completed: false, difficulty: 1 },
  { location: "Cerulean City", completed: false, difficulty: 2 },
  { location: "Vermilion City", completed: false, difficulty: 3 },
  { location: "Celadon City", completed: false, difficulty: 4 },
  { location: "Fuchsia City", completed: false, difficulty: 5 },
  { location: "Saffron City", completed: false, difficulty: 6 },
  { location: "Cinnabar Island", completed: false, difficulty: 7 },
  { location: "Viridian City", completed: false, difficulty: 8 },
];

for (let i = 0; i < gyms.length; i++) {
  if (gyms[i].difficulty < 3) {
    gyms[i].completed = true;
  }
}

console.log(gyms);


/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/
 pokemon.splice (0,1);
 pokemon.splice (3,4);
 pokemon.splice (6,7);
 pokemon.splice (24,25);
 console.log (pokemon)


 /*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

// Pokémon array after previous replacements
let pokemonTeam = [
  { name: "Ivysaur", type: "Grass/Poison" }, // Replaced Bulbasaur
  { name: "Ivysaur", type: "Grass/Poison" },
  { name: "Venusaur", type: "Grass/Poison" },
  { name: "Charmander", type: "Fire" },
  { name: "Charizard", type: "Fire/Flying" }, // Replaced Charmeleon
  { name: "Charizard", type: "Fire/Flying" },
  { name: "Squirtle", type: "Water" },
  { name: "Blastoise", type: "Water" }, // Replaced Wartortle
  { name: "Blastoise", type: "Water" },
  { name: "Caterpie", type: "Bug" },
  { name: "Metapod", type: "Bug" },
  { name: "Butterfree", type: "Bug/Flying" },
  { name: "Weedle", type: "Bug/Poison" },
  { name: "Kakuna", type: "Bug/Poison" },
  { name: "Beedrill", type: "Bug/Poison" },
  { name: "Pidgey", type: "Normal/Flying" },
  { name: "Pidgeotto", type: "Normal/Flying" },
  { name: "Pidgeot", type: "Normal/Flying" },
  { name: "Rattata", type: "Normal" },
  { name: "Raticate", type: "Normal" },
  { name: "Spearow", type: "Normal/Flying" },
  { name: "Fearow", type: "Normal/Flying" },
  { name: "Ekans", type: "Poison" },
  { name: "Arbok", type: "Poison" },
  { name: "Pikachu", type: "Electric" },
  { name: "Raichu", type: "Electric" } // Replaced Pikachu
];


pokemonTeam.forEach(pokemon => console.log(pokemon.name));


/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/


// List of starter Pokémon names (including evolutions) for Generation 1
const starterNames = [
  "Bulbasaur", "Ivysaur", "Venusaur",
  "Charmander", "Charmeleon", "Charizard",
  "Squirtle", "Wartortle", "Blastoise",
  "Pikachu", "Raichu"
];

// Filter the array to get only starter Pokémon and log their names
pokemonTeam
  .filter(pokemon => starterNames.includes(pokemon.name))
  .forEach(pokemon => console.log(pokemon.name));


  /*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

// Create the game object with the party property
let Pgame = {
  party: pokemonTeam
};

// Add catchPokemon method to the game object without modifying it directly
Pgame = Object.assign({}, game, {
  catchPokemon: function(pokemonObj) {
    this.party.push(pokemonObj);
  }
});

// Call catchPokemon with a new Pokémon object (Bulbasaur, not currently in party)
Pgame.catchPokemon({ name: "Bulbasaur", type: "Grass/Poison" });

// Log the updated party to verify the addition
console.log(Pgame.party.map(pokemon => pokemon.name));





/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:
*/


  items: [
    { name: "Poke Ball", quantity: 5 },
    { name: "Potion", quantity: 3 },
    { name: "Ultra Ball", quantity: 2 }
  ]


Pgame = Object.assign({}, Pgame, {
  catchPokemon: function(pokemonObj) {
    // Add pokemonObj to the party array
    this.party.push(pokemonObj);

    if (Array.isArray(this.items)) {
      const pokeBall = this.items.find(item => item && item.name && item.name.toLowerCase() === "poke ball");
      if (pokeBall) {
        pokeBall.quantity -= 1; // Decrement quantity
      }
    }
    // No return
  }
});

Pgame.catchPokemon(pokemon[1]);

console.log("Current game.items:",Pgame.items);

console.log("Current party:", Pgame.party.map(pokemon => pokemon.name));


/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/


completeGyms: function() {
    if (Array.isArray(this.gyms)) {
      this.gyms.forEach(gym => {
        // Ensure gym has difficulty and complete properties
        if (gym && typeof gym.difficulty === 'number' && gym.difficulty < 6) {
          gym.complete = true;
        }
      });
    }
  }
});

// Call completeGyms to update gyms with difficulty < 6
Pgame.completeGyms();

// Log Pgame.gyms to confirm updates
console.log("Current Pgame.gyms:", Pgame.gyms);

// Call catchPokemon to maintain Exercise 11 context (catch Charmander)
Pgame.catchPokemon(pokemon[1]);
console.log("Current game.items:", Pgame.items);
console.log("Current party:", Pgame.party.map(pokemon => pokemon.name));


/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/
  
  gymStatus: function() {
    // Initialize gymTally
    const gymTally = { completed: 0, incomplete: 0 };

    // Iterate through gyms and update tally
    if (Array.isArray(this.gyms)) {
      this.gyms.forEach(gym => {
        if (gym && typeof gym.complete === 'boolean') {
          if (gym.complete === true) {
            gymTally.completed += 1;
          } else {
            gymTally.incomplete += 1;
          }
        }
      });
    }

    // Log the tally
    console.log("Gym tally:", gymTally);
  }
});

Pgame.completeGyms();


Pgame.gymStatus();

Pgame.catchPokemon(pokemon[1]);
console.log("Current game.items:", Pgame.items);
console.log("Current party:", Pgame.party.map(pokemon => pokemon.name));



/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/

 partyCount: function() {
    return Array.isArray(this.party) ? this.party.length : 0;
  }
});

console.log (this.party.length)

/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/
completeGyms: function() {
    if (Array.isArray(this.gyms)) {
      this.gyms.forEach(gym => {
        if (gym && typeof gym.difficulty === 'number' && gym.difficulty < 8) {
          gym.complete = true;
        }
      });
    }
  }

/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

console.log ("Pgame object:", Pgame);
console.log("Party Count:",Pgame.partyCount());
console.log("Current game.items", Pgame.items);
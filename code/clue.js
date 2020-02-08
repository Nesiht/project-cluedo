// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

// Murders
const cluedoMurders = {
  mrGreen : {
    firstName: 'Jacob',
    lastName: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'assets/green.png',
    occupation: 'Entrepreneur'
  },
  profPlum : {
    firstName: 'Victor',
    lastName: 'Plum',
    color: 'purple',
    description: 'He is financially ruined',
    age: 64,
    image: 'assets/plum.png',
    occupation: 'Looking for opportunities'
  },
  missScarlet : {
    firstName: 'Cassandra',
    lastName: 'Scarlet',
    color: 'red',
    description: 'Golddigger',
    age: '"25"',
    image: 'assets/scarlet.png',
    occupation: 'Classified' 
  }, 
  mrsPeacock : {
    firstName: 'Eleonor',
    lastName: 'Peacock',
    color: 'blue',
    description: 'Crazy',
    age: 51,
    image: 'assets/peacock.png',
    occupation: 'Hired gun' 
  },
  colMustard : {
    firstName: 'Jack',
    lastName: 'Mustard',
    color: 'yellow',
    description: 'Solid',
    age: 83,
    image: 'assets/mustard.png',
    occupation: 'No one knows' 
  }
}

// Weapons
const cluedoWeapons = {
  rope : {
    name: 'Rope',
    weight: 2,
    weightUnit: "kg",
    length: 20,
    lengthUnit: "cm"
  },
  knife : {
    name: 'Knife',
    weight: 1,
    weightUnit: "kg",
    length: 30,
    lengthUnit: "cm"
  },
  candlestick : {
    name: 'Candlestick',
    weight: 4,
    weightUnit: "kg",
    length: 25,
    lengthUnit: "cm"
  },
  dumbbell : {
    name: 'Dumbbell',
    weight: 5,
    weightUnit: "kg",
    length: 20,
    lengthUnit: "cm" 
  },
  poison : {
    name: 'Posion',
    weight: 13,
    weightUnit: "g",
    length: 10,
    lengthUnit: "cm"
  },
  axe : {
    name: 'Axe',
    weight: 4,
    weightUnit: "kg",
    length: 35,
    lengthUnit: "cm"
  },
  bat : {
    name: 'Bat',
    weight: 3,
    weightUnit: "kg",
    length: 25,
    lengthUnit: "cm"
  },
  trophy : {
    name: 'Trophy',
    weight: 6,
    weightUnit: "kg",
    length: 30,
    lengthUnit: "cm"
  },
  pistol : {
    name: 'Pistol',
    weight: 2,
    weightUnit: "kg",
    length: 17,
    lengthUnit: "cm"
  }
}

// Rooms
const cluedoRooms = {
  diningRoom : {
    name: 'Dining room'
  },
  conservatory : {
    name: "Conservatory"
  },
  kitchen : {
    name: "Kitchen"
  },
  study : {
    name: "Study"
  },
  library : {
    name: "Library"
  },
  billiardRoom : {
    name: "Billiard room"
  },
  lounge : {
    name: "Lounge"
  },
  ballroom : {
    name: "Ballroom"
  },
  hall : {
    name: "Hall"
  },
  spa : {
    name: "Spa"
  },
  livingRoom : {
    name: "Living room"
  },
  observatory : {
    name: "Observatory"
  },
  theater : {
    name: "Theater"
  },
  guestHouse : {
    name: "Guest house"
  },
  patio : {
    name: "Patio"
  }
}

suspects = []
// Store target object in array
suspects = Object.entries(cluedoMurders)

weapons = []
// Store target object in array
weapons = Object.entries(cluedoWeapons)

rooms = []
// Store target object in array
rooms = Object.entries(cluedoRooms)


const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

const mystery = {}
// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)
  
  document.getElementById('killerName').innerHTML = `${mystery.killer[1].firstName} ${mystery.killer[1].lastName}`
  document.getElementById('killerAge').innerHTML = `Age: ${mystery.killer[1].age}`
  document.getElementById('killerImage').src = mystery.killer[1].image
  document.getElementById('killerDescription').innerHTML = `Info: ${mystery.killer[1].description}`
}

const pickWeapon = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  document.getElementById('weaponName').innerHTML = `${mystery.weapon[1].name}`
  document.getElementById('weaponWeight').innerHTML = `Weight: ${mystery.weapon[1].weight} ${mystery.weapon[1].weightUnit}`
  document.getElementById('weaponLength').innerHTML = `Length: ${mystery.weapon[1].length} ${mystery.weapon[1].lengthUnit}`
}

const pickRoom = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.room = randomSelector(rooms)

  document.getElementById('roomName').innerHTML = `${mystery.room[1].name}`
}

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const clickBait = () => {
  element = document.getElementById("mystery")
  element.innerHTML = `The murder is ${mystery.killer[1].firstName} ${mystery.killer[1].lastName} in ${mystery.room[1].name} with ${mystery.weapon[1].name} `
}

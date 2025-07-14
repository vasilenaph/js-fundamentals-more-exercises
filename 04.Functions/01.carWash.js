function carWash(commands) {
  let value = 0;

  for (let command of commands) {
    if (command === 'soap') {
      value = add(value);
    } else if (command === 'water') {
      value = rinse(value);
    } else if (command === 'vacuum cleaner') {
      value = vacuum(value);
    } else if (command === 'mud') {
      value = dirty(value);
    }
  }

  console.log(`The car is ${value.toFixed(2)}% clean.`);
}

// Helper functions
function add(value) {
  return value + 10;
}

function rinse(value) {
  return value * 1.20;
}

function vacuum(value) {
  return value * 1.25;
}

function dirty(value) {
  return value * 0.90;
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
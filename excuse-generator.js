const excuses = [
    "I was stuck in traffic",
    "My alarm didn't go off",
    "I had a family emergency",
    "I was feeling unwell",
    "My computer crashed"
];

const who = [
    "My dog",
    "The cat",
    "My boss",
    "My neighbor",
    "The traffic"
];

const action = [
    "ate",
    "broke",
    "stole",
    "hid",
    "destroyed"
];

const what = [
    "my homework",
    "my keys",
    "my phone",
    "my car",
    "my wallet"
];

const when = [
    "today",
    "yesterday",
    "this morning",
    "last night",
    "this afternoon"
];

function generateExcuse() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];
    const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    return excuse;
}

// Run the excuse generator
console.log("Your excuse: " + generateExcuse());
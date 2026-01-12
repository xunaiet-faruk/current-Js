const letter = "Junaiet Faruka";
let count = 0;

const lowerLetter = letter.toLowerCase();

for (let i = 0; i < lowerLetter.length; i++) {
    if (lowerLetter[i] === "a") {
        count++;
    }
}

console.log(count); // 3

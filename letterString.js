const letter = "JunaieAta FAruka";
let count = 0;

const lowerletter =letter.toLowerCase();

for(let i =0 ; i < lowerletter.length ; i++){
    if(lowerletter[i] === "a"){
        count++
    }
   
}

console.log(count);
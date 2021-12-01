import { data } from "./input.js";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('part 1 or 2? ', (input) => {
    parseInt(input) === 1 ? one() : two() 
})

// part 1
let one = () => {
    let increased = 0;
    let message = " (N/A - no previous measurement)"
    console.log(data[0] + message)
    for (let i = 1; i < data.length; i++){
        message = ""
        if(data[i] > data[i - 1]){
            message = " (Increased)"
            increased = increased + 1
            console.log(data[i] + message)
        }else {
            message = " (Decreased)"
            console.log(data[i] + message)
        }
        
    }
    console.log(increased);
    process.exit()
}

// part 2
let two = () => {
    let increased = 0;
    let previous = 0;
    let message = "";
    for (let i = 0; i < data.length; i++){
        let current = 0;
        for(let x = 0; x < 3; x++){
            current += data[i + x]
        }
        if (!(previous == 0)){
            if(current > previous){
                message = " (Increased)"
                increased = increased + 1
                console.log(data[i] + message)
            }else {
                message = " (Decreased)"
                console.log(data[i] + message)
            }
        }else {
            message = " (N/A - no previous measurement)"
            console.log(current + message)
        }
        previous = current;        
    }
    console.log(increased);
    process.exit()
}
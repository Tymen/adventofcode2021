import fs from "fs";
let data = []

try {
  data = fs.readFileSync('./input.txt', 'utf8')
  data = data.split("\n");
} catch (err) {
  console.error(err)
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('part 1 or 2? ', (input) => {
    parseInt(input) === 1 ? one() : two() 
})

let one = () => {
    let horizontal = 0;
    let depth = 0;
    for(let i = 0; i < data.length; i++){
        const direction = data[i].split(" ");
        switch(direction[0]){
            case "forward":
                horizontal += parseInt(direction[1]);
                break;
            case "down":
                depth += parseInt(direction[1]);
                break;
            case "up":
                depth -= parseInt(direction[1]);
                break;
            default:
                break;
        }
    }
    console.log("horizontal: " + horizontal);
    console.log("depth: " + depth);
    console.log("result: " + (horizontal * depth))
}

let two = () => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;
    for(let i = 0; i < data.length; i++){
        const direction = data[i].split(" ");
        switch(direction[0]){
            case "forward":
                horizontal += parseInt(direction[1]);
                depth += parseInt(direction[1]) * aim;
                break;
            case "down":
                aim += parseInt(direction[1]);
                break;
            case "up":
                aim -= parseInt(direction[1]);
                break;
            default:
                break;
        }
    }
    console.log("horizontal: " + horizontal);
    console.log("depth: " + depth);
    console.log("result: " + (horizontal * depth))
}
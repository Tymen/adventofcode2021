import fs from "fs";
let data = []

try {
  data = fs.readFileSync('./input.txt', 'utf8')
  data = data.split("\n");
} catch (err) {
  console.error(err)
}

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('part 1 or 2? ', (input) => {
//     parseInt(input) === 1 ? one() : two() 
// })

let one = () => {
    let temp = {};
    let gamma = [];
    let epsilon = [];
    for(let i = 0; i < data.length; i++){
        let binary = data[i].split('');
        for(let x = 0; x < binary.length; x++){
            if (!(temp[x])){
                temp[x] = {"one": 0, "two": 0}
            }
            if(binary[x] == '1'){
                temp[x]["one"] += 1;
            }else {
                temp[x]["two"] += 1;
            }
        }
    }
    for(let l = 0; l < Object.keys(temp).length; l++) {
        if(temp[l]["one"] > temp[l]["two"]){
            gamma[l] = 1;
            epsilon[l] = 0;
        }else {
            gamma[l] = 0;
            epsilon[l] = 1;
        }
    }
    console.log(gamma.join(""));
}
one();
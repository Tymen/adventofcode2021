import fs from "fs";
import readline from "readline";
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

let getBits = (value) => {
    let result = []
    for(let i = 0; i < value; i++){
        if(i == 0){
            result[i] = 1;
        }else{
            result[i] = result[i - 1] * 2;
        }
    }
    return result.reverse();
}

let one = () => {
    let temp = {};
    let gamma = 0;
    let epsilon = 0;
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
    let bits = getBits(Object.keys(temp).length);
    for(let l = 0; l < Object.keys(temp).length; l++) {
        if(temp[l]["one"] > temp[l]["two"]){
            gamma += bits[l];
        }else {
            epsilon += bits[l];
        }
    }
    console.log("gamma: " + gamma);
    console.log("epsilon: " + epsilon)
    console.log("result: " + (gamma * epsilon));
    process.exit()
}
let two = () => {
    let binaryLength = data[0].split('').length;
    let oxygen = [];
    let CO2 = [];
    let oxygenConverted = 0;
    let CO2Converted = 0;
    oxygen = data;
    CO2 = data;
    let bits = getBits(binaryLength);
    for(let t = 0; t < 2; t++){
        for(let i = 0; i < binaryLength; i++){
            let one = [];
            let zero = [];
            let length = (t == 0) ? oxygen.length : CO2.length;
            for(let x = 0; x < length; x++){
                let zero_one = (t == 0) ? oxygen[x].split('')[i] : CO2[x].split('')[i];
                let value = (t == 0) ? oxygen[x] : CO2[x];
                if( zero_one == 1){
                    one.push(value);
                }else {
                    zero.push(value);
                }
            }
            if (t == 0){
                if (one.length >= zero.length){
                    oxygen = one;
                }else {
                    oxygen = zero;
                }
            }else {
                if (zero.length == 1){
                    CO2 = zero;
                }else if(one.length == 1){
                    CO2 = one;
                }else {
                    if (one.length <= zero.length){
                        if(one.length == zero.length){
                            CO2 = zero;
                        }else {
                            CO2 = one
                        }
                    }else {
                        CO2 = zero;
                    }
                }
            }
        }
        for(let l = 0; l < binaryLength; l++) {
            if(t == 0){
                if (oxygen[0].split('')[l] > 0){
                    oxygenConverted = oxygenConverted + bits[l];
                }
            }else {
                if (CO2[0].split('')[l] > 0){
                    CO2Converted = CO2Converted + bits[l];
                }
            }
        }
    }
    console.log("result: " + oxygenConverted * CO2Converted);
    process.exit()
}
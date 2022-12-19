import API from "./lib/api.js";
import * as _readline from "readline";

const api = new API();
const readline = _readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`PFSimpleBot.js v1.0.0: A chatbot written in Swift by pizzafox, ported to JavaScript by mdwalters

It is optional to type in lowercase, but you should type without punctuation.
This bot has quite a bit of a personality, so don't get offended!`);

while(true) {
    readline.question(`What's your name?`, (input) => {
        console.log(api.ask(input));
        readline.close();
    });
}
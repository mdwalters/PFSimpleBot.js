import * as fs from "fs";

export default class API {
    constructor() {
        this.responses = JSON.parse(fs.readFileSync("./responses/responses.json", "utf8"));
        this.errorResponses = JSON.parse(fs.readFileSync("./responses/errorResponses.json", "utf8"));
    }

    ask(input) {
        input = input.toLowerCase();
        
        if (this.responses[input] === undefined) {
            return this.errorResponses[Math.floor(Math.random() * this.errorResponses.length)]
        } else {
            return this.responses[input];
        }
    } 
}

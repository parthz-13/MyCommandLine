#!/usr/bin/env node

const { Command } = require("commander");
const axios = require("axios")

const program = new Command();

program.command("greet <name>").action((name: string) => {
    console.log(`Hello ${name}`);
});

program
.command("add <a> <b>")
.action((a:string,b:string)=>{
    console.log(Number(a)+Number(b))
})
program
.command("sub <a> <b>")
.action((a:string,b:string)=>{
    console.log(Number(a)-Number(b))
})
program
.command("mul <a> <b>")
.action((a:string,b:string)=>{
    console.log(Number(a)*Number(b))
})
program
.command("div <a> <b>")
.action((a:string,b:string)=>{

    if (Number(b)!==0) console.log(Number(a)/Number(b))
    else console.log("Denominator cannot be 0")
})

program
.command("joke")
.description("Random Joke")
.action(async()=>{
    try{
        const res = await axios.get(`https://official-joke-api.appspot.com/random_joke`)
        console.log(res)
        // console.log(res.data.setup)
        // console.log(res.data.punchline)
    }catch(e){
        console.log("Error:",e)
    }
})

program.parse();

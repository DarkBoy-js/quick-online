# quickonline
- __Made For quick.db database to make it online__
- Report Bugs, Errors, Problems In [Support Server](https://discord.gg/devs)

## Usage 📕
- __starts ahost (use glitch or repl.it)__
 ```js
const quickonline = require('quickonline')
let serverdata = {
    port: 8080, // port
    username: "darky", //  Database username (EX)
    password: "omg" // database password (EX)
}
const host = new quickonline.host(serverdata) // port
host.start() // save the url of the project so u can use it on ur bot or whatever
```
- __Simple Exmaples__
```js
const quickonline = require('quickonline')
let serverdata = {
    url: "database url here", // database url
    username: "darky", //  Database username (EX)
    password: "omg" // database password (EX)
}

const dbo = new quickonline.bot(serverdata)

dbo.set('wow', "hi")
// null > hi
console.log(await dbo.get("wow"))
// hi
dbo.add("math", 50)
// null > 50
dbo.subtract("math", 25)
// 50 > 25
dbo.delete("math")
// 25 > null
// sorry for these trash exms
```
 
## Why quickonline
- Fast and easy to use
- This Package Is Made With 💖 By ! Darkboy🍭#9966 + AzizJaber.#5414



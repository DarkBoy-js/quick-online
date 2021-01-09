<h1 align="center"> Quick Online</h1>

- An online version of **quick.db**.
- For any **query**, **issue** or **report**. You can mind visiting our **[Discord support server.](https://discord.gg/devs)**

## How to use 📚

```js
const quickonline = require("quickonline"); // Requiring our package.

const server = {
  port: 8080, // The port key.
  username: "quick", //  Username credentials.
  password: "online", // Password credentials.
};

const host = new quickonline.host(server); // Defining the variable for our host.
host.start(); // Starting up the host and saving it.
```

## Example ✏️

```js
const quickonline = require("quickonline"); // Requiring our package.

const server = {
  url: "database-url", // Our database URL for connecting.
  username: "quick", // Username credentials.
  password: "online", // Password credentials.
};

const dbo = new quickonline.bot(server);

async function qdbo() {
  dbo.set("quick", "online"); // Setting "online" for the "quick" variable in the database.
  console.log(await dbo.get("quick")); // Logging the value of the "online" variable.
}
qdbo();

dbo.set("math", 25); // Setting the number "25" for the "math" variable in the database.

dbo.add("math", 50); // Adding "50" to the math variable, the new value will be "75".

dbo.subtract("math", 25); // Subtracting "25" from the "math" variable, the new value will be "50".

dbo.delete("math"); // Deleting the "math" variable from the database, so it's value no longer exists.

dbo.has("math"); // checks whether a key have some value.

dbo.push("math", "fun"); // push "fun" value to the "math" array.

dbo.pull("math", "fun"); // pull "fun" value from the "math" array.

dbo.startsWith("qu"); // fetch each key which starts with "qu". You can add range to your fetch (default is 10). Example : dbo.startsWith("qu", 5)

dbo.check(); // checks whether the database url is working or not.

dbo.all(); // fetches the whole data from your database.

dbo.stop(); // stop your database. (You can use it as database restart with pm2.)

dbo.ping(); // returns your database latency.
```

## Reasons **Why** 📋

- **Handy** and **simple** to use.
- **Quick** and **Easy** setup with **no** hastle.
- Everything over **internet**, means no local storage.

## **Creators** 💖

- ! Darkboy🍭#9966
- Sujal Goel#0001
- AzizJaber.#5414
- Lebyy_Dev#0899

<details>
<summary>Note</summary>

- You can ignore this if not using **repl.it** or **glitch.com**.
- For those who are using **repl.it** or **glitch.com** then you can use any of the following uptime service to uptime your database. So, that it won't go to sleep.
  - https://uptime.sujalgoel.ml/
  - https://uptimerobot.com/

</details>

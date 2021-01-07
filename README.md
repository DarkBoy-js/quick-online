### quickonline
+ An online version of **quick.db**.
+ For any **questions**, **issues** or **reports**, visit our **[support server!](https://discord.gg/devs)**

# How-To-Use 📚 
```js

  const quickonline = require("quickonline"); // Requiring our package.

  const server = {
     port: 8080, // The port key.
     username: "quick", //  Username credentials.
     password: "online" // Password credentials.
  };

  const host = new quickonline.host(server); // Defining the variable for our host.
  host.start(); // Starting up the host and saving it.

```

# Examples ✏️
```js

  const quickonline = require('quickonline'); // Requiring our package.

  const server = {
    url: "database_url", // Our database URL for connecting.
    username: "quick", // Username credentials.
    password: "online" // Password credentials.
  };

  const dbo = new quickonline.bot(server);

  dbo.set('wow', "hi");
    // Setting "hi" for the "wow" variable in the database.
  console.log(await dbo.get("wow"))
    // Logging the variable we just set, this will print "hi".
  dbo.set("math", 25);
    // Setting the number "25" for the "math" variable in the database.
  dbo.add("math", 50);
    // Adding "50" to the math variable, the new value will be "75".
  dbo.subtract("math", 25);
    // Subtracting "25" from the "math" variable, the new value will be "50".
  dbo.delete("math");
    // Deleting the "math" variable from the database, so it's value no longer exists.

```

# Reasons **Why** 📋
+ **Fast**, **simple** and **easy** to use.
+ **Quick** setup, **no** hastle.
+ An upcoming website dedicated to **managing your databases**.

# Creators 🎀
+ ! Darkboy🍭#9966
+ AzizJaber.#5414
+ Sujal Goel#0001
+ Lebyy_Dev#0899

__Thanks To extase#0001 for making readme__

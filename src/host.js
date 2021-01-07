class host {

  constructor(data) {
    if (!data) throw new Error("Missing data array need help? http://discord.gg/devs");
    if (!data.port) data.port = 8080
    if (!data.username) throw new Error("Missing Username,, need help? join http://discord.gg/devs")
    if (!data.password) throw new Error("Missing Password, need help? join http://discord.gg/devs")
    this.port = data.port
    this.username = data.username
    this.password = data.password
  }
  async start() {
    const express = require('express')
    const db = require('quick.db')
    const app = new express()


    app.listen(this.port, () => {
      console.log(`[Database] started.`)
    })

    app.get('/quickonline/set', async (req, res) => {
      let Key = req.query.set
      let value = req.query.value
      if (!Key && value) return res.send(false)

      let username = req.query.username
      let password = req.query.password
      // so when i use ! nothing happens so i had to do this sorry js
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }

      if (!value && Key) return res.send(false)
      db.set(`${Key}`, value)
      let data = {
        sucsses: true
        , key: Key
      }
      await res.json(data)
    })
    app.get('/quickonline/get', async (req, res) => {
      let key = req.query.key
      if (!key) return res.send(false)
      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }


      let data = db.get(key)
      if (typeof data === "object") {

        return res.json(JSON.stringify(data) || null);
      }
      await res.json(`${data || null}`)
    })
    app.get('/quickonline/delete', async (req, res) => {
      let key = req.query.key
      if (!key) return res.send(false)

      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }
      if (!key) return res.send(false)

      db.delete(`${key}`)
      return res.send('Deleted..')
    })
    app.get('/quickonline/all', async (req, res) => {
      let data = db.all()
      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild password`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }
      return res.send(data)
    })
    app.get('/quickonline/add', async (req, res) => {
      let add = req.query.add
      let value = req.query.value
      if (!add && value) return res.send(false)

      if (isNaN(value)) return res.json("string")
      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }

      let data = db.get(add)
      if (!data) {
        db.add(add, value)
        return res.json(true)
      }
      if (data) {
        if (isNaN(data)) return res.json("string")
        db.add(add, value)
        return res.json(true)
      }
    })
    app.get('/quickonline/subtract', async (req, res) => {
      let remove = req.query.remove
      let value = req.query.value
      if (!remove && value) return res.send(false)
      if (isNaN(value)) return res.json("string")
      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }

      let data = db.get(remove)

      if (!data) {
        db.subtract(remove, value)
        return res.json(true)
      } // ik i could just use } else {  but doing this is more fun >:)
      if (data) {
        if (isNaN(data)) return res.json("string")
        db.subtract(remove, value)
        return res.json(true)
      }
    })
    app.get('/quickonline/fetch', async (req, res) => {
      let key = req.query.key
      if (!key) return res.json(false)
      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }
      let data = db.get(key)
      if (typeof data === 'object') {
        return res.json(JSON.stringify(data))
      }
      let pogchamp = {
        key: key,
        data: data
      }
      return await res.json(pogchamp)
    })

    app.get('/quickonline/setobject', async (req, res) => {
      let Key = req.query.set
      let value = req.query.value
      if (!Key && value) return res.send(false)
      let username = req.query.username
      let password = req.query.password
      // so when i use ! nothing happens so i had to do this sorry js
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }

      if (!value && Key) return res.send(false)
      let data = JSON.parse(value)

      await db.set(Key,
        data
      )
    })
    app.get('/quickonline/push', async (req, res) => {
      let key = req.query.key
      let data = req.query.data
      if (!key && data) return res.send(false)

      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }
      let akey = db.get(key)
      if (typeof akey !== "object") return res.json("Non-object")
      let dataing = JSON.parse(data)
      db.push(key, dataing)
    })
    app.get('/quickonline/has', async (req, res) => {
      let key = req.query.key
      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }
      let data = db.get(key)
      if (!data) return res.send(false)
      if (data) return res.send(true)
    })

    app.get('/quickonline/check', async (req, res) => {
      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }

      return await res.json("Alive")
    })
    /**
     * THIS PART IS MADE FOR OUR DASHBOARD SO U CAN TRACK UR DATA FROM IT PLAYING ON THE DATA WONT MAKE UR URL WORKING ON THE DASHBOARD
     */
    // -- Coming soon  
    app.get("/quickonline/restart", async (req, res) => {
      // on this fuction we do ask for the username & password for the database
      let username = req.query.username
      let password = req.query.password
      if (username === this.username) { } else {
        return res.send(`invaild username`)
      }

      if (password === this.password) { } else {
        return res.send(`invaild password`)
      }
      await res.send(`Restarting database...`)
      await process.exit(1)
    })
    // here just afuction of checking if the database are alive or no! we wont ask for password or username bc nothing would get scraped from this
    app.get("/quickonline/alive", async (req, res) => {
      await res.send(true)
    })

  }
}

module.exports = host;

const superagent = require("superagent");
class bot {
  constructor(data) {
    if (!data) throw new Error('Missing  default Array for example go to quickonline.js.org , Need Help? http://discord.gg/devs')
    if (!data.url) throw new Error("Missing Database url need help? http://discord.gg/devs")
    if (!data.username) throw new Error("Missing Database Username Need help? http://discord.gg/devs")
    if (!data.password) throw new Error("Missing Database Password need help? http://discord.gg/devs")
    this.url = data.url
    this.username = data.username
    this.password = data.password
  }
  /**
   * sets avalue to spefic key on the database
   * @param  key  
   * @param valuekey 
   * @example dbo.set('wow', 'hi')
   * null > hi
   */
  async set(key, valuekey) {
    if (!key) throw new Error('[Key] Missing Data Key\n need help? join http://discord.gg/devs')
    if (!valuekey) throw new Error('[Value] Missing data\n need help? join http://discord.gg/devs')
    // so simpley i made this fuction to check if the data , is an object or no so u can set and add object values
    if (typeof valuekey === "object") {
      // here we simlpey just make the object into json data then send it to url to make it again object there then save it on the database.
      let data = superagent.get(`${this.url}/quickonline/setobject?set=${key}&value=${JSON.stringify(valuekey)}&username=${this.username}&password=${this.password}`) // here we send arequest into our Database. 
      if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
      if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
      if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")
      return data;
    }
    let data = superagent.get(`${this.url}/quickonline/set?set=${key}&value=${valuekey}&username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")

    return data;
  }

  /**
   * Gets adata from the database
   * @param key  
   * @example dbo.get('wow')
   * hi
   */
  async get(key) {
    let data = superagent.get(`${this.url}/quickonline/get?key=${key || null}&username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")
    try {
      let dataing = JSON.parse((await data).body)
      return dataing
    } catch (err) {
      return (await data).body
    }

  }
  /**
   * delete adata from the database
   * @param key  
   * @example dbo.delete('omg')
   * hi > null
   */
  async delete(key) {
    let data = superagent.get(`${this.url}/quickonline/delete?key=${key || null}&username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")
    return (await data).body;
  }
  /**
   * add more value to key on the database
   * @param  key 
   * @param  value 
   * @example dbo.add('math', 500)
   * null > 500
   * @example dbo.add('math', 290)
   * 500 > 790
   */
  async add(key, value) {
    if (isNaN(value)) throw new Error('Value must be only numbers on dbo.add\n need help? http://discord.gg/devs')
    let data = superagent.get(`${this.url}/quickonline/add?add=${key}&value=${value}&username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")
    if ((await data).body === "string") throw new Error("Key is string, not anumber")
    return true;
  }
  /**
   * subtract avalue from akey on database
   * @param key 
   * @param value 
   * @example dbo.subtract('math', 30)
   * 790 > 760  
   */
  async subtract(key, value) {
    if (!key) throw new Error("Missing key need help with keys ? join \n http://discord.gg/devs")
    if (!value) throw new Error("Missing value need help with values ? join \n http://discord.gg/devs")
    if (isNaN(value)) throw new Error('Value must be only numbers on dbo.subtract\n need help? http://discord.gg/devs')
    let data = superagent.get(`${this.url}/quickonline/subtract?remove=${key}&value=${value}&username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")
    if ((await data).body === "string") throw new Error("Value of the key is string not anumber need help with values?\n  http://discord.gg/devs")
    return true;
  }


  /**
   * fetch key from the database
   * @param  key 
   * @example dbo.fetch('omg')
   * { key: "omg", data: null }
   */
  async fetch(key) {
    if (!key) throw new Error("Missing data key need help?\n join http://discord.gg/devs")
    let data = superagent.get(`${this.url}/quickonline/fetch?key=${key}&username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")
    try {
      let datating = JSON.parse((await data).body)
      return datating
    } catch (err) {
      return (await data).body
    }
  }

  /**
   * Check if the data key has value or no
   * @param key 
   * @readonly ALPHA
   */
  async has(key) {
    if (!key) throw new Error("[Missing Key] Missing data key of the value Need help http://discord.gg/devs")
    let data = superagent.get(`${this.url}/quickonline/has?key=${key}&username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")

    return (await data).body;
  }
  /**
   * 
   * @param {*} key 
   * @param {*} value 
   * @example Push adata into akey
   * @example dbo.add("Key", { boo: "Boomer", cool: "Cooler"})
   * @readonly You can't push an non-object value
   */
  async push(key, value) {
    if (!key) throw new Error("[Missing Key] Missing key need help? http://discord.gg/devs")
    if (!value) throw new Error('[Missing Value] Missing data\n need help? join http://discord.gg/devs')
    if (typeof value !== "object") throw new Error("you cant use push with non-object value need help? http://discord.gg/devs")
    let data = superagent.get(`${this.url}/quickonline/push?key=${key}&data=${JSON.stringify(value)}&username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")
    if ((await data).body === "Non-object") throw new Error(key + " Has an non-object value! need help? https://discord.gg/devsa")
    return true;
  }
  /**
   * @example
   * check if the url working or no
   */
  async check() {
    let data = superagent.get(`${this.url}/quickonline/check?username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")
    return (await data).body
  }

  /**
   * fetch all the data from the database
   * @param 
   * @example dbo.all()
   */
  async all() {
    let data = superagent.get(`${this.url}/quickonline/all?username=${this.username}&password=${this.password}`)
    if (!data) throw new Error('Invaild URL\n need help? http://discord.gg/devs ')
    if ((await data).body === "invaild username") throw new Error("Invaild Username , need help? http://discord.gg/devs")
    if ((await data).body === "invaild password") throw new Error("Invaild Password , need help? http://discord.gg/devs")
    return data;
  }

}

module.exports = bot

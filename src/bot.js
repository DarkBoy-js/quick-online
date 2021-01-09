const superagent = require("superagent");

class bot {
  constructor(data) {
    if (!data)
      throw new Error(
        "Missing default Array.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (!data.url)
      throw new Error(
        "Missing Database url.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (!data.username)
      throw new Error(
        "Missing Database Username.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (!data.password)
      throw new Error(
        "Missing Database Password/\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    this.url = data.url;
    this.username = data.username;
    this.password = data.password;
  }

  /**
   * Sets a value to a spefic key
   * @param  key
   * @param valuekey
   * @example dbo.set('quick', 'online')
   * @returns online
   */
  async set(key, valuekey) {
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n  You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (!valuekey)
      throw new Error(
        "[Value] Missing data\n  You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (typeof valuekey === "object") {
      let data = superagent.get(
        `${this.url}/quickonline/setobject?key=${key}&username=${this.username
        }&password=${this.password}&value=${JSON.stringify(valuekey)}`
      );
      if (!data)
        throw new Error(
          "Invaild URL\n \n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
        );
      if ((await data).body.success === "false") {
        if (
          (await data).body.error.errors.username ===
          "The provided username is invalid."
        )
          throw new Error(
            "Invaild Username, need help? \nJoin http://discord.gg/devs"
          );
        if (
          (await data).body.error.errors.password ===
          "The provided password is invalid."
        )
          throw new Error(
            "Invaild Password, need help? \nJoin http://discord.gg/devs"
          );
      } else {
        return data;
      }
    }
    let data = superagent.get(
      `${this.url}/quickonline/set?key=${key}&value=${valuekey}&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    } else {
      return data;
    }
  }

  /**
   * Gets data of a specific key
   * @param key
   * @example dbo.get('wow')
   * @returns online
   */
  async get(key) {
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n  You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    let data = superagent.get(
      `${this.url}/quickonline/get?key=${key}&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    function isJson(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }
    let final_data = (await data).body.data;
    if (isJson(final_data)) {
      return JSON.parse(final_data);
    } else {
      return final_data;
    }
  }

  /**
   * Deletes data of a specific key
   * @param key
   * @example dbo.delete('wow')
   * @returns null
   */
  async delete(key) {
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    let data = superagent.get(
      `${this.url}/quickonline/delete?key=${key}&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    return (await data).body;
  }

  /**
   * Adds some value to a specific key
   * @param  key
   * @param  value
   * @example dbo.add('math', 500)
   * @returns 500
   * @example dbo.add('math', 290)
   * @returns 790
   */
  async add(key, value) {
    if (!value)
      throw new Error(
        "[Value] Missing Data Value\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (isNaN(value))
      throw new Error(
        "[Value] must be a number\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    let data = superagent.get(
      `${this.url}/quickonline/add?key=${key}&value=${value}&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if ((await data).body.message === "The key must contain a number value")
        throw new Error(
          "The key must contain a number value, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    return (await data).body;
  }

  /**
   * Subtracts some value from a specific key
   * @param key
   * @param value
   * @example dbo.subtract('math', 30)
   * @returns 760
   */
  async subtract(key, value) {
    if (!value)
      throw new Error(
        "[Value] Missing Data Value\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (isNaN(value))
      throw new Error(
        "[Value] must be a number\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    let data = superagent.get(
      `${this.url}/quickonline/subtract?key=${key}&value=${value}&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if ((await data).body.message === "The key must contain a number value")
        throw new Error(
          "The key must contain a number value, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    return (await data).body;
  }

  /**
   * Checks if a specific key has some value or not
   * @param key
   * @example dbo.has("quick")
   * @returns { success: 'true', message: 'This key contain some sort of data' }
   */
  async has(key) {
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    let data = superagent.get(
      `${this.url}/quickonline/has?key=${key}&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    return (await data).body;
  }

  /**
   * Pushs some data to a specific key
   * @param key
   * @param value
   * @example dbo.push("Key", { boo: "Boomer", cool: "Cooler"})
   * @readonly You can't push an non-object value
   */
  async push(key, value) {
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (!value)
      throw new Error(
        "[Value] Missing Data Value\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    let data = superagent.get(
      `${this.url}/quickonline/push?key=${key}&data=${JSON.stringify(
        value
      )}&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if ((await data).body.message === "The target must be an array") {
        return (await data).body;
      }
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    return (await data).body;
  }

  /**
   * Pull some data from a specific key
   * @param  key
   * @example dbo.pull('quick', 'online')
   */
  async pull(key, value) {
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if (!value)
      throw new Error(
        "[Value] Missing Data Value\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    let data = superagent.get(
      `${this.url}/quickonline/pull?key=${key}&data=${value}&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error("Invaild URL\n need help? http://discord.gg/devs ");
    if ((await data).body.success === "false") {
      if ((await data).body.message === "The target must be an array") {
        return (await data).body;
      }
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    return (await data).body;
  }

  /**
   * Fetch data from a specific key
   * @param  key
   * @example dbo.fetch('quick')
   * @returns { key: "quick", data: online }
   */
  async fetch(key) {
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    let data = superagent.get(
      `${this.url}/quickonline/fetch?key=${key}&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    function isJson(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }
    let final_data = (await data).body;
    if (isJson(final_data)) {
      return JSON.parse(final_data);
    } else {
      return final_data;
    }
  }

  /**
   * Fetches everything and sorts by given target
   * @param {string} key
   * @param {object} ops
   * @example await dbo.startsWith("money", { sort: ".data" });
   */
  async startsWith(key, range) {
    if (!key)
      throw new Error(
        "[Key] Missing Data Key\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    let data = superagent.get(
      `${this.url}/quickonline/startswith?key=${key}&range=${range || 10
      }&username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    function isJson(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }
    let final_data = (await data).body;
    if (isJson(final_data)) {
      return JSON.parse(final_data);
    } else {
      return final_data;
    }
  }

  /**
   * Checks if the database url is working or not
   * @example dbo.check()
   */
  async check() {
    let data = superagent.get(
      `${this.url}/quickonline/check?username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    return (await data).body;
  }

  /**
   * Fetches all data from the database
   * @example dbo.all()
   */
  async all() {
    let data = superagent.get(
      `${this.url}/quickonline/all?username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    return (await data).body;
  }

  /**
   * Stops the database
   * @example dbo.stop()
   */
  async stop() {
    let data = superagent.get(
      `${this.url}/quickonline/stop?username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    return (await data).body;
  }

  /**
   * returns the ping of your database
   * @example await dbo.ping();
   * @returns Number
   */
  async ping() {
    let data = superagent.get(
      this.url +
      `/quickonline/latency?username=${this.username}&password=${this.password}`
    );
    if (!data)
      throw new Error(
        "Invaild URL.\n You can go to https://quickdevs.studio/ for help, Also you can join our Discord server : http://discord.gg/devs"
      );
    if ((await data).body.success === "false") {
      if (
        (await data).body.error.errors.username ===
        "The provided username is invalid."
      )
        throw new Error(
          "Invaild Username, need help? \nJoin http://discord.gg/devs"
        );
      if (
        (await data).body.error.errors.password ===
        "The provided password is invalid."
      )
        throw new Error(
          "Invaild Password, need help? \nJoin http://discord.gg/devs"
        );
    }
    let ping = Date.now() - parseInt((await data).body.ping) + "ms";
    return ping;
  }
}

module.exports = bot;

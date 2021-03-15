<template>
  <div>
    <div id="nav">
    <div class="align-right">
    <router-link to="/" @click="getEventDataArray">Home</router-link>
    <router-link to="/create-event">Create Event </router-link>
    <button @click="resetEvents">Reset events</button>
    </div>
  </div> 
  <router-view :eventsArray="eventsArray" :eventHistory="eventHistory" v-on:entered="addToHistory($event)" v-on:eventExpired="updateHistory(emitValue)"/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      eventsArray: [],
      eventHistory: []
    }
  },
  methods: {
    async getEventDataArray() {
      let settings = {
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': '$2b$10$IQutUOnIDU5m1VTI.4PzQ.M1ZzdQ4Q/XZzMz/MT7RKqX8oHx3k0pu',
            'X-Bin-Versioning': 'false'
        }
      }
      try{
      let resp = await fetch(`https://api.jsonbin.io/v3/b/6038c7059342196a6a687d55/latest`, settings)
      let data = await resp.json()

      this.eventsArray = await data.record.events
      console.log(data)
      }
      catch(err){
        console.error(err)
      }
    },
    addToHistory(event) {
      console.log("i entered this event", event)
      this.eventHistory.push(event)
    },
    async updateHistory(emitValue) {
      console.log("this is emitted after expired func in app.vue", emitValue)
      let itemInHistory = this.eventHistory.find(event => event.id == emitValue.id)
      itemInHistory.eventOver = true
      let itemInEventArray = this.eventsArray.find(event => event.id == emitValue.id)
      itemInEventArray.eventOver = true
      
    },
    
    async resetEvents() {

        
        let settings = {
            method: 'PUT',
            body: JSON.stringify({events: []}),
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2b$10$IQutUOnIDU5m1VTI.4PzQ.M1ZzdQ4Q/XZzMz/MT7RKqX8oHx3k0pu',
                'X-Bin-Versioning': 'false'
            }
        }
        try{
        let resp = await fetch(`https://api.jsonbin.io/v3/b/6038c7059342196a6a687d55/`, settings)
        let data = await resp.json()

        console.log(data)
        }
        catch(err){
            console.error(err)
        }
        
    }
  },
  mounted() {
    this.getEventDataArray()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px 0 30px 0;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 1rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.align-right {
  text-align: right;
}


</style>

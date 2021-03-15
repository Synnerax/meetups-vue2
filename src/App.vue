<template>
  <div>
    <div id="nav">
    <div class="align-right">
    <router-link to="/" >Home</router-link>
    <!-- <router-link to="/create-event">Create Event </router-link> -->
    </div>
  </div> 
  <router-view :eventsArray="events" :eventHistory="eventHistory" 
  @addReview="updateReviewArray"
  v-on:entered="addToHistory" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      events: [
      {
        "id": 1,
        "organizer": "Peter S. and Johan K.",
        "title": "How to implement a DevOps-friendly API architecture",
        "location": "Göteborg",
        "description": "Welcome everyone, to the first meetup event of this year. Once again we are running it online.\n\nA well implemented API strategy is one of the cornerstones in a successful data driven company. Our experience is that many API initiatives fail to reach full potential due to the lack of adoption in an organizations DevOps teams.\n\nIn this event, Johan Kitti and Erik Andersson from Solita will discuss the challenges with rolling out a central API strategy and strategies for overcoming them.\n\nWith their combined experience from aligning processes in developer organizations and technical hands-on practices from various API initiatives, we aim to give you concrete actions to take depending on where in the API journey your organisation .\n\nAs always this event is free.\nWe hope you can and want to join us.\nWelcome",
        "date": "2020-02-10",
        "time": {
          "hour": "15",
          "minute": "30",
          "abbreviation": ""
        },
        "tag": "Science",
        "eventOver": false,
        "reviews": []
      },
      {
        "id": 2,
        "organizer": "Jonathan G. and 4 others",
        "title": "Climbing the UX Ladder (Online Event)",
        "location": "Stockholm",
        "description": "Welcome to a new year of meetups! 🎉\nWe kick off the series with Joanne Lau that will share with us her experience of working with a company that had low UX maturity and their journey of climbing the UX maturity ladder. She will share some learnings and tips she collected along the way.\n-----------------------------\nJoanne is Canadian UX Designer based in Sweden who has been consulting for different clients and industries for the past few years. When she’s not sketching or designing, you’ll find her taking photos, climbing rocks or reading with a cup of tea.\n",
        "date": "2021-02-12",
        "time": {
          "hour": "03",
          "minute": "15",
          "abbreviation": ""
        },
        "tag": "Science",
        "eventOver": false,
        "reviews": []
      },
      {
        "id": 3,
        "organizer": "Samaneh McG.",
        "title": "Women in IT - Event #30",
        "location": "New York",
        "description": "Details\nWelcome to another Women in IT event!\n\nMany thanks to Britt-marie who is our guest this time. More about Anna and what she is currently working on:\nsome Cool projects\n\nAgenda:\n18:00 - 19:00\nAnna will talk about:\n- Her current project in USA\n- Her journey and all those who supported and inspired her during this journey\n- Her experience about living and working abroad\n\nHope to see many of you :)",
        "date": "2021-09-16",
        "time": {
          "hour": "18",
          "minute": "35",
          "abbreviation": ""
        },
        "tag": "Culture",
        "eventOver": true,
        "reviews": [
          {
            "name": "Al",
            "comment": "Best event i've ever been to!"
          }
        ]
      },
      {
        "id": 4,
        "organizer": "John and Catriona",
        "title": "Drive Your Plow Over the Bones of the Dead (Olga Tokarczuk, 2009)",
        "location": "Lundby",
        "description": "In a remote Polish village, Janina devotes the dark winter days to studying astrology, translating the poetry of William Shakespear, and taking care of the summer homes of wealthy Warsaw residents. Her reputation as a crank and a recluse is amplified by her not-so-secret preference for the company of animals over humans.\n\nThen a neighbour turns up dead. Soon other bodies are discovered, in increasingly strange circumstances. As suspicions mount, Janina inserts herself into the investigation, certain that she knows whodunit. If only anyone would take any notice of her ...\n\nThis thriller-cum-fairy tale, from the 2018 winner of the Nobel Prize in Literature, is a provocative exploration of the murky borderland between sanity and madness, justice and tradition, autonomy and fate. Whom do we deem sane? it asks. Who is worthy of a voice?",
        "date": "2020-05-14",
        "time": {
          "hour": "05",
          "minute": "40",
          "abbreviation": ""
        },
        "tag": "Culture",
        "eventOver": true,
        "reviews": []
      }
    ],
      eventHistory: []
    }
  },
  methods: {
    addToHistory(event) {
      console.log("i entered this event", event)
      this.eventHistory.push(event)
    },
    async updateHistory(emitValue) {
      console.log("this is emitted after expired func in app.vue", emitValue)
      let itemInHistory = this.eventHistory.find(event => event.id == emitValue.id)
      itemInHistory.eventOver = true
      let itemInEventArray = this.events.find(event => event.id == emitValue.id)
      itemInEventArray.eventOver = true
      
    },
    async updateReviewArray(value) {
      let review = {...value}
      console.log("this is the new update in app.vue", review)
      let oldEvent = this.events.find(event => event.id === value.id)
      console.log("this is the oldEvent", oldEvent)
      await oldEvent.reviews.push(review)
    }
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

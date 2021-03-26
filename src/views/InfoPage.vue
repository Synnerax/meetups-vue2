<template>
  <section class="event-info-section">

      <section class="top-info-section">
          <section class="top-info-flex">
              <p class="date-info">{{eventInfo.date}}</p>
              <h1 class="title-info">{{eventInfo.title}}</h1>

              <h3>Hosted By:</h3>
              <p class="info-organizer">{{eventInfo.organizer}}</p>
          </section>
      </section>

      <section class="buttom-info-section">
          <section class="buttom-info-flex" >
              <p class="description-info" v-show="!eventOver">
              {{eventInfo.description}}
              </p>
              <section v-show="eventOver">
                  <Reviews @comment="addReview" 
                  :event="eventInfo" :reviews="eventInfo.reviews">
                  </Reviews>
              </section>
          </section>
          
          <section class="right-section">
            <section class="time-info">
                <p>Starts: {{eventInfo.time.hour}}:{{eventInfo.time.minute}}</p>
            </section>

            <section class="enter-event" v-show="!isOverAndNotEntered">
                <button id="enter-button" v-show="!alreadyEntered" @click="enterEvent">
                    Enter Event
                </button>
                <div class="entered-event" v-show="alreadyEntered" >
                    <p>{{buttonContainerText}}</p>

                </div>
            </section>
            <section class="enter-event" v-show="isOverAndNotEntered">
                <div class="entered-event" >
                    <p>Event Is Already Over</p>

                </div>
            </section>
        </section>
      </section>

  </section>
</template>

<script>

import Reviews from '@/components/Reviews.vue'
export default {
    name: "event-info-page",
    components: {
        Reviews
    },
    data() {
        return {
            entered: false, 
            buttonContainerText: "You Have Entered the event!"
        }
    },
    props: {
        eventsArray: Array,
        eventHistory: Array
    },
    methods: {
        enterEvent() {
            const event = this.chosenEvent
            this.$emit("entered", event)
            this.entered = true
        },
        endEvent() {
            let eventArray = this.eventsArray
            //console.log(" new event array",eventArray)
            let expiredEvent = eventArray.find(event => event.id == this.$route.params.id)
            expiredEvent.eventOver = true
            //console.log("this is the new event:", event)
            let emitValue = {...expiredEvent}
            this.$emit("eventExpired", emitValue)
        },
        addReview(value) {
            this.$emit("addReview", value)
        }
    },
    computed: {
    eventInfo() {
      let event = {
        id : this.chosenEvent ? this.chosenEvent.id : "Error getting ID",
        title : this.chosenEvent ? this.chosenEvent.title : 'Error',
        price : this.chosenEvent ? this.chosenEvent.price : 'Error getting price',
        description : this.chosenEvent ? this.chosenEvent.description : 'No description available',
        location : this.chosenEvent ? this.chosenEvent.location : 'Error getting location',
        organizer : this.chosenEvent ? this.chosenEvent.organizer : 'Error getting organizer',
        tag : this.chosenEvent ? this.chosenEvent.tag : 'Error getting tag',
        date : this.chosenEvent ? this.chosenEvent.date : 'Error getting date',
        time : this.chosenEvent ? this.chosenEvent.time : 'Error getting time',
        reviews : this.chosenEvent ? this.chosenEvent.reviews : [],


      }
      return event;
    },
    eventOver() {
        return this.chosenEvent.eventOver
    },
    chosenEvent(){ 
        if ( this.$route !== undefined ) {
          return this.eventsArray.find(event => event.id == this.$route.params.id)
        } else {
          return null
        }
      },
    alreadyEntered(){ 
        if ( this.eventHistory.length > 0 && this.eventHistory.find(event => event.id == this.chosenEvent.id)) {
           return true
           
        } else {
          return false
        }
    },
    isOverAndNotEntered(){
        if(!this.alreadyEntered && this.eventOver) {
            return true
        } else {
            return false
        }
    }
    }
    
}
</script>

<style>

.event-info-section {
    background: rgb(166, 245, 228);
    height: 100%;
    min-height: 100vh;
    padding-top: 10rem;
}

.top-info-section {
    
    width: 100%;
    background: #fff;
}

.top-info-flex {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 75%;
    height: 95%;
    margin: auto;
    padding: 7px;
    
}

.date-info {
}

.title-info {
    font-size: 3.5rem;
    font-weight: 300;
    margin: 0 0 10px 0;
}

.top-info-flex > h3 {
    margin-top: auto;
    margin-bottom: 10px;
    font-size: 2rem;
    font-weight: 100;
}

.info-organizer {
    margin: 0 0 10px 0;
}

.buttom-info-section {
    display: flex;
}
.buttom-info-flex {
    width: 65%;
    display: flex;
    min-height: 40vh;
    margin-top: 10px;
    margin-left: auto;
}


.description-info {
    text-align: left;
}

.right-section {
    width: 22%;
    padding-top: 2rem;
}

.time-info, .enter-event {
    background: rgb(233, 226, 226);

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    font-size: 1.4rem;
}
.time-info {
    width: 100%;
    height: 5rem;
    
}

.enter-event {
    margin-top: 3.5rem;
    width: 100%;
    min-height: 6.5rem;
}

.enter-event > button {
    margin: 0;
    width: 75%;
    height: 48px;
    background: #ffffff;
    border: 1px solid #008294;
    color: #008294;
  
    transition: background-color 300ms ease, color 300ms ease;
}


.enter-event > button:hover {
  background: #008294;
  color: #ffffff;

}

.enter-event > div{
    margin: 1rem
}


</style>
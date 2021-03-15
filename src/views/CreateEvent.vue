<template>
  <section>
      <section class="form">
          <section class="top-section">
          <input type="text" class="event-input-title" v-model="event.title" placeholder="Name of event and a short description..">
          <input type="text" class="event-input-organizer" placeholder="Organizer.." v-model="event.organizer">
          </section>
          
          <section class="first-middle-section">
          <input type="text" class="event-input-location" v-model="event.location" placeholder="Location..">

          </section>
          
          <section class="second-middle-section">
            <input type="text" class="event-input-date" v-model="event.date" placeholder="Date..">
            <section class="event-input-time">
                <select name="time-hour" id="time-hour" v-model="event.time.hour">
                    <option value="00">00</option>    
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option> 
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option> 
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                </select>
                :
                <select name="time-minute" id="time-minute" class="" v-model="event.time.minute">
                    <option value="00">00</option>
                    <option value="05">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>  
                      
                </select>
            </section>
            
            <!-- should be a option to choose from am and pm
            <input type="text" class="am-pm" v-model="event.timeAbbreviation">
            -->
            <select name="tag-selector" id="tag-selector" class="event-input-tag" v-model="event.tag">
                <option value="Music Festival">Music Festival</option>
                <option value="Science">Science</option>
                <option value="Culture">Culture</option> 
            </select>
          </section>

        <section class="description-section">
            <label for="description">Event Description:</label>
            <textarea class="event-input-description" v-model="event.description" name="description" rows="18" cols="90">
            </textarea>
        </section>

        <button id="create-event" @click="pushToEventsArray">Submit Event</button>
      </section>
  </section>
</template>

<script>
export default {
    name: "Create-Event",
    data() {
        return {
            events: [],
            event: {
                id: "",
                organizer: "",
                title: "",
                location: "",
                description: "",
                date: "",
                time: {
                    hour: "",
                    minute: "",
                    abbreviation: ""
                },
                tag: "",
                eventOver: false,
                reviews: [
                    
                ]
            }
    }
    },
    props: {
        eventsArray: Array
    },
    methods: {
        async pushToEventsArray() {
        console.log("1", this.eventsArray)
        this.events = [...this.eventsArray]
        console.log("2")
        this.event.id = this.eventsArray.length + 1
        this.events.push(this.event)
        console.log("3")

/*      
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
            if (req.readyState == XMLHttpRequest.DONE) {
                console.log(req.responseText);
            }
        };

        req.open("PUT", "https://api.jsonbin.io/v3/b/6038c7059342196a6a687d55/", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2b$10$IQutUOnIDU5m1VTI.4PzQ.M1ZzdQ4Q/XZzMz/MT7RKqX8oHx3k0pu");
        req.send(JSON.stringify({events: this.events}));
        }
*/
        
        let settings = {
            method: 'PUT',
            body: JSON.stringify({events: this.events}),
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': '$2b$10$IQutUOnIDU5m1VTI.4PzQ.M1ZzdQ4Q/XZzMz/MT7RKqX8oHx3k0pu',
                'X-Bin-Versioning': 'false'
            }
        }
        try{
            console.log("4")
        console.log("hej här är jag")
        let resp = await fetch(`https://api.jsonbin.io/v3/b/6038c7059342196a6a687d55/`, settings)
        let data = await resp.json()

        console.log(data)
        }
        catch(err){
            console.error(err)
        }
        
    }
    
    }
    
}
</script>

<style>

.form  * {
    margin-top: 1rem;
    border-radius: 5px;
    border: none;

}
.form {
    background: rgb(203, 212, 207);
    border-radius: 8px;
    min-width: 200px;
    max-width: 915px;
    margin: auto;
    padding: 2rem 4rem;
    
}

.top-section {
    display: flex;
}
.event-input-title {
    width: 60%;
    height: 42px;
    margin-right: 2rem;
}

.event-input-organizer {
    width: 40%;
}

.first-middle-section {
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
}
.event-input-location {
    width: 40%;
}

.event-input-seats {
    width: 20%;
}

.second-middle-section {
    width: 100%;
    height: 42px;
    display: flex;
    justify-content: space-between;
}

.description-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

textarea {
    resize: none;
}

button {
    margin-top: 3rem;
    height: 42px;
    width: 98px;


}
/*
.event-input-description {
    width: 450px;
    height: 200px;
}
*/



</style>
<template>
  <section class="event-card" @click="goTo(eventInfo.id)">
      <div class="color-bar-green" v-show="!eventInfo.eventOver"></div>
      <div class="color-bar-red" v-show="eventInfo.eventOver"></div>
      <div class="date-time-container" v-show="!eventInfo.eventOver">
        <span class="card-date">{{eventInfo.date}}, </span>
        <span class="card-time">{{eventInfo.time.hour}}:</span>
        <span class="card-time">{{eventInfo.time.minute}} {{eventInfo.time.abbreviation}}</span>
      </div>
      <div class="date-time-container-end" v-show="eventInfo.eventOver">
        <div class="line-container">
        <span class="card-date-end">{{eventInfo.date}}, </span>
        <span class="card-time-end">{{eventInfo.time.hour}}:</span>
        <span class="card-time-end">{{eventInfo.time.minute}} {{eventInfo.time.abbreviation}}</span>
        </div>
        <span class="over-span"><b>Over</b></span>
      </div>
      <h3 class="card-title">{{eventInfo.title}}</h3>
      <p class="card-organizer">{{eventInfo.organizer}}</p>
  </section>
</template>

<script>
export default {
    name: "event-card",
    props: {
        eventInfo: Object,
        eventArray: Array
    },
    methods: {
      goTo(id) {
        console.log(id)
        this.$router.push(`/event-info/${id}`);
    }
    }
}
</script>

<style>

.event-card {
  background: rgb(226, 209, 201);
  text-align: left;
  max-width: 28%;

}

.event-card > .color-bar-red {
  margin: 0 auto 0 auto;
  height: 10px;
  width: 100%;
  background: brown;
}
.event-card > .color-bar-green {
  margin: 0 auto 0 auto;
  height: 10px;
  width: 100%;
  background: rgb(58, 182, 68);
}

.date-time-container, .card-title, .card-organizer {
  margin-left: 15px;
}

.date-time-container-end {
  display: flex;
}
.line.container {
  text-decoration: line-through;
  color: grey;
}

.date-time-container-end > .over-span{
  text-decoration: none;
  margin-left: 5px;
  color: red;
}



</style>
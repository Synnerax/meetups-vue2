<template>
  <section class="event-card">
      <img src="https://source.unsplash.com/random/224x124" class="card-img" alt="">
      <div class="date-time-container">
        <span class="card-date">{{eventInfo.date}}, </span>
        <span class="card-time">{{eventInfo.time.hour}}:</span>
        <span class="card-time">{{eventInfo.time.minute}} {{eventInfo.time.abbreviation}}</span>
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
    }
}
</script>

<style>

.event-card {
  background: rgb(226, 209, 201);
  text-align: left;
  max-width: 28%;

}

.event-card > img {
  margin: 0 auto 0 auto;
}

.date-time-container, .card-title, .card-organizer {
  margin-left: 15px;
}
</style>
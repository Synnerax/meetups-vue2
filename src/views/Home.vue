<template>
  <div class="home">
    <section class="event-section">
      <h1 class="section-header">Events</h1>
      <section class="event-list">

      <EventCard :eventsArray="eventsArray" v-for="eventInfo in eventsArray" :key="eventInfo.id" :eventInfo="eventInfo"></EventCard>
      </section>
    </section>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Home',
  props: {
    eventsArray: Array
  },
  components: {
    EventCard
  }
}
</script>

<style >

.event-section {
  margin-top: 5rem;
  margin-left: 4rem;
  width: 100%;
  
}

.section-header {
  text-align: left;
}
.event-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
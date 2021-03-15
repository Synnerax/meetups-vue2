<template>
  <div class="home">
    <SearchField></SearchField>
    <section class="event-section">
      <h1 class="section-header">Events</h1>
      <section class="event-list">

      <EventCard @click="goTo(eventInfo.id)" :eventsArray="eventsArray" v-for="eventInfo in eventsArray" :key="eventInfo.id" :eventInfo="eventInfo"></EventCard>
      </section>
    </section>
  </div>
</template>

<script>
import SearchField from '@/components/SearchField.vue'
import EventCard from '@/components/EventCard.vue'

export default {
  name: 'Home',
  props: {
    eventsArray: Array
  },
  components: {
    SearchField,
    EventCard
  },
  methods: {
      goTo(id) {
      this.$router.push(`/event-info/${id}`);
    }
  },
  mounted() {
    //this.$nextTick(() => {
      console.log("i was created")
    //})
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
}
</style>
<template>
  <section class="search-field">
    <div class="flex-row">
      
      
      <div class="icon event-input-sytling">
      <input type="text" v-model="userEventInput" class="event-input-field">
      <svg height="20" width="20" viewBox="0 0 18 18" aria-hidden="true"><path d="M11.89 10.477L16.415 15 15 16.414l-4.523-4.523a6 6 0 111.414-1.414zM7 11a4 4 0 100-8 4 4 0 000 8z"></path></svg>
      </div>
      

      <div class="icon">
      <input type="text" v-model="locationFilter" class="location-filter">
      <svg height="22" width="22" viewBox="0 0 24 24" class="css-d114n"><path d="M12 23C6.667 17.667 4 13 4 9a8 8 0 1116 0c0 4-2.667 8.667-8 14zm0-11a3 3 0 100-6 3 3 0 000 6z"></path></svg>
      </div>
      
      <button class="search-button button-flex">Search</button>
    </div>
      
  </section>
</template>

<script>
export default {
  name: "search-field",
  data() {
    return {
      userEventInput: "",
      locationFilter: ""
    }
  }
}
// json bin: https://api.jsonbin.io/v3/b/60355a8d0866664b10820263
// API key: $2b$10$IQutUOnIDU5m1VTI.4PzQ.M1ZzdQ4Q/XZzMz/MT7RKqX8oHx3k0pu
</script>

<style>

.icon {
  position: relative;
}

.icon svg {
  position: absolute;
  top: 18px;
  left: 5px;
  
}

.event-input-field, .location-filter, .search-button {
  height: 54px;
}
.button-flex {
  flex-basis: 15%;
  margin-left: 2rem;
}
.flex-row {
  display: flex;
  flex-direction: row;
  
}
.search-field {
  background: #ffffff;
  padding: 16px;
  border: #f6f7f8 1px solid;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 8px 0px;
  border-radius: 8px;
}


.event-input-field {
  margin-right: -1px;
  width: 100%;
  
}

.event-input-sytling {
  flex-grow: 1;
}


.location-filter {
  min-width: 300px;
}

.search-button {
  align-self: center;
  background: #ffffff;
  border: 1px solid #008294;
  color: #008294;
  
  transition: background-color 300ms ease, color 300ms ease;
}


.search-button:hover {
  background: #008294;
  color: #ffffff;

}
</style>
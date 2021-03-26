<template>
  <section class="review-section">
      <Review v-for="(review, index) in this.reviews" 
      :key="index" 
      :review="review">
      </Review>

    <input type="text" v-model="userInput.name" class="input-name" placeholder="Enter a name">
    <input type="text" v-model="userInput.comment" class="input-comment" placeholder="Add a Comment">
    <button id="comment-button" @click="addReview()">Add Review</button>
  </section>
</template>

<script>
import Review from "@/components/Review.vue"
export default {
  name: "reviews",
  components: {
    Review
  },
  props: {
    event: Object,
    reviews: Array
  },
  data() {
    return {
      updatedEvent: {...this.event},
      reviewsData: [...this.reviews],
      userInput: {
        name: "",
        comment: ""
      }
    }
  },
  methods: {
    addReview() {
      let userInput = {
        name: this.userInput.name ? this.userInput.name: "Anonymous",
        comment: this.userInput.comment ? this.userInput.comment: "User forgot to write a comment"
      }
      let review = {...userInput, id: this.event.id}
      
      
      this.userInput.name = ""
      this.userInput.comment = ""
      this.$emit("comment", review)
      
    }
  },
  computed: {
    reviewsList() {
      let reviews = this.reviews ? this.reviews: []
      return reviews
    }
  }
}
</script>

<style>

.review {
  text-align: left;
}
</style>
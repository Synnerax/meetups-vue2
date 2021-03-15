<template>
  <section class="review-section">
      <Review v-for="(review, index) in reviews" 
      :key="index" 
      :review="review">
      </Review>

    <input type="text" v-model="userInput.name" class="input-name" placeholder="Enter a name">
    <input type="text" v-model="userInput.comment" class="input-comment" placeholder="Add a Comment">
    <button @click="addReview">Add Review</button>
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
    reviews: Array
  },
  data() {
    return {
      reviewsData: [],
      userInput: {
        name: "",
        comment: ""
      }
    }
  },
  methods: {
    addReview() {
      let userInput = {
        name: this.userInput.name,
        comment: this.userInput.comment
      }
      let review = {...userInput}
      this.reviewsData.push(review)
      this.$emit("comment", review)
      this.userInput.name = ""
      this.userInput.comment = ""
    }
  }
}
</script>

<style>

.review {
  text-align: left;
}
</style>
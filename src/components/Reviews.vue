<template>
  <section class="review-section">
    <article class="review" v-for="(review, index) in reviewsData" :key="index">
      <p class="review-name">Name: {{review.name}}</p>
      <p class="review-comment">Comment: {{review.comment}}</p>
    </article>

    <input type="text" v-model="userInput.name" class="input-name" placeholder="Enter a name">
    <input type="text" v-model="userInput.comment" class="input-comment" placeholder="Add a Comment">
    <button @click="addReview">Add Review</button>
  </section>
</template>

<script>
export default {
  name: "review",
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
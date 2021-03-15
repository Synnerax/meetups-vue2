<template>
  <article class="review">
      <p class="review-name">Name: {{review.name}}</p>
      <p class="review-comment">Comment: {{review.comment}}</p>

  </article>
</template>

<script>
export default {
    name: "Review",
    props: {
        review: Object
    },
    computed: {
        reviewInfo() {
            let review = {
                name: this.review ? this.review.name: "Anonymous",
                comment: this.review ? this.review.comment: "Error getting comment"
            }
            return review
        }
    }
}
</script>

<style>

</style>
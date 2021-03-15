import { mount, shallowMount } from "@vue/test-utils";
import Reviews from "@/components/Reviews.vue";


describe("Review.vue", () => {
    it("should check if review section is displayed", async () => {
        const wrapper = shallowMount(Reviews)

        const reviewSection = wrapper.find(".review-section")
        
        expect(reviewSection.exists()).toBeTruthy()


    
    })

    it("should display correct name and comment ", async () => {

        const wrapper = shallowMount(Reviews, {
            propsData:{
                reviews: [
                    {
                        name: "fake name",
                        comment: "some text left by the reviewer"
                    }
                ]
            }
        })
        const review = wrapper.find(".review")
        const reviewName = wrapper.find(".review-name")
        const reviewComment = wrapper.find(".review-comment")
        expect(review.exists()).toBeTruthy()
        expect(reviewName.exists()).toBeTruthy()
        expect(reviewComment.exists()).toBeTruthy()
        expect(reviewName.text()).toContain("fake name")
        expect(reviewComment.text()).toContain("some text left by the reviewer")

    })
})

// should let you write a comment
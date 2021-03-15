import { mount, shallowMount } from "@vue/test-utils";
import Review from "@/components/Review.vue";


describe("Review.vue", () => {
    it("should check if review section is displayed", async () => {
        const wrapper = shallowMount(Review)

        const reviewSection = wrapper.find(".review")
        
        expect(reviewSection.exists()).toBeTruthy()


    
    })

    it("should display all saved comments ", async () => {

        const wrapper = shallowMount(Review, {
            propsData:{
                reviews: [
                    {
                        name: "fake name",
                        comment: "some text left by the reviewer"
                    }
                ]
            }
        })

        const reviewName = wrapper.find(".rewview-name")
        const reviewComment = wrapper.find(".review-comment")
    })
})

// should let you write a comment
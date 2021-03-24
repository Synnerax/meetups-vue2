import { mount, shallowMount } from "@vue/test-utils";
import Reviews from "@/components/Reviews.vue";
import Review from "@/components/Review.vue"


describe("Review.vue", () => {
    it("should check if review section is displayed",  () => {
        const wrapper = shallowMount(Reviews, {
            //skickar props för att inte få load error med jest
            propsData: {
                reviews: [
                    {
                        "name": "testname",
                        "comment": "test comment"
                    }
                ]
            }
        })
        const reviewSec = wrapper.find(".review-section").exists()

        expect(reviewSec).toBeTruthy()
    
    })

    it("should display correct name and comment ", async () => {

        const wrapper = shallowMount(Review, {
            propsData:{
                review: 
                    {
                        "name": "fake name",
                        "comment": "some text left by the reviewer"
                    }
                
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

    it("should bound input text feilds with data value userInput", ()=> {

        const wrapper = shallowMount(Reviews, {
            propsData: {
                reviews: [
                    {
                        "name": "testname",
                        "comment": "test comment"
                    }
                ]
            },
            data() {
                return {
                  
                  "userInput": {
                    "name": "",
                    "comment": ""
                  }
                }
        }})



    
        const userName = wrapper.find(".input-name")
        userName.element.value = "test name"
        userName.trigger("input")

        const userComment = wrapper.find(".input-comment")
        userComment.element.value = "test comment"
        userComment.trigger("input")

        //kollar så element finns
        expect(userName.exists()).toBeTruthy()
        expect(userComment.exists()).toBeTruthy()

        //kollar att element har bytt värde
        expect(userName.element.value).toBe("test name")
        expect(userComment.element.value).toBe("test comment")

        //kollar så att datan är bunden i vue
        expect(wrapper.vm.userInput.name).toBe("test name")
        expect(wrapper.vm.userInput.comment).toBe("test comment")

    })

    it('Add a comment when button "Add Comment" is clicked and clear the text',async  () => {
        const wrapper = await  mount(Reviews, {
            propsData: {
                event: {
                    "id": "2",
                    "description": "event with awsome content",
                    "date": "2020-02-02"
                },
                reviews: [
                    {
                        "name": "testname",
                        "comment": "test comment"
                    }
                ]
            },
            data() {
                return {
                  
                  "userInput": {
                    "name": "Martha",
                    "comment": "comment is not Lorem text"
                  }
                }
        }})


        const button = wrapper.find("#comment-button")
        
        //kollar att element finns
        expect(button.exists()).toBeTruthy()

        const userName = wrapper.find(".input-name")
        expect(userName.element.value).toBe("Martha")

        const userComment = wrapper.find(".input-comment")
        expect(userComment.element.value).toBe("comment is not Lorem text")
        await button.trigger("click")
        //kollar så att textfälten inte har något värde kvar efter knappen är tryckt 
        expect(userName.element.value).toBe("")
        expect(userComment.element.value).toBe("")
        
        //kollar om kommentaren har emittats
        expect(wrapper.emitted('comment')).toHaveLength(1)

    })
})

// should let you write a comment
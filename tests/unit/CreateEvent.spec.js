import { shallowMount } from '@vue/test-utils'
import CreateEvent from '@/views/CreateEvent.vue'
import { enableFetchMocks } from "jest-fetch-mock"


describe("CreateEvent.vue", () => {
    it("should display a input field for the event name", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualInputField = wrapper.find(".event-input-title").exists()

        expect(actualInputField).toBeTruthy()
    })
    it("should display a input field for the event location", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualInputLocation = wrapper.find(".event-input-location").exists()

        expect(actualInputLocation).toBeTruthy()
    })
    
    it("should display a input field for the date and time for the event", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualInputDate = wrapper.find(".event-input-date").exists()
        const actualInputTime = wrapper.find(".event-input-time").exists()


        expect(actualInputDate).toBeTruthy()
        expect(actualInputTime).toBeTruthy()

    })

    it("should display a input field to add one tag", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualInputTag = wrapper.find(".event-input-tag").exists()

        expect(actualInputTag).toBeTruthy()
    })
    it("should display a input field to add a description", () => {

        const wrapper = shallowMount(CreateEvent)
        const actualDescription = wrapper.find(".event-input-description").exists()

        expect(actualDescription).toBeTruthy()
    })

    it("should do a api call when button is clicked", async () => {
        
        const expectedUrl = "https://api.jsonbin.io/v3/b/60381b86ab68b51aec241829/"

        const expectedText = {
            "id": "123",
            "organizer": "Hello World",
            "title": "Hello Event",
            "location": "Space",
            "description": "LoremDescriptionesium",
            "date": "2020-04-21",
            "time": "13:37",
            "timeAbbreviation": "AM",
            "tag": "Music",
            "seats": "30",
            "price": "0" 
        }
        const expectedResponse = {
            "record": {
                "event": expectedText
            },
            "metadata": {
              "parentId": "<BIN_ID>",
              "private": true
            }
          }
        
        const wrapper = shallowMount(CreateEvent, {
            propsData: {
                eventsArray: []
            }
        }) 
        const button = wrapper.find("button")

        console.log(button.text())
        enableFetchMocks()
        fetch.mockResponseOnce(JSON.stringify(expectedResponse))
        //borde göra en till mockresponse som ger eventsArray data 
        await wrapper.setData({events: [
            {}
        ]})
        await wrapper.setData({event: expectedText})
        await button.trigger("click")

        
        const numberOfCalls = fetch.mock.calls.length
        expect(numberOfCalls).toBe(1)
        const actualUrl = fetch.mock.calls[0][0]
        expect(button.exists).toBeTruthy()
        expect(actualUrl).toBe(expectedUrl)
    })

    
})

/*
const expectedText = {
    "id": "123",
    "organizer": "Hello World",
    "title": "Hello Event",
    "location": "Space",
    "description": "LoremDescriptionesium",
    "date": "2020-04-21",
    "time": "13:37",
    "timeAbbreviation": "AM",
    "tag": "Music",
    "seats": "30",
    "price": "0" 
}

const expectedUrl = "https://api.jsonbin.io/v3/b/60355a8d0866664b10820263"
const expectedResponse = {
    "record": {
        "event": expectedText
    },
    "metadata": {
      "parentId": "<BIN_ID>",
      "private": true
    }
  }
const wrapper = shallowMount(CreateEvent)
const button = wrapper.find("#create-event")
enableFetchMocks()
fetch.mockResponseOnce(JSON.stringify(expectedResponse))

button.trigger('click')
await wrapper.setData({event: expectedText})
console.log(wrapper.vm.event)
const numberOfCalls = fetch.mock.calls.lenght
const actualUrl = fetch.mock.calls[0][0]

expect(numberOfCalls).toBe(1)
expect(actualUrl).toHaveBeenCalled(expectedUrl)
*/
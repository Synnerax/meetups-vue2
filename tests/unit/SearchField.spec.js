import { shallowMount } from '@vue/test-utils'
import SearchField from '@/components/SearchField.vue'

describe('SearchField.vue', () => {
  it('should display a input field for events and location when mounted', () => {

    //mounting seach field comopnent
    const wrapper = shallowMount(SearchField)

    //Finds the input box to search for events 
    const eventInput = wrapper.find(".event-input-field").exists()

    //finds the input box for location filtering
    const locationFilter = wrapper.find(".location-filter").exists()
    expect(eventInput).toBeTruthy()
    expect(locationFilter).toBeTruthy()
  })

  it("should bind the data from event input field to vue data",async () => {

    const expectedEvent = "Event data"

    const wrapper = shallowMount(SearchField)

    //Finds the input field 
    const eventInput = await wrapper.find(".event-input-field")

    //Changes input field text from empty to "Event data"
    eventInput.element.value = expectedEvent
    //Triggers input event 
    eventInput.trigger('input')
    //checks if userEventInput is bound with v-model and has the same value
    expect(wrapper.vm.userEventInput).toBe(expectedEvent)
  })

  it("should bind the data location filter input field to vue data",async () => {

    const expectedLocation = "Neat location"
    const wrapper = shallowMount(SearchField)

    //Finds the input field 
    const locationFilter = await wrapper.find(".location-filter")
  
    //Changes input field text from empty to "Event data"
    locationFilter.element.value = expectedLocation
    //Triggers input event 
    locationFilter.trigger('input')
    //checks if userEventInput is bound with v-model and has the same value
    expect(wrapper.vm.locationFilter).toBe(expectedLocation)
  })


  it('should display a search button when mounted', () => {

    //mounting seach field comopnent
    const wrapper = shallowMount(SearchField)

    //Finds the input box to search for events 
    const searchButton = wrapper.find(".search-button").exists()

    //finds the input box for location filtering
    expect(searchButton).toBeTruthy()
  })
})

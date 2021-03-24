import { mount, shallowMount } from "@vue/test-utils";
import InfoPage from "@/views/InfoPage.vue";

describe('InfoPage.vue', () => {

    it("should display Info page when  mounted", () => {
        //mounts the darkMode-vue component    
        const wrapper = shallowMount(InfoPage, {
            propsData: {
                "eventHistory": [],
                "eventsArray": []
            }
        });
        
        const acutal = wrapper.find(".event-info-section")
        //checks if button is there when mounted
        console.log(acutal)
        expect(acutal).toBeTruthy(); 
      });
      
      it('should display "already entered" when joined', () => {

        const wrapper = mount(InfoPage, {
            propsData: {
                "eventHistory": [],
                "eventsArray": []
            },
            computed: {
                alreadyEntered() {
                    return true
                }
            }
        })
        
        const buttonSection = wrapper.find(".entered-event")
        expect(buttonSection.isVisible()).toBe(true)
      })

      it("should change data value when clicked", async () => {

        //mountar 
        const wrapper = shallowMount(InfoPage, {
            propsData: {
                "eventHistory": [],
                "eventsArray": []
            }
        })
        

        //hittar knappen för att gå med i ett event
        const button = wrapper.find("#enter-button")
        //kollar så att användaren inte redan har deltagit
        expect(wrapper.vm.entered).toBe(false)

        await button.trigger("click")
        //kollar så att användaren har deltagit efter click 
        console.log("is visible:", wrapper.find(".entered-event").isVisible())
        expect(wrapper.vm.entered).toBe(true)


      })
})
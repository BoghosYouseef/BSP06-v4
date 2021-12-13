import { shallowMount } from '@vue/test-utils'
import userInputFields from '@/components/userInputFields.vue'

describe('userInputFields', () => {
    it('When password is set to a string with length less than 5, result should be false', () => {
      const myItems = [
        { password: "1234", result: false },
        { password: "12345678901011", result: true }
      ]
      const wrapper = shallowMount(userInputFields, {
        propsData: {
          myItems,
        }
      })
  
      wrapper.vm.password= 'something'
      wrapper.vm.validatePassword(myItems[0])
      wrapper.vm.validatePassword(myItems[1])
  
      expect(myItems[0].result).toBe(false)
      expect(myItems[1].result).toBe(true)
    })
  })
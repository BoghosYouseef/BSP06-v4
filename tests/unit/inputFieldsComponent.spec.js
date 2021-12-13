import { mount } from '@vue/test-utils'
import userInputFields from '@/components/userInputFields.vue'


const wrapper1 = mount(userInputFields)
test("test if inputfields vue component exists ", async () => {
const inptFields = wrapper1.findComponent(userInputFields) // => finds Bar by component instance

 
expect(inptFields.exists()).toBe(true)})

test("test if inptFields vue component exists by name ", async () => {
const btnByName = wrapper1.findComponent({ name: 'InputFields' }) // => finds Bar by `name`

expect(btnByName.exists()).toBe(true)})


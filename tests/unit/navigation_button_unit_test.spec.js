import { mount } from '@vue/test-utils'
import LoginNavButton from '@/components/LoginNavButton.vue'
import RegNavButton from '@/components/RegNavButton.vue'

const wrapper1 = mount(LoginNavButton)
test("test if Login Page Navigation button exists ", async () => {
const btn = wrapper1.findComponent(LoginNavButton) // => finds Bar by component instance

 
expect(btn.exists()).toBe(true)})

test("test if Login Page Navigation button exists by name ", async () => {
const btnByName = wrapper1.findComponent({ name: 'LoginNavigationButton' }) // => finds Bar by `name`

expect(btnByName.exists()).toBe(true)})


const wrapper2 = mount(RegNavButton)
test("test if Login Page Navigation button exists ", async () => {
const btn = wrapper2.findComponent(RegNavButton) // => finds Bar by component instance

 
expect(btn.exists()).toBe(true)})

test("test if User Registration Page Navigation button exists by name ", async () => {
const btnByName = wrapper2.findComponent({ name: 'RegisterationNavigationButton' }) // => finds Bar by `name`

expect(btnByName.exists()).toBe(true)})
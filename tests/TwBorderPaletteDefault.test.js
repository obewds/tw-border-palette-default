// ./tests/TwBorderPaletteDefault.test.js

import { mount } from '@vue/test-utils'
import TwBorderPaletteDefault from '../src/components/TwBorderPaletteDefault.vue'



test('TwBorderPaletteDefault.vue component mounts successfully', async () => {

    expect(TwBorderPaletteDefault).toBeTruthy()

})



test('TwBorderPaletteDefault.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(TwBorderPaletteDefault, {
        props: {
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('TwBorderPaletteDefault.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(TwBorderPaletteDefault, {
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})

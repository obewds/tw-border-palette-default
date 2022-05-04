// ./tests/TwBorderPaletteDefault.test.js

import { twBorderPaletteDefault } from '../src/index'



test('twBorderPaletteDefault component returns a truthy value', async () => {

    expect(twBorderPaletteDefault).toBeTruthy()

})



test('twBorderPaletteDefault.default component returns an object with a truthy default property', async () => {

    expect(twBorderPaletteDefault.default).toBeTruthy()

})



test('twBorderPaletteDefault.default.colors component returns an object with a truthy colors property', async () => {

    expect(twBorderPaletteDefault.default.colors).toBeTruthy()

})



test('twBorderPaletteDefault component returns an object with the standard five default color names', async () => {

    expect(twBorderPaletteDefault.default.colors['default']).toBe('')
    expect(twBorderPaletteDefault.default.colors['error']).toBeTruthy()
    expect(twBorderPaletteDefault.default.colors['primary']).toBeTruthy()
    expect(twBorderPaletteDefault.default.colors['secondary']).toBeTruthy()
    expect(twBorderPaletteDefault.default.colors['success']).toBeTruthy()

})

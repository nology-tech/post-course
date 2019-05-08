
import Color from './color';
import brandStore from './brand-store';

import { getBranding } from './refactored-code-senior';


//Test Color
test('rgb - white', () => {
    let rgbColor = Color("#FFF").rgb().string();
    expect(rgbColor).toBe("rgb(255,255,255)");
})

test('rgb - black', () => {
    let rgbColor = Color("#000").rgb().string();
    expect(rgbColor).toBe("rgb(0,0,0)");
})

//Test BrandStore
test('brandStore', () => {
    let brands = brandStore.getAll();
    expect(brands.length).toBe(3);
    expect(brands[0].id).toBe(1);
    expect(brands[0].colours[0].name).toBe("primary");
    expect(brands[0].bodyFont).toBe("helvetica");
})

// Test Basic Functionality

test('getBranding - ID 1', () => {
    let result = getBranding({brandId: 1});
    expect(result.bodyFont).toBe("helvetica");
    expect(result.colours.primary).toBe("rgb(0,0,0)");
    expect(result.colours.secondary).toBe("rgb(17,17,17)");
    expect(result.colours.tertiary).toBe("rgb(34,34,34)");
})

test('getBranding - ID 2', () => {
    let result = getBranding({brandId: 2});
    expect(result.bodyFont).toBe("arial");
    expect(result.colours.primary).toBe("rgb(17,17,17)");
    expect(result.colours.secondary).toBe("rgb(34,34,34)");
    expect(result.colours.tertiary).toBe("rgb(51,51,51)");
})

test('getBranding - Brand ID not found', () => {
    let result = getBranding({brandId: 4});
    expect(result.bodyFont).toBe("Lato");
    expect(result.colours.primary).toBe("rgb(51,51,51)");
    expect(result.colours.secondary).toBe("rgb(34,34,34)");
    expect(result.colours.tertiary).toBe("rgb(85,85,85)");
})

test('getBranding - User with no brand ID', () => {
    let result = getBranding({});
    expect(result.bodyFont).toBe("Lato");
    expect(result.colours.primary).toBe("rgb(51,51,51)");
    expect(result.colours.secondary).toBe("rgb(34,34,34)");
    expect(result.colours.tertiary).toBe("rgb(85,85,85)");
})

test('getBranding - User with font not allowed', () => {
    let result = getBranding({brandId: 3});
    expect(result.bodyFont).toBe("Lato");
    expect(result.colours.primary).toBe("rgb(17,17,17)");
    expect(result.colours.secondary).toBe("rgb(34,34,34)");
    expect(result.colours.tertiary).toBe("rgb(51,51,51)");
})



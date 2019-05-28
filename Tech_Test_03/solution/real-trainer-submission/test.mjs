import {getBranding} from './code.mjs'
import { brandStore, brandStoreSetter } from './brandStore.mjs';

import expect from 'expect'

function setupBrands(numBrands) {
    let brandStoreValue
    switch (numBrands) {
        case 0:
            brandStoreValue = {};
            break;
        case 1:
            // not sure if I need to go through this json.parse rigmarole, probably some language syntax to avoid that is less verbose
            // but it works and is fast enough to write so I'm not wasting time right now
            brandStoreValue = JSON.parse('[{"id":"Gucci", ' +
                ' "colors":[{"name": "primary", "value": "#000" },{ "name": "secondary", "value": "#000" },{ "name": "tertiary", "value": "#fff" }],' +
                ' "bodyFont":"Helvetica"}]');
            break;
        case 2:
            brandStoreValue = JSON.parse('[{"id":"Gucci", ' +
                ' "colors":[{"name": "primary", "value": "#000" },{ "name": "secondary", "value": "#000" },{ "name": "tertiary", "value": "#fff" }],' +
                ' "bodyFont":"Helvetica"},' +
                '{"id":"Hermes", ' +
                '  "colors":[{"name": "primary", "value": "#fff" },{ "name": "secondary", "value": "#fff" },{ "name": "tertiary", "value": "#000" }],' +
                '  "bodyFont":"Aerial"}]');
            break; // in case we add more cases
    }
    return brandStoreValue;
}

// note to reader all tests developed with red green loop, no need the refactor phase here

// test the test setup
expect(setupBrands(0)).toStrictEqual({});

expect(setupBrands(1)).toStrictEqual(
    [{
      "id": "Gucci",
      "bodyFont": "Helvetica",
      "colors": [{"name": "primary", "value": "#000" },{ "name": "secondary", "value": "#000" },{ "name": "tertiary", "value": "#fff" }]
    } ] );

expect(setupBrands(2)).toStrictEqual(
    [{
      "id": "Gucci",
      "bodyFont": "Helvetica",
      "colors": [{"name": "primary", "value": "#000" },{ "name": "secondary", "value": "#000" },{ "name": "tertiary", "value": "#fff" }]
    }, {
        "id": "Hermes",
        "bodyFont": "Aerial",
        "colors": [{"name": "primary", "value": "#fff" },{ "name": "secondary", "value": "#fff" },{ "name": "tertiary", "value": "#000" }]
    } ] );

// WORKING TEST SUITE

// test null user
brandStoreSetter( setupBrands(0));
expect(getBranding({})).toStrictEqual({
    "bodyFont": "Lato",
    "colors": {"primary": "rgb(51, 51, 51)", "secondary": "rgb(34, 34, 34)", "tertiary": "rgb(85, 85, 85)"}
});

brandStoreSetter( setupBrands(2));
expect(getBranding({})).toStrictEqual({
    "bodyFont": "Lato",
    "colors": {"primary": "rgb(51, 51, 51)", "secondary": "rgb(34, 34, 34)", "tertiary": "rgb(85, 85, 85)"}
});

// test user
let user = {};
user.brandId = "Firetrap"
brandStoreSetter( setupBrands(2));
expect(getBranding(user)).toStrictEqual({
    "bodyFont": "Lato",
    "colors": {"primary": "rgb(51, 51, 51)", "secondary": "rgb(34, 34, 34)", "tertiary": "rgb(85, 85, 85)"}
});

// note Hermes does not have an approved font, with a typo in Arial
user.brandId = "Hermes"
expect(getBranding(user)).toStrictEqual({
    "bodyFont": "Lato",
    "colors": {"primary": "rgb(255, 255, 255)", "secondary": "rgb(255, 255, 255)", "tertiary": "rgb(0, 0, 0)"}
});

user.brandId = "Gucci"
expect(getBranding(user)).toStrictEqual({
    "bodyFont": "Helvetica",
    "colors": {"primary": "rgb(0, 0, 0)", "secondary": "rgb(0, 0, 0)", "tertiary": "rgb(255, 255, 255)"}
});



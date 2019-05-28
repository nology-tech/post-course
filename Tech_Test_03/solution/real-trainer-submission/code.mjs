
import { brandStore } from './brandStore.mjs';

import Color from 'color';

const defaultColors = [
    { name: 'primary', value: '#333' },
    { name: 'secondary', value: '#222' },
    { name: 'tertiary', value: '#555' },
];

const defaultBodyFont = 'Lato';
const allowedFonts = ['lato', 'arial', 'helvetica', 'courier'];

const convertToRgb = c =>
    Color(c).rgb().string();

const validateBodyFont = (bodyFont) => {
    let found = false;
    allowedFonts.forEach(a => {
        if (a === bodyFont.toLowerCase()) found = true;
    });
    if (found) return bodyFont;
    return defaultBodyFont;
}

function buildTheme(colors, bodyFont) {
    if (!colors) colors = defaultColors;
    if (!bodyFont) colors = defaultBodyFont;

    const newColors = {};
    colors.forEach(c => {
        newColors[c.name] = convertToRgb(c.value);
    });

    return {
        colors: newColors,
        bodyFont: validateBodyFont(bodyFont),
    };
}

export function getBranding(user) {
    let colors = defaultColors;
    let font   = defaultBodyFont
    if (user.brandId && brandStore.length) {
            brandStore.some(function(brand) {
                const brandMatch = (brand.id === user.brandId);
                if (brandMatch) {
                    colors = brand.colors;
                    font   = brand.bodyFont;
                }
                return brandMatch
            });
        }
    return buildTheme(colors, font);
}

//console.log(getBranding({})); // leave this in to show I got existing code working without tests first

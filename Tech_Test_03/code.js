import brandStore from './brand-store';
import Color from 'color';

const defaultColours = [
    { name: 'primary', value: '#333' },
    { name: 'secondary', value: '#222' },
    { name: 'tertiary', value: '#555' },
];

const defaultBodyFont = 'Lato';
const allowedFonts = ['lato', 'arial', 'helvetica', 'courier'];

const convertToRgb = c =>
    Color(c)
        .rgb()
        .string();

function buildTheme(colours, bodyFont) {
    if (!colours) colours = defaultColours;
    if (!bodyFont) colours = defaultBodyFont;

    const newColours = {};
    colours.forEach(c => {
        newColours[c.name] = convertToRgb(c.value);
    });

    const validateBodyFont = () => {
        let found = false;
        allowedFonts.forEach(a => {
            if (a === bodyFont.toLowerCase()) found = true;
        });
        if (found) return bodyFont;
        return defaultBodyFont;
    };

    return {
        colours: newColours,
        bodyFont: validateBodyFont(),
    };
}

module.exports = {
    getBranding(user) {
        if (user.brandId) {
            const brands = brandStore.getAll();
            if (brands.length < 1) return buildTheme(defaultColours, defaultBodyFont);

            if (brands.length) {
                let brandDetails;

                brands.forEach(b => {
                    if (b.id === user.brandId) brandDetails = b;
                });

                if (!brandDetails) return buildTheme(defaultColours, defaultBodyFont);

                return buildTheme(brandDetails.colours, brandDetails.bodyFont);
            }
        }

        return buildTheme(defaultColours, defaultBodyFont);
    },
};

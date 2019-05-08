import brandStore from './brand-store';
import Color from './color';

class ThemeBuilder {
	constructor() {
		this.defaultFont = 'Lato';
        this.defaultColours = [
			{ name: 'primary', value: '#333' },
			{ name: 'secondary', value: '#222' },
			{ name: 'tertiary', value: '#555' },
		];
		
		this.allowedFonts = ['lato', 'arial', 'helvetica', 'courier'];
	}

	convertHexToRgb(hexColor) {
		return Color(hexColor)
			.rgb()
			.string();
	}

	getRGBColour(colours) {
		return colours.reduce((obj, item) => {
			obj[item.name] = this.convertHexToRgb(item.value);
			return obj;
		}, {});
	}

	fontIsAllowed(fontName) {
		return this.allowedFonts.includes(fontName.toLowerCase());
	}

	build(colours = this.defaultColours, font = this.defaultFont) {
		return {
			colours: this.getRGBColour(colours),
			bodyFont: this.fontIsAllowed(font) ? font : this.defaultFont,
		};
	}
}

class BrandStore {
    // Seperating this out into it's own class allows for dependancy injection for testing with mock store
    constructor(store = brandStore) {
        this.store = store;
    }

    getAll() { // Not strictly neccessary but feels like it would be useful later for trivial effort
        return this.store.getAll();
    }

    getById(id) {
        const brands = this.getAll();
		return brands.find(brand => brand.id === id);
    }
}

export function getBranding(user) { 
    // Possibly look at changing this interface but left it unchanged as didn't want to influence other areas of the app
    const themeBuilder = new ThemeBuilder();
    const store = new BrandStore();

	const brand = user.brandId && store.getById(user.brandId);
    if (brand) return themeBuilder.build(brand.colours, brand.bodyFont);

	return themeBuilder.build();
}

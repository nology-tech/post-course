// 10: How do you print the first non-repeated character from a string?

export let printFirstNonRepeat = (text: string): string => {
    for (const character of text.split("")) {
        if (text.indexOf(character) === text.lastIndexOf(character)) {
            return character;
        }
    }
};

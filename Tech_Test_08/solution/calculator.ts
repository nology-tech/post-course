export class Calculator {
    public value = 0;
    constructor(input: string) {
        const char = this.getDelimiter(input);
        this.value = this.cleanString(input, char)
            .replace('\n', char)
            .split(char)
            .map(this.cleanValue)
            .reduce(this.sumReducer);
    }

    public sumReducer = (total: number, value: number): number => total + value;

    public cleanValue(value: string): number {
        const numberValue = Number(value);
        if (numberValue < 0) {
            throw new TypeError('Negative number');
        }
        return numberValue <= 1000 ? numberValue : 0;
    }

    public getDelimiter(text: string): string {
        if (text.substring(0, 2) === '//') {
            const nextChar = text.substring(2, 3);
            return nextChar !== '[' ? nextChar : this.getStringBetweenTwoCharacters(text, '[', ']');
        }
        return ',';
    }

    public cleanString(dirtyString: string, delimiter: string): string {
        const regex = new RegExp('[^0-9' + delimiter + '\n]+', 'gi');
        return dirtyString.replace(regex, '');
    }

    public getStringBetweenTwoCharacters(str: string, startChar: string, endChar: string): string {
        return str.substring(str.lastIndexOf(startChar) + 1, str.lastIndexOf(endChar));
    }
}

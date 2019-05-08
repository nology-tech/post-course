import { Calculator } from './calculator';

describe('calculator', () => {
    it('should return 0 with an empty string', () => {
        const calculator = new Calculator('');
        expect(calculator.value).toBe(0);
    });

    it('should return 0 with no numbers', () => {
        const calculator = new Calculator('A');
        expect(calculator.value).toBe(0);
    });

    it('should return the number if given a single number', () => {
        let calculator = new Calculator('1');
        expect(calculator.value).toBe(1);

        calculator = new Calculator('0');
        expect(calculator.value).toBe(0);
    });

    it('should return sum of two comma delimited numbers', () => {
        let calculator = new Calculator('0,1');
        expect(calculator.value).toBe(1);
        calculator = new Calculator('1,5');
        expect(calculator.value).toBe(6);
        calculator = new Calculator('2,A');
        expect(calculator.value).toBe(2);
        calculator = new Calculator('2,,A');
        expect(calculator.value).toBe(2);
    });

    it('should return sum of two new-line delimited numbers', () => {
        let calculator = new Calculator('0\n1');
        expect(calculator.value).toBe(1);
        calculator = new Calculator('6\n7');
        expect(calculator.value).toBe(13);
    });

    it('should return sum of three new-line or comma delimited numbers', () => {
        const calculator = new Calculator('0\n1,2');
        expect(calculator.value).toBe(3);
    });

    it('should ignore numbers > 1000', () => {
        const calculator = new Calculator('1,2,1001');
        expect(calculator.value).toBe(3);
    });

    it('should be able to specify a single character delimiter on the first line', () => {
        const calculator = new Calculator('//#1#42');
        expect(calculator.value).toBe(43);
    });

    it('should be able to specify a multiple character delimiters on the first line', () => {
        const calculator = new Calculator('//[##]1##42');
        expect(calculator.value).toBe(43);
    });
});

describe('sumReducer', () => {
    it('should sum items in an array', () => {
        const calculator = new Calculator('');
        let array = [1, 2, 3];
        expect(array.reduce(calculator.sumReducer)).toBe(6);
        array = [1];
        expect(array.reduce(calculator.sumReducer)).toBe(1);
    });
});

describe('cleanValue', () => {
    it('should convert strings to numbers', () => {
        const calculator = new Calculator('');
        expect(calculator.cleanValue('0')).toBe(0);
        expect(calculator.cleanValue('1')).toBe(1);
    });

    it('should throw an exception on negative numbers', () => {
        const calculator = new Calculator('');
        expect(() => calculator.cleanValue('-1')).toThrow(TypeError);
        expect(() => calculator.cleanValue('-20')).toThrow(TypeError);
        expect(() => calculator.cleanValue('-200')).toThrow(TypeError);
    });

    it('should ignore numbers > 1000', () => {
        const calculator = new Calculator('');
        expect(calculator.cleanValue('999')).toBe(999);
        expect(calculator.cleanValue('1000')).toBe(1000);
        expect(calculator.cleanValue('1001')).toBe(0);
    });
});

describe('getDelimiter', () => {
    it('should default to ,', () => {
        const calculator = new Calculator('');
        expect(calculator.getDelimiter('1,2,3')).toBe(',');
        expect(calculator.getDelimiter('1!2!3')).toBe(',');
        expect(calculator.getDelimiter(' //1!2!3')).toBe(',');
    });

    it('should return next character', () => {
        const calculator = new Calculator('');
        expect(calculator.getDelimiter('//!1,2,3')).toBe('!');
        expect(calculator.getDelimiter('// !1,2,3')).toBe(' ');
    });
});

describe('cleanString', () => {
    it('should remove everything apart from numbers, newlines and delimeters', () => {
        const calculator = new Calculator('');
        const testString =
            '`1234567890-=¬!"£$%^&*()_+{}:@~|<>?[];\\,./`\'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\n\t ';
        expect(calculator.cleanString(testString, ';')).toBe('1234567890;\n');
    });
});

describe('getStringBetweenTwoCharacters', () => {
    it('should return single character between square brackets', () => {
        const calculator = new Calculator('');
        expect(calculator.getStringBetweenTwoCharacters('[,]', '[', ']')).toBe(',');
        expect(calculator.getStringBetweenTwoCharacters('fdasfsda[,]fdafda', '[', ']')).toBe(',');
    });
    it('should return multiple characters between square brackets', () => {
        const calculator = new Calculator('');
        expect(calculator.getStringBetweenTwoCharacters('[#,]', '[', ']')).toBe('#,');
        expect(calculator.getStringBetweenTwoCharacters('erfw2r[#,]r2re2', '[', ']')).toBe('#,');
    });
});

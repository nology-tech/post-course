export default {
    getAll: () => {
        return [
            {
                id: 1,
                colours: [
                    { name: 'primary', value: '#000' },
                    { name: 'secondary', value: '#111' },
                    { name: 'tertiary', value: '#222' },
                ],
                bodyFont: 'helvetica',
            },
            {
                id: 2,
                colours: [
                    { name: 'primary', value: '#111' },
                    { name: 'secondary', value: '#222' },
                    { name: 'tertiary', value: '#333' },
                ],
                bodyFont: 'arial',
            },
            {
                id: 3,
                colours: [
                    { name: 'primary', value: '#111' },
                    { name: 'secondary', value: '#222' },
                    { name: 'tertiary', value: '#333' },
                ],
                bodyFont: 'nonallowed',
            },
        ];
    },
};

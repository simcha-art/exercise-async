function createValidator() {
    return {
        name: (name) => Boolean(name.trim()),
        year: (year) => year > 1900 && year <= new Date().getFullYear(),
        rate: (rate) => rate >= 0 && rate <= 10
    };
}

export const valid = createValidator();

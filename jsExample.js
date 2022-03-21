const jsEXample = (CV) => {
    const firstSecondName = 'Vladislaw';

    if (CV !== firstSecondName) {
        return `${CV}, doesn't match! Who are you?`
    }

    return `Greetings, Mister ${CV}`
};

console.log(jsEXample('Vladislaw'));
console.log(jsEXample('Dady'))

const checkout = (numberWord) => {
    const lengthWord = numberWord.length;
    const firstLetter = numberWord[0].toUpperCase();
    const secondLetter = firstLetter + numberWord.slice(1);

    if (lengthWord <= 7 && numberWord[0] === firstLetter) {
        return secondLetter;
    }

    return `Sorry, but ${numberWord} word isn't not exact`;
};

console.log(checkout('uralic'));
console.log(checkout('Iraris'));
console.log(checkout('Leonardo'));
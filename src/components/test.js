function testString(value) {
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    for (let i = 0; i < value.length; i++) {
        const item = value[i];
        console.log(brackets[item], item)
        if (brackets[item]) {
            for (let j = value.length - 1; j >= i; j--) {
                const reverseItem = value[j];
                if (brackets[reverseItem]) {
                    return "invalid";
                } else if (reverseItem === brackets[item]) {
                    return testString(value.substring(i + 1, j));
                }
            }
        } else if (Object.values(brackets).includes(item)) {
            return "invalid";
        }
    }
    return "valid";
}

console.log(testString('{[()]}'));
console.log(testString('([(})]'));
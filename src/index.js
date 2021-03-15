module.exports = function check(str, bracketsConfig) {
    let joinedBrackets = bracketsConfig.map((n) => n.join(""));

    for (let i = 0; i < joinedBrackets.length; i++) {
        if (str.includes(joinedBrackets[i])) {
            str = str.replace(joinedBrackets[i], "");
            i = -1;
        }
    }

    if (str === "") {
        return true;
    }

    return false;
};

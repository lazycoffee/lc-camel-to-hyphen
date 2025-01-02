module.exports = function (text) {
    /**
     * regexp replacer
     * @param {string} matchText
     */
    function replacer(matchText) {
        if (matchText.length > 1) {
            matchText = matchText.toLowerCase();
            const len = matchText.length;
            return matchText.substring(0, len - 1) + "-" + matchText[len - 1];
        }
        return matchText.toLowerCase();
    }
    return text
        .replace(/^[A-Z]+/, replacer)
        .replace(/[A-Z]+/g, (match) => "-" + replacer(match));
};

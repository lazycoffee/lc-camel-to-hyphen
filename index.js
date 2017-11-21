module.exports = function(text){
    return text.replace(/^[A-Z]/, match=>match.toLowerCase())
    .replace(/[A-Z]/g, match=>'-' + match.toLowerCase());
}
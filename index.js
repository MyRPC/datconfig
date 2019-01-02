const fs = require('fs');
const dotProp = require('dot-prop');
function parseFile (filePath) {
    var data = fs.readFileSync(filePath, {encoding: "utf8"});
    var lines = data.replace("\r", "").split("\n");
    var final = {}
    lines.forEach((e) => {
        var parsed = parse(e);
        var path = parsed[0].replace(":", ".")
        dotProp.set(final, path, parsed[1].replace("[", "").replace("]", ""));
    })
    return final


}
function parseText (data) {
    var lines = data.replace("\r", "").split("\n");
    var final = {}
    lines.forEach((e) => {
        var parsed = parse(e);
        var path = parsed[0].replace(":", ".")
        dotProp.set(final, path, parsed[1].replace("[", "").replace("]", ""));
    })
    return final


}
function parse (text) {
    var valueMatch = /\[\w+\]/g
    var keyMatch = /\w+:\w+/g
    var value = text.match(valueMatch)[0]
    var key = text.match(keyMatch)[0]
    console.log(key, value)
    return [key, value]
    
}
module.parseFile = parseFile
module.parseText = parseText


var a = "silent"
var b = "listen"

function charmax(str) {
    var obj = {};
    for (var key of str) {
        if (!obj[key]) {
            obj[key] = 1;
        }
        else {
            obj[key]++;
        }
    }
    return obj;
}
var convert_a = a.toLowerCase().replace(/[^\w]/g, "");
var convert_b = b.toLowerCase().replace(/[^\w]/g, "");

var charmap_a = charmax(convert_a);
console.log(charmap_a);

var charmap_b = charmax(convert_b);
console.log(charmap_b);

if (JSON.stringify(Object.entries(charmap_a).sort()) == JSON.stringify(Object.entries(charmap_b).sort())) {
    console.log("anagram");
}
else {
    console.log("not a anagram");
}


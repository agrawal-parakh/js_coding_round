function valid(s) {
    const hashmap = { "(": ")", "[": "]", "{": "}" };
    const stack = [];
    for (let ch of s) {
        if (hashmap[ch]) {
            stack.push(hashmap[ch]);
        }

        else if (stack.length > 0 && stack[stack.length - 1] === ch) {
            stack.pop();
        }
        else {
        // console.log("false");
        return false;
        }
    }
  console.log(stack.length===0?"TRUE":"false")


}
valid("[()]")
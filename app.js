let obj = {
    noun: ['politics',
        'passenger',
        'conversation',
        "category",
        "agency",
        "football",
        "statement",
        "heart",
        "possibility",
        "celebration"],
    verb: ["bound",
            "sign",
            "have",
            "embrace",
            "struggle",
            "convince",
            "borrow",
            "kick",
            "weigh",
            "test"],
    adjective: ["wild",
        "nutty",
        "earthy",
        "uppity",
        "cooperative",
        "psychological",
        "pumped",
        "ludicrous",
        "comfortable",
        "fanatical"]
};

const randomNumber = (arr) => {
    let number = Math.floor(Math.random(0)* arr.length);
    return number;
}

console.log(randomNumber(obj.noun));
console.log(randomNumber(obj.verb));
console.log(randomNumber(obj.adjective));
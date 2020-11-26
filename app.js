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

const randNoun = () => {
    const noun = obj.noun;
    const randomNoun = noun[randomNumber(noun)];
    return randomNoun;
}

const randVerb = () => {
    const verb = obj.verb;
    const randomVerb = verb[randomNumber(verb)];
    return randomVerb;
}

const randAdj = () => {
    const adjective = obj.adjective;
    const randomAdjective = adjective[randomNumber(adjective)];
    return randomAdjective;
}

const randomSentence = () => {
    let adj = randAdj();
    let randomNumber = Math.floor(Math.random(0) * 1);
    console.log(randomNumber);
    switch (randomNumber) {
        case 0:
            return `The ${adj} key lime pie is still up for debate`
        case 1:
            return `He decided that the time had come to be ${adj} than any of the excuses he'd used until then.`
    }
}

console.log(randomSentence())

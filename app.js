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
    let noun = randNoun();
    let verb = randVerb();
    let adj = randAdj();
    let randomNumber = Math.floor(Math.random(0) * 10);

    switch (randomNumber) {
        case 0:
            return `The ${adj} ${noun} is still up for ${verb}`
        case 1:
            return `He decided that the time had come to be ${adj} than any of the excuses he'd used until then.`
        case 2:
            return `We have ${adj} kids who often ${verb} into our room at night for various reasons including ${noun} in the closet.`
        case 3:
            return `She thought there'd be ${adj} time if she hid her ${noun}.`
        case 4:
            return `${noun} should have smelled more ${adj}, but somehow it just tasted rotten.`
        case 5:
            return `So long and thanks for the ${noun}.`
        case 6:
            return `The ${noun} ${verb} the gods.`
        case 7:
            return `He ${verb} a ${adj} burger out of ${noun}.`
        case 8:
            return `There's a ${noun} for you if you look up.`
        case 9:
            return `Toddlers ${verb} ${noun} surprised even the ${adj} park ranger.`
        case 10:
            return `${noun} was leaking out the hole in the roof.`
        default:
            return `Please try again later`
    }
}

console.log(randomSentence())

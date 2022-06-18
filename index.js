const string = "Hello!";

function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string){
    console.log(string);
    console.log(string.toUpperCase());

    console.log(string === string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());

}

function sayHiToHeadphonedRoommate(dinner){
    const canthear = "I can't hear you!";
    const canhear = "YES INDEED!";
    const agree = "I would love to!";
    if (dinner.toLowerCase(dinner) === dinner){
        return canthear;
    }
    else if (dinner.toUpperCase(dinner)=== dinner){
        return canhear;
    }
    else if ("Let's have dinner together!" === dinner){
        return agree;
    }

}
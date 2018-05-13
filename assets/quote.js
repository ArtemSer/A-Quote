$(document).ready(function () {
    const quoteList = [
        {author: "Jess C. Scott", quote: "The brightest light casts the darkest shadow."},
        {author: "Neal Stephenson", quote: "To condense fact from the vapor of nuance."},
        {author: "William Gibson", quote: "Falling burned and blinded through a Siberian sky."},
        {
            author: "Anna L. Davis",
            quote: "I’d been an outcast my entire life. Growing up with technophobe parents in the dawn of a Cyborg Age did that to a person."
        },
        {
            author: "Eric Schmidth",
            quote: "The Internet is the first thing that humanity has built that humanity doesn’t understand, the largest experiment in anarchy that we have ever had."
        },
        {
            author: "Philip K. Dick",
            quote: "You will be required to do wrong no matter where you go. It is the basic condition of life, to be required to violate your own identity."
        },
        {
            author: "William Gibson",

            quote: "It’s impossible to move, to live, to operate at any level without leaving traces, bits, seemingly meaningless fragments of personal information. Fragments that can be retrieved, amplified…"
        },
        {
            author: "Lain Iwakura",

            quote: "No matter where you go, everyone’s connected."
        },
        {
            author: "William Gibson",

            quote: "When you want to know how things really work, study them when they’re coming apart."
        },
        {author: "Jeff Somers", source: "The Electric Church", quote: "Let me show you an endless trail of sunsets."},
        {
            author: "Roy Batty",

            quote: "I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched c-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die."
        },
        {
            author: "Neal Stephenson",

            quote: "See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places."
        },
        {author: "Neal Stephenson", source: "Snow Crash", quote: "Jack the sound barrier. Bring the noise."},
        {
            author: "Neal Stephenson",

            quote: "Well, all information looks like noise until you break the code."
        }
    ];

    function quoteGenerate() {
        let quoteRandomize = Math.floor(Math.random() * quoteList.length),
            quoteMain = quoteList[quoteRandomize].quote,
            quoteAuthor = quoteList[quoteRandomize].author;

        $(".text").text(quoteMain);
        $(".author").text(quoteAuthor);
    }
    $(".tweet").on("click", function () {
        window.open("https://twitter.com/home/?status=" + "\"" +
            $(".text").text() + "\"" + " - " +
            $(".author").text() +
            "Tweet by A-Quote", '_blank');
    });

    $(".a-button").on("click", function () {quoteGenerate();});
    quoteGenerate();
});
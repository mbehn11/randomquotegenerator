function generateQuote() {
    const quotes = [
        {
            quote: "Tell me what you need and I'll tell you how to live without it.",
            author: "Altai mountain local skier from Warren Miller movie"
        },
        {
            quote: "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. ",
            author: "Henry David Thoreau"
        },
        {
            quote: "Nothing, to my way of thinking, is a better proof of a well ordered mind than a man's ability to stop just where he is and pass some time in his own company.",
            author: "Lucius Annaeus Seneca"
        },
        {
            quote: "People don't like the true and simple; they like fairy tales and humbug.",
            author: "Edmond de Goncourt, 1822 - 1896"
        },
        {
            quote: "I’ve never been interested in pursuing a normal life. There are enough people doing that. More growth and discovery seems to happen when I’m uncomfortable.",
            author: "Derek Sivers"
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

window.onload = function () {
    generateQuote();
}

//document.getElementById("generate").addEventListener('click', generateQuote());
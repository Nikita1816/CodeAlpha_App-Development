const quotes = [
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" }
];

let currentIndex = 0;

function displayQuote(index) {
    document.getElementById("quote").innerText = `"${quotes[index].quote}"`;
    document.getElementById("author").innerText = `- ${quotes[index].author}`;
}

function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    displayQuote(currentIndex);
}

function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    displayQuote(currentIndex);
}

function saveFavorite() {
    const favoriteList = document.getElementById("favorite-list");
    const newFavorite = document.createElement("li");
    newFavorite.innerText = `"${quotes[currentIndex].quote}" - ${quotes[currentIndex].author}`;
    favoriteList.appendChild(newFavorite);
}

function shareQuote() {
    const quoteText = `"${quotes[currentIndex].quote}" - ${quotes[currentIndex].author}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(twitterUrl, "_blank");
}

function addQuote() {
    const newQuoteText = document.getElementById("newQuote").value;
    const newAuthorText = document.getElementById("newAuthor").value || "Anonymous";

    if (newQuoteText.trim() !== "") {
        quotes.push({ quote: newQuoteText, author: newAuthorText });
        alert("Quote added successfully!");
        document.getElementById("newQuote").value = "";
        document.getElementById("newAuthor").value = "";
    } else {
        alert("Please enter a quote!");
    }
}

// Load the first quote when page opens
window.onload = () => displayQuote(currentIndex);

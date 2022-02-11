function generate()
{
    const quotes = {"― Albert Einstein ":'"RC vô địch"',"-- Pierce Brown, Red Rising":'"Man cannot be freed by the same injustice that enslaved it."'};
    let authors = Object.keys(quotes);/*create array is contained authors*/
    let author = authors[Math.floor(Math.random()*authors.length)];
    let quote = quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}
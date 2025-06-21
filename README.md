# ChallengeTwo-3369622
javascript solution for search suggestion system
# Search Suggestion System (JavaScript)

Index Number:3369622

This project implements a search suggestion system in JavaScript.  
Given a list of products and a search word, the system returns matching product suggestions as the user types.

##  How It Works

- Products are sorted lexicographically
- For each prefix of the search word, the top 3 matching products are returned

##  Example

["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output:
[
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
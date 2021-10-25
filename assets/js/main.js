
/* javascript */
let quotes = ['A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality. All’s Well That Ends Well (Act 3, Scene 6)',
'Away, you starvelling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish! Henry IV Part 1 (Act 2, Scene 4)' ,
'Away, you three-inch fool! The Taming of the Shrew (Act 4, Scene 1)'
]

 function generateQuotes(){
 let randomNumber = Math.floor(Math.random() * (quotes.length));
 document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
 }

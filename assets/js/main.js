
/* javascript */
let quotes = ['"A most notable coward, an infinite and endless liar, an hourly promise breaker, the owner of no one good quality." <br> All’s Well That Ends Well (Act 3, Scene 6)',
'"Away, you starvelling, you elf-skin, you dried neat’s-tongue, bull’s-pizzle, you stock-fish!" <br> Henry IV Part 1 (Act 2, Scene 4)' ,
'"Away, you three-inch fool!" <br> The Taming of the Shrew (Act 4, Scene 1)',
'"Go, prick thy face, and over-red thy fear, Thou lily-liver’d boy." <br> Macbeth (Act 5, Scene 3)',
'“His wit’s as thick as a Tewkesbury mustard.” <br> Henry IV Part 2 (Act 2, Scene 4)',
'“I am pigeon-liver’d and lack gall.” <br> Hamlet (Act 2, Scene 2)',
'“I am sick when I do look on thee.“ <br> A Midsummer Night’s Dream (Act 2, Scene 1)',
'“I must tell you friendly in your ear, sell when you can, you are not for all markets.” <br> As You Like It (Act 3 Scene)',
'“If thou wilt needs marry, marry a fool; for wise men know well enough what monsters you make of them.” <br> Hamlet (Act 3, Scene 1)',
'“I’ll beat thee, but I would infect my hands.” <br> Timon of Athens (Act 4, Scene 3)',
'“I scorn you, scurvy companion.” <br> Henry IV Part II (Act 2, Scene 4)',
'“Methink’st thou art a general offence and every man should beat thee.” <br> All’s Well That Ends Well (Act 2, Scene 3)',
'“More of your conversation would infect my brain.” <br> Coriolanus (Act 2, Scene 1)',
'“Peace, ye fat guts!” <br> Henry IV Part 1 (Act 2, Scene 2)',
'“Aroint thee: go away, rump-fed runion: slut.” <br> Macbeth (Act 1 Scene 3)',
'“The rankest compound of villainous smell that ever offended nostril.” <br> The Merry Wives of Windsor (Act 3, Scene 5)',
'“The tartness of his face sours ripe grapes.” <br> The Comedy of Errors (Act 5, Scene 4)',
'“There’s no more faith in thee than in a stewed prune.” <br> Henry IV Part 1 (Act 3, Scene 3)',
'“Thine forward voice, now, is to speak well of thine friend; thine backward voice is to utter foul speeches and to detract.” <br> The Tempest (Act 2, Scene 2)',
'“That trunk of humours, that bolting-hutch of beastliness, that swollen parcel of dropsies, that huge bombard of sack, that stuffed cloak-bag of guts, that roasted Manningtree ox with pudding in his belly, that reverend vice, that grey Iniquity, that father ruffian, that vanity in years?”<br> Henry IV Part 1 (Act 2, Scene 4)',
'“Thine face is not worth sunburning.” <br> Henry V (Act 5, Scene 2)',
'“This woman’s an easy glove, my lord, she goes off and on at pleasure.”<br> All’s Well That Ends Well (Act 5, Scene 3)',
'“Thou art a boil, a plague sore.” <br> King Lear (Act 2, Scene 2)',
'“Was the Duke a flesh-monger, a fool and a coward?” <br> Measure For Measure (Act 5, Scene 1)',
'“Thou art as fat as butter.” <br> Henry IV Part 1 (Act 2, Scene 4)',
'“Here is the babe, as loathsome as a toad.” <br> Titus Andronicus (Act 4, Scene 3)',
'“Like the toad; ugly and venomous.” <br> As You Like It (Act 2, Scene 1)',
'“Thou art unfit for any place but hell.” <br> Richard III (Act 1 Scene 2)',
'“Thou cream faced loon” <br> Macbeth (Act 5, Scene 3)']

 function generateQuotes(){
 let randomNumber = Math.floor(Math.random() * (quotes.length));
 document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
 }

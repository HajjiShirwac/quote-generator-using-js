//variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `The way to get started is to quit talking and begin doing`,
    person: `Walt Disney`
},
{
    quote: `Spread love everywhere you go. Let no one ever come to you 
    without leaving happier.`,
    person: `Mother Teresa`
},
{
    quote: `When you reach the end of your rope, 
    tie a knot in it and hang on.`,
    person: `Franklin D. Roosevelt`
},
{
    quote: `Always remember that you are absolutely unique.
     Just like everyone else.`,
    person: `Margaret Mead`
},
{
    quote: `The greatest glory in living lies not in never falling,
     but in rising every time we fall`,
    person: `Nelson Mandela`
},
{
    quote: `If life were predictable it would cease to be life, 
    and be without flavor`,
    person: `Eleanor Roosevelt`
},
{
    quote: `If you set your goals ridiculously high and it's a failure, 
    you will fail above everyone else's success. `,
    person: `-James Cameron.`
},
];
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() *quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
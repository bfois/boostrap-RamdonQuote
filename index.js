const QUOTEBANK = [
{quote: "La vida es una preparación para el futuro; y la mejor preparación para el futuro es vivir como si no hubiera ninguno.",
author: "Albert Einstein"},
{quote:"Decimos a nuestros empleados que si nadie se ríe al menos de una de sus ideas, probablemente es que no están siendo lo suficientemente creativos.",
  author:"Bill Gates"},
{quote:"Es genial trabajar con ordenadores. No discuten, lo recuerdan todo y no se beben tu cerveza.",
  author:"Paul Leary"},
{quote:"El único modo de hacer un gran trabajo es amar lo que haces",
  author:"Steve Jobs"},
{quote:"Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé.",
  author:"Benjamin Franklin "},
{quote:"Tienes que hacer las cosas que crees que no puedes hacer.",
  author:"Eleanor Roosevelt"},
{quote:"La ciencia es el gran antídoto contra el veneno del entusiasmo y la superstición.",
  author:"Adam Smith"},
{quote:"Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse.",
  author:"Charles Baudelaire"},
]

window.onload = init;
function init(){
  randomQuote()
  backGroundChange()
}
function randomQuote(){
  let arraySize = QUOTEBANK.length
  let randomIndex = Math.floor(Math.random()*arraySize)

  document.getElementById("text").innerText = QUOTEBANK[randomIndex].quote
  document.getElementById("author").innerText = QUOTEBANK[randomIndex].author


  let twitterLink= 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
  let quoteTwitterLink = QUOTEBANK[randomIndex].quote.replace(/ /g,"%20")
  let authorTwitterLink = QUOTEBANK[randomIndex].author.replace(/ /g,"%20")
  document.getElementById("tweet-quote").href= twitterLink  + quoteTwitterLink + '%20' + "-" +authorTwitterLink;
}

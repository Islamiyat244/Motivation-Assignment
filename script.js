
const quotes = [
      "Believe you can and you're halfway there.",
      "Your limitation—it's only your imagination.",
      "Push yourself, because no one else is going to do it for you.",
      "Great things never come from comfort zones.",
      "Dream it. Wish it. Do it.",
      "Dont stop when youre tired. Stop when youre done.",
      "Success doesnt just find you. You have to go out and get it."
    ];

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;}

    const quoteBox = document.getElementById("quote-box");
    const newQuoteBtn = document.getElementById("new-quote");
 newQuoteBtn.addEventListener('click',()=> {
  const RandomIndex = Math.floor(Math.random()*quotes.length);
  quoteBox.textContent = quotes[RandomIndex];
const newColor=getRandomColor();

document.body.style.backgroundColor=newColor;})
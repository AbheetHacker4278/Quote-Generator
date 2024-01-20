const apiUrl = "https://api.quotable.io/random?tags=technology,famous-quotes";

let quoteElement = document.querySelector('.quote');
let authorElement = document.querySelector('.author');
let clickElement = document.querySelector('.clk');
let inputElement = document.querySelector('.inpt');
clickElement.addEventListener('click', async function utility(){
    let data = await fetch(`https://api.quotable.io/random?tags=${inputElement.value}`);
    let struct = await data.json();
    console.log(struct);
    quoteElement.innerHTML = `${struct?.content}`;
    authorElement.innerHTML = `-${struct?.author}`;
});


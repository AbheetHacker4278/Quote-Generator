const apiUrl = "https://api.quotable.io/random?tags=technology,famous-quotes";

let quoteElement = document.querySelector('.quote');
let authorElement = document.querySelector('.author');
let clickElement = document.querySelector('.clk');
let inputElement = document.querySelector('.inpt');
let imgg = document.querySelector('.img');
imgg.style.display = 'none';
clickElement.addEventListener('click', async function utility(){
    let data = await fetch(`https://api.quotable.io/random?tags=${inputElement.value}`);
    let struct = await data.json();
    quoteElement.innerHTML = '';
    authorElement.innerHTML = '';
    imgg.style.display = 'block';
    console.log(struct);
    setTimeout(function(){
        quoteElement.innerHTML = `${struct?.content}`;
        authorElement.innerHTML = `-${struct?.author}`;
        imgg.style.display = 'none';
    } , 2000);
});


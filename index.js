let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = ['"The nature of yoga is to shine the light of awareness into the darkest corners of the body." -Jason Crandell',
    '"Change only happens in the present moment.The past is already done. The future is just energy and intention."-Kino McGregor',
    '"Yoga begins with listening. When we listen, we are giving space to what is." -Richard Freeman',
    '"The body benefits from movement, and the mind benefits from stillness." -Sakyong Mipham',
    '"Yoga does not transform the way we see things, it transforms the person who sees." -B.K.S Iyengar',
    '"Happiness does not depend on what you have or who you are. It solely relies on what you think." -Buddha',
    '"In the middle of difficulty lies opportunity." -Albert Einstein',
    '"There is no health without mental health; mental health is too important to be left to the professionals alone, and mental health is everyone’s business." — Vikram Patel']


let colors = ['red', 'green', 'blue', 'black', '#33cc33', '#8600b3', '#e68a00', '#e6005c'];




btn.addEventListener('click', function () {
    let randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuote;
});

//$('#container').click(function () {
// $('#container').css('background', '#' + bgColor());

//});
////function bgColor() {
//return Math.floor(Math.random() * 16777216).toString(16);
//}

$('#container').click(function () {
    $(this).css('background-color', colors[Math.floor(Math.random() * colors.length)]);
});

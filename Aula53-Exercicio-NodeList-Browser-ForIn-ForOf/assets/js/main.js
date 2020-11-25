const divParag = document.querySelector('.paragraphs');
const parags = divParag.querySelectorAll('p');

const stylesBody = getComputedStyle(document.body);
const backgColorBody = stylesBody.backgroundColor;

console.log(`body's background color: ${backgColorBody}`);

for (let p of parags) {
    p.style.backgroundColor = backgColorBody;
    p.style.color = "#ffffff";
    console.log(p.innerHTML);
}
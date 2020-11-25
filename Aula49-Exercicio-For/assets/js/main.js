function createElementWithText(elemTag, elemText) {
    let createdElem = document.createElement(elemTag);
    createdElem.innerHTML = elemText;
    /*
    createdElem.innetText = elemText;
    */
    /*
    let createdText = document.createTextNode(elemText);
    createdElem.appendChild(createdText);
    */
    return createdElem;
}

const elementsArray = [
    {tag: 'p', text: 'Frase 1'},
    {tag: 'div', text: 'Frase 2'},
    {tag: 'footer', text: 'Frase 3'},
    {tag: 'section', text: 'Frase 4'},
]

const sectionContainer = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementsArray.length; i++) {
    let { tag, text } = elementsArray[i]; // atribuição via desestruturação
    let elementCreated = createElementWithText(tag, text);
    div.appendChild(elementCreated);
}
sectionContainer.appendChild(div);

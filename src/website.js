class Button {

}

function makeHeader() {
    const header = document.createElement("header");

    const btnOne = document.createElement('button')
    const btnTwo = document.createElement('button')
    const btnThree = document.createElement('button')
    const title = document.createElement('div')

    title.setAttribute('id', 'resturant-name')

    btnOne.setAttribute('id', 'home-btn');
    btnTwo.setAttribute('id', 'menu-btn');
    btnThree.setAttribute('id', 'contact-btn');

    title.textContent = 'Korean BBQ'

    btnOne.textContent = 'Home'
    btnTwo.textContent = 'Menu'
    btnThree.textContent = 'Contact'

    header.appendChild(title);
    header.appendChild(btnOne);
    header.appendChild(btnTwo);
    header.appendChild(btnThree);

    return header
}

function makeMain() {
    const main = document.createElement('main')
    return main;
}

function makeFooter() {
    const footer = document.createElement('footer');

    footer.textContent = 'Made by Jiahao Huamani'
    return footer
}

function loadPage() {
    const content = document.querySelector('#content')
    content.appendChild(makeHeader())
    content.appendChild(makeMain())
    content.appendChild(makeFooter())
}

export default loadPage
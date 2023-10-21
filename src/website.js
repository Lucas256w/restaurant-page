class Button {

}

function makeHeader() {
    const header = document.createElement("header");

    const headerContainer = document.createElement('div')
    headerContainer.setAttribute('id', 'header-container')

    const btnContainer = document.createElement('div')
    btnContainer.setAttribute('id', 'button-container');

    const btnOne = document.createElement('button')
    const btnTwo = document.createElement('button')
    const btnThree = document.createElement('button')

    const title = document.createElement('div')

    title.setAttribute('id', 'resturant-name')

    btnOne.setAttribute('id', 'home-btn');
    btnTwo.setAttribute('id', 'menu-btn');
    btnThree.setAttribute('id', 'contact-btn');

    btnOne.setAttribute('class', 'nav-button')
    btnTwo.setAttribute('class', 'nav-button')
    btnThree.setAttribute('class', 'nav-button')

    title.textContent = 'The Gourmet Grille'

    btnOne.textContent = 'Home'
    btnTwo.textContent = 'Menu'
    btnThree.textContent = 'Contact'

    btnContainer.appendChild(btnOne);
    btnContainer.appendChild(btnTwo);
    btnContainer.appendChild(btnThree);

    headerContainer.appendChild(title);
    headerContainer.appendChild(btnContainer)

    header.appendChild(headerContainer);

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
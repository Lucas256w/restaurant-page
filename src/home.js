function makeHome() {
    const main = document.querySelector('main')

    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'home-page-container';

    // Create the welcome text div
    const welcomeText = document.createElement('div');
    welcomeText.id = 'welcome-text';
    welcomeText.textContent = 'Your Meats Cooked to ';

    // Create the span element with inline style
    const spanElement = document.createElement('span');
    spanElement.style.color = '#DA2029';
    spanElement.textContent = 'Perfection';

    // Append the span element to the welcome text div
    welcomeText.appendChild(spanElement);

    // Create the image element
    const homePageImage = document.createElement('img');
    homePageImage.src = './images/homePageImg.jpg';
    homePageImage.id = 'home-page-image';

    // Append the welcome text and image elements to the main container
    homePageContainer.appendChild(welcomeText);
    homePageContainer.appendChild(homePageImage);

    // Append the main container to the main
    main.appendChild(homePageContainer);


    return main
}

export default makeHome

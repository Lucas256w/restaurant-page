function makeHome() {
    const main = document.querySelector('main')
    main.setAttribute('id', 'home-page')

    main.innerHTML = `
    <div id="home-page-container">
        <div id="welcome-text">Your Meats Cooked to <span style = 'color:#DA2029;'>Perfection</span>.</div>
        <img src='./images/homePageImg.jpg' id='home-page-image'>
    </div>
    `

    return main
}

export default makeHome

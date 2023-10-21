class MenuItem {
    constructor(section, item, description, imageSrc) {
        this.section = section;
        this.item = item;
        this.description = description;
        this.imageSrc = imageSrc;
    }
}

const menuItems = [
    new MenuItem('beef', 'Ribeye', 'Savor the exceptional quality of our Ribeye, sourced from the finest grass-fed cattle, known for its rich flavor and tenderness. A true testament to quality and taste.', './images/ribeye.jpg'),
    new MenuItem('beef', 'Filet Mignon', 'Discover our Filet Mignon, an exquisite cut from the finest grass-fed cattle, celebrated for its exceptional tenderness and flavor.', './images/filet.jpg'),
    new MenuItem('beef', 'T-Bone', 'Indulge in our T-Bone, a combination of tender filet mignon and flavorful New York strip, sourced from top-quality, grass-fed beef.', './images/tbone.jpeg'),
    new MenuItem('beef', 'Tomahawk', 'Feast upon our Tomahawk steak, a bold, bone-in masterpiece. This impressive cut, sourced from premium, well-marbled beef, promises an unforgettable dining experience.', './images/tomahawk.jpg'),

    new  MenuItem('pork', 'Pork Belly', 'Savor our Pork Belly, a culinary delight. This succulent cut, prepared to perfection, delivers an explosion of flavor.', './images/porkbelly.jpg'),
    new  MenuItem('pork', 'Pork Sausage', 'Delight in our Pork Sausage, a savory treat. Crafted with care, these sausages burst with flavor and bring comfort to your plate.', './images/sausage.jpeg'),
    new  MenuItem('pork', 'Pork Chop', "Enjoy our Pork Chop, a delectable delight. Sourced from the finest cuts of pork, it's a flavorful experience worth savoring.", './images/porkchop.jpg'),

    new MenuItem('chicken', 'Chicken Breast', "Savor our Chicken Breast, a lean and tender choice. Expertly prepared, it embodies simplicity and succulence for a satisfying dining experience.", './images/chickenBreast.jpeg'),
    new MenuItem('chicken', 'Chicken Legs', "Indulge in our Chicken Legs, flavorful and juicy choice. Exquisitely cooked, it's a succulent delight for your palate.", './images/chickenLeg.jpeg'),
    new MenuItem('chicken', 'Chicken Wings', "Delight in our Chicken Wings, a crowd-pleasing favorite. These crispy and saucy wings are a finger-licking feast for the senses.", './images/chickenWings.jpeg')
]

function makeMenu() {
    const main = document.querySelector('main');

    const menuContent = document.createElement('div');
    menuContent.id = 'menu-content';
    main.appendChild(menuContent)

    const beefSection = document.createElement('div');
    const porkSection = document.createElement('div');
    const chickenSection = document.createElement('div');
    beefSection.className = 'menu-section'
    porkSection.className = 'menu-section'
    chickenSection.className = 'menu-section'

    menuContent.append(beefSection)
    menuContent.append(porkSection)
    menuContent.append(chickenSection)

    const beefTitle = document.createElement('div')
    const porkTitle = document.createElement('div')
    const chickenTitle = document.createElement('div')
    beefTitle.textContent = 'Beef'
    porkTitle.textContent = 'Pork'
    chickenTitle.textContent = 'Chicken'
    beefTitle.className = 'menu-subtitle'
    porkTitle.className = 'menu-subtitle'
    chickenTitle.className = 'menu-subtitle'

    beefSection.appendChild(beefTitle)
    porkSection.appendChild(porkTitle)
    chickenSection.appendChild(chickenTitle)

    const beefOptions = document.createElement('div')
    const porkOptions = document.createElement('div')
    const chickenOptions = document.createElement('div')
    beefOptions.id = 'beef-options'
    porkOptions.id = 'pork-options'
    chickenOptions.id = 'chicken-options'
    beefOptions.className = 'options'
    porkOptions.className = 'options'
    chickenOptions.className = 'options'

    beefSection.appendChild(beefOptions)
    porkSection.appendChild(porkOptions)
    chickenSection.appendChild(chickenOptions)


    menuItems.forEach((menuItem) =>{
        const card = document.createElement('div')
        card.className = 'card'

        const image = document.createElement('img')
        image.src = menuItem.imageSrc
        image.className = 'item-pic'

        const descriptionContainer = document.createElement('div')
        descriptionContainer.className = 'description-container'

        card.appendChild(image)
        card.appendChild(descriptionContainer)

        const itemName = document.createElement('div')
        itemName.className = 'item-name'
        itemName.textContent = menuItem.item

        const description = document.createElement('div')
        description.className = 'description'
        description.textContent = menuItem.description

        descriptionContainer.appendChild(itemName)
        descriptionContainer.appendChild(description)
        
        if (menuItem.section == 'beef'){
            beefOptions.appendChild(card)
        } else if (menuItem.section == 'pork'){
            porkOptions.appendChild(card)
        } else if (menuItem.section == 'chicken'){
            chickenOptions.appendChild(card)
        }
    });

    return main
}



export default makeMenu

function makeContact() {
    const main = document.querySelector('main');

    const contactContainer = document.createElement('div')
    contactContainer.id = 'contact-container'

    main.appendChild(contactContainer);

    const contactTitle = document.createElement('div')
    contactTitle.id = 'contact-title'
    contactTitle.textContent = 'Visit us or call us today'

    const formAndImageContainer = document.createElement('div');
    formAndImageContainer.id = 'form-and-image-container';

    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(formAndImageContainer);

    const formContainer = document.createElement('div');
    formContainer.id = 'form-container';

    const imageContainer = document.createElement('img')
    imageContainer.src = './images/meats.webp';
    imageContainer.id = 'meats'

    formAndImageContainer.appendChild(formContainer);
    formAndImageContainer.appendChild(imageContainer);

    const formTitle = document.createElement('div');
    formTitle.id = 'form-title'
    formTitle.textContent = 'Opening Hours'

    const hoursContainer = document.createElement('div');
    hoursContainer.id = 'hours-container';

    const hoursOne = document.createElement('div');
    const hoursTwo = document.createElement('div');
    const hoursThree = document.createElement('div');
    hoursOne.className = 'hours';
    hoursTwo.className = 'hours';
    hoursThree.className = 'hours';
    hoursOne.textContent = 'Tues - Thurs: 9am - 5pm';
    hoursTwo.textContent = 'Fri: 9am - 7pm/Sat: 8am - 4pm';
    hoursThree.textContent = 'Sun - Mon: Closed';

    hoursContainer.appendChild(formTitle);
    hoursContainer.appendChild(hoursOne);
    hoursContainer.appendChild(hoursTwo);
    hoursContainer.appendChild(hoursThree);


    formContainer.appendChild(hoursContainer);


    const form = document.createElement('form')

    formContainer.append(form)

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.placeholder = 'Name'

    const emailInput = document.createElement('input')
    emailInput.type = 'email'
    emailInput.placeholder = 'Email'

    const messageInput = document.createElement('textarea')
    messageInput.placeholder = 'Message'

    const submitBtn = document.createElement('button')
    submitBtn.id = 'submit-button';
    submitBtn.textContent = 'Submit'

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    form.appendChild(submitBtn);

    return main
}

export default makeContact
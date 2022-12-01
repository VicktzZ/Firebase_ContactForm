const firebaseConfig = {
    apiKey: "AIzaSyDpPhB4L5GXkKm7Qb90BsbnS1cxKfdip8U",
    authDomain: "formcontact-3d3fa.firebaseapp.com",
    databaseURL: "https://formcontact-3d3fa-default-rtdb.firebaseio.com",
    projectId: "formcontact-3d3fa",
    storageBucket: "formcontact-3d3fa.appspot.com",
    messagingSenderId: "389675661296",
    appId: "1:389675661296:web:8654c936f028fb43d24f35",
    measurementId: "G-985DQLPH33"
}

firebase.initializeApp(firebaseConfig)
const contactFormDB = firebase.database().ref('formContact')

const form = document.querySelector('#contactForm')
form.addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault()

    const email = getElementVal('email')
    const password = getElementVal('password')

    saveUser(email, password)

    const alert = document.querySelector('.alert')
    alert.style.display = 'block'

    setTimeout(() => { alert.style.display = 'none' }, 3000)
    form.reset()
}

const saveUser = (email, password) => {
    const newContactForm = contactFormDB.push()
    
    newContactForm.set({
        email: email,
        password: password,
    })
}

const getElementVal = id => {
    return document.querySelector(`#${id}`).value
}


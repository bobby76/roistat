
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    if (name === '') {
        document.getElementById('nameError').textContent = 'Введите имя';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Введите email';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    if (message === '') {
        document.getElementById('messageError').textContent = 'Введите сообщение';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        alert('Спасибо за ваше сообщение!');
    }
});

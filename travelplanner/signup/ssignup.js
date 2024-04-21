const form = document.getElementById('sign-in-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here, you can implement your sign-in logic
    // You can use an API or a backend service to authenticate the user
    // For this example, we'll just log the email and password to the console

    console.log('Email:', email);
    console.log('Password:', password);

    // After successful authentication, you can redirect the user to the main page or display a success message
});
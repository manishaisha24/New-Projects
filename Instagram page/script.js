const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      console.log('Username:', username);
      console.log('Password:', password);
    });
    //fcghj
// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     console.log("Username:", username);
//     console.log("Password:", password);
//     // Here you can add your code for further processing like sending the data to a server
// });
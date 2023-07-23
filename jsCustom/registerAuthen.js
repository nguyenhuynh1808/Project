const firebaseConfig = {
    apiKey: "AIzaSyBBlX4Xr8Dn4J4dGnOvBkWv8CAyzj2U-Ws",
    authDomain: "register-account-560d2.firebaseapp.com",
    databaseURL: "https://register-account-560d2-default-rtdb.firebaseio.com",
    projectId: "register-account-560d2",
    storageBucket: "register-account-560d2.appspot.com",
    messagingSenderId: "545930504725",
    appId: "1:545930504725:web:adeaffbf4204555db83c1c"
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

function register() {
    email = document.getElementById("eSignUp").value
    password = document.getElementById("pSignUp").value
    cfPassword = document.getElementById("cfPwdSignUp").value
    full_name = document.getElementById("uSignUp").value


    if (validate_email(email) == false || validate_password(password) == false || password != cfPassword) {
        alert("Email hoặc Password không hợp lệ !!!")
        return
    }

    if (validate_field(full_name) == false) {
        alert("Họ tên của bạn không hợp lệ")
        return
    }


    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                email: email,
                full_name: full_name,
                passowrd: password,
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data);

            // DOne
            alert('User Created!!!');
        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        })
}


function login() {
    email = document.getElementById("eLogin").value
    password = document.getElementById("pLogin").value

    if (validate_field(email) == false || validate_field(password) == false) {
        alert(" Vui lòng nhập email và password")
        return
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            // Declare user variable
            var user = auth.currentUser;

            // Add this user to Firebase Database
            var database_ref = database.ref();

            // Create User data
            var user_data = {
                last_login: Date.now()
            };

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).update(user_data);

            // DOne
            alert('User Logged In!!!');
            window.location.href = "index.html"
        })
        .catch((error) => {
            // Firebase will use this to alert of its errors
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        })
}


function validate_email(email) {
    ex = /^[^@]+@\w+(\.\w+)+\w$/
    if (ex.test(email) == true) {
        //email is good
        return true
    } else {
        // email is bad
        return false
    }
}

function validate_password(password) {
    expression = /^[A-Za-z]\w{7,14}$/
    if (expression.test(password) == true) {
        return true;
    } else {
        return false;
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}
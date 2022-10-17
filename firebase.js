<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC1Erj5usYF-6babxtik73k0KW6DWET2xc",
    authDomain: "taskitt-308f6.firebaseapp.com",
    projectId: "taskitt-308f6",
    storageBucket: "taskitt-308f6.appspot.com",
    messagingSenderId: "856122234296",
    appId: "1:856122234296:web:b1ed390b48e83baf322b4d",
    measurementId: "G-TSFPCRE4EP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

    submitSignup.addEventListener('click', (e)=>{

            var username = document.getElementById("signupUsername").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("pword").value;
            var cpassword = document.getElementById("cpword").value;

            createUserWithEmailAndPassword(auth, email, password, username, cpassword)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...

                    set(ref(database, 'users/' + user.uid), {
                        username: username,
                        email: email

                        })
                        .then(() => {
                        // Data saved successfully!
                        alert('user created');
                        })
                        .catch((error) => {
                        // The write failed...
                        alert(error);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    alert(errorMessage);
                });
        });

      </script>
</script>







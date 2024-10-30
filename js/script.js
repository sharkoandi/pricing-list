// Array of valid users
const users = [
  { username: "user1", password: "1" },
  { username: "user2", password: "2" },
  { username: "user3", password: "3" },
];

// Validate form fields
function validateForm() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");
  
  // Reset error message
  errorMessage.style.display = "none";
  errorMessage.innerHTML = "";

  // Check for email
  if (!email) {
    errorMessage.innerHTML = "Please enter your email.";
    errorMessage.style.display = "block";
    return false;
  }

  // Check for password
  if (!password) {
    errorMessage.innerHTML = "Please enter your password.";
    errorMessage.style.display = "block";
    return false;
  }

  // Check if the credentials match any user in the array
  const user = users.find(
    (user) => user.username === email && user.password === password
  );

  if (user) {
    // Send login success message
    window.parent.postMessage(200, "*");
    return true;
  } else {
    errorMessage.innerHTML = "Invalid username or password.";
    errorMessage.style.display = "block";
    return false;
  }
}

// Trigger validation on Enter key
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    validateForm();
  }
});

// Toggle password visibility
function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const showHideIcon = document.querySelector(".show-hide");

  if (passwordField.type === "password") {
    passwordField.type = "text";
    showHideIcon.name = "eye-off-outline";
  } else {
    passwordField.type = "password";
    showHideIcon.name = "eye-outline";
  }
}

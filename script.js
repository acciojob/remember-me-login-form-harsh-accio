const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// 🔹 Check on page load if user is saved
window.addEventListener("load", () => {
  const savedUser = localStorage.getItem("Username");
  const savedPass = localStorage.getItem("Password");

  if (savedUser && savedPass) {
    existingBtn.style.display = "inline-block"; // show the button
  } else {
    existingBtn.style.display = "none"; // hide if no saved user
  }
});

// 🔹 On login button click
submitBtn.addEventListener("click", (e) => {
  if (username.value && password.value) {
    if (checkbox.checked) {
      alert(`Logged in as checked ${username.value}`);
      localStorage.setItem("Username", username.value);
      localStorage.setItem("Password", password.value);
      existingBtn.style.display = "inline-block"; // show after saving
    } else {
      alert(`Logged in as not checked ${username.value}`);
      localStorage.removeItem("Username");
      localStorage.removeItem("Password");
      existingBtn.style.display = "none"; // hide if unchecked login
    }
  } else {
    alert("Please enter username and password");
  }
});

// 🔹 On "Login as existing user" click
existingBtn.addEventListener("click", () => {
  const savedUser = localStorage.getItem("Username");
  if (savedUser) {
    alert(`Logged in as ${savedUser}`);
  } else {
    alert("No saved user found");
  }
});

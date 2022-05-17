/* to switch between text or password dot */
var state = false;

/* for password */
function toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "password");
      state = false;
    document
      .getElementById("visibilityBtn")
      .setAttribute("class", "fa-solid fa-eye");
  } else {
    document.getElementById("password").setAttribute("type", "text");
    state = true;
    document
      .getElementById("visibilityBtn")
      .setAttribute("class", "fa-solid fa-eye-slash");
  }
}

 /* for password confirmation*/ 
function toggleTwo() {
  if (state) {
    document
      .getElementById("password_confirmation")
      .setAttribute("type", "password");
    state = false;
    document
      .getElementById("visibilityBtnTwo")
      .setAttribute("class", "fa-solid fa-eye");
  } else {
    document.getElementById("password_confirmation").setAttribute("type", "text");
    state = true;
    document
      .getElementById("visibilityBtnTwo")
      .setAttribute("class", "fa-solid fa-eye-slash");
  }
}

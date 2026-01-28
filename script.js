document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email-input").value;
  const form = document.getElementById("signup-form");
  const successMsg = document.getElementById("success-msg");

  if (email) {
    form.style.opacity = "0";

    setTimeout(() => {
      form.classList.add("hidden");
      successMsg.classList.remove("hidden");
      successMsg.style.animation = "fadeIn 0.5s forwards";
    }, 300);
  }
});

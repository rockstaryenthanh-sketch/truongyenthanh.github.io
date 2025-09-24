document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn-contact");
  const contacts = document.getElementById("contacts");

  btn.addEventListener("click", function () {
    contacts.classList.toggle("hidden");
    btn.textContent = contacts.classList.contains("hidden") ? "Show Contacts" : "Hide Contacts";
  });
});
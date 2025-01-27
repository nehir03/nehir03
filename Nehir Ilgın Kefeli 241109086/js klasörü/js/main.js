// Form doğrulama
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Lütfen tüm alanları doldurun!");
            event.preventDefault(); // Formun gönderilmesini engelle
        } else {
            alert("Form başarıyla gönderildi!");
        }
    });
});

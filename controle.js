alert("hi");
const prenom = document.getElementById("prénom");
const nom = document.getElementById("nom");
const mail = document.getElementById("mail");
const motdepasse = document.getElementById("mdps");
const cmotdepasse = document.getElementById("cmdps");
const btn = document.getElementById("btn");

btn.addEventListener("click", verif);

function verif() {
    clearErrors();
    let hasError = false;

    if (prenom.value.trim() === "") {
        showError(prenom, "Erreur : Prénom requis.");
        hasError = true;
    }
    if (nom.value.trim() === "") {
        showError(nom, "Erreur : Nom requis.");
        hasError = true;
    }
    if (!validateEmail(mail.value)) {
        showError(mail, "Erreur : Email invalide ou requis.");
        hasError = true;
    }
    if (motdepasse.value.trim() === "") {
        showError(motdepasse, "Erreur : Mot de passe requis.");
        hasError = true;
    }
    if (cmotdepasse.value.trim() === "") {
        showError(cmotdepasse, "Erreur : Confirmation de mot de passe requise.");
        hasError = true;
    } else if (motdepasse.value !== cmotdepasse.value) {
        showError(cmotdepasse, "Erreur : Les mots de passe ne correspondent pas.");
        hasError = true;
    }

    const genreSelected = document.querySelector("input[name='genre']:checked");
    if (!genreSelected) {
        showError(document.querySelector("legend"), "Erreur : Genre requis.");
        hasError = true;
    }

    if (!hasError) {
        alert("Inscription réussie !");
    }
}

function showError(inputField, message) {
    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.textContent = message;
    inputField.parentNode.insertBefore(errorMessage, inputField.nextSibling);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll("p");
    errorMessages.forEach((msg) => msg.remove());
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}






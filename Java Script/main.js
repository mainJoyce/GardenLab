// ================================
// MENU MOBILE
// ================================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}


// ================================
// LOGIN
// ================================

const loginForm = document.querySelector("#loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        if (!email || !password) {
            alert("Preencha todos os campos.");
            return;
        }

        // Simulação de login
        localStorage.setItem("gardenlabLogged", "true");
        localStorage.setItem("gardenlabEmail", email);

        alert("Login realizado com sucesso!");

        window.location.href = "index.html";
    });
}


// ================================
// CADASTRO
// ================================

const registerForm = document.querySelector("#registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();
        const confirmPassword = document
            .querySelector("#confirmPassword")
            .value
            .trim();

        if (!name || !email || !password || !confirmPassword) {
            alert("Preencha todos os campos.");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        // Salva apenas para simulação do protótipo
        const user = {
            name: name,
            email: email
        };

        localStorage.setItem("gardenlabUser", JSON.stringify(user));

        alert("Cadastro realizado com sucesso!");

        window.location.href = "login.html";
    });
}
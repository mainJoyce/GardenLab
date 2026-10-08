// ================================
// ELEMENTOS DO CHAT
// ================================

const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const chatMessages = document.querySelector("#chatMessages");


// ================================
// ADICIONAR MENSAGEM
// ================================

function addMessage(text, type) {

    const message = document.createElement("div");

    message.classList.add("message", type);

    message.textContent = text;

    chatMessages.appendChild(message);

    // Mantém o chat no final
    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// ================================
// RESPOSTA SIMULADA
// ================================

function getAssistantResponse(question) {

    const text = question.toLowerCase();


    if (
        text.includes("mancha") ||
        text.includes("manchas")
    ) {

        return (
            "Manchas nas folhas podem estar relacionadas a doenças, " +
            "fungos, bactérias ou outros fatores. Observe a cor, " +
            "formato e evolução das manchas."
        );
    }


    if (
        text.includes("amarela") ||
        text.includes("amarelo") ||
        text.includes("amarelada")
    ) {

        return (
            "Folhas amareladas podem ocorrer por diferentes motivos, " +
            "como deficiência nutricional, excesso de água ou doenças. " +
            "Uma análise da imagem pode ajudar na identificação."
        );
    }


    if (
        text.includes("cuidado") ||
        text.includes("cuidar")
    ) {

        return (
            "Para cuidar melhor da planta, observe regularmente as folhas, " +
            "mantenha uma irrigação adequada e verifique se existem " +
            "manchas ou alterações."
        );
    }


    if (
        text.includes("doença") ||
        text.includes("doente")
    ) {

        return (
            "O GardenLab foi desenvolvido para auxiliar na identificação " +
            "de possíveis doenças em plantas por meio da análise de imagens."
        );
    }


    if (
        text.includes("tomate") ||
        text.includes("batata") ||
        text.includes("milho") ||
        text.includes("uva") ||
        text.includes("maçã")
    ) {

        return (
            "Essa planta faz parte das opções disponíveis no protótipo. " +
            "Você também pode acessar a área de análise para responder " +
            "perguntas ou enviar uma imagem."
        );
    }


    return (
        "Posso ajudar com informações sobre plantas, sintomas, " +
        "doenças e análise de imagens. Tente perguntar sobre manchas, " +
        "folhas amareladas ou cuidados."
    );
}


// ================================
// ENVIAR MENSAGEM
// ================================

function sendMessage() {

    const question = chatInput.value.trim();

    if (!question) {
        return;
    }

    // Mensagem do usuário
    addMessage(question, "user");

    chatInput.value = "";

    // Pequeno atraso para simular resposta da IA
    setTimeout(() => {

        const response =
            getAssistantResponse(question);

        addMessage(response, "assistant");

    }, 500);
}


// ================================
// FORMULÁRIO DO CHAT
// ================================

if (chatForm) {

    chatForm.addEventListener("submit", (event) => {

        event.preventDefault();

        sendMessage();
    });
}


// ================================
// PERGUNTAS RÁPIDAS
// ================================

const quickQuestions =
    document.querySelectorAll("[data-question]");


quickQuestions.forEach((button) => {

    button.addEventListener("click", () => {

        const question =
            button.dataset.question;

        chatInput.value = question;

        sendMessage();
    });
});
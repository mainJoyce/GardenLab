// ================================
// SELEÇÃO DA PLANTA
// ================================

const plantOptions = document.querySelectorAll(".plant-option");

let selectedPlant = null;

plantOptions.forEach((option) => {
    option.addEventListener("click", () => {

        // Remove seleção anterior
        plantOptions.forEach((item) => {
            item.classList.remove("selected");
        });

        // Seleciona a atual
        option.classList.add("selected");

        selectedPlant = option.dataset.plant;

        console.log("Planta selecionada:", selectedPlant);
    });
});

// ================================
// RECEBER PLANTA PELA URL
// Exemplo:
// analise.html?plant=tomate
// ================================

const urlParams = new URLSearchParams(window.location.search);
const plantFromUrl = urlParams.get("plant");

if (plantFromUrl) {

    plantOptions.forEach((option) => {

        const plant = option.dataset.plant.toLowerCase();

        if (plant === plantFromUrl.toLowerCase()) {

            option.classList.add("selected");

            selectedPlant = option.dataset.plant;
        }
    });
}


// ================================
// ELEMENTOS DO RESULTADO
// ================================

const resultBox = document.querySelector("#resultBox");
const confidence = document.querySelector("#confidence");
const resultTitle = document.querySelector("#resultTitle");
const resultDescription = document.querySelector("#resultDescription");


// ================================
// RESULTADO DAS PERGUNTAS
// ================================

const analyzeQuestionsButton =
    document.querySelector("#analyzeQuestions");

if (analyzeQuestionsButton) {

    analyzeQuestionsButton.addEventListener("click", () => {

        if (!selectedPlant) {
            alert("Selecione uma planta primeiro.");
            return;
        }

        const leafColor = document.querySelector("#leafColor").value;
        const spots = document.querySelector("#spots").value;
        const symptoms = document.querySelector("#symptoms").value;
        const observation = document
            .querySelector("#observation")
            .value
            .trim();

        if (!leafColor || !spots || !symptoms) {
            alert("Responda às perguntas antes de continuar.");
            return;
        }


        // --------------------------------
        // RESULTADO SIMULADO
        // --------------------------------

        let title = "Possível alteração na planta";
        let description =
            `Com base nas respostas informadas para ${selectedPlant}, ` +
            `foram identificados sinais que merecem atenção. ` +
            `Na versão final, o modelo de IA analisará esses dados ` +
            `para realizar a classificação.`;

        let confidenceValue = "78%";


        // Caso existam manchas
        if (spots === "sim") {

            title = "Possíveis sinais de doença";

            description =
                `A análise preliminar de ${selectedPlant} identificou ` +
                `características que podem estar relacionadas a uma ` +
                `doença ou alteração na planta. ` +
                `Na versão final, o modelo de IA fará a classificação.`;

            confidenceValue = "84%";
        }

        // Caso a folha esteja amarela
        if (leafColor === "amarela") {

            title = "Possível alteração nas folhas";

            description =
                `As respostas indicam que as folhas de ${selectedPlant} ` +
                `apresentam alteração de coloração. Isso pode estar ` +
                `relacionado a diferentes fatores, que serão analisados ` +
                `pelo modelo na versão final.`;

            confidenceValue = "81%";
        }


        // Se houver observação
        if (observation) {
            description +=
                " A observação informada também será considerada na análise.";
        }


        mostrarResultado(
            confidenceValue,
            title,
            description
        );
    });
}


// ================================
// UPLOAD DA IMAGEM
// ================================

const plantImage = document.querySelector("#plantImage");
const imagePreview = document.querySelector("#imagePreview");

let selectedImage = null;

if (plantImage) {

    plantImage.addEventListener("change", (event) => {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        selectedImage = file;

        // Verifica se é imagem
        if (!file.type.startsWith("image/")) {
            alert("Selecione um arquivo de imagem.");
            plantImage.value = "";
            return;
        }


        // Preview
        const reader = new FileReader();

        reader.onload = (e) => {

            imagePreview.innerHTML = "";

            const image = document.createElement("img");

            image.src = e.target.result;
            image.alt = "Imagem da planta selecionada";

            imagePreview.appendChild(image);
        };

        reader.readAsDataURL(file);
    });
}


// ================================
// ANALISAR IMAGEM
// ================================

const analyzeImageButton =
    document.querySelector("#analyzeImage");

if (analyzeImageButton) {

    analyzeImageButton.addEventListener("click", () => {

        if (!selectedImage) {
            alert("Selecione uma imagem primeiro.");
            return;
        }


        // --------------------------------
        // RESULTADO SIMULADO
        // --------------------------------

        let plantName = selectedPlant || "planta";

        let title = "Imagem pronta para análise";

        let description =
            `A imagem de ${plantName} foi recebida com sucesso. ` +
            `Na versão final do GardenLab, essa imagem será enviada ` +
            `para o modelo de classificação de doenças.`;

        let confidenceValue = "92%";


        mostrarResultado(
            confidenceValue,
            title,
            description
        );
    });
}


// ================================
// MOSTRAR RESULTADO
// ================================

function mostrarResultado(
    confidenceValue,
    title,
    description
) {

    if (!resultBox) {
        return;
    }

    confidence.textContent = confidenceValue;
    resultTitle.textContent = title;
    resultDescription.textContent = description;

    resultBox.classList.remove("hidden");

    resultBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}
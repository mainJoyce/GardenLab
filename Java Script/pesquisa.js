// ================================
// PESQUISA
// ================================

const searchInput = document.querySelector("#searchInput");
const researchCards = document.querySelectorAll(".research-card");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const searchTerm = searchInput.value
            .toLowerCase()
            .trim();


        researchCards.forEach((card) => {

            const title =
                card.dataset.title?.toLowerCase() || "";

            const content =
                card.textContent.toLowerCase();


            const match =
                title.includes(searchTerm) ||
                content.includes(searchTerm);


            if (match) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
    console.log("PASSupport is running!");

    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();

            const card = button.closest(".card");

            if (card) {
                alert(
                    card.querySelector("h2").textContent +
                    " section selected"
                );
            }
        });
    });
});

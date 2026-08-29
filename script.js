document.addEventListener("DOMContentLoaded", () => {
    console.log("PASSupport is running!");

    const propertyButton = document.querySelector(".property-button");
    const propertiesSection = document.querySelector("#properties-section");

    propertyButton.addEventListener("click", () => {
        propertiesSection.classList.remove("hidden");
        propertiesSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

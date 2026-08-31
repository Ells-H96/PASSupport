document.addEventListener("DOMContentLoaded", () => {

  // Find navigation buttons
  const navButtons = document.querySelectorAll(".nav-button");

  // Find certificate sub-navigation buttons
  const subNavButtons = document.querySelectorAll(".nav-sub-button");

  // Find dashboard buttons
  const dashboardButtons = document.querySelectorAll(".dashboard-button");

  // Find all app pages
  const pages = document.querySelectorAll(".page");


  // Function to open a page
  function openPage(pageName) {

    // Hide every page
    pages.forEach((page) => {
      page.classList.remove("active-page");
    });


    // Show the selected page
    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
      selectedPage.classList.add("active-page");
    }


    // Remove active style from main navigation
    navButtons.forEach((button) => {
      button.classList.remove("active");
    });


    // Remove active style from sub-navigation
    subNavButtons.forEach((button) => {
      button.classList.remove("active");
    });


    // If this is a certificate page,
    // keep Certificates highlighted
    if (pageName === "certificates" || pageName === "alerts") {

      const certificatesButton = document.querySelector(
        '.nav-button[data-page="certificates"]'
      );

      if (certificatesButton) {
        certificatesButton.classList.add("active");
      }

    } else {

      // Highlight normal navigation button
      const activeNavButton = document.querySelector(
        `.nav-button[data-page="${pageName}"]`
      );

      if (activeNavButton) {
        activeNavButton.classList.add("active");
      }

    }


    // Highlight the selected certificate subsection
    const activeSubButton = document.querySelector(
      `.nav-sub-button[data-page="${pageName}"]`
    );

    if (activeSubButton) {
      activeSubButton.classList.add("active");
    }

  }


  // =================================
  // MAIN SIDEBAR NAVIGATION
  // =================================

  navButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const pageName = button.dataset.page;

      openPage(pageName);

    });

  });


  // =================================
  // CERTIFICATE SUB-NAVIGATION
  // =================================

  subNavButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

      // Stop the click affecting the parent button
      event.stopPropagation();

      const pageName = button.dataset.page;

      openPage(pageName);

    });

  });


  // =================================
  // DASHBOARD BUTTONS
  // =================================

  dashboardButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const pageName = button.dataset.page;

      openPage(pageName);

    });

  });

});

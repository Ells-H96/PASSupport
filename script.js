document.addEventListener("DOMContentLoaded", () => {

  /* ================================= */
  /* PAGE ELEMENTS */
  /* ================================= */

  const pages = document.querySelectorAll(".page");

  const navButtons = document.querySelectorAll(".nav-button");

  const dashboardButtons = document.querySelectorAll(".dashboard-button");

  const subButtons = document.querySelectorAll(".nav-sub-button");


  /* ================================= */
  /* OPEN PAGE FUNCTION */
  /* ================================= */

  function openPage(pageName) {

    // Hide all pages
    pages.forEach((page) => {
      page.classList.remove("active-page");
    });


    // Find selected page
    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
      selectedPage.classList.add("active-page");
    }


    // Remove active state from main navigation
    navButtons.forEach((button) => {
      button.classList.remove("active");
    });


    // Remove active state from submenu
    subButtons.forEach((button) => {
      button.classList.remove("active");
    });


    // Highlight matching main navigation button
    const activeNavButton = document.querySelector(
      `.nav-button[data-page="${pageName}"]`
    );

    if (activeNavButton) {
      activeNavButton.classList.add("active");
    }


    // Highlight matching submenu button
    const activeSubButton = document.querySelector(
      `.nav-sub-button[data-page="${pageName}"]`
    );

    if (activeSubButton) {
      activeSubButton.classList.add("active");
    }

  }


  /* ================================= */
  /* NORMAL NAVIGATION BUTTONS */
  /* ================================= */

  navButtons.forEach((button) => {

    // Don't treat the certificate toggle as a normal page button
    if (button.classList.contains("certificate-toggle")) {
      return;
    }


    button.addEventListener("click", () => {

      const pageName = button.dataset.page;

      if (pageName) {
        openPage(pageName);
      }

    });

  });


  /* ================================= */
  /* DASHBOARD BUTTONS */
  /* ================================= */

  dashboardButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const pageName = button.dataset.page;

      if (pageName) {
        openPage(pageName);
      }

    });

  });


  /* ================================= */
  /* CERTIFICATE MENU TOGGLE */
  /* ================================= */

  const certificateToggle =
    document.querySelector(".certificate-toggle");


  if (certificateToggle) {

    certificateToggle.addEventListener("click", () => {

      const navGroup =
        certificateToggle.closest(".nav-group");

      navGroup.classList.toggle("open");

    });

  }


  /* ================================= */
  /* CERTIFICATE SUBMENU BUTTONS */
  /* ================================= */

  subButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const pageName = button.dataset.page;

      if (pageName) {

        openPage(pageName);

      }

    });

  });


});
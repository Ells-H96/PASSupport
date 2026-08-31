document.addEventListener("DOMContentLoaded", () => {

  // =================================
  // FIND ELEMENTS
  // =================================

  const navButtons = document.querySelectorAll(".nav-button");

  const subNavButtons = document.querySelectorAll(".nav-sub-button");

  const dashboardButtons =
    document.querySelectorAll(".dashboard-button");

  const pages = document.querySelectorAll(".page");

  const certificateToggle =
    document.querySelector(".certificate-toggle");

  const certificateGroup =
    document.querySelector(".nav-group");


  // =================================
  // OPEN PAGE
  // =================================

  function openPage(pageName) {

    // Hide all pages
    pages.forEach((page) => {
      page.classList.remove("active-page");
    });


    // Show selected page
    const selectedPage =
      document.getElementById(pageName);

    if (selectedPage) {
      selectedPage.classList.add("active-page");
    }


    // Remove active state
    navButtons.forEach((button) => {
      button.classList.remove("active");
    });

    subNavButtons.forEach((button) => {
      button.classList.remove("active");
    });


    // =================================
    // CERTIFICATE PAGES
    // =================================

    if (
      pageName === "certificates" ||
      pageName === "alerts"
    ) {

      if (certificateToggle) {
        certificateToggle.classList.add("active");
      }

      if (certificateGroup) {
        certificateGroup.classList.add("open");
      }

    }


    // =================================
    // NORMAL NAVIGATION
    // =================================

    else {

      const activeButton =
        document.querySelector(
          `.nav-button[data-page="${pageName}"]`
        );

      if (activeButton) {
        activeButton.classList.add("active");
      }

    }


    // =================================
    // ACTIVE CERTIFICATE SUBSECTION
    // =================================

    const activeSubButton =
      document.querySelector(
        `.nav-sub-button[data-page="${pageName}"]`
      );

    if (activeSubButton) {
      activeSubButton.classList.add("active");
    }

  }


  // =================================
  // MAIN NAVIGATION
  // =================================

  navButtons.forEach((button) => {

    button.addEventListener("click", () => {

      // Certificates parent button
      if (
        button.classList.contains("certificate-toggle")
      ) {

        if (certificateGroup) {
          certificateGroup.classList.toggle("open");
        }

        return;
      }


      // Normal navigation
      const pageName = button.dataset.page;

      openPage(pageName);

    });

  });


  // =================================
  // CERTIFICATE SUBMENU
  // =================================

  subNavButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

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


  // =================================
  // CREATE LUCIDE ICONS
  // =================================

  if (typeof lucide !== "undefined") {

    lucide.createIcons();

  }

});

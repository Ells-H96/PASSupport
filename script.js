document.addEventListener("DOMContentLoaded", () => {

  // Find all navigation buttons
  const navButtons = document.querySelectorAll(".nav-button");

  // Find all dashboard buttons
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


    // Remove active style from navigation
    navButtons.forEach((button) => {
      button.classList.remove("active");
    });


    // Highlight the matching navigation button
    const activeNavButton = document.querySelector(
      `.nav-button[data-page="${pageName}"]`
    );

    if (activeNavButton) {
      activeNavButton.classList.add("active");
    }

  }


  // Sidebar navigation clicks
  navButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const pageName = button.dataset.page;

      openPage(pageName);

    });

  });


  // Dashboard card button clicks
  dashboardButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const pageName = button.dataset.page;

      openPage(pageName);

    });

  });

});

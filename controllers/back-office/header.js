document.addEventListener("DOMContentLoaded", function () {
    const toggleIcon = document.querySelector(".navbar-toggler");
    const logoIconSmall = document.querySelector(".logo-icon-small");
    const profileIcon = document.querySelector(".profile-icon");

    toggleIcon.addEventListener("click", function () {
        // Toggle the visibility of logo-icon-small and profile-icon
        logoIconSmall.style.display = (logoIconSmall.style.display === "none") ? "flex" : "none";
        profileIcon.style.display = (profileIcon.style.display === "none") ? "flex" : "none";
    });
});
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
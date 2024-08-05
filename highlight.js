document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const query = params.get("query");

    if (query) {
        const regex = new RegExp(`(${query})`, "gi");
        document.body.innerHTML = document.body.innerHTML.replace(regex, "<span class='highlight'>$1</span>");
    }
});

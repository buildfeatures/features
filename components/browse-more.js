async function loadBrowseMore() {

    const container = document.getElementById("browseMore");

    if (!container) return;

    const response = await fetch("https://buildfeatures.github.io/features/components/browse-more.html");

    container.innerHTML = await response.text();

}

document.addEventListener(
    "DOMContentLoaded",
    loadBrowseMore
);

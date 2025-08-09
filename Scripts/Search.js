// Scripts/Search.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("[ProjectContainer]");
    const template = document.querySelector("[ProjectCard]");
    const searchInput = document.querySelector(".SearchBar");

    let itemsData = [];

    // Fetch data.json and render cards
    fetch("../Scripts/Data.json")
        .then(res => res.json())
        .then(data => {
            itemsData = data;
            renderItems(itemsData);
        })
        .catch(err => console.error("Error loading Data.json:", err));

    function renderItems(items) {
        container.innerHTML = ""; // Clear existing
        items.forEach(item => {
            const clone = template.content.cloneNode(true);

            // Fill in template
            const img = clone.querySelector("[Image]");
            const header = clone.querySelector("[Header]");
            const description = clone.querySelector("[Description]");
            const button = clone.querySelector("[Button]");

            if (img) img.src = item.image || "../Graphics/placeholder.png";
            if (header) header.textContent = item.title || "Untitled";
            if (description) description.textContent = item.description || "";
            if (button && item.link) {
                button.addEventListener("click", () => {
                    window.location.href = item.link;
                });
            }

            container.appendChild(clone);
        });
    }

    // Search filter
    searchInput.addEventListener("input", () => {
        const searchTerm = searchInput.value.toLowerCase();

        // Loop through cards and hide those that don't match
        container.querySelectorAll(".Project").forEach(card => {
            const text = card.innerText.toLowerCase();
            if (!text.includes(searchTerm)) {
                card.classList.add("hide");
            } else {
                card.classList.remove("hide");
            }
        });
    });
});

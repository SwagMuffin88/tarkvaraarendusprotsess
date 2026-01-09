
document.addEventListener("DOMContentLoaded", () => {
    const tocList = document.getElementById("toc-list");
    if (!tocList) return;

    const headings = document.querySelectorAll("h2");

    headings.forEach((heading, index) => {
        // Kui h2-l pole ID-d, genereerime selle
        if (!heading.id) {
            heading.id = "section-" + index;
        }

        const li = document.createElement("li");
        const a = document.createElement("a");

        a.textContent = heading.textContent;
        a.href = "#" + heading.id;

        li.appendChild(a);
        tocList.appendChild(li);
    });
});

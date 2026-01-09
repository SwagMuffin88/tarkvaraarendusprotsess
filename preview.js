const previewBox = document.getElementById("preview-box");
const previewFrame = document.getElementById("preview-frame");

document.querySelectorAll(".preview-link").forEach(link => {
    link.addEventListener("mouseenter", () => {
        previewFrame.src = link.dataset.preview;
        previewBox.style.display = "block";
    });

    link.addEventListener("mousemove", e => {
        previewBox.style.left = e.pageX + 20 + "px";
        previewBox.style.top = e.pageY + 20 + "px";
    });

    link.addEventListener("mouseleave", () => {
        previewBox.style.display = "none";
        previewFrame.src = "";
    });
});

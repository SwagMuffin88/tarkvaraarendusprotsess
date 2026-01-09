
document.addEventListener("DOMContentLoaded", () => {
    const previewBox = document.getElementById("preview-box");
    const previewFrame = document.getElementById("preview-frame");

    if (!previewBox || !previewFrame) return;

    document.querySelectorAll(".preview-link").forEach(link => {
        link.addEventListener("mouseenter", () => {
            previewFrame.src = link.dataset.preview;
            previewBox.style.display = "block";
        });

        link.addEventListener("mousemove", e => {
            console.log("mousemove", e);

            const offset = 20;

            const boxWidth = previewBox.offsetWidth;
            const boxHeight = previewBox.offsetHeight;

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            let left = e.clientX + offset;
            let top = e.clientY + offset;

            if (left + boxWidth > viewportWidth) {
                left = e.clientX - boxWidth - offset;
            }

            if (top + boxHeight > viewportHeight) {
                top = e.clientY - boxHeight - offset;
            }

            previewBox.style.left = left + "px";
            previewBox.style.top = top + "px";
        });


        link.addEventListener("mouseleave", () => {
            previewBox.style.display = "none";
            previewFrame.src = "";
        });
    });
});

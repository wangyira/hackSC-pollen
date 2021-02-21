function imageGallery() {
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".preview img");

    console.log(highlight)
    console.log(previews)

    previews.forEach(preview => { 
        preview.addEventListener("click", function() {
            const smallSrc = this.src;
            highlight.src = smallSrc;
            previews.forEach(preview => preview.classList.remove("active"));
            preview.classList.add("active");
        });
    });
}

imageGallery();

function imageGallery() {
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".preview");

    console.log(highlight)
    console.log(previews)

    previews.forEach(preview => { 
        preview.addEventListener("click", function() {
            console.log(preview);
        });
    });
}

imageGallery();
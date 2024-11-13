// Function to open the modal and display the clicked image
function openModal(imageSrc, captionText) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    // Set the modal image src to the provided image source and update the caption
    modalImage.src = imageSrc;
    caption.innerText = captionText;

    // Display the modal
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Function to add artwork to the gallery
function addArtwork() {
    const title = document.getElementById("artTitle").value;
    const fileInput = document.getElementById("artFile");
    const urlInput = document.getElementById("artUrl").value;
    const file = fileInput.files[0];

    let imageUrl;

    
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            imageUrl = event.target.result;
            displayArtwork(imageUrl, title);
        };
        reader.readAsDataURL(file);
    } else if (urlInput) {
        imageUrl = urlInput;
        displayArtwork(imageUrl, title);
    } else {
        alert("Please enter a title and select an image file or enter an image URL.");
        return;
    }

   
    document.getElementById("artTitle").value = "";
    fileInput.value = "";
    document.getElementById("artUrl").value = "";
}


function displayArtwork(imageUrl, title) {
    const gallery = document.querySelector(".gallery");
    const artworkDiv = document.createElement("div");
    artworkDiv.classList.add("artwork");
    artworkDiv.onclick = () => openModal(imageUrl, title);

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = title;

    const caption = document.createElement("p");
    caption.innerText = title;

    artworkDiv.appendChild(img);
    artworkDiv.appendChild(caption);
    gallery.appendChild(artworkDiv);
}


const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

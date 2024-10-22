function addImage(imageUrl) {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.style.width = "250px";
    image.style.height = "auto";
    document.body.appendChild(image);
}
  
    addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/250px-Flag_of_Finland.svg.png");
    addImage("https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/250px-Flag_of_Sweden.svg.png");
    addImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/250px-Flag_of_Norway.svg.png");    
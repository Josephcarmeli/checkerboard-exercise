const container = document.createElement('div');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "800px";
container.style.height = "800px";

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
    const tile = document.createElement('div');
    tile.style.width = "12.5%";
    tile.style.paddingBottom = "12.5%";
    tile.style.float = "left";
    container.appendChild(tile);

    function changeColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    tile.style.background = `linear-gradient(to right, rgb(${red}, ${green}, ${blue}), white)`;
    }
    setInterval(changeColor, 2000);
}
  
}

document.body.appendChild(container);


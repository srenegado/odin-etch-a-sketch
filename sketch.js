function createSketchpad() {
  const sketchpad = document.querySelector(".sketchpad");
  const numOfSquaresPerSide = 16;
  const numOfSquares = Math.pow(numOfSquaresPerSide, 2);

  for (let i = 0; i < numOfSquares; i++) {
    const square = document.createElement("div");
    
    square.classList.add("blank-square");
    square.addEventListener("mouseenter", (e) => {
      e.target.classList.add("coloured-square");
      e.target.classList.remove("blank-square");
    })
    
    sketchpad.appendChild(square);
  }
}

createSketchpad();
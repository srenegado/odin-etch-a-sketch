function createSketchpadSquare() {
  const sketchpad = document.querySelector(".sketchpad");
  const square = document.createElement("div");
  
  square.classList.add("blank-square");
  square.addEventListener("mouseenter", (e) => {
    e.target.classList.add("coloured-square");
    e.target.classList.remove("blank-square");
  })
  
  sketchpad.appendChild(square);
}

createSketchpadSquare();
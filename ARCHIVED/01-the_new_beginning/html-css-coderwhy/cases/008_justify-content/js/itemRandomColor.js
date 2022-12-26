function getRandomColor() {
  return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

const itemEls = document.querySelectorAll(".item");

for (const item of itemEls) {
  item.style.backgroundColor = getRandomColor();
}

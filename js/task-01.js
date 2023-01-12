const elements = document.querySelectorAll(".item");
console.log('Number of categories:', elements.length);
const elementsAll = elements.forEach((category) => {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.querySelectorAll('li').length);
});
document.getElementById('shuffleButton').addEventListener('click', function() {
    let container = document.querySelector('.container');
    let elements = Array.from(container.children);
    elements.forEach(function(element) {
        container.removeChild(element);
    });
    shuffle(elements);
    elements.forEach(function(element) {
        container.appendChild(element);
    });
});

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

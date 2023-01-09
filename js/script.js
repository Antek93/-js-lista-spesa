console.log('Hi, I am java and I am working properly');

const listItem = [
    'Uova',
    'Latte',
    'Burro',
    'Pane',
    'Panna',
    'Frutta'
];

let j = 0;
let listarella = document.getElementById('lista')

while (j < listItem.length) {

    console.log('Elemento della spesa n°:', j, listItem[j])

    const newLi = document.createElement('li');
    newLi.innerHTML = listItem[j];
    listarella.append(newLi);

    j++;
}
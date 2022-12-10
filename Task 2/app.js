//Task 1
let count = 0;
let tmp = prompt("Столиця України?");
console.log(tmp);
if (tmp == "Київ") {
    count = count + 1;
}
tmp = prompt("Столиця Великобританії?");
console.log(tmp);
if (tmp == "Лондон") {
    count = count + 1;
}
tmp = prompt("Хто заснував Львів?");
console.log(tmp);
if (tmp == "Данилом") {
    count = count + 1;
}
tmp = prompt("Мова програмування яким написаний цей код?");
console.log(tmp);
if (tmp == "JavaScript") {
    count = count + 1;
}
if (count <= 2) {
    console.log("Ви відповіли на", count, "запитань з 4 можливих");
    alert("Так собі, можна і краще");
} else if ((count > 3, count <= 4)) {
    console.log("Ви відповіли на", count, "запитань з 4 можливих");
    alert("Не ідеал однак файно :)");
} else if (count == 5) {
    console.log("Ви відповіли на", count, "запитань з 4 можливих");
    alert("Шидевр");
}
//Task 2

let number = parseInt(prompt("Напишіть номер"));

console.log(number, number === 12);

if (number >= 1 && number <= 2) {
    alert('Зима');
} else if (number >= 3 && number <= 5) {
    alert('Весна');

} else if (number >= 6 && number <= 8) {
    alert('Літо');
}
else if (number >= 9 && number <= 11) {
    alert('Осінь');
} else if (number === 12) {
    alert('Зима');
}
else {
    alert("Неможливо");
}
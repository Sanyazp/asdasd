// var a = +process.argv[2];

var a = Math.random();
var y = 0;
var z = 0;
var x = 0;
for (var i = 0; i < 100; i++) {
    a = Math.random();
    if (a > 0.3 && a < 0.7) {
        z++;
    } else {
        y++;

    }
    if (a > 0.3 && a < 0.7) {
        continue;
    }
    console.log(a);
}
var max = Math.max(a);
console.log("Всего правильных значений - " + y);
console.log("Всего неправильных значений - " + z);
console.log("Наибольшее сгенерированное число - " + max);

// var i = 0;
// while (Math.random() > 0.5) {
//    i++;
//    console.log("Okey");
//    if (i > 5) {
//        break;
//    }
//}
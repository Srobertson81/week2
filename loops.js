let i = 0;

while (i <= 100) {
    i++;
    if (!(i % 2)) {
        console.log(i);
    }  
}
console.log("end");

let z = 103

while (z >= 3) {
    z-=3;
    console.log(z);
}
console.log("end");

for (var a = 1; a <= 100; a+=2) {
    console.log(a);       
}
console.log("end");

for (var g = 0; g <= 100; g++) {
    if (g % 3 == 0) {
        console.log("Hello");
    }
    if (g % 5 == 0) {
        console.log("World");
    }
    if (g % 3 == 0 && g % 5 == 0) {    
        console.log("HelloWorld");
    }
}
console.log("end");
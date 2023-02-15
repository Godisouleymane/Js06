module.exports = function inverseNumber(nombre) {
    if(nombre == 0) {
        console.log("0 n'a pas d'inverse");
    } else {
        console.log(1 / nombre);
    }
}
const inverse = module.exports;
inverse(4);

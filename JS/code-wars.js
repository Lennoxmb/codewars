function lovefunc(flower1, flower2){
    return flower1 % 2 === 0 && flower2 % 2 === 1 || flower1 % 2 === 1 && flower2 % 2 === 0;
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (mpg * fuelLeft) >= distanceToPump;
};

function numberSum(num) {
    let total = 0;
    for(let i = 1; i <= num; i++){
        total += i;
    }
    return total;
}

function simpleMultiplication(number) {
    if (number % 2 === 0){
        return number * 8
    } else {
        return number * 9
    }
}

function century(year) {
    return Math.ceil(year/100);
}

function longest(s1, s2) {
    let result = s1.replace(/(.)\1+/);
    let results = s2.replace(/(.)\1+/);
    return result
    return results
}

function isTriangle(a,b,c){
    return a > 1 && b > 1 && c > 1;
}

function litres(time) {
    let drink = time * .5;
    if(time >= 1){
        return Math.floor(drink);
    } else {
        return 0;
    }
}


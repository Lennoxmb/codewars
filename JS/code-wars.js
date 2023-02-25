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
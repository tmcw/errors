function coffeeTime() {

    function pourCoffee(cup) {
        cup.full = true;
    }

    var myCoffee = { name: 'Tom' };
    pourCoffee(myCoffee);

    if (myCoffee.full === true) {
        console.log('ahh!');
    }

}

coffeeTime();

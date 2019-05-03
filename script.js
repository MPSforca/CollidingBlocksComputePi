var counter = document.querySelector(".counter"),
    count = 0,
    bigMass = 1,
    smallMass = 1,
    bigSpeed = -1,
    smallSpeed = 0,
    bigSquare = document.querySelector(".big-square"),
    smallSquare = document.querySelector(".small-square"),
    bigPosition = 300,
    smallPosition = 100;

increaseCount = () => {
    count++;
    updateCount();
}

wallColision = () => {
    smallSpeed *= -1;
    increaseCount();
}

colision = () => {
    if (bigSpeed != smallSpeed) {
        let initialBigSpeed = bigSpeed;

        bigSpeed = (bigSpeed * (bigMass - smallMass) + 2 * smallMass * smallSpeed) / (bigMass + smallMass);
        smallSpeed = (smallSpeed * (smallMass - bigMass) + 2 * initialBigSpeed * bigMass) / (bigMass + smallMass);

        increaseCount();
    }
}

calculate = () => {
    if (bigPosition <= smallPosition + smallSquare.clientWidth)
        colision();

    bigPosition += bigSpeed;
    smallPosition += smallSpeed;

    if (smallPosition <= 0) {
        wallColision();
    }
    
}

loop = () => {
    calculate();
    translate();
    window.requestAnimationFrame(loop);
}

translate = () => {
    smallSquare.style.transform = 'translateX(' + smallPosition + 'px)';
    bigSquare.style.transform = 'translateX(' + bigPosition + 'px)';
}

updateCount = () => {
    counter.innerHTML = "Count: " + count;
}

updateCount();
loop();
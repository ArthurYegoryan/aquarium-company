const randomCoordinateGenerator = (minNumber, maxNumber) => {
    const floatRandom = Math.random();
    const difference = maxNumber - minNumber;
    const randomNumber = Math.round(difference * floatRandom);
    const randomWithinRange = randomNumber + minNumber;

    return randomWithinRange;
}

export default randomCoordinateGenerator;
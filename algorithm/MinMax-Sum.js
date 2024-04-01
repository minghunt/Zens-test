function miniMaxSum(arr) {
    // Sort the array to make it easier to calculate min and max sums
    arr.sort((a, b) => a - b);

    let minSum = 0,
        maxSum = 0;

    arr.map((item, index) => {
        if (index !== 0) maxSum += item;
        if (index !== 4) minSum += item;
    });
    console.log(minSum, maxSum);
}

// Example usage:

const inputTest = [1, 2, 3, 4, 5];

miniMaxSum(inputTest);

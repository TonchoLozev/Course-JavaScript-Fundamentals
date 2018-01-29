function bill(arr) {
    let product = arr.filter((str, index) => index % 2 === 0);
    let sum = arr.filter((str, index) => index % 2 !== 0).map(num => Number(num)).reduce((a, b) => a + b);
    console.log(`You purchased ${product.join(', ')} for a total sum of ${sum}`);

}

bill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);
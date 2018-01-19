function sumAndVat(arr) {

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let vat = (sum * 20) / 100;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${vat + sum}`)
}

sumAndVat([1.20, 2.60, 3.50]);
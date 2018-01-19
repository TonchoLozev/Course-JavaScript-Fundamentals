function mathMultiplicationTable(n) {

    console.log('<table border="1">');


    for (let col = 0; col <= n; col++) {

        let output1 = '';
        if (col === 0) {
            output1 += '<tr><th>x</th>';
        } else {
            output1 += `<tr><th>${col}</th>`;
        }

        if (col <= 1) {
            if (col === 0) {
                for (let row = 1; row <= n; row++) {
                    output1 += `<th>${row}</th>`;
                }
            } else {
                for (let row = 1; row <= n; row++) {
                    output1 += `<td>${row}</td>`;
                }
            }
        } else {
            for (let row = 1; row <= n; row++) {
                output1 += `<td>${row * col}</td>`;
            }
        }
        console.log(output1 + '</tr>');
    }
    console.log('</table>');
}

mathMultiplicationTable(5);
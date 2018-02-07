function parseJsonToHtml(arr) {
    let str = '<table>\r\n';
    for (let i = 0; i < arr.length; i++) {
        str+='  <tr>\r\n';

        let currentEmployee = JSON.parse(arr[i]);

        for(let keys in currentEmployee){
            str += `    <td>${currentEmployee[keys]}</td>\r\n`;
        }

        str+='  <tr>\r\n';
    }
    str += '</table>';
    console.log(str);
}

parseJsonToHtml(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);
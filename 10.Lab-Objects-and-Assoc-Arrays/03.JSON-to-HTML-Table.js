function objectToHтml(score) {
    let arr = JSON.parse(score);

    let str = '';
    str += '<table>\r\n   ';
    str += '<tr>';
    let value = arr[0];
    for (let i in value) {
        if (value.hasOwnProperty(i)) {
            str += `<th>${i}</th>`

        }
    }
    str += '</tr>\r\n';


    for (obj of arr) {
        str+= `   `;
        str += '<tr>';
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {

                str += `<td>${escaping(String(obj[i]))}</td>`
            }
        }
        str += '</tr>\r\n';
    }

    str += '</table>';
    console.log(str);

    function escaping(text) {

        return text.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

objectToHтml('[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]');
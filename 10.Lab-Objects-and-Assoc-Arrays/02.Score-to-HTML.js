function objectToHтml(score) {
    let arr = JSON.parse(score);

    let str = '';
    str += '<table>\r\n';

    let value = arr[0];
    let result = [];
    for (let i in value) {
        if (value.hasOwnProperty(i)) {
            result.push(i);
        }
    }

    str += `    <tr><th>${result[0]}</th><th>${result[1]}</th></tr>\r\n`;

    for (obj of arr) {
        result = [];
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                result.push(obj[i]);
            }
        }
        str+=`    <tr><td>${escaping(String(result[0]))}</td><td>${escaping(String(result[1]))}</td></tr>\r\n`
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

objectToHтml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');
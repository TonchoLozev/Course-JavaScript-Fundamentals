function splitting(text) {
    let regex = new RegExp(/[\s\(\)\,\;\.]+/);
    console.log(text.split(regex).join('\r\n'));
}
splitting('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');
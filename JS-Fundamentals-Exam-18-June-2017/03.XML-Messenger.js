function msgToHtml(text) {

    let regex = /^<message ([a-z]+="[A-Za-z0-9 \.]+" ?)*>(.+)<\/message>$/;
    if (regex.test(text)) {
        let match = regex.exec(text);
        let matchedText = match[0];
        let atributesMatch = /[a-z]+="[A-Za-z0-9 \.]+"/g;
        let atributesExec = atributesMatch.exec(matchedText);

        let to = '';
        let from = '';
        while (atributesExec) {

            let currentAtributeTokens = atributesExec[0].split('=');
            if (currentAtributeTokens[0] === 'to') {
                to = atributesExec[0] + '';

            } else if (currentAtributeTokens[0] === 'from') {
                from = atributesExec[0] + '';
            }
            atributesExec = atributesMatch.exec(matchedText);
        }
        if (to === '' || from === '') {
            console.log('Missing attributes');

        } else {
            let message = match[2];
            let finalMessage = '    <p>';
            for (let i = 0; i < message.length; i++) {
                let ch = message[i];
                if (ch === '\n') {
                    finalMessage += '</p>,\n    <p>';
                } else {
                    finalMessage += ch;
                }
            }
            finalMessage+='</p>';
            let finalMsgTokens = finalMessage.split(',');
            let fromTokens = from.split('"');
            let toTokens = to.split('"');
            let fromForTheHtml = fromTokens[1];
            let toForTheHtml = toTokens[1];

            let fullHtml = '<article>\n';

            fullHtml+=`  <div>From: <span class="sender">${fromForTheHtml}</span></div>\n`;
            fullHtml+=`  <div>To: <span class="recipient">${toForTheHtml}</span></div>\n`;
            fullHtml+=`  <div>\n`;
            fullHtml+=`${finalMessage}\n`;
            fullHtml+='  </div>\n';
            fullHtml+='</article>';
            console.log(fullHtml);
        }

    } else {
        console.log('Invalid message format')
    }

}

msgToHtml(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`);
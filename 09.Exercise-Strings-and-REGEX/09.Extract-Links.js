function extractEmails(text) {
    let regex = /www\.[A-Za-z0-9-]+\.[a-z]+[a-z.]*/g;
    for (let i = 0; i < text.length; i++) {
        let str = text[i];
        let match = str.match(regex);
        if(match !== null){
            for (let j = 0; j < match.length; j++) {
                console.log(match[j]);
            }
        }
    }
}
extractEmails([ 'Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc ' ]);
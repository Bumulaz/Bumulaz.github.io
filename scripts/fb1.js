const config = {
    limit: 140,
    rules: [
        { divisor: 3, word: "EEK!" },
        { divisor: 5, word: "SCREAM!" }
    ],
    defaultWord: "boo!"
};

function generateList() {
    let output = "";
    for (let i = 1; i <= config.limit; i++) {
        let lineContent = "";

        
        config.rules.forEach(rule => {
            if (i % rule.divisor === 0) {
                lineContent += rule.word + " ";
            }
        });

        
        if (lineContent === "") {
            lineContent = config.defaultWord;
        }

        output += `<li><strong>${i}.</strong> ${lineContent.trim()}</li>`;
    }
    return output;
}
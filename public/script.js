document.getElementById('theform').addEventListener('submit', async function (event) {
    event.preventDefault();
    const url = document.getElementById('url').value;
    const uri = document.getElementById('uri').value;
    uri
    try {
        const response = await fetch('/api/scrape', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url, uri })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        document.getElementById('result').innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('result').innerText = `Error: ${error.message}`;
    }
});
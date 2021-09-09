async function fetchProducts(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody; 
}

const request = fetchProducts("https://renekapi.origamid.dev/wp-json/api/produto");

request.then(response => {
    console.log(response);
})
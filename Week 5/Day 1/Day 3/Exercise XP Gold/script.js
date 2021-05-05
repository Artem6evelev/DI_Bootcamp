const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4'
  ]
  

// Use Promise.all to fetch all the characters from the array above with only one request.
Promise.all(urls.map((request) => {
    return fetch(request).then((response) => {
        return response.json();
     }).then((data) => {
        return data;
    });
}))

.then((values) => {console.log('values', values)})
.catch(console.error.bind(console));

// AJAX And API
let next = 0

function fetchData(){
    let search = document.getElementById('search').value;
    let limit = document.getElementById('limit').value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${search}&limit=${limit}&offset=${next}`);
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function() {
        createImages(xhr.response.data);
    }

    xhr.onerror = function() {
        alert("wait server is down")
    }
    next = next + Number(limit)

}

function createImages(arr) {
    let root = document.getElementById('root');
    root.innerHTML = "";
    arr.forEach((item, i) => {
        let img = document.createElement('img');
        img.setAttribute('src', item.images.fixed_height_small.url)
        root.appendChild(img)
    });
    console.log(root);
    console.log(arr);
}

function nextImg() {
    fetchData()   
}

function deleteAll() {
    let root = document.getElementById('root');
    root.innerHTML = "";
}


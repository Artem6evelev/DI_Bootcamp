const searchBtn = document.getElementById("searchBtn");
const clearButton = document.getElementById("clear");
const root = document.getElementById("root");
const search = document.getElementById("searchBar");


searchBtn.addEventListener("click",function(event) {  //Метод event.preventDefault позволяет отменить действия браузера по умолчанию. Например, сделать так, чтобы при клике по ссылке перехода на другую страницу не было или по нажатию на кнопку форма не отправлялась на сервер.
  // event.preventDefault()
  let inputValue = search.value;
  console.log(inputValue);
  if(inputValue != undefined && inputValue != "") {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=${inputValue}&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

    xhr.responseType = 'json'

    xhr.send();

    xhr.onload = function() {
      if (xhr.status != 200) { // analize http status
        console.log(`Error ${xhr.status}: ${xhr.statusText}`);
          } else { // show the result
            // console.log(xhr.response);
            let objectJSON = xhr.response;
            console.log(objectJSON);
            for (i = 0; i < objectJSON.data.length; i++){
                let div = document.getElementById("div1");
                let newImg = document.createElement("img");
                newImg.src = objectJSON.data[i].images.fixed_height.url;
                div.appendChild(newImg) 
    
            }
      }
    };
  }
})


const clearAll = () => {
  div1.innerHTML = "";
};
clearButton.addEventListener("click", clearAll);

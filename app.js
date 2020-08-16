const baseUrl = "https://api.lyrics.ovh/suggest/";

const searchButton = document.querySelector('.search-btn');
const searchBox = document.querySelector('.song-name');
const resultArea = document.querySelector('.search-result');

searchButton
.addEventListener('click', () => {
    searchKey = searchBox.value;
    if(searchKey.length) {
        const url = baseUrl + searchKey;
        fetchAndShowDOM(url);
    }
});

function fetchAndShowDOM (url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        showDOM(data.data);
    });
}

function showDOM (data) {
    //console.log(data);
    resultArea.innerHTML = "";
    let innerHTML = "";
    for(let i = 0; i < 10; ++i) {
        //console.log(data[i]);
        innerHTML += createChild(data[i]);
    }
    //console.log(innerHTML);
    resultArea.innerHTML = innerHTML;
}

function createChild (data) {
    let str = `<div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 class="lyrics-name">${data.title}</h3>
                <p class="author lead">Album by <span>${data.artist.name}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button class="btn btn-success">Get Lyrics</button>
            </div>
        </div>`;

    return str;
}
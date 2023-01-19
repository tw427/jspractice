const img = document.querySelector('img')
const btn = document.getElementById('img-btn')
const search = document.querySelector('input[type="text"]');

btn.addEventListener('click', () => {
    if (search.value == '') {
        return;
    } else {
        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=9Ax4N9eoukEOtBNJ4J3ONOyaTfzvA7aX&s=${search.value}`, {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                img.src = response.data.images.original.url;
            })
            .catch(function(error) {
                console.log(error);
                alert('Was not able to find a gif for that specific keyword');
            });
    }
});

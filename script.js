const img = document.querySelector('img')
const btn = document.getElementById('img-btn')
const search = document.querySelector('input[type="text"]');

btn.addEventListener('click', () => {
    if (search.value == '') {
        return;
    } else {
        async function getCats() {
        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=9Ax4N9eoukEOtBNJ4J3ONOyaTfzvA7aX&s=${search.value}`, {mode: 'cors'})
            const catData = await response.json();
            img.src = catData.data.images.original.url;
        } catch(error) {
            console.log(error);
            alert('Was not able to find a gif for that specific keyword');
        };
        }
    getCats();
    }
});

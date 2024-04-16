//Unsplash API
const count = 10;
const apiKey = 'Ufdfg5_BPjTUmhQu4RSFpUMZe1EbttVkD4xmKQL4udU';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        //catch error here
    }
}

// On load
getPhotos();


export const getGifs = async(category) => { //Usamos Async y await para hacer una peticion asincrona
    const api = `API_KEY` //PONER SU API KEY ACA
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${api}`; //Esa es la url para hacer las peticiones GET a giphy - encodeURI nos sirve para quitar los espacios con %20 etc, para sea una URL Valida
    const resp = await fetch(url); //Usamos el fetch para consumir los datos
    const {data} = await resp.json(); // Los datos los pasamos a un formato JSON
    const gifs = data.map( gifImg => { // Mandé la data al console.log para ver los datos y de ahi fui sacando las propiedades que manda la api, además recorremos el arreglo con map
        return{ //Retornamos un objeto con las propiedades
            id: gifImg.id,
            title: gifImg.title,
            images: gifImg.images?.downsized_medium.url
        }
    })

    return gifs


}
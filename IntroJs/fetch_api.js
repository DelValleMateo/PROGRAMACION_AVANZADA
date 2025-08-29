const API_KEY = 'JkNdCjEcsTfE8H9vxiEuWfiIVKGdTlZg'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

peticion.then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original
        console.log(url);
        const img = document.createElement("img")
        img.src = url
        document.body.append(img)

    })
    .catch(console.warn)

// esto se conoce como promesas en cadena


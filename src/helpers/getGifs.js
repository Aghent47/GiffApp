export const getGifs = async(category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=fzIAGwFK3oQbgSLwGP998Jh3OFZT2xPT&q=${category}&limit=10`;
    const result = await fetch(url);
    const { data } =  await result.json();
    
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    
    /* console.log(gifs); */
    return(gifs)
  }
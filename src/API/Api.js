 export const getRestraunts = async() =>{
    // new
    const url = 'https://foodiefetch.p.rapidapi.com/swiggy?query=grandamas%20cafe%20pune';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '15c2fc976fmsh84587a2395777c9p1df682jsnd14c8144e079',
        'X-RapidAPI-Host': 'foodiefetch.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      return  data; 
    } catch (error) {
      console.log(error);
    }
  }

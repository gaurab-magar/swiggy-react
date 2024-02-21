 export const getRestraunts = async() =>{
    // new
    const url = 'https://restaurants222.p.rapidapi.com/currencies';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '15c2fc976fmsh84587a2395777c9p1df682jsnd14c8144e079',
        'X-RapidAPI-Host': 'restaurants222.p.rapidapi.com'
      }
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data.results);
      return  data.results; 
    } catch (error) {
      console.log(error);
    }
  }

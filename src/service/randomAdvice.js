const URI = "https://api.adviceslip.com/advice";

export const fetchData = async () => {
  try {
    const response = await fetch(URI,{
      cache: 'no-cache',
    })
    if (response.ok) {
      const data = await response.json();
      return data.slip;
    }
    throw new Error('Get data error')
  } catch (error) {
    console.log(error)
  }
};



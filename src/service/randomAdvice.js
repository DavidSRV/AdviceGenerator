const URI = "https://api.adviceslip.com/advice";

export const getData = async () => {
  try {
    const response = await fetch(URI);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Get data error')
  } catch (error) {
    console.log(error)
  }
};



const getData = async (url:string, search?: string) => {
  if (search) {
    url += '?search=' + encodeURIComponent(search)
  }

  const response = await fetch(url);
  return await response.json()
};

export const getFilms = async (search?: string) => {
  const url = 'https://swapi.dev/api/films'
  return await getData(url, search);
};

export const getPeople = async (search?: string) =>{
  const url = 'https://swapi.dev/api/people/'
  return await getData(url, search);
}

export const changePage = async (value: string) => {
  return await getData(value);
};

export const getDetailsFilm = async (starshipId: number) => {
  return await getData('https://swapi.dev/api/films/' + starshipId)
};
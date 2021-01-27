const getData = async (url:string) => {
  const response = await fetch(url);
  return await response.json()
};

export const getFilms = async (search?: string) => {
  let url = 'https://swapi.dev/api/films/';

  if (search) {
    url += '?search=' + encodeURIComponent(search)
  }

  return await getData(url);
};

export const changePage = async (value: string) => {
  return await getData(value);
};

export const getDetailsFilm = async (starshipId: number) => {
  return await getData('https://swapi.dev/api/films/' + starshipId)
};

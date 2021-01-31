const getData = async (url: string, search?: string) => {
  if (search) {
    url += '?search=' + encodeURIComponent(search);
  }

  const response = await fetch(url);
  return await response.json();
};

export const getDetails = async (url: string, id: string) => {
  return await getData(`${url}${id}/`)
}

export const getListData = async (url:string, search?:string) =>{
  return await getData(`${url}`, search)
}

export const getDataForDetailsItem = async (strings: string[]) => {
  return await Promise.all(strings.map(async (string) => await getData(string)));
};

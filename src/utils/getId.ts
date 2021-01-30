export const getId = (item: any) => {
  const segments = item.url.split('/');
  return Number(segments[segments.length - 2])
}

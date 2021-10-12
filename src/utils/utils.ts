import { IFilter } from 'src/interfaces/IFilter';

enum FiltersMap {
  spokenLanguage = 'spoken_language_code',
  day = 'since',
  language = 'prog_lang',
}

const convertObjectToGetProps = (filters: IFilter) => {
  const fields = [];
  for (const item in filters) {
    const filterName = item as keyof IFilter;
    if (filters[filterName]) {
      fields.push(`${FiltersMap[filterName]}=${filters[filterName]}`);
    }
  }
  return `?${fields.join('&')}`;
};

export const MapUrlWithFilters = (link: string, filters: IFilter) => {
  const { language, ...restFilters } = filters;
  let newLink = language ? `${link}/${language}` : link;
  return `${newLink}${convertObjectToGetProps(restFilters)}`;
};

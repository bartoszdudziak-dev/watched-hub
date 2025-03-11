import { prismicClient } from './prismicClient';
import * as prismic from '@prismicio/client';

export const getCategoryByUID = async (uid: string) => {
  try {
    const category = await prismicClient.getByUID('category', uid);
    return category.id;
  } catch (error) {
    console.error('Błąd pobierania kategorii:', error);
  }
};

export const getPosts = async () => {
  try {
    const category = (await getCategoryByUID('tv-series')) || '';
    const response = await prismicClient.getAllByType('post', {
      filters: [prismic.filter.at('my.post.category', category)],
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

import { prismicClient } from './prismicClient';
import * as prismic from '@prismicio/client';

export const getCategoryByUID = async (uid: string) => {
  try {
    if (uid === 'all' || uid === '') return undefined;

    const category = await prismicClient.getByUID('category', uid);
    return category.id;
  } catch (error) {
    console.error(error);
  }
};

export const getPosts = async (category: string) => {
  try {
    const categoryId = await getCategoryByUID(category);

    const response = await prismicClient.getAllByType('post', {
      filters: createFilters(categoryId),
      fetchLinks: ['category.name', 'category.uid'],
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

type Filters = string | string[] | undefined;

function createFilters(category?: string): Filters {
  const filters = [];

  if (category) {
    filters.push(prismic.filter.at('my.post.category', category));
  }

  return filters;
}

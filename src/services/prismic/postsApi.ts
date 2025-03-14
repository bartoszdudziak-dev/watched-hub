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

export const getPosts = async ({
  category = 'all',
  title,
  rate,
  order,
  sort,
}: {
  category?: string;
  title: string;
  rate: string[];
  order: 'asc' | 'desc';
  sort: string;
}) => {
  try {
    const categoryId = await getCategoryByUID(category);

    const response = await prismicClient.getAllByType('post', {
      filters: createFilters({ categoryId, title, rate }),
      orderings: createOrderings({ sort, order }),
      fetchLinks: ['category.name', 'category.uid'],
    });

    console.log(sort, order);

    return response;
  } catch (error) {
    console.error(error);
  }
};

type Filters = string | string[] | undefined;

function createFilters({
  categoryId,
  title,
  rate,
}: {
  categoryId?: string;
  title: string;
  rate: string[];
}): Filters {
  const filters = [];

  if (categoryId) {
    filters.push(prismic.filter.at('my.post.category', categoryId));
  }

  if (title) {
    filters.push(prismic.filter.fulltext('my.post.title', title));
  }

  if (rate) {
    filters.push(prismic.filter.any('my.post.rate', rate));
  }

  return filters;
}

function createOrderings({ sort, order }: { sort: string; order: 'asc' | 'desc' }) {
  return { field: `my.post.${sort}`, direction: order };
}

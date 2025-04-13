import { prismicClient } from './prismicClient';

export const getPost = async (id: string) => {
  try {
    const response = await prismicClient.getByUID('post', id);
    return response;
  } catch (error) {
    console.error(error);
  }
};

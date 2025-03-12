import * as prismic from '@prismicio/client';
import { AllDocumentTypes } from '@/types/types.generated';

export const repositoryName = 'watched-hub';
export const prismicClient = prismic.createClient<AllDocumentTypes>(repositoryName);

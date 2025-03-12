import type { Config } from 'prismic-ts-codegen';
import dotenv from 'dotenv';
import { repositoryName } from './src/services/prismic/prismicClient';

dotenv.config();

const config: Config = {
  output: './src/types/types.generated.ts',
  repositoryName: repositoryName,
  models: { files: ['./src/services/prismic/*.json'], fetchFromRepository: true },
  customTypesAPIToken: process.env.VITE_CUSTOM_TYPES_KEY,
};

export default config;

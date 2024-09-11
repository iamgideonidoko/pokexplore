import { config as envConfig } from 'dotenv';
import type { CodegenConfig } from '@graphql-codegen/cli';
envConfig();

const config: CodegenConfig = {
  schema: process.env.VITE_BASE_URL,
  generates: {
    './src/interfaces/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {},
    },
  },
};

export default config;

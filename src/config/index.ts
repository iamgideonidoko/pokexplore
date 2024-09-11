import type { IAppConfig } from '@/interfaces/config';
import { env } from '@/env';

const NODE_ENV = process.env.NODE_ENV?.toLowerCase() ?? 'production';

const appConfig: IAppConfig = {
  env: {
    isProd: NODE_ENV === 'production',
    isDev: NODE_ENV === 'development',
    isTest: NODE_ENV === 'test',
    get isServer() {
      return typeof window === 'undefined' ? true : false;
    },
    get isClient() {
      return typeof window !== 'undefined' ? true : false;
    },
    ...env,
  },
};

export default appConfig;

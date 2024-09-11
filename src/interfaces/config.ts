import { env } from '@/env';

type Env = typeof env;

interface EnvConfig extends Env {
  isProd: boolean;
  isDev: boolean;
  isTest: boolean;
  isServer: boolean;
  isClient: boolean;
}

export interface IAppConfig {
  env: EnvConfig;
}

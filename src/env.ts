import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  /** Server-side environment variables */
  server: {},
  /**
   * The prefix that client-side variables must have. This is enforced both at a type-level and at runtime.
   */
  clientPrefix: 'VITE_',
  client: {
    VITE_BASE_URL: z.string().min(1),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
  skipValidation: import.meta.env.SKIP_ENV_VALIDATION === 'development',
});

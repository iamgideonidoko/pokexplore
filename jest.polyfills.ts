import { TextDecoder, TextEncoder } from 'node:util';
import 'cross-fetch/polyfill';

Object.defineProperties(globalThis, {
  TextDecoder: { value: TextDecoder },
  TextEncoder: { value: TextEncoder },
});

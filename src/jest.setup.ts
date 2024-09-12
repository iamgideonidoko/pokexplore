// NOTE: Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from './__mocks__/handlers';

const server = setupServer(...handlers);

// Mock api before all tests
beforeAll(() => server.listen());

// Reset after each test
afterEach(() => server.resetHandlers());

// Finally clean up
afterAll(() => server.close());

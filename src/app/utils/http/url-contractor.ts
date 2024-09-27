export const constructUrl = (endpoint: string | string[]): string =>
    Array.isArray(endpoint) ? endpoint.join('/') : endpoint;

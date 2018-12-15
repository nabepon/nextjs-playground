import axios from 'axios';

export const api: any = axios.create({
  baseURL: process.env.API_ENDPOINT || 'http://localhost:3000/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

interface SampleApiResponse {
  sampleApi: {
    foo: string;
    bar: number[];
    params: string;
  };
}

export function sample(): Promise<SampleApiResponse[]> {
  return api.get('/helloApi').then(({ data }) => data);
}

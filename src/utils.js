import {TOKEN} from './tmp.js';

export const API_BASE_URL = "https://api.dmphub-dev.cdlib.org";

export function api_path(endpoint) {
  return new URL(endpoint, API_BASE_URL);
}

export function api_headers(extra_headers) {
  // NOTE: This just creates "common" headers required for the API.
  // The returned headers object can be customized further if needed by the
  // caller.
  let headers = new Headers();
  headers.append('Content-Type', "x-www-form-urlencoded");
  headers.append('accept', "application/json");

  // TODO::FIXME:: I'm hard-coding this token for now. The token authentication
  // mighth change for this app, so for the time being the hard-coded token
  // is just used for quick testing.
  headers.append('Authorization', `Basic ${TOKEN.access_token}`);

  return headers;
}

export function api_options(options) {
  let _options = Object.assign({
    method: 'get',
    mode: 'cors',
    cache: 'no-cache',
  }, options);

  return _options;
}

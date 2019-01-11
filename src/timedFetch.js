/*******************************************
 * © 2019 Charlie Hay
 * ---------------------
 * timed-fetch
 ******************************************/
import { polyfill } from "es6-promise";
import fetch from "isomorphic-fetch";
polyfill();

const timedFetch = async (url, options, timeout) => {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), timeout)
    )
  ]);
};

export default timedFetch;

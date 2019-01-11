import timedFetch from "./timedFetch";
import { getOptions, postOptions } from "./options";

const post = async (url, timeout) => {
  try {
    const request = await timedFetch(url, postOptions(), timeout);
    return await request.json();
  } catch (err) {
    console.error(err);
  }
};

const get = async (url, timeout) => {
  try {
    const request = await timedFetch(url, getOptions(), timeout);
    return await request.json();
  } catch (err) {
    console.error(err);
  }
};

export { get, post };

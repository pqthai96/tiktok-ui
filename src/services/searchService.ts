import * as httpRequest from "../utils/httpRequest";

export const search = async (q: string, type: string = 'less') => {
  try {
    const res = await httpRequest.get("users/search", {
      params: {
        q,
        type
      }
    })

    return res.data;
  } catch (e) {
    console.log("Call API error: " + e);
  }
};


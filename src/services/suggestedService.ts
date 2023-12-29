import * as httpRequest from "../utils/httpRequest";

export const search = async (type: string) => {
  try {

    const res = await httpRequest.get("users/search", {
      params: {
        q: "vo",
        type
      }
    })
    return res.data;
  } catch (e) {
    console.log("Call API error: " + e);
  }
};


import { createRequest } from "../db";

export const createRequestRoute = {
  method: "post",
  path: "/groups/:id/request",
  handler: async (req, res) => {
    // try {
    //   const users = await createMessageRoute();
    //   res.json(users);
    // } catch (e) {
    //   console.error(
    //     `Raised Error ok: ${e.ok}, code: ${e.code} Name: ${e.codeName}`
    //   );
    // }
  },
};

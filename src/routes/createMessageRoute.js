import { createMessage } from "../db/";

export const createMessageRoute = {
  method: "post",
  path: "/groups/:id/messages",
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

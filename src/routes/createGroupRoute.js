import { createGroup } from "../db/";

export const createGroupRoute = {
  method: "post",
  path: "/groups/:id/requests",
  handler: async (req, res) => {
    // try {
    //   const users = await createGroup();
    //   res.json(users);
    // } catch (e) {
    //   console.error(
    //     `Raised Error ok: ${e.ok}, code: ${e.code} Name: ${e.codeName}`
    //   );
    // }
  },
};

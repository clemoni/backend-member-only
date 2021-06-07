import { getJoinGroupRequest } from "../db/";

export const getJoinGroupRequestRoute = {
  method: "get",
  path: "/groups/:id/requests",
  handler: async (req, res) => {
    // try {
    //   const users = await acceptRequest();
    //   res.json(users);
    // } catch (e) {
    //   console.error(
    //     `Raised Error ok: ${e.ok}, code: ${e.code} Name: ${e.codeName}`
    //   );
    // }
  },
};

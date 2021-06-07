import { getUserGroups } from "../db/";

export const getUserGroupsRoute = {
  method: "get",
  path: "/users/:id/groups",
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

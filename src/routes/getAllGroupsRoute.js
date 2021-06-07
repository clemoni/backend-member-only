import { getAllGroups } from "../db/";

export const getAllGroupsRoute = {
  method: "get",
  path: "/groups",
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

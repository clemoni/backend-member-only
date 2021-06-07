import { rejectRequest } from "../db/";

export const rejectRequestRoute = {
  method: "post",
  path: "/groups/:groupId/requests/:requestId/reject",
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

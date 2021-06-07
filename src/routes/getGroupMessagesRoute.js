import { getGroupMessages } from "../db/";

export const getGroupMessagesRoute = {
  method: "get",
  path: "/groups/:id/messages",
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

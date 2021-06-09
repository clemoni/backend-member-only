import * as admin from "firebase-admin";
import { getUserGroups } from "../db/";

export const getUserGroupsRoute = {
  method: "get",
  path: "/users/:id/groups",
  handler: async (req, res) => {
    try {
      const token = req.headers.authtoken;
      const userId = req.params.id;
      const user = await admin.auth().verifyIdToken(token);

      if (user.user_id !== userId) {
        return res.satus(401).json({ message: "not authorised" });
      }

      const userGroups = await getUserGroups(userId);
      res.json(userGroups);
    } catch (e) {
      console.error(
        `Raised Error ok: ${e.ok}, code: ${e.code} Name: ${e.codeName}`
      );
    }
  },
};

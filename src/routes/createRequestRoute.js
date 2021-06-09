import { createJoinRequest } from "../db";
import * as admin from "firebase-admin";

export const createRequestRoute = {
  method: "post",
  path: "/groups/:id/request",
  handler: async (req, res) => {
    try {
      const token = req.headers.authtoken;
      const { id } = req.params;

      const user = await admin.auth().verifyIdToken(token);
      if (!token || !user) {
        res.status(401).json({ message: "must be logged in to submit " });
      }

      await createJoinRequest(id, user.user_id);
      res.json({ message: "request send" });
    } catch (e) {
      console.error(
        `Raised Error ok: ${e.ok}, code: ${e.code} Name: ${e.codeName}`
      );
    }
  },
};

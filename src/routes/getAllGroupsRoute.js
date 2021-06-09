import { getAllGroups } from "../db/";

export const getAllGroupsRoute = {
  method: "get",
  path: "/groups",
  handler: async (req, res) => {
    try {
      const groups = await getAllGroups();
      res.status(200).json(groups);
    } catch (e) {
      console.error(
        `Raised Error ok: ${e.ok}, code: ${e.code} Name: ${e.codeName}`
      );
    }
  },
};

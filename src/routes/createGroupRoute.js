import { createGroup } from "../db/";
import { isUserAuth } from "../middleware";

const createGroupHandler = async (req, res) => {
  try {
    const { user } = res.locals;
    const { name } = req.body;

    const newGroupId = await createGroup(name, user.user_id);

    res.json({ newGroupId });
  } catch (e) {
    console.error(
      `Raised Error ok: ${e.ok}, code: ${e.code} Name: ${e.codeName}`
    );
  }
};

export const createGroupRoute = {
  method: "post",
  path: "/groups",
  handler: [isUserAuth, createGroupHandler],
};

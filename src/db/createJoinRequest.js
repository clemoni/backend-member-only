import { insertOne, runAction } from "./tools";
import { v4 as uuid } from "uuid";

export const createJoinRequest = async (groupId, userId) => {
  return await runAction("requests")(insertOne)({
    id: uuid(),
    userId,
    groupId,
  });
};

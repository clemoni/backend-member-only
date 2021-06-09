import { insertOne, runAction } from "./tools";
import { v4 as uuid } from "uuid";

export const createGroup = async (name, ownerId) => {
  const newGoupId = uuid();
  await runAction("groups")(insertOne)({
    id: newGoupId,
    name,
    ownerId,
    members: [ownerId],
  });
  return newGoupId;
};

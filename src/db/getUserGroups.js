import { runAction } from "./tools";
import { findAll } from "./tools";
import { getUser } from "./getUser";

export const getUserGroups = async (userId) => {
  const groups = await runAction("groups")(findAll)({ members: userId });

  const groupsOwners = await Promise.all(
    groups.map((group) => getUser(group.ownerId))
  );

  return groups.map((group, i) => ({
    ...group,
    owner: groupsOwners[i],
  }));
};

import { runAction } from "./tools";
import { findAll } from "./tools";
import { getUser } from "./getUser";

export const getAllGroups = async () => {
  const groups = await runAction("groups")(findAll)({});

  const groupsOwners = await Promise.all(
    groups.map((group) => getUser(group.ownerId))
  );

  return groups.map((group, i) => ({
    ...group,
    owner: groupsOwners[i],
  }));
};

// getAllGroups()
//   .then((result) => console.log(result))
//   .catch((e) => console.log(e));

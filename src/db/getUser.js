import { runAction } from "./tools";
import { findOne } from "./tools";

export const getUser = async (id) => {
  return await runAction("users")(findOne)({ id });
};

// getUser("kz8dmO6cLBbPGHwFlQ6E75whzEC2")
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e));

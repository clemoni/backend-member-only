import { getFakeUsersRoute } from "./getFakeUsersRoute";
import { acceptRequestRoute } from "./acceptRequestRoute";
import { createGroupRoute } from "./createGroupRoute";
import { createRequestRoute } from "./createRequestRoute";
import { getAllGroupsRoute } from "./getAllGroupsRoute";
import { getGroupMessagesRoute } from "./getGroupMessagesRoute";
import { getGroupRoute } from "./getGroupRoute";
import { getJoinGroupRequestRoute } from "./getJoinGroupRequestRoute";
import { getUserGroupsRoute } from "./getUserGroupsRoute";
import { rejectRequestRoute } from "./rejectRequestRoute";
import { createMessageRoute } from "./createMessageRoute";

export const routes = [
  getFakeUsersRoute,
  acceptRequestRoute,
  createGroupRoute,
  createRequestRoute,
  getAllGroupsRoute,
  getGroupMessagesRoute,
  getGroupRoute,
  getJoinGroupRequestRoute,
  getUserGroupsRoute,
  rejectRequestRoute,
  createMessageRoute,
];

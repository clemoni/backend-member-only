import { runAction } from "./tools";
import { insertMany } from "./tools";

const GROUP_ID_1 = "1234";
const GROUP_ID_2 = "2345";
const GROUP_ID_3 = "3456";

const USER_ID_1 = "0UVRCbwLgtXshH0fbn8ZWJWgfSG3";
const USER_ID_2 = "E22r7h2Q9AerVLL2TchJgcp5xOg2";
const USER_ID_3 = "dE2iLPgEVpdLZtBsXrlQS2yPRsr1";

const groups = [
  {
    id: GROUP_ID_1,
    name: "The Cool People Group",
    ownerId: USER_ID_1,
    members: [USER_ID_1, USER_ID_3],
  },
  {
    id: GROUP_ID_2,
    name: "Programmers Unite",
    ownerId: USER_ID_2,
    members: [USER_ID_2, USER_ID_1],
  },
  {
    id: GROUP_ID_3,
    name: "DIYers Group",
    ownerId: USER_ID_3,
    members: [USER_ID_3, USER_ID_2],
  },
];

const requests = [
  {
    id: "123",
    userId: USER_ID_3,
    groupId: GROUP_ID_2,
  },
  {
    id: "234",
    userId: USER_ID_1,
    groupId: GROUP_ID_3,
  },
  {
    id: "345",
    userId: USER_ID_2,
    groupId: GROUP_ID_1,
  },
];

const messages = [
  {
    userId: USER_ID_1,
    groupId: GROUP_ID_1,
    text: "Hello everyone!",
  },
  {
    userId: USER_ID_3,
    groupId: GROUP_ID_1,
    text: "Hey Victor, welcome to the group!",
  },
  {
    userId: USER_ID_2,
    groupId: GROUP_ID_2,
    text: "Good morning programmers, let's write some code",
  },
  {
    userId: USER_ID_1,
    groupId: GROUP_ID_2,
    text: "Yes indeed, let's.",
  },
  {
    userId: USER_ID_3,
    groupId: GROUP_ID_3,
    text: "I built ten tables yesterday. I think I have an obsession",
  },
  {
    userId: USER_ID_2,
    groupId: GROUP_ID_3,
    text: "Only ten?",
  },
];

const users = [
  {
    id: USER_ID_1,
    email: "cliscoet@gmail.com",
    fullName: "Clement Liscoet",
  },
  {
    id: USER_ID_2,
    email: "cami@gmail.com",
    fullName: "Camila Liscoet",
  },
  {
    id: USER_ID_3,
    email: "milo@gmail.com",
    fullName: "Milo Liscoet",
  },
];

const collections = [
  {
    name: "groups",
    data: groups,
  },
  {
    name: "requests",
    data: requests,
  },
  {
    name: "messages",
    data: messages,
  },
  {
    name: "users",
    data: users,
  },
];

collections.forEach((collection) => {
  const { name, data } = collection;
  runAction(name)(insertMany)(data)
    .then((result) => console.log(result.insertedCount))
    .catch((e) => console.log(e));
});

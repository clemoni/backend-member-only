export const findOne =
  (client) =>
  (db) =>
  (collection) =>
  async (args = {}) => {
    const res = await client.db(db).collection(collection).findOne(args);
    return res;
  };

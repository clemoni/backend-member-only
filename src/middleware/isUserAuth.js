import * as admin from "firebase-admin";

export const isUserAuth = async (req, res, next) => {
  const token = req.headers.authtoken;
  const user = await admin.auth().verifyIdToken(token);
  if (!token || !user) {
    res.status(401).json({ message: "must be logged in to submit " });
  }
  res.locals.user = user;
  next();
};

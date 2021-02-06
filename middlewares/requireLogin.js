module.exports = (req, res, next) => {
  // To prevent unlogged in users from going to surveys page
  if(!req.user){
    return res.status(401).send({ error: "You must log in!!" });
  }
  next();
}
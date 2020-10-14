const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
  // is the token being sent in three different ways
  let token = req.get('Authorization') || req.query.token || req.body.token;
  if (token) {
    // Remove the 'Bearer ' if it was included in the token header
    token = token.replace('Bearer ', '');
    // token valid
    jwt.verify(token, SECRET, function(err, decoded) {
      if (err) {
        next(err);
      } else {
        // It's a valid token, so add user to req
        req.user = decoded.user;    
        next();
      }
    }); 
  } else {
    next();
  }
};
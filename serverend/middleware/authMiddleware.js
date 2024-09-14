// const jwt = require('jsonwebtoken');

// const authenticate = (req, res, next) => {
//   const token = req.header('Authorization')?.split(' ')[1]; 
//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET); 
//     req.user = decoded; 
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// module.exports = authenticate;


// const jwt = require('jsonwebtoken');

// const authenticate = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];  

//   if (!token) {
//     return res.status(401).json({ message: 'Token missing' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid token' });
//     }

//     req.user = user; 
//     next();
//   });
// };

// module.exports = authenticate;

const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token after 'Bearer'
  
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach the user data to the request
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = authenticate;


// middleware/auth.js
const auth = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  const validKey = process.env.API_KEY || '12345'; // Example key for testing

  if (!apiKey || apiKey !== validKey) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }

  next();
};

module.exports = auth;

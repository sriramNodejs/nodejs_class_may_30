// Reusable Zod validation middleware
const validateWithZod = (schema) => {
  return async (req, res, next) => {
    try {
      // Parse targets simultaneously
      const parsed = await schema.parseAsync({
        body: req.body,
        query: req.query,
      });
      
      // Assign coerced/validated values back to req object
      req.body = parsed.body;
      req.query = parsed.query;
      next();
    } catch (error) {
        console.log(error)
      return res.status(400).json({ errors: error.errors });
    }
  };
};

module.exports = {
    validateWithZod
}
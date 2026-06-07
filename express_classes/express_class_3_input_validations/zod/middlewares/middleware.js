// Reusable Zod validation middleware
const { ZodError } = require('zod');

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
      if (error instanceof ZodError) {
        const errors = error.issues.map((issue) => ({
          field: issue.path.join('.'),
          message: issue.message,
        }));

        return res.status(400).json({
          message: 'Validation failed',
          firstError: errors[0],
          errors,
        });
      }

      next(error);
    }
  };
};

module.exports = {
    validateWithZod
}

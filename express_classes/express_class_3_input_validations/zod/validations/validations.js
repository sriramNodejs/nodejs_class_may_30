const { z } = require('zod');


// const validations = {
//     createUser: z.object({
//         query: z.object({
//             role: z.enum(['admin', 'user']).optional(),
//         }),
//         body: z.object({
//             email: z.string().email(),
//             password: z.string().min(6),
//         }),
//     })
// }


const validations = {
  createUser: z.object({
    query: z.object({
      role: z.enum(['admin', 'user'], {
        message: 'Role must be either admin or user',
      }).optional(),
    }),
    body: z.object({
      email: z.string().email({
        message: 'Please enter a valid email address',
      }),
      password: z.string().min(6, {
        message: 'Password must be at least 6 characters long',
      }),
    }),
  }),
};

module.exports = {
    validations
}
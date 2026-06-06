const { z } = require('zod');


const validations = {
    createUser: z.object({
        query: z.object({
            role: z.enum(['admin', 'user']).optional(),
        }),
        body: z.object({
            email: z.string().email(),
            password: z.string().min(6),
        }),
    })
}

module.exports = {
    validations
}
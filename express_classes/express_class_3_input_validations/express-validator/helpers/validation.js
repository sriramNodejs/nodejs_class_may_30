const {body, query, param} = require('express-validator');

const validations = {
    createUser: [
        body('name').notEmpty().withMessage('Name is Required'),
        body('age').notEmpty().withMessage('Age is required'),
        body('gender').optional().isIn(['male', 'female']).withMessage('Gender must be male or female'),
        body('email').isEmail().withMessage('Must be a valid email address')
    ],

    deleteUser:[
        param('id').notEmpty().withMessage('Id is Required')
    ],

    updateUser:[
        query('id').notEmpty().withMessage('Id is Required')
    ]
}

module.exports = {
    validations
}
const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const UsersController = require('../controllers/UsersController');

const usersMiddleware = require('../../middleware/users.middleware');

const usersRoutes = Router();
const usersController = new UsersController();

usersRoutes.get('/', usersController.getAllUsers);

usersRoutes.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required('name is required'),
      email: Joi.string().email().required('email is required'),
      whatsapp: Joi.string().required('whatsapp is required'),
      cep: Joi.string().required('cep is required'),
      password: Joi.string().min(6).required('password is required'),
    },
  }),
  usersMiddleware.verifyIfEmailAlreadyExists,
  usersController.createUsers
);

usersRoutes.put('/', usersController.updateUsers);

usersRoutes.delete('/', usersController.deleteUsers);

module.exports = usersRoutes;

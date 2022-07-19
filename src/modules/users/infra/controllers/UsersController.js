const CreateUsersService = require('../../services/CreateUsersService');

const UsersRepository = require('../../repositories/UsersRepository');

const usersRepository = new UsersRepository();

class UsersController {
  async createUsers(request, response) {
    const { name, email, whatsapp, password, cep } = request.body;

    const createUser = new CreateUserService(usersRepository);

    const user = await createUser.execute({
      name,
      email,
      whatsapp,
      password,
      cep,
    });

    return response.json({ user });
  }

  async getAllUsers(request, response) {
    return response.json({ getAll: true });
  }

  async updateUsers(request, response) {
    return response.json({ update: true });
  }

  async deleteUsers(request, response) {
    return response.json({ delete: true });
  }
}

module.exports = UsersController;

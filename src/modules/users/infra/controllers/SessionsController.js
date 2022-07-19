const UsersRepository = require('../../repositories/UsersRepository');

const SessionService = require('../../services/SessionService');

const usersRepository = new UsersRepository();

class SessionsController {
  async login(request, response) {
    const sessionService = new SessionService(UsersRepository);

    const user = await sessionService.execute(request.body);
    return response.json(user);
  }
}

module.exports = SessionsController;

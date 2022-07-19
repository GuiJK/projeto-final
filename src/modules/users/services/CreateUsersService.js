const { generateHash } = require('../../../shared/utils/encrypt');

class CreateUsersService {
  constructor(UsersRepository) {
    this.UsersRepository = UsersRepository;
  }

  async execute(payload) {
    const { password } = payload;

    Object.assign(payload, {
      password: await generateHash(password),
    });

    const user = await this.UsersRepository.createUser(payload);

    return user;
  }
}

module.exports = CreateUsersService;

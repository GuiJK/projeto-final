const connection = require('../../../shared/database/connections');

class UsersRepository {
  async checkUsersEmail(email) {
    return connection('users').where({ email }).first();
  }

  async createUsers(payload) {
    return connection.users(async trx =>
      trx('users').insert(payload).returning('id')
    );
  }
}

module.exports = UsersRepository;

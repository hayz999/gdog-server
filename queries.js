const database = require('./connection')

module.exports = {
  list() {
    return database('dogs')
      .select()
  },
  read(id) {
    return database('dogs')
      .select()
      .where('id', id)
      .first()
  },
  create(dog) {
    return database('dogs')
      .insert(dog)
      .returning('*')
      .then(record => record[0])
  },
  update(id, dog) {
    return database('dogs')
      .where('id', id)
      .update(dog)
      .returning('*')
      .then(record => record[0])
  },
  delete(id) {
    return database('dogs')
      .where('id', id)
      .del()
      .returning('*')
  }
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {
          id: 1, 
          dogName: '',
          imgURL: '',
          rating: '',
          comment: ''
        }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE dogs_id_seq RESTART WITH 4;');
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {
          id: 1,
          dogName: 'Teddy',
          imgURL: 'https://flic.kr/p/KoeTFm',
          rating: '14',
          comment: 'Found this sweet baby boy having a heckin\' good nap. Sweet dreams little prince.'
        },
        {
          id: 2,
          dogName: 'Klaus',
          imgURL: 'https://flic.kr/p/KoeTqw',
          rating: '12',
          comment: 'Met this sweet baby yoga boy doin\' a heckin\' good stretch'
        },
        {
          id: 3,
          dogName: 'Chloe',
          imgURL: 'https://flic.kr/p/24Luqbs',
          rating: '13',
          comment: 'Beautiful festive girl, got the memo about Aloha Fridays. Heckin\' good job!'
        },
        {
          id: 4,
          dogName: 'Quinn',
          imgURL: 'https://flic.kr/p/24LupFu',
          rating: '14',
          comment: ''
        }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE dogs_id_seq RESTART WITH 4;');
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {
          id: 1,
          dogName: 'Teddy',
          imgURL: 'https://farm1.staticflickr.com/878/28475014238_8191c7717f_b.jpg',
          rating: '14',
          comment: 'Found this sweet baby boy having a heckin\' good nap. Sweet dreams little prince.'
        },
        {
          id: 2,
          dogName: 'Klaus',
          imgURL: 'https://farm1.staticflickr.com/890/28475013378_79229b04b3_b.jpg',
          rating: '12',
          comment: 'Met this sweet baby yoga boy doin\' a heckin\' good stretch'
        },
        {
          id: 3,
          dogName: 'Chloe',
          imgURL: 'https://farm2.staticflickr.com/1732/40541233150_6522fcf2d9_b.jpg',
          rating: '13',
          comment: 'Beautiful festive girl, got the memo about Aloha Fridays. Heckin\' good job!'
        },
        {
          id: 4,
          dogName: 'Quinn',
          imgURL: 'https://farm1.staticflickr.com/882/40541231470_de332e6b78_b.jpg',
          rating: '14',
          comment: 'This little boi has strong ear game. Heckin\' attentive af.'
        }
      ]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE dogs_id_seq RESTART WITH 4;');
    });
};

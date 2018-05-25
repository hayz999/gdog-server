
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dogs', (table) => {
    table.increments()
    table.text('dogName')
    table.text('imgURL')
    table.integer('rating').notNullable()
    table.text('comment')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dogs')
};

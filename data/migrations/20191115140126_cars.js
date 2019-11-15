
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
      // Primary Key
      tbl.increments();
      tbl.integer('vin').notNullable().unique();
      tbl.text('make', 128).notNullable();
      tbl.text('model', 128).notNullable();
      tbl.integer('mileage');
      tbl.text('trans', 128);
      tbl.text('title', 128);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars');
};

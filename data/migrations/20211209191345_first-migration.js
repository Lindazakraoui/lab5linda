exports.up = (knex) => {
    return knex.schema
        .createTable('profiles', function (table) {
            table.increments('profile_id');
            table.string('name', 128).notNullable();
            table.string('last name', 128).notNullable();
            table.string('email').notNullable();
            table.string('password').notNullable();
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())

        });
};
exports.down = (knex) => {
    return knex.schema.dropTableIfExists('profiles');
};
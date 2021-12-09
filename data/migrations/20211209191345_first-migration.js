exports.up = (knex) => {
    return knex.schema
        .createTable('profiles', function (table) {
            table.increments('profile_id');
            table.string('name', 128).notNullable();
            table.string('lastname', 128).notNullable();
            table.string('email',128).notNullable();
            table.string('password').notNullable();
           
        }).then();
};
exports.down = (knex) => {
    return knex.schema.dropTableIfExists('profiles');
};
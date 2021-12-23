
exports.up = function (knex) {
    return knex.schema.createTable('KanbanBoards', (table) => {
        table.increments();
        table.string('Name').notNullable();
    }).createTable('TaskLists', (table) => {
        table.increments();
        table.string('Name').notNullable();
        table.integer('Board_Id').unsigned();
        table.foreign('Board_Id').references('KanbanBoards.id').onUpdate('CASCADE').onDelete('CASCADE');
    }).createTable('Cards', (table) => {
        table.increments();
        table.string('CardDescription').notNullable();
        table.integer('TaskList_Id').unsigned();
        table.foreign('TaskList_Id').references('TaskLists.id').onUpdate('CASCADE').onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('Cards').dropTableIfExists('TaskLists').dropTableIfExists('KanbanBoards');
};
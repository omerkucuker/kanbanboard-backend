
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('KanbanBoards').del()
    .then(function () {
      // Inserts seed entries
      return knex('KanbanBoards').insert([
        {id: 1, Name: 'KanbanBoard1'},
        {id: 2, Name: 'KanbanBoard2'},
        {id: 3, Name: 'KanbanBoard3'}
      ]);
    });
};

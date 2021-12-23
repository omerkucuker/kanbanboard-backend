
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TaskLists').del()
    .then(function () {
      // Inserts seed entries
      return knex('TaskLists').insert([
        {id: 1, Name: 'TaskList1', Board_Id: 1 },
        {id: 2, Name: 'TaskList2', Board_Id: 1 },
        {id: 3, Name: 'TaskList3', Board_Id: 1 }
      ]);
    });
};

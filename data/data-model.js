const db = require("./db-config");

module.exports = {
    findBoard,
    addBoard,
    findBoardById,
    findTaskList,
    findTaskById,
    addTask,
    findCard,
    findCardById,
    addCard,
    deleteCard,
};  

function findBoard(){
    return db('KanbanBoards');
}

function findBoardById(id){
    return db("KanbanBoards").where({ id }).first();
}

function addBoard(newBoard){
    return db("KanbanBoards").insert(newBoard, "id").then(([id]) => {
        return db("KanbanBoards").where({id}).first();
    });
}

function findTaskList(){
    return db('TaskLists');
}

function findTaskById(id){
    return db("TaskLists").where({ id }).first();
}

function addTask(newTask){
    return db("TaskLists").insert(newTask, "id").then(([id]) => {
        return db("TaskLists").where({id}).first();
    });
}

function findCard(){
    return db('Cards');
}

function findCardById(id){
    return db("Cards").where({ id }).first();
}

function addCard(newCard){
    return db("Cards").insert(newCard, "id").then(([id]) => {
        return db("Cards").where({id}).first();
    });
}

function deleteCard(id){
    return db("Cards").del().where({id});
}

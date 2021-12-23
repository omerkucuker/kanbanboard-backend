const router = require("express").Router();

const data = require('../data/data-model');

router.get("/", (req, res, next) => {
    data.findTaskList().then(task => {
        res.status(200).json(task);
    }).catch(error => {
        next({
            statusCode: 500,
            errorMessage: 'Error retrieving data from KanbanBoards',
            error,
        })
    })
});

router.post("/", (req, res, next) => {
    const newTask = req.body;
    if (!newTask.Name) {
        next({
            statusCode: 200,
            errorMessage: "Name is required for new Board",
        })
    }
    else {
        data.addTask(newTask).then(added => {
            res.status(201).json(added);
        }).catch(error => {
            next({
                statusCode: 500,
                errorMessage: "Error adding data to KanbanBoards",
                error,
            })
        });
    }
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;

    data.findTaskById(id)
        .then((task) => {
            if (task) {
                res.status(200).json(task);
            } else {
                next({
                    statusCode: 400,
                    erorMessage: "task not found",
                });
            }
        })
        .catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "task not found from DB",
                error,
            });
        });
});

module.exports = router;
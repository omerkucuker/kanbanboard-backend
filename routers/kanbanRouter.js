const router = require("express").Router();

const data = require('../data/data-model');

router.get("/", (req, res, next) => {
    data.findBoard().then(board => {
        res.status(200).json(board);
    }).catch(error => {
        next({
            statusCode: 500,
            errorMessage: 'Error retrieving data from KanbanBoards',
            error,
        })
    })
});

router.post("/", (req, res, next) => {
    const newBoard = req.body;
    if (!newBoard.Name) {
        next({
            statusCode: 200,
            errorMessage: "Name is required for new Board",
        })
    }
    else {
        data.addBoard(newBoard).then(added => {
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

    data.findBoardById(id)
        .then((board) => {
            if (board) {
                res.status(200).json(board);
            } else {
                next({
                    statusCode: 400,
                    erorMessage: "board not found",
                });
            }
        })
        .catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "board not found from DB",
                error,
            });
        });
});

module.exports = router;

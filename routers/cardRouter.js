const router = require("express").Router();

const data = require('../data/data-model');
const { route } = require("./kanbanRouter");

router.get("/", (req, res, next) => {
    data.findCard().then(task => {
        res.status(200).json(task);
    }).catch(error => {
        next({
            statusCode: 500,
            errorMessage: 'Error retrieving data from Cards',
            error,
        })
    })
});

router.post("/", (req, res, next) => {
    const newCard = req.body;
    if (!newCard.CardDescription) {
        next({
            statusCode: 200,
            errorMessage: "CardDescription is required for new Card",
        })
    }
    else {
        data.addCard(newCard).then(added => {
            res.status(201).json(added);
        }).catch(error => {
            next({
                statusCode: 500,
                errorMessage: "Error adding data to Card",
                error,
            })
        });
    }
});

router.get("/:id", (req, res, next) => {
    const { id } = req.params;

    data.findCardById(id)
        .then((card) => {
            if (card) {
                res.status(200).json(card);
            } else {
                next({
                    statusCode: 400,
                    erorMessage: "card not found",
                });
            }
        })
        .catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "card not found from DB",
                error,
            });
        });
});

router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    data.findCardById(id)
        .then((deletedCard) => {
            data.deleteCard(id).then(deleted => {
                if (deleted) {
                    res.status(204).end();
                }
                next({
                    statusCode: 400,
                    errorMessage: "Card does not exist",
                });
            })
                .catch((error) => {
                    next({
                        statusCode: 500,
                        errorMessage: "card not found ",
                        error,
                    });
                });
        })
        .catch((error) => {
            next({
                statusCode: 500,
                errorMessage: "card not found from DB",
                error,
            });
        });
});
module.exports = router;
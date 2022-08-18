
# Kanban Board Backend

In the Kanban Board Backend application, the PostgreSql database was used, and the knex library was used as the ORM tool. The connection in the database is provided with the pg library. Three different tables are kept in the database structure: the board, the task list and the card elements in the list elements. Board has lists and lists have cards. The relationship between them is one-to-many.


## Used technologies

**Server:** Node, Express

**Packets:** Cors, Knex, Pg


  
## API Usage

#### Get Board

```http
  GET /boards/getall/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | According to the board id, fetch the list and cards belonging to the related id |

#### Add Card

```http
  POST /cards
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `CardDescriptions`      | `string` | Card element to be added to the list |
| `TasklList_Id`      | `integer` | The id of the list to be associated. |


#### Delete Card

```http
  DELETE /cards/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | Deletes the card of the id given as a parameter from the database. |

  

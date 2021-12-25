
# Kanban Board Backend

Kanban Board Backend uygulamasında PostgreSql veritabanı, ORM aracı olarak knex kütüphanesi kullanılmıştır. Pg kütüphanesiyle veribanındaki bağlantı sağlanmıştır.
Veritabına yapısında board, task listesi ve liste elemanlarının içindeki kart elemanları olmak üzere üç farklı tablo tutulmaktadır.
Board'ın listeleri, listelerin de kartları bulunmaktadır. Aralarındaki ilişki one-to-many dir.


## Kullanılan Teknolojiler

**Server:** Node, Express

**Packets:** Cors, Knex, Pg


  
## API Kullanımı

#### Board getir

```http
  GET /boards/getall/${id}
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | Board id sine göre ilgili id ye ait liste ve kartları öğeleri getir |

#### Kart Ekle

```http
  POST /cards
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `CardDescriptions`      | `string` | Listeye eklenecek kart elemanı |
| `TasklList_Id`      | `integer` | İlişkilendirelecek listenin id si. |


#### Kart Sil

```http
  DELETE /cards/${id}
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `id` | `integer` | Parametre olarak verilen id ye ait kartı veritabanından siler |

  
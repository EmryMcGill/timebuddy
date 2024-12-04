/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lnx3pj0bsglfyo0",
    "created": "2024-10-08 14:38:18.084Z",
    "updated": "2024-10-08 14:38:18.084Z",
    "name": "daily_time",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iudimzda",
        "name": "time",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "mbkf8ay9",
        "name": "date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lnx3pj0bsglfyo0");

  return dao.deleteCollection(collection);
})

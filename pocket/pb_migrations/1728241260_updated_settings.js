/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1iwjjzv7b3kjk6q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m8ul1q2i",
    "name": "break_length",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1iwjjzv7b3kjk6q")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m8ul1q2i",
    "name": "break_time",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})

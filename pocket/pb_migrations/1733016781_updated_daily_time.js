/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnx3pj0bsglfyo0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m26g1u06",
    "name": "created_at",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnx3pj0bsglfyo0")

  // remove
  collection.schema.removeField("m26g1u06")

  return dao.saveCollection(collection)
})

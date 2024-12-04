/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnx3pj0bsglfyo0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "et4stt5p",
    "name": "project_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fohb0drktkh228f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnx3pj0bsglfyo0")

  // remove
  collection.schema.removeField("et4stt5p")

  return dao.saveCollection(collection)
})

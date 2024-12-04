/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fohb0drktkh228f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "14lrdyuk",
    "name": "priority",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fohb0drktkh228f")

  // remove
  collection.schema.removeField("14lrdyuk")

  return dao.saveCollection(collection)
})

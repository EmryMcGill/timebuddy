/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fohb0drktkh228f")

  collection.listRule = "@request.auth.id = user_id"
  collection.viewRule = "@request.auth.id = user_id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fohb0drktkh228f")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
})

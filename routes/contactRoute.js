const express = require("express");
const {
  getContacts,
  createContact,
  getContactById,
  deleteContact,
  updateContact,
  searchContact,
} = require("../controllers/contactController");
const router = express.Router();

router.route("/").get(getContacts).post(createContact);
router
  .route("/:id")
  .get(getContactById)
  .delete(deleteContact)
  .put(updateContact);
router.route("/search").post(searchContact);

module.exports = router;

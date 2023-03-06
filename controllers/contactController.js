const contactService = require("../services/contactService");

const getContacts = async (req, res) => {
  try {
    const data = await contactService.getAllContacts();
    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const createContact = async (req, res) => {
  try {
    const data = await contactService.createContact(req.body);
    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const getContactById = async (req, res) => {
  try {
    const data = await contactService.getContactById(req.params.id);
    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const deleteContact = async (req, res) => {
  try {
    const data = await contactService.deleteContact(req.params.id);
    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const updateContact = async (req, res) => {
  try {
    const data = await contactService.updateContact(req.params.id, req.body);
    console.log(req.params.id, req.body);
    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const searchContact = async (req, res) => {
  try {
    const data = await contactService.searchContact(req.body);

    res.json({ data: data, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getContacts,
  createContact,
  getContactById,
  deleteContact,
  updateContact,
  searchContact,
};

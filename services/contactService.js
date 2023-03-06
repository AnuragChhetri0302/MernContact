const Contact = require("../models/contact");

exports.createContact = async (contact) => {
  return await Contact.create(contact);
};

exports.searchContact = async (data) => {
  return await Contact.find({
    $or: [{ name: { $regex: data.val } }, { phone: { $regex: data.val } }],
  });
};

exports.getAllContacts = async () => {
  return await Contact.find();
};
exports.getContactById = async (id) => {
  return await Contact.findById(id);
};
exports.updateContact = async (id, contact) => {
  return await Contact.findByIdAndUpdate(id, contact);
};

exports.deleteContact = async (id) => {
  return await Contact.findByIdAndDelete(id);
};

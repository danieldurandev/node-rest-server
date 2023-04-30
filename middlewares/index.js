const validaCampos = require("./validarCampos");
const validaJWT = require("./validarJWT");
const validaRoles = require("./validarRoles");

module.exports = {
  ...validaRoles,
  ...validaCampos,
  ...validaJWT,
};

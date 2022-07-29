const removeKey = (key, { [key]: deletedKey, ...others }) => others;

module.exports = { removeKey }
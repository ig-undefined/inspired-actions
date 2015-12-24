/**
 * Created by Ihar_Cheliadzinski on 12/22/2015.
 */
var crypto = require('crypto');

function getCrypted(password) {

    return crypto.pbkdf2Sync(password, 'salt', 1000, 512, 'sha512').toString('hex');
}

module.exports = getCrypted;
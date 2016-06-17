/**
 * Main application file
 */

'use strict';

// Expose app
exports = module.exports = {
    init : require('./api/init'),
    deal : require('./api/deal'),
    draw : require('./api/draw')
};

'use strict';

/**
 * feeding-crowd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::feeding-crowd.feeding-crowd');

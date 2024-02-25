'use strict';

/**
 * special-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::special-blog.special-blog');

'use strict';
const Model = require('./index.js');
const q = require('q');

class Resource extends Model{
  constructor(){
    super();
    this.collection = 'resources';
    this.schema = {
      properties :{
        name: {
          type: 'string',
          required: true
        },
        category: {
          type: 'string',
          required: true
        },
        description:{
          type: 'string',
          required: false
        }
      }
    }
  } 
}

module.exports = Resource;
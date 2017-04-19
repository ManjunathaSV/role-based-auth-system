'use strict';
const Model = require('./index.js');

class Role extends Model{
  constructor(){
    super();
    this.collection = 'roles';
    this.schema = {
      properties :{
        name: {
          type: 'string',
          required: true,
          allowEmpty: false
        },
        resources : {
          type: 'array',
          required: true
        },
        description:{
          type:'string',
          required:false
        }
      }
    }
  }
}
module.exports = Role;
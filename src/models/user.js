'use strict';
const Model = require('./index.js');
const ResourceModel = require('./resource.js');
const RoleModel = require('./role.js');
const q = require('q');

class User extends Model{
  constructor(){
    super();
    this.collection = 'users';
    this.schema = {
      properties :{
        name: {
          type: 'string',
          required: true
        },
        roles: {
          type: 'array',
          required: true
        }
      }
    }
  }
  /**Method which gets the roles based on user name**/
  getRoles(userName){
    let defered = q.defer();
    let filterQuery = {};
    filterQuery['name'] = userName;
      super.read(filterQuery).then(function(users){
        defered.resolve(users[0].roles);
      }).fail(function(err){
        defered.reject(err);
      })
  return defered.promise;
  }
  /*Given the filter query which*/
  checkAccess(userName, resourceName, accessType){
    var defered = q.defer();
    this.getRoles(userName).then((roles)=>{
      this.getResources(roles, resourceName).then((resources)=>{
        var access = false;
        var tasksTogo = resources.length;
        resources.forEach((resource)=>{
          resource.accessType.forEach((at)=>{
            if(at == accessType){
              access = true;
              defered.resolve(access);
            }
          })
          if(--tasksTogo == 0){
            defered.resolve(access);
          }
        });
      });
    });
    return defered.promise;
  }

  /** Method which gets resources corresponding to roles**/
  getResources(roles, resourceName){
    var defered = q.defer();
    var tasksTogo = roles.length;
    var myResources = [];
    roles.forEach(function(element){
      var filterObj = {};
      var roleModel = new RoleModel();
      filterObj['name'] = element;
        roleModel.read(filterObj).then(function(docs){
          var resourceArr = docs[0].resources;
          resourceArr.forEach(function(element){
            if(element['name']==resourceName)
            myResources.push(element);
          })
          if(--tasksTogo == 0){
            defered.resolve(myResources);
          }
        }).fail(function(err){
            defered.reject(err);
        });
      })
  return defered.promise;
  }
 
}
module.exports = User;
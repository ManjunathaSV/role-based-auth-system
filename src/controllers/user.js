'use strict'
const Controller = require('./index.js');
const UserModel = require('../models/user.js');
const RoleModel = require('../models/role.js');
const querystring = require('querystring');
const q = require('q');
const url = require('url');

class UserController extends Controller{
  constructor(){
    super();
    this.model = new UserModel();
  }
  setupRoutes(server){
    server.post( '/users',  this.create.bind(this) );
    server.get( '/users' , this.read.bind(this) );
    server.get('/users/:id', this.readOne.bind(this));
    server.delete('/users', this.delete.bind(this)); 
    server.get('/checkAccess', this.checkAccess.bind(this)); 
    server.get('/assignRole', this.assignRole.bind(this));
  }
  create(req, res, next){
    super.create(req, res, next);
  }
  read(req, res, next){
    super.read(req, res, next);
  }
  readOne(req, res, next){
    req.body['name']= req.params.id;
    super.read(req, res, next);
  }
  update(req, res, next){
    super.update(req, res, next);
  }
  delete(req, res, next){
    super.delete(req, res, next);
  }
  checkAccess(req, res, next){
    let filterQuery = url.parse(req.url , true).query;
    let userName = filterQuery.userName;
    let resourceName = filterQuery.resourceName;
    let accessType = filterQuery.accessType;
    this.model.checkAccess( userName,resourceName, accessType).then((result)=>{
      res.status(200).send(result);
    }).fail((err)=>{
      res.status(400).send(err);
    });
  }
  assignRole(req, res, next){
    let filterQuery = url.parse(req.url , true).query;
    let userName = filterQuery.userName;
    let roleName = filterQuery.roleName;
    this.model.assignRole(userName, roleName).then((result)=>{
      res.status(200).send(result);
    }).fail((err)=>{
      res.status(400).send(err);
    });
  }  
}
module.exports = UserController;
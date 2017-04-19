'use strict'
const Controller = require('./index.js');
const ResourceModel = require('../models/resource.js');

class ResourceController extends Controller{
  constructor(){
    super();
      this.model = new ResourceModel();
  }
  setupRoutes(server){
    server.post( '/resources',  this.create.bind(this) );
    server.get( '/resources', this.read.bind(this) );
    server.put('/resources/:resourceId', this.update.bind(this));
    server.delete( '/resources', this.delete.bind(this));
  }
  create(req, res, next){
    super.create(req, res, next);
  }
  read(req, res, next){
    super.read(req, res, next);
  }
  update(req, res, next){
    super.update(req, res, next);
  }
  delete(req, res, next){
    super.delete(req, res, next);
  }
}
module.exports = ResourceController;
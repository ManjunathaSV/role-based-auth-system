const MongoService = require('./mongodb-service.js');
const config = require('../../config/config.js');
module.exports = function(seed){
  if(seed){
    
    mongoService = new MongoService(config.dbURL);
    /**populating resources **/
    mongoService.createMany("resources",[
      {"name":"resource1", "category":"storage", "description":"storage upto 300GB with high IO"},
      {"name":"resource2", "category":"compute"},
      {"name":"resource3", "category":"network"}
    ]  
    );
    /**populating roles**/
    mongoService.createMany("roles", [
      {
        "name":"role1",
        "resources": [
                      {
                        "name":"resource1",
                        "accessType":["r","w"] 
                      },
                      {
                        "name":"resource2",
                        "accessType":["r"]
                      },
                      {
                        "name":"resource3",
                        "accessType":["r","w","x"]
                      }
                    ]
      },
      {
        "name":"role2",
        "resources":[
                      {
                        "name":"resource1",
                        "accessType":["r"] 
                      },
                      {
                        "name":"resource2",
                        "accessType":["r","w","x"]
                      }
                    ]
      },
      {
        "name":"role3",
        "resources":[
                      {
                        "name":"resource2",
                        "accessType":["r"]
                      },
                      {
                        "name":"resource3",
                        "accessType":["r","w","x"]
                      }
                    ]
      }
    
    ]
    );
    /**populating users **/
    mongoService.createMany("users",[
                                      {"name":"user1","roles":["role1"]},
                                      {"name":"user2","roles":["role2"]},
                                      {"name":"user3","roles":["role3"]},
                                      {"name":"user4","roles":["role1","role2"]},
                                      {"name":"user5","roles":["role1","role3"]}
                                    ]

                            );
  }
}
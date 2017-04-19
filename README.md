# Role-based-auth-system
A simple Role based user authentication system with following components
a) User
b) Role
c) Resources
d) Access Types
This also includes a simple mongodb service which will expose methods to perform create, read, update, delete operations on mongodb.


API implemented:
GET 	http://server/checkAccess?userName=user&resourceName=resource&accessType="<r|w|x>"  
Returns true if the user has a particular access to the resource

GET		http://server/users  				Set of all users
GET		http://server/users/username		User details associated with "username"
POST	http://server/users 				Creates a user if valid
PUT 	http://server/users/userId 			Updates a user information if valid 
DELETE  http://server/users/userId      	Deletes the particular user corresponding to the userId

GET		http://server/roles  				Set of all roles 
GET		http://server/roles/roleName		Role Details corresponding to 
POST	http://server/roles 				Creates a role if valid
PUT 	http://server/roles/roleName 		Updates a role information if valid 
DELETE  http://server/roles/roleName      	Deletes the particular role with name "rolename"

GET		http://server/resources  					Set of all resources
GET		http://server/resources/resourceName		Resource details related to "resourceName"
POST	http://server/resources					    Creates a resource if it is valid
PUT 	http://server/resources/resourceName 		Updates a resource information if valid 
DELETE  http://server/resources/resourceName        Deletes the particular resource


steps to run the app:
1) Clone the repo
2) Run the command "npm install" in the terminal to install dependencies
3) Start the monodb database service
3) Run the command "npm start" to start the server
Test:
Run the command "npm test" to run the test cases
Reports:
Run the command "npm reports" 
Test reports are generated using mochawesome reporter , the reports will be stored in "reports" folder under "src" folder

Note: Calls file need to be changed if it has to work in linux/mac,
Instead of using '\\' , use '/' to obtain the corresponding file 


const Router = require('express').Router;
const router = new Router();

const intro = {
	 users:[
	   {
	     name: 'Elsa',
	     age: 18,
	     major: 'Electical Engineering',
	     school: 'NTU',
	     email: 'asle@ntu.edu.tw'
	   },
	   {
	     name: 'Katharin',
	     age: 19,
	     major: 'Computer Science',
	     school: 'NTHU', 
	     email: 'nirathak@gmail.com'
	   },
	   {
	     name: 'Marshell',
	     age: 20,
	     major: 'Physics',
	     school: 'NCTU', 
	     email: 'llesharm@yahoo.com'
	   }
	 ]
};

router.get('/users', function(req, res){
  res.json(intro);
})

router.get('/users/:username', function(req, res){
	 var test = false;
   for(var i = 0; i < intro.users.length; i++){
	   if(req.params.username == intro.users[i].name){
		   res.json(intro.users[i]);
			 test = true;
			 break;
		 }
	 }
	 if(!test){
	   res.sendStatus(404);
	 }
})

module.exports = router;

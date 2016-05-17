const Router = require('express').Router;
const router = new Router();

const data = [{
	"id" : 1,
	"img" : "img/1.jpg",
	"question" : "這是什麼水果?",
	"choices" : ["香蕉", "蘋果", "芭樂", "西瓜", "榴槤"],
	"answer" : 0
},
{
	"id" : 2,
	"img" : "img/2.jpg",
	"question" : "這顆蘋果是什麼顏色?",
	"choices" : ["紅色", "白色", "綠色", "藍色", "紫色"],
	"answer" : 0
}];

router.get('/question/random', function(req, res){
   res.json(data[Math.floor((Math.random() * data.length))]);
})

module.exports = router;

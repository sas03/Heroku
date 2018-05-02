router.get('/setname', (req, res) => {
    req.session.name = "josay";
    res.redirect('/getname');
})

router.get('/getname', (req, res) => res.send (req.session.name) );

router
.route('/showpost')
.post((req,res) => res.send(req.body.name + ' ' + req.body.first_name))
.get((req,res) => res.render('formulaire'));


module.exports = function test (req, res){
    res.send('toto');
}

const test = require('../test');
router.get('/test', test)
const path = require('path');//pour définir un chemin absolu en joiniant des url entre eux

//va chercher le framework express
const express = require('express');

const mongoose = require('mongoose');
//connexion à ma base de données mongodb
mongoose.connect('mongodb://root:root@ds245228.mlab.com:45228/b2a');

//permet de définir une nouvelle chaine de charactères(name: String) dans la base de donnés mongodb pour rentrer un nouveau Cat 
const Cat = mongoose.model('Cat', { name: String });

const Student = mongoose.model('Student',{
    //name: {type: String, required: true}, //pour que le paramètre soit obligatoire, autrement c'est pas le cas
    name : String,
    first_name  : String,
    email : String
});

const User = mongoose.model('User',{
    name: String,
    email: String,
    motdepasse: String
});


//initialise expresse sous forme de fonction - stockée sous une variable app
const app = express();//serveur express(notre framework)

//application écoute sur le port 3000 et lance à la fonction(callback) exécutant Hello
const server = app.listen(3000,function(){
    console.log('Hello');
});

app.post('/User',(req,res) => {
    new User({
        name: "bob",
        email: "bob@ynov.com",
        motdepasse: "mdp"
    }).save((err)=> {
        res.end();
    });
});

//9.7
app
  .route('/students')
  .put((req,res) => {
    /*  Student 
      .findOne({})
      .exec((err, students) => {
          //console.log(students);
          student.name = "Bobby";
          student.save(() => res.end());
          //students.map(student => student.name = "Booby").save(() => res.end()); 
      })
  .get((req,res) => {
      Student
      .find({})
      .exec((err, students) => res.json(students));
  })
  .post((req, res) => {
    new Student({
        name: "Bob",
        first_name: "Sponge",
        email: "sponge.bob@square.com"
    }).save((err) => {
        if(err){
            res.send(err);
        } else{
            res.send('success');
        }
    });*/
});

// le slash('/') c'est la racine - url GET
//localhost:3000
app.get('/', function (req, res) {
    res.send('Hello World');
  });

//html envoyé du serveur à l'utilisateur(réponse)
//ecoute requete et reponse et renvoie la réponse Bonjour
//localhost:3000/stephane
app.get('/stephane', (request, response) => {
    response.send('<strong>Bonjour Stephane !</strong>');
});

//path.join(__dirname, 'index.html') prend le chemin absolu et lie le avec index.html
app.get('/index',(req,res) => res.sendFile(path.join(__dirname,'index.html')) );

app.get('/click',(req,res) => res.sendFile(path.join(__dirname,'click.html')) );

app.get('/connexion',(req,res) => res.sendFile(path.join(__dirname,'connexion.html')) );
//ajoute le Cat de nom "bob" à la base de données mongodb dans mLab
//vérifier le POST dans POSTMAN après connexion en cmd(nodemon app.js)
//quand j'envoie un post, ca crée un nouveau Cat de nom "bob"
//ensuite je sauvegarde avec .save(err) et res.end() évite que le navigateur reste en boucle
app.post('/',(req,res) => {
    new Cat({
        name: "bob"
    }).save((err)=> {
        res.end();
    });
});

app.put('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')) );
//path.join(__dirname, 'index.html')

app.delete('/', (req,res) => res.json({"bien" : "bien?"}));


app.set('view engine', 'pug');
app.set('views', path.join(__dirname,"views"));

app.get('/pug',(req,res) => res.render('index') );
//post = créer
//put = modifier
//get = récupérer
//delete = supprimer

const mongoose = require('mongoose');
let express = require("express");

class MongoDb {
  constructor (){

  }
  init() {
    let app = express();
    app.listen(3000, () => {
    console.log("Server running on port 3000");
    });

    app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
    });

    const connectionStr = 'mongodb://antihero:crime666@ds251804.mlab.com:51804/destructor?authMechanism=SCRAM-SHA-1';
    mongoose.connect(connectionStr, { useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true  }).then(data => console.log(data));
  }

  createSehme() {
    const userSchema = mongoose.Schema({
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
      score: Number
    })

    const User = mongoose.model('Game', userSchema)
    return User;
  }

  createUser(User, nickname, playersScore) {
    const user = new User({
          _id: new mongoose.Types.ObjectId(),
          name: nickname,
          score: playersScore
    })
    return user;
  }

  saveToUser(user) {
    user.save().then(() => console.log("success"))
      .catch((err) => console.log(err))
  }

  findUsers(sheme) {
    sheme.find({}, (err, result) => {
      console.log(result);
      const Users = result.map(() => {
        return {
          name: result.name,
          score: result.score
        }
      }).sort((a, b) => b.score - a.score);
    })
  }

  updateScore(sheme, id, score) {
    sheme.findById(id, function(err, result) {

      result.score = score;
      result.save().then(() => console.log("success2"))
      .catch((err) => console.log(err));
    })
  }  
}


let connection = new MongoDb();

connection.init();
let shema = connection.createSehme();
let user = connection.createUser(shema, 'CrimeMan', 666);
//connection.saveToUser(user);
connection.findUsers(shema);
connection.updateScore(shema, '5c34b0ecfbc98228ec149ecc', 777);
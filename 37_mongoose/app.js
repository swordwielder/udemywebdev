const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true,  useUnifiedTopology: true })
  .then(() => {
    console.log("connected!!")
  })
  .catch(err  =>  {
    console.log('ERR!!!!!!!!!!')
    console.log(err)
  })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log('connected!')
// });


const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
})

// creates the collection 'movies'
const Movie = mongoose.model('Movie', movieSchema)
const winnie = new Movie({title: 'winnie', year:1990})

// Movie.insertMany([
//   {title:'star wars', year:1976},
//   {title:'stand by me', year:1986}
// ])
//   .then(data => {
//     console.log("it worked!")
//     console.log(data)
//     // data.save()
//   })

Movie.findById('5fdce04b93470da9dc7bdb02')
.then(m => console.log(m))

Movie.updateMany({title: {$in:['star wars', 'Stand by me']}}, {score:10}).then( res => console.log(res))



Movie.deleteMany({year: {$gte:1999}})
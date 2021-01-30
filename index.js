const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); //express can read cookie
const passport = require('passport');

require('./models/user.model');
require('./services/passport');
const keys = require('./config/keys');

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

// tell pasport to use cookie to manage our authentication
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/auth.route');

app.use('/api/auth', authRoutes);


if(process.env.NODE_ENV === 'production'){
  // express will serve up production assets
  app.use(express.static('client/build'));

  // express will serve up the index.html file if it doesnt recognize the route
  const path = require('path');
  app.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server has started running on port: ${PORT}`))
  })
  .catch(err => console.error(err))


  
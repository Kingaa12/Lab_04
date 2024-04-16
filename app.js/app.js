const express = require('express');
const app = express();
const path = require('path');

// Set up Handlebars view engine
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware to serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import and use routes defined in routes/index.js
require('./routes/index.js')(app);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
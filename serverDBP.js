const express = require('express');
const app = express();

const itemRoutes = require('./Routes/routes');
const authRoutes = require('./Routes/auth');
app.use(express.json());

require('./index');

app.use(authRoutes);
app.use(itemRoutes);

app.listen(8000, () => console.log('connected to port 8000'));


const express = require('express');
const app = express();

const itemRoutes = require('./Routes/routes');
const authRoutes = require('./Routes/auth');
app.use(express.json());

require('./index');

app.use(authRoutes);
app.use(itemRoutes);

app.listen(8000, () => console.log('connected to port 8000'));
const express = require('express');
const app = express();

const itemRoutes = require('./Routes/routes');
const authRoutes = require('./Routes/auth');
app.use(express.json());

require('./index');

app.use(authRoutes);
app.use(itemRoutes);

app.listen(8000, () => console.log('connected to port 8000'));
const express = require('express');
const app = express();

const itemRoutes = require('./Routes/routes');
const authRoutes = require('./Routes/auth');
app.use(express.json());

require('./index');

app.use(authRoutes);
app.use(itemRoutes);

app.listen(8000, () => console.log('connected to port 8000'));


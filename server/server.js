const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(PORT, () => console.log(`Game Info server is listening on port: ${PORT}`));

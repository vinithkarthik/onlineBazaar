const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/api', express.static(__dirname))

app.listen(process.env.PORT || 5000, () => console.log("server started on port 50000"));
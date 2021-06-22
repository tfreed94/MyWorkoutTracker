const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
const app = require('express')();
const PORT = process.env.PORT || 3000;
const db = require('./models');

app.get('/', (req, res) => {
    // If I'm going to use virtual columns to resolve this, then rather than a join I actually want to do two selections....
    db.File.findAll({
        include: [{model: db.Code, attributes: ['content']}]
    }).then((files) => {
        res.json(files);
    })
})


db.sequelize.sync().then(() => 
    app.listen(PORT, () => 
        console.log("Now Listening on Port:", PORT)
    )
);
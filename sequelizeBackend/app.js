    const express = require("express")
    const cors = require("cors")
    const routes = require("./routes/index")
    const {sequelize } = require("./models")
    const dotenv = require("dotenv")

    dotenv.config();
    const app = express();
    app.use(cors())
    app.use(express.json())
    app.use("/",routes)

    async function  main(){
        await sequelize.sync()
    }
    main()

    const port = 8080;
    app.listen(port,()=>{console.log(`App is listening on server ${port}`)})
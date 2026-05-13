import mongoose from "mongoose"
import app from "../app/app"
import config from "../config/config"
const port=config.port
app.listen(port, () => {
  mongoose.connect("mongodb://localhost:27017/MurirTin5sthMay")
  console.log(`Example app listening on port1 ${port}`)
})
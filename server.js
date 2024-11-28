
import app from "./app.js";
import { configDotenv } from "dotenv";

configDotenv({path: '.env'})

app.listen(process.env.PORT , () => {
    console.log(`Server is running ${process.env.PORT}`);
    
})
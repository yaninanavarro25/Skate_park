import express from "express";
import routes from "./routes/router.js";
import { engine } from "express-handlebars";
import expressFileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 3000;

//Public Folder
app.use(express.static("public"));

//Motor de Plantilla
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./views");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  expressFileUpload({
    limits: { fileSize: 1000000 },
    abortOnLimit: true,
    responseOnLimit: "El archivo es demasiado grande",
  })
);

//Routes
app.use("/", routes);

app.listen(PORT, () =>
  console.log(`Example app listening on port http://localhost:${PORT}`)
);
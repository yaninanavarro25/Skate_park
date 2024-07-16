import express from "express";
import { controller } from "../controllers/controller.js";
const router = express.Router();

router.get("/", controller.home);

router.get("/about", controller.about);

router.get("/contact", controller.contactForm);

router.get("/404", controller.notFound);

router.get("/login", controller.loginForm);

router.get("/register", controller.registerForm);

router.get("/update", controller.updateForm);

router.get("/admin", controller.admin);

router.post("/register", controller.register);

router.post("/login", controller.login);

router.put("/update/:id", controller.update);

router.delete("/delete/:id", controller.deleteUser);

router.put("/skater/status/:id", controller.setSkaterStatus);







router.get("*", controller.notFound);
export default router;
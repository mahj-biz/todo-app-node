import { Router } from "express";
import { getTodo,postTodo,updateTodo } from "../controllers/todo.controller.js";

const appRoutes = Router();

appRoutes.get("/", getTodo);
appRoutes.post("/", postTodo);
appRoutes.put("/todo/:id", updateTodo);

export default appRoutes;

import express from "express";
import chartsController from "../controllers/chartsController.js";

const router = express.Router();

router.get("/", chartsController.getAll);
router.get("/:name", chartsController.getByName);
// router.get('/:id', chartsController.getOne);  
router.post("/", chartsController.create);
router.put("/:id", chartsController.update);
router.delete("/:id", chartsController.delete);

export default router;
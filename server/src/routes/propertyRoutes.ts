import express from "express";
import {
  getProperties,
  createProperty,
  getProperty,
} from "../controllers/propertyControllers";
import { authMiddleware } from "../middleware/authMiddleware";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getProperties);
router.put("/:id", getProperty);
router.post(
  "/",
  authMiddleware(["manager"]),
  upload.array("Photos"),
  createProperty
);
export default router;

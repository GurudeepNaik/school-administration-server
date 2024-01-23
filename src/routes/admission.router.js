import { Router } from "express";
import {
  validateAdmissionForm,
  handleValidationErrors,
} from "../middlewares/Validator.middleware.js";
import { admissionSubmit } from "../controllers/admission.controller.js";
import { upload } from "../middlewares/uploading.js";

const router = Router();

router
  .route("/admission-form")
  .post(
    upload.single("file"),
    validateAdmissionForm,
    handleValidationErrors,
    admissionSubmit
  );

export default router;

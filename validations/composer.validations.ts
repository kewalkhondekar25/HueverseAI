import * as yup from "yup"

const composerValidations = yup.object({
  prompt: yup.string().required("Description required!"),
  quality: yup.string().required("Quality required!"),
  variations: yup.string().required("Variations required!"),
});

export {
  composerValidations
};
import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    category: yup.string().required("Category is required"),
    price: yup.number().required("Price is required").positive(),
    image: yup.string().url().required("Image is required"),
});
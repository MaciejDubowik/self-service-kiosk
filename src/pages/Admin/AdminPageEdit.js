import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import burgersData from "../../data/burgersData";

const AdminPageEdit = ({ match }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const findProduct = async () => {
            const product = burgersData.find(
                (burger) => burger.id === parseInt(match.params.id)
            );
            setProduct(product);
        };
        findProduct();
    }, [match.params.id]);

    const formik = useFormik({
        initialValues: {
            title: product.title || "",
            price: product.price || "",
        },
        onSubmit: (values) => {
            const updatedProduct = {
                ...product,
                title: values.title,
                price: values.price,
            };
            const index = burgersData.findIndex(
                (burger) => burger.id === parseInt(match.params.id)
            );
            burgersData[index] = updatedProduct;
            console.log(burgersData);
        },
    });

    return (
        <div>
        <h1> swag</h1>
        <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <Label for="title">Tytuł</Label>
                <Input
                    type="text"
                    name="title"
                    id="title"
                    onChange={formik.handleChange}
                    value={formik.values.title}
                />
            </FormGroup>
            <FormGroup>
                <Label for="price">Cena</Label>
                <Input
                    type="text"
                    name="price"
                    id="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
            </FormGroup>
            <Button type="submit">Edytuj</Button>
        </Form>
        </div>
    );
};

export default AdminPageEdit;
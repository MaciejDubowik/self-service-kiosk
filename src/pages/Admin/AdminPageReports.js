import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, ListGroup } from 'react-bootstrap';

function RestaurantForm() {
    const [reviews, setReviews] = useState(JSON.parse(localStorage.getItem('reviews')) || []);
    const handleSubmit = (values) => {
        const date = new Date();
        const reviewWithDate = { ...values, date: date.toLocaleString() };
        setReviews([...reviews, reviewWithDate]);
        localStorage.setItem('reviews', JSON.stringify([...reviews, reviewWithDate]));
    };

    return (
        <>
            <Formik
                initialValues={{ review: '' }}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit }) => (
                    <Form className="center" onSubmit={handleSubmit}>
                        <h3>Form below</h3>
                        <Field name="review" as="textarea" /><br/>
                        <Button variant="outline-success" type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
            <AdminPageReports reviews={reviews} />
        </>
    );
}

function AdminPageReports({ reviews }) {
    return (
        <ListGroup>
            {reviews.map((review, index) => (
                <ListGroup.Item key={index}>
                    {review.review}
                    <br />
                    <small>{review.date}</small>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default RestaurantForm;
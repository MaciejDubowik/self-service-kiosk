import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, ListGroup } from 'react-bootstrap';

function RestaurantReviewForm() {
    const [reviews, setReviews] = useState([]);

    const handleSubmit = (values) => {
        setReviews([...reviews, values]);
    };

    return (
        <>
            <Formik
                initialValues={{ review: '' }}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Field name="review" as="textarea" />
                        <Button type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
            <AdminPageReviews reviews={reviews} />
        </>
    );
}

function AdminPageReviews({ reviews }) {
    return (
        <ListGroup>
            {reviews.map((review, index) => (
                <ListGroup.Item key={index}>{review.review}</ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default RestaurantReviewForm;

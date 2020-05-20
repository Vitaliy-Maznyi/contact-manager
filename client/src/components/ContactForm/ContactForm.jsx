import React from 'react'
import { Formik } from 'formik'
import { validateValues } from './validateValues'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import helpersStyles from 'styles/helpers.module.scss'

const ContactForm = ({ initialValues, handleSubmitForm,  }) => (
  <Row className='justify-content-center'>
    <Col lg={6} md={8} sm={12}>
      <Formik
        onSubmit={handleSubmitForm}
        initialValues={initialValues}
        validate={validateValues}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group controlId='firstName' className={helpersStyles.fullWidth}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type='text'
                  name='firstName'
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={touched.firstName && errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId='lastName' className={helpersStyles.fullWidth}>
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type='text'
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId='phoneNumber' className={helpersStyles.fullWidth}>
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type='text'
                  name='phoneNumber'
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.phoneNumber && !errors.phoneNumber}
                  isInvalid={touched.phoneNumber && errors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId='favourite' className={helpersStyles.fullWidth}>
                <Form.Check
                  name='favourite'
                  label='Add to favourites?'
                  onChange={handleChange}
                  id='favourite'
                />
              </Form.Group>
            </Form.Row>
            <Button type='submit'>Save contact</Button>
          </Form>
        )}
      </Formik>
    </Col>
  </Row>
)

export default ContactForm

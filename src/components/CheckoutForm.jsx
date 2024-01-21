import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';

export const CheckoutForm = () => {
  const { items } = useContext(CartContext);
  const [ orderID, setOrderID ] = useState('');

  const handleAddOrder = (userData) => {
    if (!items || items.length == 0){
      console.log('Sin articulos')
      // TODO Toast notificaiton?
      return
    }
    const firstName = userData.firstName
    const lastName = userData.lastName
    const email = userData.email
    const products = {}
    items.forEach(item => {
      products[item.id] = item.quantity 
    })
    const data = {
      firstName,
      lastName,
      email,
      products,
    }
    console.log(data)
    const db = getFirestore();
    const productsCollection = collection(db, "orders")
    addDoc(productsCollection, data)
    .then(({id}) => {
      setOrderID(id)
      // Otra Toast notif?
    })
    .catch(error => {
      console.error('Error: ', error);
    });
  
  }

  const validateEmail = (value) => {
    if (!value) {
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return false;
    }
    return true
  }

  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "Muy Corto")
      .max(50, "Muy Largo")
      .required("Necesario"),
    lastName: yup
      .string()
      .min(2, "Muy Corto")
      .max(50, "Muy Largo")
      .required("Necesario"),
    email: yup
      .string()
      .email("Email invalido")
      .required("Necesario"),
    emailVerification: yup
      .string()
      .oneOf([yup.ref('email'), null], 'No Coincide')
      .required("Necesario"),
  });

  return (
    <div className="mt-5 mx-5">
      <Formik
        validationSchema={schema}
        onSubmit={handleAddOrder}
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          emailVerification: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik101"
                className="position-relative"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isInvalid={touched.firstName && errors.firstName}
                />
                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik102"
                className="position-relative"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isInvalid={touched.lastName && errors.lastName}
                />
                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik103"
                className="position-relative"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!validateEmail(values.email) && touched.email && errors.email}
                />
                <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationFormik104"
                className="position-relative"
              >
                <Form.Label>Confirme Email</Form.Label>
                <Form.Control
                  type="text"
                  name="emailVerification"
                  value={values.emailVerification}
                  onChange={handleChange}
                  isValid={
                    values.email == values.emailVerification && touched.email && !errors.emailVerification
                  }
                />
                <Form.Control.Feedback>Coincide</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="row justify-content-end">
              <Button
                className="mx-5 my-4 col-3"
                variant="success"
                type="submit"
              >
                Comprar
              </Button>{" "}
            </div>
          </Form>
        )}
      </Formik>
      {`ID de compra: ${orderID}`}
    </div>
  );
};

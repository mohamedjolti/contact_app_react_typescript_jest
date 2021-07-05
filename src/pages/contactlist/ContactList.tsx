import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Contact } from '../../models/Contact';
import { fetch_contacts, serach_contact } from '../../redux/actions/ContactActions';
import { Container, Row, Col, FormControl, Form, Button, InputGroup } from "react-bootstrap"
import ContactProfile from './ContactProfile';
function ContactList(props: any) {


  useEffect(() => {
    console.log("the Component has been rendred");
    /* call the action fetch contacts */
    props.fetch_contacts();
  }, [])


  const searchcontact = (e: any) => {
    console.log(e.target.value);

    props.serach_contact(e.target.value);
  }


  /* loop through contacts and return a Contact Profile component passing the info of a contact */
  const contacts = props.contacts.map((contact: Contact) =>
    <ContactProfile key={contact.id} contact={contact}
    />)

  return (
    <div>
      <Container fluid>

        <Row className="justify-content-md-center">
          <Col xs lg="4">
            <Row>
              <Col xs lg="8">
                <h2>Audience</h2>

              </Col>
              <Col xs lg="4">
                {props.contacts.length}
              </Col>
            </Row>

            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Message sent </InputGroup.Text>
                <FormControl type="number" placeholder="Max" />
                <FormControl type="number" placeholder="Min" />

              </InputGroup.Prepend>
              <InputGroup.Prepend>
                <InputGroup.Text>Message recevied</InputGroup.Text>
                <FormControl type="number" placeholder="Max" />
                <FormControl type="number" placeholder="Min" />
              </InputGroup.Prepend>
            </InputGroup>

          </Col>
          <Col xs lg="8">

            <h2>Contact List</h2>
            <Form inline>
              <FormControl onChange={searchcontact} type="text" placeholder="Search" style={{ width: "100%" }} />
            </Form>
            {contacts}
          </Col>
        </Row>

      </Container>


    </div>
  )
}

/* get the items proporty of the contact reducer and bind it to contacts props */
const mapStateToProps = (state: any) => ({
  contacts: state.contact.itemsSearch
})

export default connect(mapStateToProps, { fetch_contacts, serach_contact })(ContactList);

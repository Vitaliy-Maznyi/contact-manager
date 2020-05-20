import React, {useEffect} from 'react'
import api from 'api'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LoadingContainer } from 'components'
import { selectContact } from 'modules/contact/selectors'
import { fetchContact } from 'modules/contact'
import { fetchContacts } from 'modules/contacts'
import { contactsScopesKeys } from 'common/constants'
import { isEmpty } from 'lodash'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import helpersStyles from 'styles/helpers.module.scss'

const Contact = () => {
  const { id } = useParams()
  const history = useHistory()

  const { contact, loading } = useSelector(state => (
    selectContact(state, id)
  ))
  const dispatch = useDispatch()

  useEffect(() => {
    if (isEmpty(contact)) {
      dispatch(fetchContact(id))
    }
  }, [id])

  const handleRemove = async () => {
    const response = await api.contacts.remove(id)
    if (response.status === 200) {
      // should remove contact in redux store(using separate reducer) without refetching whole list
      if (response.data.favourite) {
        await dispatch(fetchContacts( { scope: contactsScopesKeys.FAVOURITES } ))
      }
      await dispatch(fetchContacts( { scope: contactsScopesKeys.ALL } ))
      history.push(`/`)
    }
  }

  return (
      <LoadingContainer loading={loading}>
        <ListGroup>
          <ListGroup.Item variant='light'>
            <Form.Group>
              <Form.Label>
                First name
              </Form.Label>
              <Form.Control plaintext readOnly defaultValue={contact.firstName} />
            </Form.Group>
          </ListGroup.Item>
          <ListGroup.Item variant='light'>
            <Form.Group>
              <Form.Label>
                Last name
              </Form.Label>
              <Form.Control plaintext readOnly defaultValue={contact.lastName || '--'} />
            </Form.Group>
          </ListGroup.Item>
          <ListGroup.Item variant='light'>
            <Form.Group>
              <Form.Label>
                Phone Number
              </Form.Label>
              <Form.Control plaintext readOnly defaultValue={contact.phoneNumber || '--'} />
            </Form.Group>
          </ListGroup.Item>
          {contact.favourite && (
            <ListGroup.Item variant='light'>
              <Badge variant="success" pill>Favourite</Badge>
            </ListGroup.Item>
          )}
        </ListGroup>
        <Row className='justify-content-around mt-3'>
          <Col xs={4}>
            <Button
              variant="warning"
              href={`/contacts/${contact.id}/edit`}
              className={helpersStyles.fullWidth}
            >
              Edit
            </Button>
          </Col>
          <Col xs={4}>
            <Button
              variant="danger"
              onClick={handleRemove}
              className={helpersStyles.fullWidth}
            >
              Delete
            </Button>
          </Col>
        </Row>
      </LoadingContainer>
  )
}

export default Contact

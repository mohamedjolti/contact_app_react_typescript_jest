
import { Card } from "react-bootstrap"

export default function ContactProfile(props: any) {
    const contact = props.contact;
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{contact.name}</Card.Title>
                    <Card.Text>
                        {contact.phoneNumber}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

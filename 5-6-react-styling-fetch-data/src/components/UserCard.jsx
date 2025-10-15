import React from 'react'
import { Card, Button } from 'react-bootstrap'

function UserCard({ user, onUserClick }) {
  return (
    <Card className="user-card h-100">
        <Card.Body className="d-flex align-items-center gap-3">
            <div className="user-avatar">
                {user.name.charAt(0)}
            </div>
            <div className="flex-grow-1">
                <Card.Title className="mb-1">{user.name}</Card.Title>
                <Card.Text className="mb-2 text-muted">
                    <strong>Username:</strong> {user.username}<br />
                    <strong>Email:</strong> {user.email}<br />
                    <strong>Phone:</strong> {user.phone}
                </Card.Text>
                <Button
                    variant="primary"
                    onClick={() => onUserClick(user)}
                >
                    View Details
                </Button>
            </div>
        </Card.Body>
    </Card>
  )
}

export default UserCard

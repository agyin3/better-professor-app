import React from 'react'
import { Card, CardTitle, CardText } from 'reactstrap'

const ProjectCard = ({project}) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(parseInt(project.due_date)).toLocaleDateString(undefined, options)

    return(
        <Card body>
            <CardTitle>{project.name}</CardTitle>
            <CardText>Due Date: {date}</CardText>
        </Card>
    )
}

export default ProjectCard
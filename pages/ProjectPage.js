import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'
import dataSource from '../Data/Projects/projectsList.json'

function Project(props) {

    let requestedProject = props.router.query.link;

    for (let i = 0; i < dataSource.length; i++) {
        const record = dataSource[i];
        if (requestedProject == record.project.link) {
            return handelProject(record.project);
        } 
    }
    return ProjectNotFound()

}

function handelProject(project) {
    return (
        <Layout>
            <h1>{project.name}</h1>
            <h3>{project.description}</h3>
        </Layout>
    )
}

function ProjectNotFound() {
    return (
        // TODO :create 404 page not found Layout
        <Layout>
            <h1>404 PAGE NOT FOUND</h1>
        </Layout>
    )
}


export default withRouter(Project)

/*TODO: - create project json file take the project link as name 
        - content the project headers 
            for each header :
            - type, name, content 
        - for each header will create header id in the code 
*/
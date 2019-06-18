import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'

function Project(props) {
    var ProjectLink = props.router.query.link;
    return (
    <Layout>
      <h1>{ProjectLink}</h1>
      <p>This is the Project content.</p>
    </Layout>
    )
}

export default withRouter(Project)

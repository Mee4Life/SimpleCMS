import { withRouter } from 'next/router'
import Layout from '../components/Layout.js'
import dataSource from '../Data/Projects/projectsList.json'

function Project(props) {
    return (
    <Layout>
    <h1>Projects List</h1>
    <ul>
      {props.projects.map(project => (
        <li key={project.link}>
            <a>{project.name}</a>
        </li>
      ))}
    </ul>
  </Layout>
    )
}

Project.getInitialProps = async function() {
    const data = await dataSource;
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      projects: data.map(entry => entry.project)
    };
  };
  

export default withRouter(Project)

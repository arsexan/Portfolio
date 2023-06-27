import img from './../img/projects/03.jpg'
import { ButtonGitHub } from '../components/buttonGitHub/ButtonGitHub';
import { projects } from '../components/helpers/projectsList';
import { useParams } from 'react-router-dom';

export const SeparateProject = () => {
    const {id} = useParams();
    const projectId = projects[id];

    // console.log(projectId)

    return (
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{projectId.title}</h1>

                <img src={projectId.img} alt={projectId.title} className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: {projectId.skills}</p>
                </div>

                {projectId.gitHubLink && (<ButtonGitHub link={'https://arsexan.github.io/green-corp-landing/'}/>)}

            </div>
        </div>
    </main>
    );
}
 
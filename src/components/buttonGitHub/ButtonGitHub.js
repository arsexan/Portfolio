import './style.css'
import img2 from './../../img/icons/gitHub-black.svg'

export const ButtonGitHub = ({link}) => {
    return (
        <a href={link} target='_blank' className="btn-outline">
                    <img src={img2} alt="" />
                    Go to GitHub
                </a>
    );
}

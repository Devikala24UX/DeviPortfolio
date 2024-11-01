import Project1Photo1 from '../assets/project/project 1 /left bottom.jpg';
import Project1Photo2 from '../assets/project/project 1 /right bottom.jpg';
import Project1Photo3 from '../assets/project/project 1 /IMG_0322.jpg';
import Project1Photo4 from '../assets/project/project 1 /Untitled_Artwork 1.jpg';
import Project1Photo5 from '../assets/project/project 1 /Untitled_Artwork 2.jpg';
import Project1Photo6 from '../assets/project/project 1 /Untitled_Artwork 3.jpg';
import Project1Photo7 from '../assets/project/project 1 /Untitled_Artwork 4.jpg';
import Project1Photo8 from '../assets/project/project 1 /Untitled_Artwork.jpg';


function Project1() {
  return (
    <div className="project-container row">
                <img className="img-responsive mx-auto col-sm-6 p-5" src={Project1Photo3} alt="Logo" />
                <img className="img-responsive mx-auto col-sm-6 p-5" src={Project1Photo4} alt="Logo" />
                <img className="img-responsive mx-auto col-sm-6 p-5" src={Project1Photo5} alt="Logo" />
                <img className="img-responsive mx-auto col-sm-6 p-5" src={Project1Photo6} alt="Logo" />
                <img className="img-responsive mx-auto col-sm-6 p-5" src={Project1Photo7} alt="Logo" />
                <img className="img-responsive mx-auto col-sm-6 p-5" src={Project1Photo8} alt="Logo" />
                <img className="img-responsive mx-auto col-sm-6 p-5" src={Project1Photo1} alt="Logo" />
                <img className="img-responsive mx-auto col-sm-6 p-5" src={Project1Photo2} alt="Logo" />

    </div>
  );
}

export default Project1;

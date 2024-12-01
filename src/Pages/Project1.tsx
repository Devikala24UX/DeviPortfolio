import Photo from '../assets/project/project 1/IMG_8832.jpg';
import Project1Photo from '../assets/project/project 1/IMG_0322.jpg';
import Project2Photo from '../assets/project/project 2/IMG_20211214_120429_296.jpg';
import Project3Photo from '../assets/project/project 3/20230420_102811360_iOS.jpg';
import { Link } from 'react-router-dom';
 
 
 
function Project() {
  return (
    <div className="project-container row">
      <img className='col-sm-6 p-12'src={Photo} style={{'height':'460px',  width: '22%'}}></img>
      <p className='col-md-8' style={{ textAlign: 'justify', padding: '20px', lineHeight: '1.6', fontSize: '2.1rem' }}>I am Devikala Boominathan, an Irish-based ceramic artist originally from southern India, a region rich in culture and customs. I've been interested in Art and craft since I was a kid, and as an Indian woman, I've pursued it as a profession against community criticism since it's difficult for a South Asian woman to pursue a passion, but with family support, I'm now living my dream as a ceramic artist. </p>
      <div className='row col-sm-12 p-5'>
        <div className="card col-sm-4 p-5">
          <img className="card-img-top img-fluid" src={Project1Photo} alt="Card image"></img>
          <div className="card-body">
            <h4 className="card-title">Changes</h4>
            <p className="card-text"style={{ textAlign: 'justify', padding: '20px', lineHeight: '1.6', fontSize: '1.1rem' }}>Inspiration for my work for this changes project is from my culture shock experience as a "third culture kid", this is creating awareness of the experience of being a third culture kid through tolerance and/or lack of spiciness in my taste bud from my journey from 2015 to 2022. </p>
            <Link className="h2" to="/Project1">See project</Link>          
            </div>
        </div>
      <div className="card col-sm-4 p-5">
        <img className="card-img-bottom img-fluid" src={Project2Photo} alt="Card image"></img>
        <div className="card-body">
          <h4 className="card-title">Multiple personality </h4>
          <p className="card-text"style={{ textAlign: 'justify', padding: '20px', lineHeight: '1.6', fontSize: '1.1rem' }}>Inspired by the concept behind Henry Moor's sketch, I am expressing Multiple personalities of women(myself) into a series of objects. Because of my several personalities, I produced drawings and sketches of myself in various moods and actions. Using underglaze print, sgraffito, sprig, trailing, and inlay processes on terracotta, white stoneware, and slip even majolica glaze. After my tests, I chose colour slip and slip trailing.
 
Using slip and slip trailing I layer up my emotions and control multiple personalities with the colour on my pieces expressing my tone of emotions and some of them show How I am confused, stressed, straightforward, angry, calm, and happy as a result of my extreme uncontrollable behaviours.</p>
          <Link className="h2" to="/Project2">See project</Link>          
          </div>
      </div>
      <div className="card col-sm-4 p-5">
        <img className="card-img-top img-fluid" src={Project3Photo} alt="Card image"></img>
        <div className="card-body">
          <h4 className="card-title">Honour Cage </h4>
          <p className="card-text" style={{ textAlign: 'justify', padding: '20px', lineHeight: '1.6', fontSize: '1.1rem' }}>
          As an Indian woman, I am painfully aware of how my society pressures women to marry someone who adheres to my culture. My work explores this societal pressure and the need for change.
These cages serve as metaphors to express the mental pressure of being trapped and pressurized into an arranged marriage - by the community, the family, and ultimately the women themselves, unable to reject cultural expectation and the consequences of resistance. Visually, the pieces represent the individual's struggle to break out of the cultural marriage cage, where the community maintains a dominant hand in the woman's life decisions. My aim is to prompt debate within my community - to encourage discussion and solidarity among the young female community in seeking change with the support and protection of family, in the hope that the way can be paved within the community for freedom to supersede tradition in this current generation.
</p>
          <Link className="h2" to="/Project3">See project</Link>          
          </div>
      </div>
      </div>
    </div>
  );
}
 
export default Project;
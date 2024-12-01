import Photo2 from '../assets/home/IMG_2076 1.jpg';
import photo3 from '../assets/about/2022.jpg';

function About() {
  return (
    <body className='row'>
    <div className="col-md-6 p-5">
          <img className="img-fluid" src={Photo2} alt="Profile" style={{ width: '100%', height: 'auto' }} />
        </div>

        {/* Text on the right */}
        <div className="col-md-6 p-5">
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>About.</h2>
          <p
            className="h5"
            style={{
              textAlign: 'justify',
              lineHeight: '1.6',
              fontSize: '1.7rem',
              color: 'black',
            }}
          >
            I am Devikala Boominathan, an Irish-based ceramic artist originally from southern India, a region rich in
            culture and customs. I've been interested in art and craft since I was a kid, and as an Indian woman, I've
            pursued it as a profession against community criticism. It can be challenging for a South Asian woman to
            follow her passion, but with family support, I'm now living my dream as a ceramic artist.
          </p>
    </div>
    <div className="col-md-12 mx-auto flex">
          <img className="img-fluid" src={photo3} alt="profile1" style={{ width: '100%', height: 'auto' }} />
        </div>
    </body>

  );
}

export default About;

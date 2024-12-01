import Photo1 from '../assets/home/test.jpg';
import Photo3 from '../assets/home/IMG_8169.jpg';
import Photo4 from '../assets/home/IMG_8170.jpg';
import Photo5 from '../assets/home/IMG_8171.jpg';
//import "./Home.css";


function Home() {
  return (
    <body className='row'>
        <div className='row col-sm-12'>
            <img className="img-responsive col-sm-4 p-5" src={Photo3} alt="Logo" />
            <img className="img-responsive col-sm-4 p-5" src={Photo4} alt="Logo" />
            <img className="img-responsive col-sm-4 p-5" src={Photo5} alt="Logo" />
        </div>
        <div className='row col-sm-12'>

        <p className='col-sm-4 h5 p-5' style={{color: 'black', textAlign: 'justify',lineHeight: '1.4'}}>Hello, I’m Devikala Boominathan, a multidisciplinary designer and artist with a Bachelor's in Ceramics. My portfolio reflects a blend of my professional expertise in ceramics, passion for photography, and love for sketching and badminton. As someone immersed in various creative forms, I’ve crafted my portfolio with a vibrant, visually engaging design that guides you effortlessly through my work. My use of color and informal style showcases my personality, while the photographs—both taken by me and of me—add a personal touch, emphasizing my love for capturing and expressing unique narratives.</p>
            <img className="img-responsive col-sm-8 p-5" src={Photo1} alt="Logo" />
        </div>

        </body>
);
}

export default Home;

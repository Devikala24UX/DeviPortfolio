import Galery1 from '../assets/photo gallery/Devi Aesthetic.jpg';
import Galery4 from '../assets/photo gallery/Devi Corporate_Image.jpg';
import Galery3 from '../assets/photo gallery/devi passion.jpg';
import Galery2 from '../assets/photo gallery/top right .jpg';

function ImageGallery(){
  return (
    <div className="gallery-container">
      <div className="project-container row">
        
        {/* First image with text to the right */}
        <div className="row align-items-center mb-4">
          <div className="col-md-4 p-3">
            <img className="img-fluid" src={Galery2} style={{ height: '435px', width: '100%', objectFit: 'cover' }} alt="Gallery Image" />
          </div>
          <div className="col-md-8">
            <p style={{ textAlign: 'justify', padding: '0px 20px', lineHeight: '1.6', fontSize: '1.4rem' }}>
              Welcome to my photography blog! I’m Devikala Boominathan, a passionate photographer dedicated to capturing life’s beauty in its simplest and most powerful forms. Photography, for me, is a way of telling stories—whether through a sweeping landscape, a candid portrait, or the quiet charm of urban scenes. Here, I share my journey, insights, and tips, hoping to inspire you to see the world through a fresh lens. On this blog, you’ll find a mix of personal reflections, photography tips, behind-the-scenes looks at my shoots, and stories from my journey. My goal is to inspire fellow photographers and enthusiasts alike, to share knowledge, and to offer a glimpse into the passion that fuels each click of the shutter.
            </p>
          </div>
        </div>

        {/* Second image with centered text below */}
        <div className="row justify-content-center mb-4">
          <div className="col-sm-8 text-center">
            <img className="img-fluid p-3" src={Galery3} alt="Gallery Image 3" style={{ maxHeight: '600px', width: '100%', objectFit: 'cover' }} />
            <p style={{ fontWeight: 'bold' , color: 'black', textAlign: 'justify', padding: '0px 20px', lineHeight: '1.8', fontSize: '1.4rem', marginTop: '-10px' }}>
            Sketching Life Over Coffee : </p>
            <p style={{ color: 'black', textAlign: 'justify', padding: '0px 20px', lineHeight: '1.8', fontSize: '1.4rem', marginTop: '-10px' }}>Coffee shops are my creative sanctuary—a perfect blend of ambient chatter, warm aromas, and captivating strangers. With my tablet and stylus, I capture the unique gestures and quiet moments of people around me, translating their stories into expressive sketches. Every coffee shop session is a chance to freeze a fleeting moment of everyday life, turning the ordinary into art. Join me as I sketch life, one coffee at a time.
            </p>
          </div>
        </div>

        {/* Third image with text below */}
        <div className="row justify-content-center mb-4">
          <div className="col-sm-8 text-center">
            <img className="img-fluid p-3" src={Galery4} style={{ marginTop: '2px', width: '100%', objectFit: 'cover' }} alt="Gallery Image 4" />
            <p style={{ fontWeight: 'bold' , color: 'black', textAlign: 'justify', padding: '0px 20px', lineHeight: '1.6', fontSize: '1.4rem', marginBottom: '0px' }}>
            Embracing Black and White for Professional Portraits : </p> 
            <p style={{ color: 'black', textAlign: 'justify', padding: '0px 20px', lineHeight: '1.6', fontSize: '1.4rem', marginBottom: '0px' }}>
            This is my corporate headshot, taken in black and white to bring out a timeless, professional feel. I believe monochrome adds elegance, focusing on expression without distractions. I put my best effort into capturing a natural, approachable look, trusting that black and white delivers a polished yet authentic presence across any medium.    </p>
          </div>
        </div>

        {/* Fourth image with text below */}
        <div className="row justify-content-center mb-4">
          <div className="col-sm-8 text-center">
            <img className="img-fluid p-3" src={Galery1} alt="Gallery Image 1" style={{ width: '100%', objectFit: 'cover' }} />
            <p style={{ fontWeight: 'bold' , color: 'black', textAlign: 'justify', padding: '10px 20px', lineHeight: '1.6', fontSize: '1.4rem', marginBottom: '-10px' }}>
            A Play of Shadows and Light : </p>

 <p style={{ color: 'black', textAlign: 'justify', padding: '10px 20px', lineHeight: '1.6', fontSize: '1.4rem', marginBottom: '-10px' }}>
This image may seem like a black-and-white photograph, but it’s actually in full color—a testament to the natural, muted tones that only dusk can provide. Capturing this moody scene required a keen eye for subtle detail and contrast, with the overcast sky casting a soft, monochromatic effect over the landscape. The only hint of color is a lone swan, visible as a faint white dot in the centre, gliding quietly across the water. Moments like these, where nature creates its own grayscale palette, are what draw me to aesthetic photography—finding beauty in the understated and the overlooked.
</p> 
          </div>
        </div>

      </div>
    </div>
  );
}

export default ImageGallery;

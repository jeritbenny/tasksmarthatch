import React from 'react'
import'./Home.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assests/Group 5.png'
import rect from '../assests/front1.jpg'
import car from '../assests/car.png'
import car1 from '../assests/car2.png'
import car3 from '../assests/carsketch.png'

// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
function Home() {
  return (
    <div>
        <div className='Maindiv'>
            <div className='Maintwo'>
        <Navbar bg="transparent" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home" className='absolute'>
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About us</Nav.Link>
            <Nav.Link href="#pricing">Events</Nav.Link>
            <Nav.Link href="#pricing">Gallery</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <div className='me-end'>
           <div className='d-flex bg-warning p-3'>
            <div className='icon'><i class="fa-brands fa-instagram" ></i></div>
            <div className='icon'><i class="fa-brands fa-facebook" ></i></div>
            <div className='icon'><i class="fa-brands fa-twitter" ></i></div>
           </div>
          </div>
        </Container>
      </Navbar>
      </div>
      </div>
      <div className='divtwo'>

        <img src={rect} className='imageone'/>
        <img src={logo} className='imagetwo'></img>
    </div>

    {/* 2nd */}
    <div className='main d-flex bg-dark h-auto'>
    <div className=' w-50'>

      <div className='thriddiv'>
        <div>
            <img src={car} className='img1' alt="img"/>
        </div>
        <div>
            <img src={car1} className='img2'/>
        </div>

      </div>
    </div>
    <div className='together'>
        <h1 className='head'>WELCOME TO FLAT 12</h1>

<p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nisl congue, venenatis dui ac, varius felis. Aliquam justo metus, molestie ac sollicitudin id, mollis sed ligula. Aenean eget fermentum nibh. Praesent dictum neque ipsum, vel aliquet nunc vulputate blandit. Suspendisse tempor nunc non ante fringilla, eget mattis urna imperdiet. Maecenas imperdiet, elit non tincidunt commodo, risus nulla semper mi, eget gravida enim justo et liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id nisl congue, venenatis dui ac, varius felis. Aliquam justo metus, molestie ac sollicitudin id, mollis sed ligula. Aenean eget fermentum nibh. Praesent dictum neque ipsum, vel aliquet nunc vulputate blandit. Suspendisse tempor nunc non ante fringilla, eget mattis urna imperdiet. Maecenas imperdiet, elit non tincidunt commodo, risus nulla semper mi, eget gravida enim justo et libero

</p>
<button className='btn1 py-2 px-3'>READ MORE 
 <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    </div>

{/* end */}

<div className='divfour d-flex'>
    <div className='newdiv'>
        <img src={car3} className='img22'  />
    </div>
    <div>

    </div>

</div>

</div>
      
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'
import landingimg from '../assets/landingimagegif.gif'
import feature1 from '../assets/landing1.jpg'
import feature2 from '../assets/landing2.avif'
import feature3 from '../assets/landing3.jpg'
import { Button, Card } from 'react-bootstrap'


const Landing = () => {
    return (
        <>


            <div style={{ paddingTop: '100px' }} className='container'>
                <div className='row align-items-center'>

                    <div className='col-lg-5'>
                        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam corrupti fuga necessitatibus nulla officiis? Dolores ipsa repellendus voluptatem architecto quae odit eligendi totam dolorem? Alias atque perferendis voluptatem soluta iusto.</p>
                        <Link to={'/home'} className='btn btn-info'>Get Started</Link>
                    </div>

                    <div className='col'></div>

                    <div className='col-lg-6'>
                        <img src={landingimg} className='img-fluid' alt="" />
                    </div>

                </div>

                {/* Feature part */}

                <div className='my-5'>
                    <h3 className='text-center'>Features</h3>
                    <div className='row container mt-5'>
                        <div className='col-lg-4'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img height={'250px'} variant="top" src={feature1} />
                                <Card.Body>
                                    <Card.Title>Managing Videos</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='col-lg-4'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img height={'250px'} variant="top" src={feature2} />
                                <Card.Body>
                                    <Card.Title>Categorise Vedio</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className='col-lg-4'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img height={'250px'} variant="top" src={feature3} />
                                <Card.Body>
                                    <Card.Title>Categorise Videos</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>



                    </div>
                </div>


                {/* Last section */}

                <div className='row align-items-center border rounded p-5'>
                    <div className='col-lg-5'>
                        <h3 className='text-warning'>Simple, Fast and Powerful</h3>
                        <p style={{ textAlign: 'justify' }}>
                            <span className='fw-bolder fs-5'>Play Everything:</span> Lorem ipsum dolor s.it amet consectetur adipisicing.consectetur adipisicing elit. Sapiente quod.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <span className='fw-bolder fs-5'>Categorise Videos:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod.consectetur adipisicing elit. Sapiente quod.
                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <span className='fw-bolder fs-5'>Managing History:</span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod.consectetur adipisicing elit. Sapiente quod.
                        </p>
                    </div>
                    <div className='col'></div>
                    <div className='col-lg-6'>


                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/1WcdjjB_UkQ" title="Neymar Jr &amp; Messi’s MASTERCLASS in the 2015 Berlin Final" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


                    </div>
                </div>

            </div>


        </>
    )
}

export default Landing
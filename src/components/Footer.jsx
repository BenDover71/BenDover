import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <section className="row text-white bg-danger p-3">
                <div className="col-md-4">
                    <h4 className="text-center">About Us</h4>
                    <p>
                    Welcome to Loop & Needle Records Online Vinyl Store, where music lovers and collectors unite to share, discover, and sell the best in vinyl. We’re passionate about the timeless appeal of vinyl records, and we’ve created a platform where you can buy, sell, and showcase your own collection.
                    </p>                   
                   
                </div>
                <div className="col-md-4">
                <p>
                    Whether you're searching for that rare gem to complete your collection or looking to share your treasures with others, Loop & Needle Records is here to make that connection possible. Thank you for supporting small businesses and the art of vinyl.
                     Let's keep the music spinning!
                    </p>
                </div>
                <div className="col-md-4">
                    <h4 className="text-center">Stay Connected</h4><br />
                    <Link to="https://www.facebook.com"><img src="images/fb.png" alt="" /></Link>
                    <Link to="https://www.instagram.com/saw.ti_.sa"><img src="images/in.png" alt="" /></Link>
                    <Link to="https://www.x.com"><img src="images/x.png" alt="" /></Link><br />
                    <p className="text-dark">
                        
                    </p>
                </div>
            </section>


            <footer className="text-white bg-dark text-center p-2">
                <h5>Developed by Nickson. &copy;2025.All Rights Reserved</h5>
            </footer>
        </div>
    )
}

export default Footer
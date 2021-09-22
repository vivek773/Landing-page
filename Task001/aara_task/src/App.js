import React from 'react'
import Navbar from './Navbar'
import { AiFillSetting } from "react-icons/ai";
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className='row'>
          <div className="col-8 shadow p-3 mb-5 bg-white rounded m-2">
            <h4>Poling</h4>
            <div className="row">
              <div className="col-8">
                <div className="row">
                <div class="poll1">40%</div>
                <div class="poll2">20%</div>
                <div class="poll3"></div>
                </div>
              </div>
              <div className="row col-4">
              <div class='input_radio'><input type="radio" name="A" /> Yes</div>
              <div class='input_radio'><input type="radio" name="A" /> No</div>
              </div>
            </div>
            <h4>News Letters</h4>
                <div className="float-right">
                  <span className="m-2">NewsLetter1</span>
                  <span className="m-2">NewsLetter2</span>
                  <span className="m-2">NewsLetter3</span>
                  <span className="m-2">NewsLetter4</span>
                </div>
          </div>
          <div className="col-3 shadow p-3 mb-5 bg-white rounded m-2">
            <img src="unknown.png" />Advertisement
          </div>
          <span class="setting_icon"><AiFillSetting/></span>
        </div>
      </div>

      <div className="container">
        <div className="row">
        <div className="col-4 shadow p-3 mb-5 bg-white rounded">
          <h5>DEBATE</h5> <hr/>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="row">
              <img class="img1" src='https://www.gstatic.com/webp/gallery3/2.png' />
              <p>Hello. How are you today.</p>
            </div>
            <p className="float-right mb-2">11:00</p>
          </div>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="row">
              <p>Hey! I'm fine. Thanks for asking!</p>
              <img class="img1" src='https://www.gstatic.com/webp/gallery3/2.png' alt="profile1" />
            </div>
            <p className="float-left mb-2">11:01</p>
          </div>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="row">
              <img class="img1" src="https://www.gstatic.com/webp/gallery3/2.png" alt="profile1" />
              <p>Sweet! SO, what do you wanna do today ? </p>
            </div>
            <p className="float-right mb-2">11:02</p>
          </div>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="row">
              <p>Nah, I dunno. Play soccer.. or learn more coding perhaps ?</p>
              <img class="img1" src="https://www.gstatic.com/webp/gallery3/2.png" alt="profile1" />
            </div>
            <p className="float-left mb-2">11:05</p>
          </div>
          <div className="shadow p-3 mb-5 bg-white rounded">
            <div className="row">
              <img class="img1" src="https://www.gstatic.com/webp/gallery3/2.png" alt="profile1" />
              <p>Sweet! So, what do you wanna do today ? </p>
            </div>
            <p className="float-right">11:02</p>
          </div> <hr/>
          <button class="conv_btn">Full Conversion</button> <hr/>
          <div className="row1">
            <p>Categories</p><span class="btn">+</span>
          </div>
        </div>
        <div className="col-4 shadow p-3 mb-5 bg-white rounded m-2">
          <h5>RTI</h5> <hr/>
          <ul>
          <li>
            <p>10 minutes ago</p>
            <p className="text-info">YouTube, a video-sharing website. goes live.</p>
          </li>
          <li>
            <p>20 minutes ago</p>
            <p className="text-info">Mashable, a news website and blog, goes live.</p>
          </li>
          <li>
            <p>30 minutes ago</p>
            <p className="text-info">Google acquires YouTube.</p>
          </li>
          <li>
            <p>15 minutes ago</p>
            <p className="text-info">StumbleUpon is acquired by eBay.</p>
          </li>
          <li>
            <p>20 minutes ago</p>
            <p className="text-info">Mashable, a news website and blog, goes live.</p>
          </li>
          <li>
            <p>20 minutes ago</p>
            <p className="text-info">Mashable, a news website and blog, goes live.</p>
          </li>
          <li>
            <p>30 minutes ago</p>
            <p className="text-info">Google acquires YouTube.</p>
          </li>
          <li>
            <p>30 minutes ago</p>
            <p className="text-info">Google acquires YouTube.</p>
          </li>
          <li>
            <p>15 minutes ago</p>
            <p className="text-info">StumbleUpon is acquired by eBay.</p>
          </li>
          <li>
            <p>20 minutes ago</p>
            <p className="text-info">Mashable, a news website and blog, goes live.</p>
            </li>
             <hr/>
            <button className="btn btn-light">Next</button>
          </ul>
        </div>
        <div className="col-3 shadow p-3 mb-5 bg-white rounded m-2">
          <h5>ARTICLE</h5> <hr/>
          <div>
          <ul>
            <li>
            <p>10 minutes ago</p>
            <p className="text-info">YouTube, a video-sharing website. goes live.</p>
            </li>

            <li>
            <p>20 minutes ago</p>
            <p className="text-info">Mashable, a news website and blog, goes live.</p>
            </li>
            <li>
            <p>30 minutes ago</p>
            <p className="text-info">Google acquires YouTube.</p>
            </li>

            <li>
            <p>15 minutes ago</p>
            <p className="text-info">StumbleUpon is acquired by eBay.</p>
            </li>

            <li>
            <p>20 minutes ago</p>
            <p className="text-info">Mashable, a news website and blog, goes live.</p>
            </li>

            <li>
            <p>20 minutes ago</p>
            <p className="text-info">Mashable, a news website and blog, goes live.</p>
            </li>

            <li>
            <p>30 minutes ago</p>
            <p className="text-info">Google acquires YouTube.</p>
            </li>

           <li>
           <p>30 minutes ago</p>
            <p className="text-info">Google acquires YouTube.</p>
           </li>

           <li>
           <p>15 minutes ago</p>
            <p className="text-info">StumbleUpon is acquired by eBay.</p>
           </li>

            <li>
            <p>20 minutes ago</p>
            <p className="text-info">Mashable, a news website and blog, goes live.</p>
            </li>
          </ul>
             <hr/>
            <button className="btn btn-light">Read More...</button>
          </div>
        </div>
        </div>
        <div class="text-center">
      <p>Copyright © Designed & developed by .&nbsp;<a href="">Aara Technologies PVT LTD.</a> 2021 </p>
    </div>
      </div>
    </>
  )
}

export default App


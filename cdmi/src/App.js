import './App.css';
import logoimg from './image/logo.svg';
import logo2 from './image/logo2.svg';
import sec4 from './image/section4.PNG';

import { CgMail } from "react-icons/cg";
import { FaCertificate, FaLinkedinIn, FaInstagram, FaWhatsapp, FaQuoteRight, FaArrowLeft, FaArrowRight, FaHandPointRight, FaUniversity } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaArrowRightLong } from "react-icons/fa6";
import { TfiGoogle } from "react-icons/tfi";
import { FiYoutube } from "react-icons/fi";
import { TfiAngleDown } from "react-icons/tfi";
import { LiaStarSolid } from "react-icons/lia";
import { LiaStarHalfAltSolid } from "react-icons/lia";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";




function App() {
  return (
    <div>
      {/* ========================== Top header============================= */}
      <header>
        <div className="tophd">
          <div l></div>
          <div className="container tophd1">
            <div className="first">
              <div className="icon"><a><CgMail></CgMail></a></div>
              <div><a>info@cdmi.in</a></div>
              <div className="icon"><a><FaCertificate></FaCertificate></a></div>
              <div><a>Verify Certificate</a></div>
            </div>
            <div className="second">
              <a>HAVE ANY QUESTION ? +91 90333 16003</a>
            </div>
            <div className="third">
              <a><FaFacebookF></FaFacebookF></a>
              <a><FaTwitter></FaTwitter></a>
              <a><TfiGoogle></TfiGoogle></a>
              <a><FaLinkedinIn></FaLinkedinIn></a>
              <a><FaInstagram></FaInstagram></a>
              <a><FiYoutube></FiYoutube></a>
              <a><FaWhatsapp></FaWhatsapp></a>
            </div>
          </div>
        </div>

        {/* ================================= Logo header============================ */}

        <div className='container logohd'>
          <div>
            <img src={logoimg} className="logo" alt=''></img>
          </div>
          <div>
            <ul className='menu'>
              <li>HOME</li>
              <li>COURSES<span className='icon'><TfiAngleDown></TfiAngleDown></span></li>
              <li>ACTIVITIES<span className='icon'><TfiAngleDown></TfiAngleDown></span></li>
              <li>BLOG</li>
              <li>KNOW US<span className='icon'><TfiAngleDown></TfiAngleDown></span></li>
              <li>GET IN TOUCH</li>
              <li>STUDENT ZONE<span className='icon'><TfiAngleDown></TfiAngleDown></span></li>
            </ul>
          </div>
        </div>

      </header>
      <main>
        {/* ==================slider================== */}

        <div className='slider'>
          <img src={require(`./image/slider1.webp`)}></img>
        </div>

        {/* =================slider end=============== */}

        {/* =========================section 1 start=================== */}

        <div className='container'>
          <div className='space'>
            <div className='heading'>
              <div className='shape1'></div>
              <div>CREATIVE COURSES</div>
            </div>
            <div className='course'>OFFERED COURSES</div>
            <div className='course_info'>
              <div className='item'>
                <div className='course_img'>
                  <img src={require(`./image/course1.webp`)}></img>
                </div>
                <div className='info_font'>Development Courses</div>
                <div className='info2'>
                  <div className='star'>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarHalfAltSolid></LiaStarHalfAltSolid></a>
                  </div>
                  <div className='btn1'><a>Know More..!</a></div>
                </div>
              </div>
              <div className='item'>
                <div className='course_img'>
                  <img src={require(`./image/course2.webp`)}></img>
                </div>
                <div className='info_font'>Design Courses</div>
                <div className='info2'>
                  <div className='star'>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarHalfAltSolid></LiaStarHalfAltSolid></a>
                  </div>
                  <div className='btn1'><a>Know More..!</a></div>
                </div>
              </div>
              <div className='item'>
                <div className='course_img'>
                  <img src={require(`./image/course3.webp`)}></img>
                </div>
                <div className='info_font'>Programming IT</div>
                <div className='info2'>
                  <div className='star'>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarHalfAltSolid></LiaStarHalfAltSolid></a>
                  </div>
                  <div className='btn1'><a>Know More..!</a></div>
                </div>
              </div>
            </div>
            <div className='course_info'>
              <div className='item'>
                <div className='course_img'>
                  <img src={require(`./image/course4.webp`)}></img>
                </div>
                <div className='info_font'>Trendy Courses</div>
                <div className='info2'>
                  <div className='star'>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarHalfAltSolid></LiaStarHalfAltSolid></a>
                  </div>
                  <div className='btn1'><a>Know More..!</a></div>
                </div>
              </div>
              <div className='item'>
                <div className='course_img'>
                  <img src={require(`./image/course5.jpg`)}></img>
                </div>
                <div className='info_font'>Civil-Mech. Engineering</div>
                <div className='info2'>
                  <div className='star'>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarHalfAltSolid></LiaStarHalfAltSolid></a>
                  </div>
                  <div className='btn1'><a>Know More..!</a></div>
                </div>
              </div>
              <div className='item'>
                <div className='course_img'>
                  <img src={require(`./image/course6.webp`)}></img>
                </div>
                <div className='info_font'>Business Development</div>
                <div className='info2'>
                  <div className='star'>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarSolid></LiaStarSolid></a>
                    <a><LiaStarHalfAltSolid></LiaStarHalfAltSolid></a>
                  </div>
                  <div className='btn1'><a>Know More..!</a></div>
                </div>
              </div>
            </div>
            <div className='view'>
              <div>View All Course<a><FaArrowRightLong></FaArrowRightLong></a></div>
            </div>
          </div>
        </div>
        {/* =========================section 1 end=============== */}

        {/* ============================section 2 start=============== */}
        {/* <div className='sec2'>
          <div className='space sec_2'>
            <div className='part1'>
              <div className='text'>
                <div className='shape1'></div>
                <div>ABOUT US</div>
              </div>
              <p className='sec2_hd'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
              <p className='sec2_p'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
              </p>
              <div className='btn2'><a>Enroll Now...!</a></div>
            </div>
            <div className='part2'>
              <img src={require(`./image/part2_img.webp`)}></img>
            </div>
          </div>
        </div> */}
        <div className='main_two'>
          <div className='text'>
            <div className='two_p1'>
              <div className='shape1'></div>
              <div className='text_cdmi'>ABOUT US</div>
            </div>
            <p className='career'>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</p>
            <p className='prag'>
              Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
            </p>
            <div className='btn_part1'>
              <a className='btn2'>Enroll Now... !</a>
            </div>
          </div>
          <div className='photo'>
            <div className='img_sir'>
              <img src={require('./image/part2_img.webp')}></img>
            </div>
            <p className='play'>
              <a href='https://youtu.be/ZZpoqf-mwEM?si=mxur6i92DSBGZUoo'><FaPlay></FaPlay><i className='p_icon'></i></a>
            </p>
          </div>
        </div>
        {/* =============================section 2 end========================== */}


        {/* =========================================section 3 start============================== */}
        <div className='main_s'>
          <div className='parallex'>
            <div className='score'>
              <div className='p_icon'>
                <img src={require('./image/icon1.png')}></img>
                <h1>18000+</h1>
                <p>HAPPY STUDENTS</p>
              </div>
              <div className='p_icon'>
                <img src={require('./image/icon2.png')}></img>
                <h1>10+</h1>
                <p>CERTIFICATION APPROVAL</p>
              </div>
              <div className='p_icon'>
                <img src={require('./image/icon3.png')}></img>
                <h1>100+</h1>
                <p>CERTIFIED TEACHERS</p>
              </div>
              <div className='p_icon'>
                <img src={require('./image/icon4.png')}></img>
                <h1>12000+</h1>
                <p>STUDENTS PLACED</p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================section 3 end================ */}

        {/* =========================================section 4 start====================== */}
        <div className='container'>
          <div className='space'>
            <div className='sec_4'>
              <div className='sec4_p1'>
                <div className='sec4_1'>
                  <div className='shape1'></div>
                  <div>HAPPY STUDENTS</div>
                </div>
                <h1>ALUMNI SPEAK</h1>
                <div className='quote'>
                  <a className='quote1'><FaQuoteRight></FaQuoteRight></a>
                  <div className='sliderarro'>
                    <a><IoIosArrowBack></IoIosArrowBack></a>
                    <a><IoIosArrowForward></IoIosArrowForward></a>
                  </div>
                </div>
                <p>Good teaching. Well nature staff.. Good education they provide for every student in the institution... Staff's are very quite,decent ,multi talented and well matured to........ Thank you creative multimedia!!!!</p>
                <div className='stdintro'>
                  <img src={require('./image/std1.jpg')}></img>
                  <div className='stdintro1'>
                    <h4>PABADIYA JAIMIN</h4>
                    <a> UI/UX Designer  </a>
                    <span>@</span>
                    <span> ViPrak Web Solutions</span>
                  </div>
                </div>
              </div>
              <div className='sec4_p2'>
                <div><img src={sec4}></img></div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================section 4 end============================ */}

        {/* ==================================section 5 start====================== */}
        <div className='conatiner'>
          <div className='space choose_part'>
            <div className=' offer_part'>
              <div className='heading1'>
                <div className='shape1'></div>
                <div>READ OUR DIFFERENCE</div>
              </div>
              <p className='course'>WHY CHOOSE CREATIVE</p>
            </div>
            <div className='container six_part1'>
              <div className='first1'>
                <div className='one1'>
                  <div className='one_img1'>
                    <img src={require('./image/ch1.png')}></img>
                  </div>
                  <p className='industry'>Industry Experts As Trainers</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img2'>
                    <img src={require('./image/ch2.png')}></img>
                  </div>
                  <p className='industry'>Latest Curriculum</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img3'>
                    <img src={require('./image/ch3.png')}></img>
                  </div>
                  <p className='industry'>Latest Technology</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
              </div>
              <div className='sec1'>
                <div className='one1'>
                  <div className='one_img4'>
                    <img src={require('./image/ch4.png')}></img>
                  </div>
                  <p className='industry'>Interview Assistance</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img5'>
                    <img src={require('./image/ch5.png')}></img>
                  </div>
                  <p className='industry'>Free Upgradation</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
                <div className='one1'>
                  <div className='one_img6'>
                    <img src={require('./image/ch6.png')}></img>
                  </div>
                  <p className='industry'>Lifetime Support</p>
                  <p className='our_p'>
                    Our trainers have 5+ years of industry experience coupled with extensive research and analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================section 5 end===================== */}
        {/* =========================================section 6 start=================== */}
        <div className='container'>
          <div className='space std'>
            <div className='offer_part'>
              <div className='heading1'>
                <div className='shape1'></div>
                <div>STUDENT PLACEMENT</div>
              </div>
              <p className='course'>OUR RECRUITMENT PARTNERS</p>
            </div>
            <div className='company'>
              <div className='inner_com'>
                <div className='one_c'>
                  <a href='https://www.resolutesolutions.in/'> <img src={require('./image/comp1.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://www.cdmi.in/'><img src={require('./image/comp2.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://www.squareinfosoft.com/'><img src={require('./image/comp3.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://trigontic.com/'><img src={require('./image/comp4.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://viraniinfotech.com/'><img src={require('./image/comp5.png')}></img></a>
                </div>
                <div className='one_c'>
                  <a href='https://www.webmigrates.com/'><img src={require('./image/comp6.png')}></img></a>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* =========================================section 6 end===================== */}

        {/* =====================================section 7 start========================== */}
        <div className='container'>
          <div className='demand'>
            <p className='our_d'>Our Demanded Course -</p>
            <div className='parent_btn'>
              <div className='btn3'>
                <p className='multi'>Multimedia Training Institute In Varachha</p>
                <p className='multi'>spoken english class in katargam</p>
                <p className='multi'>Web development training in katargam</p>
                <p className='multi'>Best animation training course</p>
              </div>
              <div className='btn3'>
                <p className='multi'>C++ Programming Language Training Institute In Varachha</p>
                <p className='multi'>Python Training Institute In Varachha</p>
                <p className='multi'>Adobe illustrator design</p>
                <p className='multi'>Adobe xd design training institute in varachha</p>
              </div>
              <div className='btn3'>
                <p className='multi'>Multimedia Training Institute In Varachha</p>
                <p className='multi'>spoken english class in katargam</p>
                <p className='multi'>Web development training in katargam</p>
                <p className='multi'>Best animation training course</p>
              </div>
              <p className='show'>Show more</p>
            </div>
          </div>
        </div>
        {/* ======================================section 7 end============================= */}
        {/* =======================footer start============= */}
        {/* start footer  */}

        <footer className='footer_bg'>
          <div className='container'>
            <div className='top_footer'>
              <div className='container '>
                <div className='footer_logo'>
                  <div className='logo_img' >
                    <img src={logo2}></img>
                  </div>
                </div>
                <p className='text_1'>
                  Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.
                </p>
                <h2 className='text_2'>Follow Us On</h2>
                <div className='icon_5'>
                  <a><FaFacebookF></FaFacebookF></a>
                  <a><FaTwitter></FaTwitter></a>
                  <a><TfiGoogle></TfiGoogle></a>
                  <a><FaLinkedinIn></FaLinkedinIn></a>
                  <a><FaInstagram></FaInstagram></a>
                  <a><FiYoutube></FiYoutube></a>
                  <a><FaWhatsapp></FaWhatsapp></a>
                </div>
              </div>
              <div className="part_2">
                <h2 className='link'>Feature Links </h2>
                <ul className='menu1'>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>about Us</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>Blogs</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>Join Us</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>Company Login</li>
                  <li><FaHandPointRight className='icon_6'></FaHandPointRight>ertificate Verification</li>

                </ul>
              </div>
              <div className='part_3'>
                <h4 className='us'>Contact Us</h4>
                <h3>HEAD OFFICE - YOGICHOWK</h3>
                <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
                <h5>Mo :<span>+91 90333 16003</span></h5>
                <h3>Other Branches</h3>
                <ul className='icon_7'>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Katargam</li>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Mota Varachha</li>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Adajan</li>
                  <li><FaUniversity className='footer-icon'></FaUniversity>Navsari</li>
                </ul>

              </div>
            </div>
          </div>
        </footer>

        {/* end footer  */}
        {/* footer */}
        <div className='copyright'>
          <div className='container'>
            <div className='container'>
              <h3>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</h3>
            </div>
          </div>
        </div>
        {/* end footer */}
        {/* =======================footer end============ */}
      </main>
    </div>

  );
}
export default App;

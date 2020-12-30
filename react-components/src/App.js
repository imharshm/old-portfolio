import './assets/css/react-style.scss';

function App() {
  return (
    <div className="App">
        <div className="page has-scroll">
        {/* preloader */}
        <div className="preloader">
            <div className="centrize full-width">
                <div className="vertical-center">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Container */}
        <div className="container opened" data-animation-in="fadeInLeft" data-animation-out="fadeOutLeft">

            {/* Header */}
            <header className="header">

                {/* menu */}
                <div className="top-menu">
                    <ul>
                        <li className="active">
                            <a href="#about-card">
                                <i className="fa fa-user"></i>
                                <span className="link">About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#resume-card">
                                <i className="fa fa-list-alt"></i>
                                <span className="link">Resume</span>
                            </a>
                        </li>
                        <li>
                            <a href="#works-card">
                                <i className="fa fa-paint-brush"></i>
                                <span className="link">Work</span>
                            </a>
                        </li>
                        <li>
                            <a href="#contacts-card">
                                <i className="fa fa-address-card"></i>
                                <span className="link">Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </header>

            {/* Card - Started */}
            <div className="card-started" id="home-card">

                {/* Profile */}
                <div className="profile">

                    {/* profile image */}
                    <div className="slide" style={{backgroundImage: 'url(./assets/images/bg.jpg)'}}></div>

                    {/* profile photo */}
                    <div className="image">
                        <img src={require('./assets/images/profile.png')} alt="" />
                    </div>

                    {/* profile titles */}
                    <div className="title">Harshal H. Mahajan</div>
                    <div className="subtitle">UI Developer</div>

                    {/* profile socials */}
                    <div className="social">
                        <a target="_blank" href="https://www.linkedin.com/in/imharshm">
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a target="_blank" href="https://github.com/imharshm">
                            <i className="fa fa-github"></i>
                        </a>
                        <a target="_blank" href="https://jsfiddle.net/user/imharshm">
                            <i className="fa fa-jsfiddle"></i>
                        </a>
                        <a target="_blank" href="https://www.freelancer.com/u/harshalhmahajan">
                            <i className="fa fa-foursquare"></i>
                        </a>
                    </div>

                    {/* profile buttons */}
                    <div className="lnks">
                        <a href="Harshal_Mahajan.pdf" className="lnk" target="_blank">
                            <span className="text">Download CV</span>
                            <i className="fa fa-download"></i>
                        </a>
                        <a href="" className="lnk discover">
                            <span className="text">Contact Me</span>
                            <span className="arrow"></span>
                        </a>
                    </div>

                </div>

            </div>

            {/* Card - About */}
            <div className="card-inner animated active" id="about-card">
                <div className="card-wrap">

                    {/* About */}
                    <div className="content about">

                        {/* title */}
                        <div className="title"><span className="first-word">About</span> Me</div>

                        {/* content */}
                        <div className="row">
                            <div className="col border-line-v">
                                <ul className="text-box">
                                    <li> A result oriented 6.6 years of professional experience in <strong>UI/ Front End
                                            Web Development</strong> using different types of Web Technologies.</li>
                                    <li>Strong development and hands on experience in <strong>React JS, Angular, HTML5,
                                            CSS3, SASS, SCSS, Bootstrap, JavaScript and jQuery.</strong></li>
                                    <li>Expertise in <strong>debugging and troubleshooting</strong> existing code using
                                        Firebug and Developer Tools.</li>
                                    <li>Strong experience with <strong>Cross Browser Compatibility issues</strong> and
                                        <strong>Optimization of </strong> for fast loading, including CSS, JavaScript
                                        and HTML minify and best practices of <strong>Responsive Web Design
                                            (RWD)</strong> using Media
                                        Queries.</li>
                                    <li>Working experience in parallax scrolling single page websites and web portals.
                                    </li>
                                    <li>Good understanding of <strong>OOPS Concept</strong> and
                                        <strong>Database</strong>.</li>
                                    <li>Good understanding of Web application development cycle.</li>
                                    <li>Well experienced in using version control systems <strong>SVN, GIT, Bit
                                            Bucket</strong>.</li>
                                    <li>Independent problem solving ability and easily adopting new technologies.</li>
                                    <li>Working in Restaurant Management, Supply chain management (SCM), E-Commerce and
                                        Healthcare domain.</li>
                                    <li>Areas worked on – <strong>PSD to HTML, Email Template, Signature Template,
                                            Audio/Video, Animations</strong>.</li>
                                    <li>Focused and goal driven with strong work ethics, continuously striving for
                                        improvement coupled with commitment to offer quality work.</li>
                                    <li>Adaptable and quick learner with skills to work under pressure.</li>
                                </ul>
                                <ul className="text-box">
                                    <li className="name">Expertise In</li>
                                    <li>Domain Registration</li>
                                    <li>Website &amp; Email Hosting</li>
                                    <li>Search Engine Optimization(SEO)</li>
                                    <li>Responsive Web Design &amp; Web Development</li>
                                    <li>Responsive Newsletter/Mailer Design &amp; Development</li>
                                    <li>Responsive Landing Pages</li>
                                    <li>Responsive Bootstrap Websites</li>
                                    <li>Responsive eCommerce Website</li>
                                    <li>PSD/JPG/PNG to HTML5</li>
                                    <li>PDF to HTML5</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>

                    </div>

                    {/* Services */}
                    <div className="content services">

                        {/* title */}
                        <div className="title"><span className="first-word">Working</span> Areas </div>

                        {/* content */}
                        <div className="row service-items border-line-v">

                            {/* service item */}
                            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-h">
                                <div className="service-item">
                                    <div className="icon"><span className="fa fa-code"></span></div>
                                    <div className="name">Web Development</div>
                                    <p>
                                        Modern and mobile-ready website that will help you
                                        reach all of your marketing, It attracts the right kinds of visitors.
                                    </p>
                                </div>
                            </div>

                            {/* service item */}
                            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-h">
                                <div className="service-item">
                                    <div className="icon"><span className="fa fa-paint-brush"></span></div>
                                    <div className="name">Responsive Web Design</div>
                                    <p>
                                        The website respond to the user's behavior and environment based on screen size,
                                        platform and orientation, automatically respond to the user's
                                        preferences
                                    </p>
                                </div>
                            </div>

                            {/* service item */}
                            <div className="col col-xl-6 col-md-6 col-sm-12">
                                <div className="service-item">
                                    <div className="icon"><span className="fa fa-html5"></span></div>
                                    <div className="name">PSD to HTML</div>
                                    <p>
                                        A web page is designed in a Photoshop Document (PSD) or Zeplin file and then
                                        converted to code
                                        (using HTML, CSS, and JavaScript).
                                    </p>
                                </div>
                            </div>

                            {/* service item */}
                            <div className="col col-xl-6 col-md-6 col-sm-12">
                                <div className="service-item">
                                    <div className="icon"><span className="fa fa-desktop"></span></div>
                                    <div className="name">Unit Testing/Debugging</div>
                                    <p>
                                        Finding and fixing defects in the early stage of the software development cycle,
                                        so it will help to saving much testing time.
                                        </p>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>

                    </div>

                    {/* Fun Fact */}
                    <div className="content fuct">

                        {/* title */}
                        <div className="title"><span className="first-word">Knowledge</span> About</div>

                        {/* content */}
                        <div className="row fuct-items">

                            {/* fuct item */}
                            <div className="col col-xl-3 col-md-3 col-sm-6 border-line-v">
                                <div className="fuct-item">
                                    <div className="icon"><span className="fa fa-star"></span></div>
                                    <div className="name">Agile Model</div>
                                </div>
                            </div>

                            {/* fuct item */}
                            <div className="col col-xl-3 col-md-3 col-sm-6 border-line-v">
                                <div className="fuct-item">
                                    <div className="icon"><span className="fa fa-github"></span></div>
                                    <div className="name">Git workflow</div>
                                </div>
                            </div>

                            {/* fuct item */}
                            <div className="col col-xl-3 col-md-3 col-sm-6 border-line-v">
                                <div className="fuct-item">
                                    <div className="icon"><span className="fa fa-rocket"></span></div>
                                    <div className="name">Zeplin</div>
                                </div>
                            </div>

                            {/* fuct item */}
                            <div className="col col-xl-3 col-md-3 col-sm-6 border-line-v">
                                <div className="fuct-item">
                                    <div className="icon"><span className="fa fa-adjust"></span></div>
                                    <div className="name">VS Code</div>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Card - Resume */}
            <div className="card-inner" id="resume-card">
                <div className="card-wrap">

                    {/* Resume */}
                    <div className="content resume">

                        {/* title */}
                        <div className="title">
                            <div className="first-letter">Resume</div>
                        </div>

                        {/* content */}
                        <div className="row">

                            {/* experience */}
                            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-v">
                                <div className="resume-title border-line-h">
                                    <div className="icon"><i className="fa fa-briefcase"></i></div>
                                    <div className="name">Experience</div>
                                </div>
                                <div className="resume-items">
                                    <div className="resume-item border-line-h active">
                                        <div className="date">2019 - Present</div>
                                        <div className="name">Senior UI Developer</div>
                                        <div className="company">
                                            <a href="https://www.torqus.com/" target="_blank">Torqus System Pvt Ltd</a>
                                        </div>
                                        <p>
                                            Collaborate with creative and development teams on the execution of
                                            ideas.
                                        </p>
                                        <p> Monitored technical aspects of the front-end delivery of projects for all
                                            hotel operations.</p>
                                        <p> Optimize website performance using latest technology.</p>
                                    </div>
                                    <div className="resume-item border-line-h">
                                        <div className="date">2017 - 2019</div>
                                        <div className="name">UI Developer</div>
                                        <div className="company">
                                            <a href="http://www.scorgtechnologies.com/" target="_blank"> Scorg
                                                Technologies Pvt Ltd</a>
                                        </div>
                                        <p>
                                            Invovled in creating webpages and make it responsive as per clients
                                            presences like devices, device different type of sizes using HTML5, CSS3,
                                            Bootstrap and Angular JS.
                                        </p>
                                        <p>Worked on Health Care Domain, handle all the functionalities on UI site
                                            related to Hospital Operations.</p>
                                    </div>
                                    <div className="resume-item">
                                        <div className="date">2015 - 2017</div>
                                        <div className="name">UI Developer</div>
                                        <div className="company">
                                            <a href="http://www.pasistence.com/" target="_blank">Pasistence Consultancy
                                                Services Pvt Ltd</a>
                                        </div>
                                        <p>
                                            Created webpages using Boostrap 3, HTML5, SCSS and make it cross browser
                                            compatable for all the browers.
                                        </p>
                                        <p>Worked on E-Commerence domain, handle payment gateway intergration on CC
                                            Avenue.</p>
                                    </div>
                                    <div className="resume-item">
                                        <div className="date">2014 - 2015</div>
                                        <div className="name">Junior Software Developer</div>
                                        <div className="company">
                                            <a href="https://www.vishwjeet.com/" target="_blank">Vishwjeet Green Power
                                                Pvt Ltd</a>
                                        </div>
                                        <p>
                                            Joined as fresher, worked website development using HTML, CSS, jQuery and
                                            JavaScript.
                                        </p>
                                        <p>Worked on Inventory Management System, design webpages for different type
                                            operations related to inventory.</p>
                                    </div>
                                </div>
                            </div>

                            {/* education */}
                            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-v">
                                <div className="resume-title border-line-h">
                                    <div className="icon"><i className="fa fa-university"></i></div>
                                    <div className="name">Education</div>
                                </div>
                                <div className="resume-items">
                                    <div className="resume-item border-line-h">
                                        <div className="date">2009 - 2013</div>
                                        <div className="name">North Maharashtra University</div>
                                        <div className="company">Jalgaon, Maharashtra</div>
                                        <p>
                                            Bachelor's Degree in Computer Science
                                        </p>
                                    </div>
                                    <div className="resume-item border-line-h">
                                        <div className="date">2008 - 2009</div>
                                        <div className="name">HSC</div>
                                        <div className="company">Jamner, Maharashtra</div>
                                        <p>
                                            Completed Higher Secondary Education.
                                        </p>
                                    </div>
                                    <div className="resume-item">
                                        <div className="date">2006 - 2007</div>
                                        <div className="name">SSC</div>
                                        <div className="company">Tandalwadi, Jalgaon, Maharashtra</div>
                                        <p>
                                            Completed Secondary School Education.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>

                    </div>

                    {/* Skills */}
                    <div className="content skills">

                        {/* title */}
                        <div className="title"><span className="first-word">My</span> Skills</div>

                        {/* content */}
                        <div className="row">

                            {/* skill item */}
                            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-v">
                                <div className="skills-list circles">
                                    <div className="skill-title border-line-h">
                                        <div className="icon"><i className="fa fa-code"></i></div>
                                        <div className="name">Coding</div>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="name">HTML CSS SCSS</div>
                                            <div className="progress p97">
                                                <span>97%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">React JS</div>
                                            <div className="progress p85">
                                                <span>85%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">JavaScript jQuery</div>
                                            <div className="progress p85">
                                                <span>85%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">Boostrap 3/4 </div>
                                            <div className="progress p95">
                                                <span>95%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">Angular </div>
                                            <div className="progress p75">
                                                <span>75%</span>
                                                <div className="slice">
                                                    <div className="bar"></div>
                                                    <div className="fill"></div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* skill item */}
                            <div className="col col-xl-6 col-md-6 col-sm-12 border-line-v">
                                <div className="skills-list list">
                                    <div className="skill-title border-line-h">
                                        <div className="icon"><i className="fa fa-android-list"></i></div>
                                        <div className="name">Knowledge</div>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="name">Website design and development</div>
                                        </li>
                                        <li>
                                            <div className="name">Website hosting</div>
                                        </li>
                                        <li>
                                            <div className="name">Unit testing and debugging</div>
                                        </li>
                                        <li>
                                            <div className="name">Responsive web design</div>
                                        </li>
                                        <li>
                                            <div className="name">Cross browser compatibility </div>
                                        </li>
                                        <li>
                                            <div className="name">Modern and mobile-ready</div>
                                        </li>
                                        <li>
                                            <div className="name">Graphics and animations</div>
                                        </li>
                                        <li>
                                            <div className="name">Search engine optimization</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Card - Work */}
            <div className="card-inner work" id="works-card">
                <div className="card-wrap">

                    {/* Work */}
                    <div className="content work">

                        {/* title */}
                        <div className="title"><span className="first-word">Recent</span> Works</div>

                        {/* content */}
                        <div className="row border-line-v">

                            {/* work item */}
                            <div className="col col-xl-12 col-md-12 col-sm-12 border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href="https://pos.torqus.com" target="_blank">
                                            <img src={require('./assets/images/work/work-1.jpg')} alt="" />
                                            <span className="info">
                                                <span className="fa fa-document-text"></span>
                                            </span>
                                            {/* <span className="date"><strong>2`0</strong>Jun</span> */}
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href="https://pos.torqus.com" className="name">POS by Torqus System Pvt Ltd</a>
                                        <div className="category">Torqus Restaurant POS integrates one of the most advanced
                                            security technologies clubbed with innovative programming to provide you
                                            with smart user access. It allows you to selectively restrict and grant
                                            access to your workforce, from stewards to managers to co-owners. Apart from
                                            this, it is also possible to customize the configuration of every button as
                                            per the needs of the user.</div>
                                    </div>
                                </div>
                            </div>

                            {/* work item */}
                            <div className="col col-xl-12 col-md-12 col-sm-12 border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href="https://scm.torqus.com/" target="_blank">
                                            <img src={require('./assets/images/work/work-2.jpg')} alt="" />
                                            <span className="info">
                                                <span className="fa fa-document-text"></span>
                                            </span>
                                            {/* <span className="date"><strong>20</strong>Jun</span> */}
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href="https://scm.torqus.com/" className="name">SCM by Torqus System Pvt Ltd</a>
                                        <div className="category">The Restaurant SCM Software integrates one of the most
                                            advanced security technologies clubbed with innovative networking
                                            capabilities to offer smart user access. By providing you with a virtual
                                            controller for your restaurant chain, it allows you to selectively restrict
                                            and grant access to your workforce depending on their role and designation,
                                            from stewards to managers to co-owners. Apart from this, it is also possible
                                            to customise the configuration of every button as per the needs of the user.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* work item */}
                            <div className="col col-xl-12 col-md-12 col-sm-12 border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href="https://worldhelpgroup.org/" target="_blank">
                                            <img src={require('./assets/images/work/work-3.jpg')} alt="" />
                                            <span className="info">
                                                <span className="fa fa-document-text"></span>
                                            </span>
                                            {/* <span className="date"><strong>20</strong>Jun</span> */}
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href="https://worldhelpgroup.org/" className="name">World Help Group</a>
                                        <div className="category">World Help Group is a platform where we provide the needy
                                            across the globe with essential requirements which include FOOD &amp;
                                            Essentials.

                                            They do this by collaborating with vendors &amp; providing them necessary
                                            support
                                            for efficient &amp; faster food support to fight Hunger.</div>
                                    </div>
                                </div>
                            </div>

                            {/* work item */}
                            <div className="col col-xl-12 col-md-12 col-sm-12 border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href="http://www.scorgtechnologies.com/" target="_blank">
                                            <img src={require('./assets/images/work/work-4.jpg')} alt="" />
                                            <span className="info">
                                                <span className="fa fa-document-text"></span>
                                            </span>
                                            {/* <span className="date"><strong>19</strong>Jun</span> */}
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href="http://www.scorgtechnologies.com/" className="name">Company Website</a>
                                        <div className="category">SCORG Technologies - A global software development and
                                            technology services company with deep domain experience in multiple industry
                                            verticals. We have acquired expert technological competency in Agile &amp;
                                            DevOps model for web-based and mobile application development for hybrid and
                                            native framework.</div>
                                    </div>
                                </div>
                            </div>

                            {/* work item */}
                            <div className="col col-xl-12 col-md-12 col-sm-12 border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href="https://drrescribe.com/application/app.html#/access/login"
                                            target="_blank">
                                            <img src={require('./assets/images/work/work-5.jpg')} alt="" />
                                            <span className="info">
                                                <span className="fa fa-document-text"></span>
                                            </span>
                                            {/* <span className="date"><strong>19</strong>Jun</span> */}
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href="https://drrescribe.com/application/app.html#/access/login"
                                            className="name">EMR by Scorg Technology</a>
                                        <div className="category">SCORG EMR is a comprehensive practice management solution
                                            suite – developed with cutting edge technology – to enable healthcare
                                            providers build their practice on a virtual platform. An integrated and
                                            scalable software solution, the practice management software streamlines
                                            Patient Life Cycle Management right from appointment to discharge.</div>
                                    </div>
                                </div>
                            </div>

                            {/* work item */}
                            <div className="col col-xl-12 col-md-12 col-sm-12 border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href="http://vedproductions.com/" target="_blank">
                                            <img src={require('./assets/images/work/work-6.jpg')} alt="" />
                                            <span className="info">
                                                <span className="fa fa-document-text"></span>
                                            </span>
                                            {/* <span className="date"><strong>20</strong>Jun</span> */}
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href="http://vedproductions.com/" className="name">Photography Portfolio</a>
                                        <div className="category">Vedproductions is specialising in cinematography, Fashion,
                                            wedding, commercial, All Kind of Photograph, Post production work.</div>
                                    </div>
                                </div>
                            </div>

                            {/* work item */}
                            <div className="col col-xl-12 col-md-12 col-sm-12 border-line-h">
                                <div className="box-item">
                                    <div className="image">
                                        <a href="https://www.pdccbank.com/" target="_blank">
                                            <img src={require('./assets/images/work/work-7.jpg')} alt="" />
                                            <span className="info">
                                                <span className="fa fa-document-text"></span>
                                            </span>
                                            {/* <span className="date"><strong>20</strong>Jun</span> */}
                                        </a>
                                    </div>
                                    <div className="desc">
                                        <a href="https://www.pdccbank.com/" className="name">PDCC Bank Website</a>
                                        <div className="category">Bank - Pune District Central Co-Operative Bank
                                            Connected more than three thousand farmers to the integrated internet
                                            interface of Bank. Also, the first ever company in India to integrate Paytm
                                            portal integration for online screening of more than five lakh citizens in
                                            Maharashtra providing other operational formalities.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="clear"></div>
                        </div>

                    </div>

                </div>
            </div>

            {/* Card - Contacts */}
            <div className="card-inner contacts" id="contacts-card">
                <div className="card-wrap">

                    {/* Conacts Info */}
                    <div className="content contacts">

                        {/* title */}
                        <div className="title"><span className="first-word">Get</span> in Touch</div>

                        {/* content */}
                        <div className="row">
                            <div className="col col-xl-12 col-md-12 col-sm-12 border-line-v">
                                <div id="social-test">
                                    <ul className="social">
                                        <li className="linkedin">
                                            <a href="https://www.linkedin.com/in/imharshm" target="_blank"
                                                rel="noopener noreferrer">
                                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="github">
                                            <a href="https://github.com/imHarshM" target="_blank"
                                                rel="noopener noreferrer">
                                                <i className="fa fa-github" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="jsfiddle">
                                            <a href="https://jsfiddle.net/user/imharshm" target="_blank"
                                                rel="noopener noreferrer">
                                                <i className="fa fa-jsfiddle" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="twitter">
                                            <a href="https://twitter.com/imharshm_" target="_blank"
                                                rel="noopener noreferrer">
                                                <i className="fa fa-twitter" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="instagram">
                                            <a href="https://www.instagram.com/imharshm" target="_blank"
                                                rel="noopener noreferrer">
                                                <i className="fa fa-instagram" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="facebook">
                                            <a href="https://facebook.com/imharshm" target="_blank"
                                                rel="noopener noreferrer">
                                                <i className="fa fa-facebook" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="map-marker">
                                            <a href="https://www.google.co.in/maps/contrib/109147557342255815295/contribute/@19.7474337,73.6666569,8z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=en%26authuser=1"
                                                target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="youtube">
                                            <a href="https://www.youtube.com/channel/UCdgTDgicQbRDMWNEnCNW9JA"
                                                target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-youtube" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="whatsapp">
                                            <a href="https://wa.me/919730614181" target="_blank"
                                                rel="noopener noreferrer">
                                                <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="phone">
                                            <a href="tel:+919730614181">
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                        <li className="envelope-o">
                                            <a href="mailto:hmahajan38@gmail.com">
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="content contacts">

                        {/* title */}
                        <div className="title"><span className="first-word">Contact</span> Form</div>

                        {/* content */}
                        <div className="row">
                            <div className="col border-line-v">
                                <div className="contact_form">
                                    <form id="contact-form" method="post" noValidate="novalidate">
                                        <div className="row">
                                            <div className="col col-xl-6 col-md-6 col-sm-12">
                                                <div className="group-val">
                                                    <input type="text" name="name" placeholder="Full Name" />
                                                </div>
                                            </div>
                                            <div className="col col-xl-6 col-md-6 col-sm-12">
                                                <div className="group-val">
                                                    <input type="text" name="email" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div className="col col-xl-12 col-md-12 col-sm-12">
                                                <div className="group-val">
                                                    <textarea name="message" placeholder="Your Message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="align-left">
                                            <a href="#" className="button"
                                                onClick="$('#contact-form').submit(); return false;">
                                                <span className="text">Send Message</span>
                                                <span className="arrow"></span>
                                            </a>
                                        </div>
                                    </form>
                                    <div className="alert-success">
                                        <p>Thanks, your message is sent successfully.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>





    </div>
  );
}

export default App;

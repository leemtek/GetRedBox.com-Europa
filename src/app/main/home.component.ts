import { Component } from "@angular/core";

@Component({
    selector: "grb-main-home",
    template: `
        <!-- banner start -->
        <!-- ================ -->
        <div id="banner" class="banner clearfix">

            <!-- slideshow start -->
            <!-- ================ -->
            <div class="slideshow">

                <!-- slider revolution start -->
                <!-- ================ -->
                <div class="slider-banner-container">
                    <div class="slider-banner-fullscreen">
                        <ul class="slides">
                            <!-- slide 1 start -->
                            <!-- ================ -->
                            <li data-transition="fade" data-slotamount="1" data-masterspeed="500" data-saveperformance="on" data-title="Red Box Business Solutions">

                            <!-- main image -->
                            <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/wallpaper-desktop-with-laptop.jpg" alt="slidebg2" data-bgposition="center top"  data-bgrepeat="no-repeat" data-bgfit="cover">

                            <!-- Transparent Background -->
                            <div class="tp-caption dark-translucent-bg"
                                data-x="center"
                                data-y="bottom"
                                data-speed="600"
                                data-start="0">
                            </div>

                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption sfb fadeout text-center large_white"
                                data-x="center"
                                data-y="110"
                                data-speed="500"
                                data-start="1000"
                                data-easing="easeOutQuad">Red Box Business Solutions
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption sfb fadeout text-center large_white tp-resizeme hidden-xs"
                                data-x="center"
                                data-y="150"
                                data-speed="500"
                                data-start="1300"
                                data-easing="easeOutQuad"><div class="separator light"></div>
                            </div>

                            <!-- LAYER NR. 3 -->
                            <div class="tp-caption sfb fadeout medium_white text-center hidden-xs"
                                data-x="center"
                                data-y="180"
                                data-speed="500"
                                data-start="1300"
                                data-easing="easeOutQuad"
                                data-endspeed="600">Providing full IT Management services, Cable &amp; Wiring, <br />Web Development, and friendly support for your business.
                            </div>

                            <!-- LAYER NR. 4 -->
                            <div class="tp-caption sfb fadeout small_white text-center smooth-scroll"
                                data-x="center"
                                data-y="260"
                                data-speed="500"
                                data-start="1600"
                                data-easing="easeOutQuad"
                                data-endspeed="600"><a href="#about" class="btn radius-50 btn-dark btn-animated">Read More <i class="fa fa-arrow-right"></i></a> <span class="pl-5 pr-5">or</span> <a href="#footer" class="btn radius-50 btn-default btn-animated">Contact Us <i class="fa fa-envelope"></i></a>
                            </div>

                            </li>
                            <!-- slide 1 end -->

                            <!-- slide 2 start -->
                            <!-- ================ -->
                            <li data-transition="random" data-slotamount="7" data-masterspeed="500" data-saveperformance="on" data-title="Full IT Service Management">

                            <!-- main image -->
                            <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/wallpaper-business-park.jpg" alt="slidebg2" data-bgposition="center top"  data-bgrepeat="no-repeat" data-bgfit="cover">

                            <!-- Transparent Background -->
                            <div class="tp-caption dark-translucent-bg"
                                data-x="center"
                                data-y="bottom"
                                data-speed="500"
                                data-easing="easeOutQuad"
                                data-start="0">
                            </div>

                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption sfb fadeout large_white"
                                data-x="left"
                                data-y="50"
                                data-speed="500"
                                data-start="1000"
                                data-easing="easeOutQuad"
                                data-end="10000">Full IT Service Management
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption sfb fadeout text-left medium_white"
                                data-x="left"
                                data-y="130"
                                data-speed="500"
                                data-start="1300"
                                data-easing="easeOutQuad"
                                data-endspeed="600"><span class="icon default-bg circle small hidden-xs"><i class="fa fa-laptop"></i></span> Voice [telephone. VoIP. SIP]
                            </div>

                            <!-- LAYER NR. 3 -->
                            <div class="tp-caption sfb fadeout text-left medium_white"
                                data-x="left"
                                data-y="190"
                                data-speed="500"
                                data-start="1600"
                                data-easing="easeOutQuad"
                                data-endspeed="600"><span class="icon default-bg circle small hidden-xs"><i class="icon-check"></i></span> IT [data. MSP. servers. surveillance]
                            </div>

                            <!-- LAYER NR. 4 -->
                            <div class="tp-caption sfb fadeout text-left medium_white"
                                data-x="left"
                                data-y="250"
                                data-speed="500"
                                data-start="1900"
                                data-easing="easeOutQuad"
                                data-endspeed="600"><span class="icon default-bg circle small hidden-xs"><i class="icon-gift"></i></span> Cable + Wire [licensed low-voltage contractor]
                            </div>

                            <!-- LAYER NR. 5 -->
                            <div class="tp-caption sfb fadeout text-left medium_white"
                                data-x="left"
                                data-y="310"
                                data-speed="500"
                                data-start="2200"
                                data-easing="easeOutQuad"
                                data-endspeed="600"><span class="icon default-bg circle small hidden-xs"><i class="icon-hourglass"></i></span> Marketing + Design [websites &amp; social media solutions]
                            </div>

                            <!-- LAYER NR. 6 -->
                            <div class="tp-caption sfb fadeout small_white smooth-scroll"
                                data-x="left"
                                data-y="380"
                                data-speed="500"
                                data-start="2500"
                                data-easing="easeOutQuad"
                                data-endspeed="600"><a href="#footer" class="btn btn-default btn-lg btn-animated">Contact Us <i class="fa fa-phone"></i></a>
                            </div>
                            </li>
                            <!-- slide 2 end -->
                        </ul>
                        <div class="tp-bannertimer"></div>
                    </div>
                </div>
                <!-- slider revolution end -->

            </div>
            <!-- slideshow end -->

        </div>
        <!-- banner end -->

        <div id="page-start"></div>

        <!-- section -->
        <!-- ================ -->
        <section id="about"  class="main-container">
            <div class="container">
                <div class="col-md-8 col-md-offset-2">
                    <h2 class="text-center title"><span class="text-redbox">Red Box</span> Business Solutions</h2>
                    <div class="separator"></div>
                    <p class="large text-center">
                        <span class="text-redbox">Red Box</span> Business Solutions has implemented a variety of voice, data, surveillance
                        and design related technologies for businesses throughout the Bay Area. Having
                        served Bay Area business technology needs for over 20 years, we are well positioned
                        to advise on best-practice, cost-effective strategies that maximize output and
                        streamline communications to take your organization to the <span class="text-redbox">next level</span>.
                    </p>
                </div>

            </div>
            <br>
        </section>
        <!-- section end -->

        <!-- section start -->
        <!-- ================ -->
        <section class="dark-translucent-bg pv-30 background-img-it" style="background-position:50% 30%;">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="text-center">Why <strong>Choose</strong> Us?</h2>
                        <div class="separator"></div>
                        <p class="large text-center">
                            We have considerable experience in Business Communications + Information Technology with a proven
                            track record in completing Voice + IT projects.  With certified Project Management Professionals, licensed
                            low-voltage contractors, and certified Web Developers in Full Stack Web Development and Amazon Web Services, we are
                            well positioned to meet your businesses technology needs.
                        </p>
                    </div>
                </div>

                <!-- Accordions and Meters -->
                <!-- section start -->
                <!-- ================ -->
                <div class="section">
                    <div class="container">
                        <h3><strong>More</strong> Reasons</h3>
                        <div class="separator-2"></div>
                        <div class="row">
                            <!-- accordion start -->
                            <!-- ================ -->
                            <div class="col-md-6">
                                <div class="panel-group collapse-style-1 no-text-decoration" id="accordion">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" class="no-text-decoration">
                                                    <i class="fa fa-rocket pr-10"></i>Solid + Proven Experience
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in">
                                            <div class="panel-body text-black">
                                                We've been servicing organizations with their IT project endeavors for over a decade.  Unlike many of our
                                                competitors, our specialized team are professionally trained and experienced in IT, Cable &amp; Wiring, and
                                                Web Development.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="collapsed no-text-decoration">
                                                    <i class="fa fa-leaf pr-10"></i>Unwavering Commitment
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse">
                                            <div class="panel-body text-black">
                                                Our commitment to supporting you doesn't end at the project completion.  We'll make sure that you are fully supported
                                                during your hours of operation and ensure you're able to conduct business as usual.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" class="collapsed no-text-decoration">
                                                    <i class="fa fa-heart pr-10"></i>For the Love of Technology
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse">
                                            <div class="panel-body text-black">
                                                This isn't just a job for us, it's our passion. Helping businesses run more efficiently and effectively, improving your
                                                image, increasing your revenues and decreasing your overhead is what we're all about. We have done exactly this for
                                                many Bay Area businesses. Let our love of technology bring more value to your business today!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- accordion end -->
                            <!-- progress bars start -->
                            <!-- ================ -->
                            <div class="col-md-6">
                                <div class="progress style-1">
                                    <span class="text"></span>
                                    <div class="progress-bar progress-bar-default" data-animate-width="100%">
                                        <span class="label object-non-visible text-white" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Project Management</span>
                                    </div>
                                </div>
                                <div class="progress mt-20 style-1">
                                    <span class="text"></span>
                                    <div class="progress-bar progress-bar-default" data-animate-width="95%">
                                        <span class="label object-non-visible text-white" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Information Technology</span>
                                    </div>
                                </div>
                                <div class="progress style-1">
                                    <span class="text"></span>
                                    <div class="progress-bar progress-bar-default" data-animate-width="95%">
                                        <span class="label object-non-visible text-white" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Cable &amp; Wiring</span>
                                    </div>
                                </div>
                                <div class="progress style-1">
                                    <span class="text"></span>
                                    <div class="progress-bar progress-bar-default" data-animate-width="90%">
                                        <span class="label object-non-visible text-white" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Voice (telephone, VOIP, SIP)</span>
                                    </div>
                                </div><div class="progress style-1">
                                    <span class="text"></span>
                                    <div class="progress-bar progress-bar-default" data-animate-width="90%">
                                        <span class="label object-non-visible text-white" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Server, Desktop, Networking</span>
                                    </div>
                                </div>
                                <div class="progress style-1">
                                    <span class="text"></span>
                                    <div class="progress-bar progress-bar-default" data-animate-width="90%">
                                        <span class="label object-non-visible text-white" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Marketing &amp; Design</span>
                                    </div>
                                </div>
                                <div class="progress style-1">
                                    <span class="text"></span>
                                    <div class="progress-bar progress-bar-default" data-animate-width="90%">
                                        <span class="label object-non-visible text-white" data-animation-effect="fadeInLeftSmall" data-effect-delay="1000">Web Development</span>
                                    </div>
                                </div>
                            </div>
                            <!-- progress bars end -->
                        </div>
                    </div>
                </div>
                <!-- section end -->
            </div>
        </section>
        <!-- section end -->

        <!-- section start -->
        <!-- ================ -->
        <section id="services" class="light-gray-bg pv-30 clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="text-center">Services + Solutions</h2>
                        <div class="separator"></div>
                        <p class="large text-center">
                            Our professional services revolve around communication, data and marketing solutions that we've been offering
                            for 20 years. These solutions include the following.
                        </p>
                    </div>

                    <div class="col-sm-3">
                        <div class="image-box style-2 mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/services-desktop-phone.jpg" alt="VOIP Services">
                                <a href="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/services-desktop-phone.jpg" class="overlay-link popup-img"><i class="fa fa-plus"></i></a>
                                <div class="overlay-bottom hidden-xs">
                                    <div class="text">
                                        <p class="lead margin-clear text-left">Voice</p>
                                    </div>
                                </div>
                            </div>
                            <div class="body padding-horizontal-clear">
                                <p>
                                    With over 20 years in the voice and data universe, <span class="text-redbox">Red Box Business
                                    Solutions</span> is uniquely experienced to efficiently work on a variety of
                                    telecommunication platforms and equipment
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="image-box style-2 mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/services-server-rack.jpg" alt="Information Technology">
                                <a href="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/services-server-rack.jpg" class="overlay-link popup-img"><i class="fa fa-plus"></i></a>
                                <div class="overlay-bottom hidden-xs">
                                    <div class="text">
                                        <p class="lead margin-clear text-left">IT Services</p>
                                    </div>
                                </div>
                            </div>
                            <div class="body padding-horizontal-clear">
                                <p>
                                    With business technology changing at a rapid pace our clients count on us to be their
                                    go-to technical experts within their <span class="text-redbox">IT infrastructure</span>. We offer a <span class="text-redbox">streamlined</span> and
                                    <span class="text-redbox">convenient</span> process to <span class="text-redbox">simplify</span> business IT needs. Working in a variety of vertical
                                    markets gives us experience and knowledge of various industry needs, obstacles and
                                    proven solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="image-box style-2 mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/services-ethernet-cables.jpg" alt="Cable and Wire">
                                <a href="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/services-ethernet-cables.jpg" class="overlay-link popup-img"><i class="fa fa-plus"></i></a>
                                <div class="overlay-bottom hidden-xs">
                                    <div class="text">
                                        <p class="lead margin-clear text-left">Cable + Wire</p>
                                    </div>
                                </div>
                            </div>
                            <div class="body padding-horizontal-clear">
                                <p>
                                    As a California C-7 licensed low-voltage wiring contractor Red Box Business
                                    Solutions offers a wide range of cable installation, management and structured
                                    wire solutions.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3">
                        <div class="image-box style-2 mb-20">
                            <div class="overlay-container overlay-visible">
                                <img src="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/services-webdev-ideas.jpg" alt="Web Development">
                                <a href="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/services-webdev-ideas.jpg" class="overlay-link popup-img"><i class="fa fa-plus"></i></a>
                                <div class="overlay-bottom hidden-xs">
                                    <div class="text">
                                        <p class="lead margin-clear text-left">Marketing + Design</p>
                                    </div>
                                </div>
                            </div>
                            <div class="body padding-horizontal-clear">
                                <p>
                                    Having launched many successful commercial social media and public
                                    relations projects from assessment, to strategy, to execution; Red Box
                                    Business Solutions has helped many business get their name and message out
                                    there online and help create a positive, approachable business image.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- section end -->



        <!-- section start -->
        <!-- ================ -->
        <section class="pv-30 dark-translucent-bg footer-top animated-text default-hovered" style="background-color:rgba(0,0,0,0.6);">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="call-to-action text-center">
                            <div class="row">
                                <div class="col-sm-8">
                                    <h2>Let's talk about what we can solve for you</h2>
                                    <h2>Call us today at 925-513-0000 or email us</h2>
                                </div>
                                <div class="col-sm-4">
                                    <p class="mt-10"><a href="mailto:seana@getredbox.com" class="btn btn-animated btn-lg btn-gray-transparent">Contact Us Now<i class="fa fa-envelope pl-20"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `,
    styles: [``]
})
export class HomeComponent {

}
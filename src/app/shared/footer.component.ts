import { Component } from "@angular/core";

@Component({
    selector: "grb-shared-footer",
    template: `
        <!-- section end -->
        <!-- footer start (Add "dark" class to #footer in order to enable dark footer) -->
        <!-- ================ -->
        <footer id="footer" class="clearfix ">
            <!-- .footer start -->
            <!-- ================ -->
            <div class="footer">
                <div class="container">
                    <div class="footer-inner">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="footer-content">
                                    <div class="logo-footer"><img id="logo-footer" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/logo-redbox.png" class="height-75" alt="GetRedBox.com"></div>
                                    <p>
                                        We have a passion for what we do and it shows. Our clients are continually impressed with how well our communication
                                        solutions improve their operations and how the latest technologies can save them thousands of dollars on their bottom
                                        line. Contact us to find out more about what we can do to save you money and improve your business today.
                                    </p>
                                    <ul class="list-inline mb-20">
                                        <li><i class="text-default fa fa-map-marker pr-5"></i> Brentwood, CA</li>
                                        <li><i class="text-default fa fa-phone pl-10 pr-5"></i> +1 925-513-0000</li>
                                        <li><a href="mailto:seana@getredbox.com" class="link-dark"><i class="text-default fa fa-envelope-o pl-10 pr-5"></i> seana@getredbox.com</a></li>
                                    </ul>
                                    <div class="separator-2"></div>
                                    <ul class="social-links circle margin-clear animated-effect-1">
                                        <li class="facebook"><a target="_blank" href="http://fb.me/GetRedBox"><i class="fa fa-facebook"></i></a></li>
                                        <li class="twitter"><a href="http://www.twitter.com"><i class="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="footer-content">
                                    <grb-main-home-contact-us>Loading...</grb-main-home-contact-us>
                                </div><!-- /footer-content -->
                            </div><!-- /col-md-6 -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- .footer end -->

            <!-- .subfooter start -->
            <!-- ================ -->
            <div class="subfooter">
                <div class="container">
                    <div class="subfooter-inner">
                        <div class="row">
                            <div class="col-md-12">
                                <p class="text-center">
                                    Copyright © {{getCurrentYear()}} GetRedBox.com. All Rights Reserved&nbsp;&nbsp;|&nbsp;&nbsp;
                                    Web Development by <a target="_blank" href="https://www.linkedin.com/in/duaneleem">Duane Leem</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- .subfooter end -->

        </footer>
        <!-- footer end -->
    `,
    styles: [``]
})
export class FooterComponent {
    getCurrentYear(): string {
        let today = new Date();
        return today.getFullYear().toString();
    } // getCurrentYear()
}
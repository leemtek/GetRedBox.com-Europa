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
                                <div class="footer-content" ng-controller="ctrlSendEmail">
                                    <h2 class="title">Contact Us</h2>
                                    <div class="alert alert-success hidden" id="MessageSent2">
                                        We have received your message, we will contact you very soon.
                                    </div>
                                    <div class="alert alert-danger hidden" id="MessageNotSent2">
                                        Oops! Something went wrong please refresh the page and try again.
                                    </div>
                                    <form role="form" name="formContactUs" class="margin-clear" novalidate="">
                                        <div class="form-group has-feedback mb-10">
                                            <label class="sr-only" for="name2">Name</label>
                                            <input type="text" class="form-control"
                                                ng-class="{ 'has-error': formContactUs.frmName.$error.required && !formContactUs.frmName.$pristine }"
                                                id="frmName"
                                                placeholder="Name"
                                                ng-model="contactDetails.name"
                                                required
                                            /><!-- /frmName -->
                                            <i class="fa fa-user form-control-feedback"></i>
                                        </div>
                                        <div class="form-group has-feedback mb-10">
                                            <label class="sr-only" for="email2">Email address</label>
                                            <input type="email" class="form-control"
                                                id="frmEmail"
                                                placeholder="Enter email"
                                                ng-model="contactDetails.email"
                                                required
                                            /><!-- /frmEmail -->
                                            <i class="fa fa-envelope form-control-feedback"></i>
                                        </div>
                                        <div class="form-group has-feedback mb-10">
                                            <label class="sr-only" for="message2">Message</label>
                                            <textarea id="frmMessage" rows="4" class="form-control"
                                                ng-class="{ 'has-error': formContactUs.frmMessage.$error.required && !formContactUs.frmMessage.$pristine }"
                                                placeholder="Message"
                                                ng-model="contactDetails.message"
                                                required
                                            ></textarea><!-- /frmMessage -->

                                            <i class="fa fa-pencil form-control-feedback"></i>
                                        </div>
                                        <div vc-recaptcha key="'6LcNoiMTAAAAANo5Nce1eKUXJ8ilUy1n4sg7khRu'"></div>
                                        <button type="button" class="btn btn-primary text-white" ng-click="fnClearForm();">Clear</button>
                                        <button type="button" class="btn btn-default" id="submit"
                                            ng-click="fnSendForm()"
                                            ng-class="{'disabled': formContactUs.$invalid}"
                                            ng-disabled="formContactUs.$invalid"
                                        >Send</button>
                                    </form>
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
                                    Copyright © 2016 GetRedBox.com. All Rights Reserved&nbsp;&nbsp;|&nbsp;&nbsp;
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

}
import { Component } from "@angular/core";

@Component({
    selector: "grb-shared-header",
    template: `
        <div class="header-container">
            <!-- header start -->
            <!-- classes:  -->
            <!-- "fixed": enables fixed navigation mode (sticky menu) e.g. class="header fixed clearfix" -->
            <!-- "dark": dark version of header e.g. class="header dark clearfix" -->
            <!-- "full-width": mandatory class for the full-width menu layout -->
            <!-- "centered": mandatory class for the centered logo layout -->
            <!-- ================ -->
            <header class="header  fixed    clearfix">

                <div class="container">
                    <div class="row">
                        <div class="col-md-3 ">
                            <!-- header-left start -->
                            <!-- ================ -->
                            <div class="header-left clearfix">

                                <!-- logo -->
                                <div id="logo" class="logo">
                                    <a href="index.html"><img id="logo_img" src="https://d1xrp9zhb3ks3c.cloudfront.net/web/getredbox/images/logo-redbox.png" class="height-55" alt="Get Red Box"></a>
                                </div>

                            </div>
                            <!-- header-left end -->

                        </div>
                        <div class="col-md-9">

                            <!-- header-right start -->
                            <!-- ================ -->
                            <div class="header-right clearfix">
                                <!-- main-navigation start -->
                                <!-- classes: -->
                                <!-- "onclick": Makes the dropdowns open on click, this the default bootstrap behavior e.g. class="main-navigation onclick" -->
                                <!-- "animated": Enables animations on dropdowns opening e.g. class="main-navigation animated" -->
                                <!-- "with-dropdown-buttons": Mandatory class that adds extra space, to the main navigation, for the search and cart dropdowns -->
                                <!-- ================ -->
                                <div class="main-navigation animated">

                                    <!-- navbar start -->
                                    <!-- ================ -->
                                    <nav class="navbar navbar-default" role="navigation">
                                        <div class="container-fluid">

                                            <!-- Toggle get grouped for better mobile display -->
                                            <div class="navbar-header">
                                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
                                                    <span class="sr-only">Toggle navigation</span>
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                    <span class="icon-bar"></span>
                                                </button>
                                            </div>

                                            <!-- Collect the nav links, forms, and other content for toggling -->
                                            <div class="collapse navbar-collapse scrollspy smooth-scroll" id="navbar-collapse-1">
                                                <ul class="nav navbar-nav navbar-right">
                                                    <li><a href="#banner">Home</a></li>
                                                    <li><a href="#about">About</a></li>
                                                    <li><a href="#services">Services</a></li>
                                                    <li><a href="#footer">Contact</a></li>
                                                </ul>
                                            </div>

                                        </div>
                                    </nav>
                                    <!-- navbar end -->

                                </div>
                                <!-- main-navigation end -->
                            </div>
                            <!-- header-right end -->

                        </div>
                    </div>
                </div>

            </header>
            <!-- header end -->
        </div>
    `,
    styles: [``]
})
export class HeaderComponent {

}
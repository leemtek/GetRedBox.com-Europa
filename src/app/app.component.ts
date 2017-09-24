import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <!-- scrollToTop -->
        <!-- ================ -->
        <div class="scrollToTop circle"><i class="icon-up-open-big"></i></div>

        <!-- page wrapper start -->
        <!-- ================ -->
        <div class="page-wrapper">
            <!-- ============================================================ 
                Section: Header
            ============================================================= -->
            <grb-shared-header>Loading...</grb-shared-header>

            <!-- ============================================================ 
                Section: Body
            ============================================================= -->
            <grb-main-home>Loading...</grb-main-home>

            <!-- ============================================================ 
                Section: Footer
            ============================================================= -->
            <grb-shared-footer>Loading...</grb-shared-footer>
        </div><!-- /page-wrapper -->
    `,
    styles: [``]
})
export class AppComponent {
    title = 'app';
}

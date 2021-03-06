import { NgModule } from '@angular/core';
import { SuiLocalizationModule } from './behaviors/localization/localization.module';
import { SuiMessageModule } from './collections/message/message.module';
import { SuiPaginationModule } from './collections/pagination/pagination.module';
import { SuiUtilityModule } from './misc/util/util.module';
import { SuiAccordionModule } from './modules/accordion/accordion.module';
import { SuiCheckboxModule } from './modules/checkbox/checkbox.module';
import { SuiCollapseModule } from './modules/collapse/collapse.module';
import { SuiDatepickerModule } from './modules/datepicker/datepicker.module';
import { SuiDimmerModule } from './modules/dimmer/dimmer.module';
import { SuiDropdownModule } from './modules/dropdown/dropdown.module';
import { SuiModalModule } from './modules/modal/modal.module';
import { SuiPopupModule } from './modules/popup/popup.module';
import { SuiProgressModule } from './modules/progress/progress.module';
import { SuiRatingModule } from './modules/rating/rating.module';
import { SuiSearchModule } from './modules/search/search.module';
import { SuiSelectModule } from './modules/select/select.module';
import { SuiSidebarModule } from './modules/sidebar/sidebar.module';
import { SuiTabsModule } from './modules/tabs/tab.module';
import { SuiTransitionModule } from './modules/transition/transition.module';

@NgModule({
    exports: [
        // Collections
        SuiMessageModule,
        SuiPaginationModule,

        // Modules
        SuiAccordionModule,
        SuiCheckboxModule,
        SuiCollapseModule,
        SuiDatepickerModule,
        SuiDimmerModule,
        SuiDropdownModule,
        SuiModalModule,
        SuiPopupModule,
        SuiProgressModule,
        SuiRatingModule,
        SuiSearchModule,
        SuiSelectModule,
        SuiSidebarModule,
        SuiTabsModule,
        SuiTransitionModule,

        // Behaviors
        SuiLocalizationModule,

        // // Misc
        SuiUtilityModule
    ]
})
export class SuiModule { }

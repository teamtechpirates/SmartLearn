import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CoursesComponent } from '../../courses/courses.component';
import { VideotutorialsComponent } from '../../videotutorials/videotutorials.component';
import { SyllabusComponent } from '../../syllabus/syllabus.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DatePickerModule} from '@progress/kendo-angular-dateinputs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDatepickerModule,
        DatePickerModule,
        MatAutocompleteModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    MapsComponent,
    NotificationsComponent,
    CoursesComponent,
    VideotutorialsComponent,
    SyllabusComponent
  ]
})

export class AdminLayoutModule {}

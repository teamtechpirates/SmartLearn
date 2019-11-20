import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {CoursesComponent} from '../../courses/courses.component';
import {VideotutorialsComponent} from '../../videotutorials/videotutorials.component';
import {SyllabusComponent} from '../../syllabus/syllabus.component'
import {DashboardComponent} from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',   component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'courses',  component: CoursesComponent },
    { path: 'vtutorials',  component: VideotutorialsComponent },
    { path: 'syllabus',  component: SyllabusComponent },
];

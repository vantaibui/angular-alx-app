import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // Hospital Management
    {
        title: 'Hospital',
        path: 'hospital',
        loadChildren: () =>
            import('./hospital-management/hospital-management.module').then(
                (m) => m.HospitalManagementModule,
            ),
    },
    // Detox course
    {
        title: 'Detox Course',
        path: 'detox-course',
        loadChildren: () =>
            import('./detox-course-management/detox-course-management.module').then(
                (m) => m.DetoxCourseManagementModule,
            ),
    },
    // User Management
    {
        title: 'Sign In',
        path: 'sign-in',
        loadChildren: () =>
            import('./users-management/sign-in/sign-in.module').then((m) => m.SignInModule),
    },
    {
        title: 'Sign Up',
        path: 'sign-up',
        loadChildren: () =>
            import('./users-management/sign-up/sign-up.module').then((m) => m.SignUpModule),
    },
    // Not found
    {
        title: '404 - Not found',
        path: '**',
        loadChildren: () =>
            import('./shared/not-found/not-found.module').then((m) => m.NotFoundModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

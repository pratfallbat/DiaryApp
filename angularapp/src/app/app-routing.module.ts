import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PostComponent } from './components/post/post.component';
import { PostoneComponent } from './components/postone/postone.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'posts', component: PostComponent },
  
  { path: 'posts/:id', component: PostoneComponent },
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

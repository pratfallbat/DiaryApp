import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DummyComponent } from './components/dummy/dummy.component';
import { DummytwoComponent } from './components/dummytwo/dummytwo.component';
import { ModelformComponent } from './components/modelform/modelform.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostformComponent } from './components/postform/postform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    UserComponent,
    DummyComponent,
    DummytwoComponent,
    ModelformComponent,
    PostComponent,
    PostformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

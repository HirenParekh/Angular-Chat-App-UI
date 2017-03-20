import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./home/components/home.component";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ChatListComponent} from "./chat/components/chat-list/chat-list.component";
import {ChatWindowComponent} from "./chat/components/chat-window/chat-window.component";
import {SingleChatComponent} from "./chat/components/single-chat/single-chat.component";
import {UserProfileComponent} from "./chat/components/user-profile/user-profile.component";
import {ContactProfileComponent} from "./chat/components/contact-profile/contact-profile.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatListComponent,
    ChatWindowComponent,
    SingleChatComponent,
    UserProfileComponent,
    ContactProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule, Injector } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { DeviceTrustPage } from '../pages/security/deviceTrust/deviceTrust';
import { AuthDetailsPage } from '../pages/authDetails/authDetails';
import { NetworkPage } from '../pages/security/network/network';
import { StoragePage } from '../pages/security/storage/storage';

import { authProvider } from '../services/auth.service';
import { SecureStorage } from '@ionic-native/secure-storage';

import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';
import {PushPage} from "../pages/push/push";
import {PushService} from "../services/push.service";
import {SimpleToastService} from "../services/toast.service";

import { MaterialIconsModule } from 'ionic2-material-icons';
import { Dialogs } from '@ionic-native/dialogs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage,
    PushPage,
    AuthDetailsPage,
    DeviceTrustPage,
    NetworkPage,
    StoragePage,
    SideMenuContentComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MaterialIconsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage,
    PushPage,
    AuthDetailsPage,
    DeviceTrustPage,
    NetworkPage,
    StoragePage,
    SideMenuContentComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    authProvider,
    SimpleToastService,
    PushService,
    SecureStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Dialogs
  ]
})
export class AppModule {  
  // Make the injector to be available in the entire module
  // so we can use it in the custom decorator
  static injector: Injector;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }}

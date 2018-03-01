import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Camera } from '@ionic-native/camera';
//import { Tab1Page } from '../pages/tab1/tab1';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { QRCodeModule } from 'angular2-qrcode';


@NgModule({
  declarations: [

    MyApp,
    
  ],


  imports: [
    BrowserModule,
    NgxQRCodeModule,
  //  QRCodeModule,

  
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
     //QRCodeModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicStorageModule } from '@ionic/storage-angular';
import { StorageService } from './services/storage.service';
import { AuthGuard } from './guards/auth.guard';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [RouterModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuard, BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}

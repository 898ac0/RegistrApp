import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrscannerPageRoutingModule } from './qrscanner-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QrscannerPage } from './qrscanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodeScanner,
    QrscannerPageRoutingModule,
  ],
  declarations: [QrscannerPage]
})
export class QrscannerPageModule {}

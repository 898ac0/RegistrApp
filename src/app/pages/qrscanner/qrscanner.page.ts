import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {
  code: any;
  scannedData: any;
  encodedData: '';
  encodeData: any;
  inputData: any;
  
  constructor(private barcodeScanner: BarcodeScanner) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  scanBarcode() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;

    }).catch(err => {
      console.log('Error', err);
    });
  }

  createBarcode() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.inputData).then((encodedData) => {
      console.log(encodedData);
      this.encodedData = encodedData;
    }, (err) => {
      console.log('Error occured : ' + err);
    });
  }

}
  // constructor(private barcodeScanner: BarcodeScanner) { }

  //   ngOnInit() {
  //   }

  //   scan(){
  //     this.barcodeScanner.scan().then(barcodeData => {
  //       this.code = barcodeData.text;
  //       console.log('Barcode data', barcodeData);

  //     }).catch(err => {
  //       console.log('Error', err);
  //     });
  //   }
  // }
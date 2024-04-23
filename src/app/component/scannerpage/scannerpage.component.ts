// import { Component } from '@angular/core';
// import { BiometricAuthService } from './biometric-auth.service';
import { Component, Inject } from '@angular/core';
// import { BiometricAuthService } from './biometric-auth.service';
import { BiometricAuthServiceService } from 'src/app/service/biometric-auth-service.service';
import { Hero } from 'src/app/component/reactiveform/reactiveform.component';

@Component({
  selector: 'app-scannerpage',
  templateUrl: './scannerpage.component.html',
  styleUrls: ['./scannerpage.component.css']
})
export class ScannerpageComponent {
  // errorMessage!: string;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // constructor(private biometricAuthService: BiometricAuthService) { }

  errorMessage!: string;

  constructor(private biometricAuthService: BiometricAuthServiceService,
    // @Inject('PublicKeyCredentialCreationOptions') public publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions
 ) { }

  authenticate() {
    this.biometricAuthService.authenticateWithBiometrics()
      .then((credential) => {
        // Authentication successful, handle the credential
        console.log('Authentication successful:', credential);
      })
      .catch((error) => {
        // Authentication failed, handle the error
        console.error('Authentication error:', error);
        this.errorMessage = error;
      });
  }
  

  // initiateBiometricAuthentication(): void {
  //   const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
  //     rp: {
  //       name: " hari",
  //       id: "localhost", // Update this with your actual domain
  //     },
  //     challenge: new Uint8Array(32), // Generate a random challenge
  //     user: {
  //       id: new Uint8Array(16), // Unique user ID
  //       name: "hari",
  //       displayName: "User Display Name"
  //     },
  //     pubKeyCredParams: [{ type: "public-key", alg: -7 }], // Algorithm for public key
  //     timeout: 60000, // Timeout in milliseconds
  //     attestation: "none" // Attestation type
  //   };

  //   navigator.credentials.create({
  //     publicKey: publicKeyCredentialCreationOptions
  //   })
  //   .then((newCredentialInfo) => {
  //     // Handle successful credential creation
  //     console.log("Biometric authentication successful!");
  //   })
  //   .catch((error) => {
  //     console.error("Error creating credential:", error);
  //   });
  // }


}

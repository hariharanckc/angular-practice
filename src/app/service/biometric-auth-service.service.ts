import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BiometricAuthServiceService {

  constructor() { }

  authenticateWithBiometrics(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (window.PublicKeyCredential) {
        navigator.credentials.get({ publicKey: {
          challenge: new Uint8Array(16), // Generate a random challenge
          rpId: 'localhost', // Your website's domain
          userVerification: 'required',
          allowCredentials: [{
            type: 'public-key',
            id: new Uint8Array(16) // Replace with stored credential ID
          }]
        }}).then((credential) => {
          // Send credential.id to backend for verification
          resolve(credential);
        }).catch((error) => {
          console.error('Error:', error);
          reject('Biometric authentication failed.');
        });
      } else {
        reject('Biometric authentication is not supported in this browser.');
      }
    });
  }
  
}

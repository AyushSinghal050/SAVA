import axios from "axios";
import { JSEncrypt } from "jsencrypt";
// import EncryptRsa from "encrypt-rsa";

let publicKey;
export const getPublicKey = () => {
  axios
    .get("https://healthidsbx.abdm.gov.in/api/v1/auth/cert")
    .then((res) => {
      publicKey = res.data;
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Public Key not Received");
    });
};

// export const rsaEncrytedText = (text = "731157764270") => {
//   const encryptRsa = new EncryptRsa();
//   const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({
//     text,
//     publicKey,
//   });
//   console.log(encryptedText);
//   return encryptedText;
// };

// const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const encrytedText = (text = "731157764270") => {
  let encrypt = new JSEncrypt();
  encrypt.setPublicKey(publicKey);
  const encryptedText = encrypt.encrypt(text);
  return (
    encryptedText ||
    "ZH07z+nu1mgFmVYMbScaDVwblnQXwkqZJg7IKFi8A9shhx+OWqFWk5irh9KyMRqv87W+yKazJS4grvRFRyd3WU5CkYWKFk0jfPlo2OLZtfen//LNY+G3Xuya2r594g7oukpf9PRC0acGCRAj7sWcBtRZ0Hv9ztFzMVUa7RONZ7WQzp8uOTZVUZR1EQ21dJcXfqtJjnTrU7m37bDMUbzZjReFdRdeFlGza9v/vTxKgPoMyKRAZP8KB0uS3E1KwfBh0OxjiiCzpAGCUh5mF+e5Yar8Ik2VwrA62CXBllfDxatm8jliuxPREOK8cuInebkVvK0tDj+9YyaDh3uHlLux8fC4WvEahfdrQ2ZcuMUIBb7Pxmby9Wv9FVG636FAncUuKSQfJmQJ/6hwlmeCvpEQFp2HJZE72Gr8YyMYN7VejD/HhqchJHNGinXEl7mvx+jPeacYlHj2nV1srSjTAVQJLhWvWPt7rAZoDoGu8NmvvZVM4x5qotQXfpbBqj4jTQasZr6E+/C4k4WanK5TYvO2Z77stWv+Iy+dggYU1QNyXgdaIK6WYKx+hwp/xdO9EuB/+Euzvhs98v21wQUnQNxpKBK7oQk2ZEVwxJ3JaEQq/P9hYualutv04rLRH0scnQ0c2l1zypOZ1DDMWz7sB8NExoHpl170ATSHIUMcD1wXBFQ="
  );
};

export default encrytedText;

/*
const App = () => {
  // Start our encryptor.
  var encrypt = new JSEncrypt();

  // Copied from https://github.com/travist/jsencrypt
  //   var privateKey = `
  //     -----BEGIN RSA PRIVATE KEY-----
  //     MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
  //     WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
  //     aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
  //     AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
  //     xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
  //     m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
  //     8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
  //     z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
  //     rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
  //     V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
  //     aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
  //     psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
  //     uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876
  //     -----END RSA PRIVATE KEY-----`;

  // Assign our encryptor to utilize the public key.
  encrypt.setPublicKey(publicKey);

  // Perform our encryption based on our public key - only private key can read it!
  const encrypted = encrypt.encrypt(text);

  // Decrypt with the private key...
  //   var decrypt = new JSEncrypt();
  //   decrypt.setPrivateKey(privateKey);
  //   var uncrypted = decrypt.decrypt(encrypted);

  return (
    <div>
      <h1>Ciphertext</h1>
      <p>{encrypted}</p>
      <p>
        <b>Copy and paste the above ciphertext into your Golang app</b>
      </p>
      <h1>Plaintext</h1>
      <p>{uncrypted}</p>
    </div>
  );
};

export default App;
*/

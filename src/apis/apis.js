import axios from "axios";

let token;
let publicKey;

export const createAccessToken = () => {
  axios
    .post("https://dev.abdm.gov.in/gateway/v0.5/sessions", {
      clientId: "SBX_006333",
      clientSecret: "f0ea8a85-c399-4c3b-ac19-7343e15aa3de",
      grantType: "client_credentials",
    })
    .then((res) => {
      token = res.data.accessToken;
      return res.data.accessToken;
    })
    .catch((err) => {
      console.log(err);
      alert("failed Access Token");
    });
};

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

export const getOTP = async (aadhaarNo, setRes) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    aadhaar: aadhaarNo
      //"ZH07z+nu1mgFmVYMbScaDVwblnQXwkqZJg7IKFi8A9shhx+OWqFWk5irh9KyMRqv87W+yKazJS4grvRFRyd3WU5CkYWKFk0jfPlo2OLZtfen//LNY+G3Xuya2r594g7oukpf9PRC0acGCRAj7sWcBtRZ0Hv9ztFzMVUa7RONZ7WQzp8uOTZVUZR1EQ21dJcXfqtJjnTrU7m37bDMUbzZjReFdRdeFlGza9v/vTxKgPoMyKRAZP8KB0uS3E1KwfBh0OxjiiCzpAGCUh5mF+e5Yar8Ik2VwrA62CXBllfDxatm8jliuxPREOK8cuInebkVvK0tDj+9YyaDh3uHlLux8fC4WvEahfdrQ2ZcuMUIBb7Pxmby9Wv9FVG636FAncUuKSQfJmQJ/6hwlmeCvpEQFp2HJZE72Gr8YyMYN7VejD/HhqchJHNGinXEl7mvx+jPeacYlHj2nV1srSjTAVQJLhWvWPt7rAZoDoGu8NmvvZVM4x5qotQXfpbBqj4jTQasZr6E+/C4k4WanK5TYvO2Z77stWv+Iy+dggYU1QNyXgdaIK6WYKx+hwp/xdO9EuB/+Euzvhs98v21wQUnQNxpKBK7oQk2ZEVwxJ3JaEQq/P9hYualutv04rLRH0scnQ0c2l1zypOZ1DDMWz7sB8NExoHpl170ATSHIUMcD1wXBFQ=",
  };

  return axios
    .post(
      "https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/generateOtp",
      bodyParameters,
      config
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Failed sending OTP");
    });
};

export const submitOTP = (payload, setCreateAbhaStep) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = payload;

  return axios
    .post(
      "https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/verifyOTP",
      bodyParameters,
      config
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert("OTP not submitted");
    });
};

export const resendOtp = (payload) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = payload;

  axios
    .post(
      "https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/resendAadhaarOtp",
      bodyParameters,
      config
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Unale to resend OTP");
    });
};

export const verifyMobile = (payload) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = payload;

  return axios
    .post(
      "https://healthidsbx.abdm.gov.in/api/v2/registration/aadhaar/checkAndGenerateMobileOTP",
      bodyParameters,
      config
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Unale to verify Mobile");
    });
};

export const updateMobile = (payload) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = payload;

  return axios
    .post(
      "https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/verifyMobileOTP",
      bodyParameters,
      config
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Unale to update Mobile Number");
    });
};

export const createAbhaId = (payload) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = payload;

  return axios
    .post(
      "https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/createHealthIdWithPreVerified",
      bodyParameters,
      config
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      alert("Unale to create Abha Id");
    });
};

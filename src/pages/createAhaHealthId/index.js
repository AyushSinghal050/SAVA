import React, { useEffect, useState } from "react";
import InputAadhaar from "./inputAadhaar";
import VerifyMobile from "./verifyMobile";
import ShowAbhaDetails from "./showAbhaDetails";
import UpdateMobile from "./UpdateMobileNum";
import { createAccessToken, getPublicKey } from "../../apis/apis";

// Steps for Abha Generation
// Step 1: Input Aadhaar
// Step 2: Get OTP and Resend OTP
// Step 3: Verify Mobile Number
// Step 4: Update Mobile Number, id needed
// Step 5: Create Abha ID

const CreateAbhaId = () => {
  const [createAbhaStep, setCreateAbhaStep] = useState(1);

  useEffect(() => {
    createAccessToken();
    getPublicKey();
  }, []);

  const stepComponent = {
    1: (
      <InputAadhaar
        createAbhaStep={createAbhaStep}
        setCreateAbhaStep={setCreateAbhaStep}
      />
    ),
    2: (
      <InputAadhaar
        createAbhaStep={createAbhaStep}
        setCreateAbhaStep={setCreateAbhaStep}
      />
    ),
    3: <VerifyMobile setCreateAbhaStep={setCreateAbhaStep} />,
    4: <UpdateMobile setCreateAbhaStep={setCreateAbhaStep} />,
    5: <ShowAbhaDetails />,
  };

  return stepComponent[createAbhaStep];
};

export default CreateAbhaId;

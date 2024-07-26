import React, { useEffect, useState } from "react";
import { Button, Typography, Input, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { getOTP, submitOTP, resendOtp } from "../../apis/apis";
import Label from "../Label";

const InputAadhaar = ({ createAbhaStep, setCreateAbhaStep }) => {
  const [aadhaarNo, setAadhaarNo] = useState();
  const [res, setRes] = useState();
  const [otp, setOtp] = useState();
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        clearInterval(myInterval);
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);

  const inputAadhaar = (e) => {
    setAadhaarNo(e.target.value);
  };

  const submitAadhaar = async () => {
    await getOTP(aadhaarNo, setRes).then((response) => {
      setRes(response);
      setCreateAbhaStep(2);
    });
  };

  const inputOtp = (e) => {
    setOtp(e.target.value);
  };

  const submitOtp = async () => {
    await submitOTP({
      otp: otp,
      txnId: res?.txnId,
    }).then((response) => {
      if (res?.txnId === response?.txnId) {
        console.log("OTP has been Verified");
        localStorage.setItem("txnId", response?.txnId);
        setCreateAbhaStep(3);
      }
    });
  };

  const resendOTP = () => {
    resendOtp({ txnId: res?.txnId });
    setSeconds(30);
  };

  const changeAadhaar = () => {
    setRes();
    setAadhaarNo("");
    setCreateAbhaStep(1);
  };

  return (
    <div>
      {createAbhaStep === 1 && (
        <div>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: "calc(100vh - 150px)" }}
          >
            <Typography variant="h5">Enter your Aadhaar Number </Typography>
            <Input
              placeholder="0000 0000 0000"
              inputProps={{ pattern: "^[0-9]{4} [0-9]{4} [0-9]{4}" }}
              value={aadhaarNo}
              onChange={inputAadhaar}
              style={{ fontSize: 32, maxWidth: 250 }}
            />
            <Button
              variant="contained"
              onClick={submitAadhaar}
              style={{ marginTop: 32, width: 150 }}
            >
              Submit
            </Button>
          </Grid>
        </div>
      )}

      {createAbhaStep === 2 && res?.txnId ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ height: "calc(100vh - 150px)" }}
        >
          <Label
            labelText={"Aadhaar Number: "}
            valueText={aadhaarNo}
            valueAddon={
              <Button
                variant="contained"
                onClick={changeAadhaar}
                style={{ marginLeft: 32, width: 300 }}
              >
                <EditIcon style={{ paddingRight: 16 }} /> Change Aadhaar Number
              </Button>
            }
          />
          <Label labelText={"Txn Id : "} valueText={res?.txnId} />
          <Label labelText={"Mobile No : "} valueText={res?.mobileNumber} />
          <Label
            labelText={" Enter OTP received on your mobile: "}
            valueComponent={
              <Input
                placeholder="123456"
                value={otp}
                onChange={inputOtp}
                style={{ fontSize: 32, maxWidth: 110 }}
              />
            }
            valueAddon={
              <Button
                variant="contained"
                disabled={otp?.length !== 6 || isNaN(otp)}
                onClick={submitOtp}
                style={{ marginLeft: 32, width: 150 }}
              >
                Submit
              </Button>
            }
          />
          <Label
            labelText={`You can resend OTP after ${seconds} sec`}
            valueComponent={
              <Button
                variant="contained"
                disabled={seconds}
                onClick={resendOTP}
                style={{ marginLeft: 32, width: 150 }}
              >
                Resend OTP
              </Button>
            }
          />
        </Grid>
      ) : null}
    </div>
  );
};

export default InputAadhaar;

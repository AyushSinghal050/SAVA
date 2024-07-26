import React, { useState } from "react";
import { Button, Input, Grid } from "@mui/material";
import { updateMobile } from "../../apis/apis";
import Label from "../Label";

const UpdateMobile = ({ setCreateAbhaStep }) => {
  const txnId = localStorage.getItem("txnId");
  const [otp, setOtp] = useState();

  const inputOtp = (e) => {
    setOtp(e.target.value);
  };

  const updateMobileNum = async () => {
    await updateMobile({ otp, txnId }).then(() => {
      alert("Mobile Updated");
      setCreateAbhaStep(5);
    });
  };

  return (
    <Grid
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: "calc(100vh - 150px)" }}
    >
      <Label labelText={"Txn Id : "} valueText={txnId} />
      <Label
        labelText={"Enter OTP received on your phone number: "}
        valueComponent={
          <Input
            placeholder="123456"
            value={otp}
            onChange={inputOtp}
            style={{ fontSize: 32, maxWidth: 150 }}
          />
        }
      />
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          disabled={otp?.length !== 6 || isNaN(otp)}
          onClick={updateMobileNum}
          style={{ marginLeft: 32, width: 150 }}
        >
          Submit
        </Button>
      </div>
    </Grid>
  );
};

export default UpdateMobile;

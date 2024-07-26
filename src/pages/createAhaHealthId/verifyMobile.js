import React, { useState } from "react";
import { Button, Input, Grid } from "@mui/material";
import { verifyMobile } from "../../apis/apis";
import Label from "../Label";

const VerifyMobile = ({ setCreateAbhaStep }) => {
  const txnId = localStorage.getItem("txnId");
  const [mobileNo, setMobileNo] = useState("");

  const inputMobile = (e) => {
    setMobileNo(e.target.value);
  };

  const VerifyMobileStatus = async () => {
    await verifyMobile({ mobile: mobileNo, txnId }).then((response) => {
      if (response.mobileLinked) {
        alert("Mobile Verified");
        setCreateAbhaStep(5);
      } else {
        alert("Mobile not Verified");
        setCreateAbhaStep(4);
      }
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
        labelText={"Mobile No : "}
        valueComponent={
          <Input
            placeholder="1234567890"
            value={mobileNo}
            onChange={inputMobile}
            style={{ fontSize: 32, maxWidth: 300 }}
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
          disabled={mobileNo?.length !== 10 || isNaN(mobileNo)}
          onClick={VerifyMobileStatus}
          style={{ marginLeft: 32, width: 150 }}
        >
          Submit
        </Button>
      </div>
    </Grid>
  );
};

export default VerifyMobile;

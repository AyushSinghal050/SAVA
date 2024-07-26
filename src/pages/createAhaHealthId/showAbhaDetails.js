import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { createAbhaId } from "../../apis/apis";
import Label from "../Label";

const ShowAbhaDetails = () => {
  const txnId = localStorage.getItem("txnId");
  const [abhaDetails, setAbhaDetails] = useState();

  useEffect(() => {
    const createABHAId = async () => {
      await createAbhaId({ txnId }).then((response) => {
        setAbhaDetails(response);
      });
    };
    createABHAId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      Your Number has been verified.
      <h4> Your Abha Id Has Been Created: </h4>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ height: "calc(100vh - 150px)" }}
      >
        <Label labelText={"Name:"} valueText={abhaDetails?.name} />
        <Label labelText={"Gender:"} valueText={abhaDetails?.gender} />
        <Label
          labelText={"DOB:"}
          valueText={`${abhaDetails?.dayOfBirth}/${abhaDetails?.monthOfBirth}/${abhaDetails?.yearOfBirth}`}
        />
        <Label labelText={"Mobile:"} valueText={abhaDetails?.mobile} />
        <Label labelText={"Email:"} valueText={abhaDetails?.email} />
        <Label
          labelText={"Location:"}
          valueText={`${abhaDetails?.districtName}, ${abhaDetails?.stateName}`}
        />
        <Label
          labelText={"Abha ID:"}
          valueText={`${abhaDetails?.healthIdNumber}, ${abhaDetails?.healthId}`}
        />
        <img width="100" height="200" src={abhaDetails?.kycPhoto} alt="kyc" />
        <img
          width="100"
          height="200"
          src={abhaDetails?.profilePhoto}
          alt="profile"
        />
      </Grid>
    </>
  );
};
export default ShowAbhaDetails;

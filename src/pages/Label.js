import { Typography, Grid } from "@mui/material";

const Label = ({
  labelText,
  valueComponent,
  valueText,
  valueAddon,
  variant = "h6",
}) => (
  <Grid container spacing={3} style={{ marginBottom: 16 }}>
    <Grid item xs={3}></Grid>
    <Grid item xs={3}>
      <Typography variant={variant}>{labelText} </Typography>
    </Grid>

    <Grid item xs={4}>
      {valueComponent || (
        <Typography variant={variant} component={"span"}>
          {valueText}
        </Typography>
      )}
      {valueAddon}
    </Grid>
    <Grid item xs></Grid>
  </Grid>
);

export default Label;

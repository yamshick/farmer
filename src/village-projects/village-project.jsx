import { Box, Typography, Divider } from "@mui/material";
import { CollapsableBox } from "../ui/collapsable-box";

export const VillageProject = ({ project }) => {
  const { title, subTitle, description: Description } = project;
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      flexDirection="column"
    >
      <Typography sx={{ textDecoration: "underline" }} variant="h5">
        {title}
      </Typography>
      <Typography variant="h6">{subTitle}</Typography>
      <CollapsableBox>
        <Description />
      </CollapsableBox>
      <Divider />
    </Box>
  );
};

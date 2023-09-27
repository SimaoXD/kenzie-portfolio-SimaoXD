import { styled } from "@stitches/react";

export const AboutMeContainer = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "2rem",
  backgroundColor: "$grey4",
  borderRadius: "$radii.1",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  marginBottom: "30px",
});

export const AboutMeText = styled("p", {
  fontFamily: "$fonts.texts",
  fontSize: "$text1",
  lineHeight: "$text2",
  color: "$grey2",
  marginBottom: "$space.3",
});

import React from "react";
import { useStyles } from "./styles/TeamMemberCardStyles";
import { StyledPaperTeam, StyledDiv } from "../toggle/StyledComponents";


const MemberCard = ({ item }) => {
  const classes = useStyles();
  return (
    <StyledPaperTeam className={classes.paper} elevation={3}>
        <StyledDiv style={{ paddingBottom: "100px" }}>
          <img width="100%" height="100%"
              alt={item.name}
              src={item.logo}
          />
        </StyledDiv>
    </StyledPaperTeam>
  );
};

export default MemberCard;

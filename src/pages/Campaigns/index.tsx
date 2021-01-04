import React, { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FlexboxProps, space, SpaceProps } from "styled-system";
import AddCampains from "../../components/AddCampaigns";
import { FlexBox } from "../../components/Grid";
import { getCampains } from "../../store/campaigns/selectors";

export type ICampaigns = SpaceProps & FlexboxProps;

const Campaigns: FC<ICampaigns> = ({ children, ...rest }) => {
  const campaigns = useSelector(getCampains);
  const rows = useMemo(() => {
    return campaigns.map(({ name }, index) => (
      <FlexBox key={index}>{name}</FlexBox>
    ));
  }, [campaigns]);

  return (
    <>
      <AddCampains />
      <FlexBox flexDirection="column" {...rest}>
        {rows}
      </FlexBox>
    </>
  );
};

export const StyledCampaigns: FC<ICampaigns> = styled(Campaigns)`
  padding: 10px;

  ${space}
`;

export default StyledCampaigns;

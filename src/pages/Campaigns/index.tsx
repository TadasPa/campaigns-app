import React, { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import DateRange from "../../components/DateRange";
import ExposeCompaignsAdd from "../../components/ExposeCompaignsAdd";
import { FlexBox } from "../../components/Grid";
import Search from "../../components/Search";
import { getCampains } from "../../store/campaigns/selectors";
import { filterCampaigns } from "./tools/filterCampaigns";

const Campaigns: FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const campaigns = useSelector(getCampains);
  const filteredCampaigns = useMemo(
    () => filterCampaigns({ startDate, endDate, search, campaigns }),
    [startDate, endDate, search, campaigns]
  );
  const rows = useMemo(() => {
    return filteredCampaigns.map(({ name }, index) => (
      <FlexBox key={index}>{name}</FlexBox>
    ));
  }, [filteredCampaigns]);

  return (
    <>
      <ExposeCompaignsAdd />
      <FlexBox flexDirection="row" justifyContent="space-between">
        <DateRange setStartDate={setStartDate} setEndDate={setEndDate} />
        <Search setSearch={setSearch} />
      </FlexBox>
      <FlexBox flexDirection="column">{rows}</FlexBox>
    </>
  );
};

export default Campaigns;

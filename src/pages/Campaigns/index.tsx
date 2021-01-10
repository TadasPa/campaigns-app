import React, { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import DateRange from "../../components/DateRangePicker";
import ConsoleAdd from "./Add/ConsoleMethod";
import Search from "../../components/Search";
import { getCampains } from "../../store/campaigns/selectors";
import { filterCampaigns } from "./tools/filterCampaigns";
import CampaignsTable from "./Table";
import { Container } from "styled-bootstrap-grid";
import { FlexBox } from "../../components/Grid";
import NoItems from "../../components/NoItems";
import AddButton from "./Add";

const Campaigns: FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const campaigns = useSelector(getCampains);
  const filteredCampaigns = useMemo(
    () => filterCampaigns({ startDate, endDate, search, campaigns }),
    [startDate, endDate, search, campaigns]
  );

  return (
    <>
      <ConsoleAdd />

      <Container>
        <FlexBox justifyContent="space-between">
          <DateRange
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startPlaceholder="Start Date"
            endPlaceholder="End Date"
          />
          <Search
            search={search}
            setSearch={setSearch}
            placeholder="Search by name"
          />
        </FlexBox>
        <FlexBox justifyContent="flex-start" py="15">
          <AddButton />
        </FlexBox>
      </Container>

      {!campaigns.length ? (
        <NoItems>
          No campaigns added yet, please use console method or press add button.
        </NoItems>
      ) : (
        <CampaignsTable campaigns={filteredCampaigns} users={[]} />
      )}
    </>
  );
};

export default Campaigns;

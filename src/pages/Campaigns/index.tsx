import React, { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateRange from "../../components/DateRangePicker";
import ConsoleAdd from "./Add/ConsoleMethod";
import Search from "../../components/Search";
import { getCampains } from "../../store/campaigns/selectors";
import { filterCampaigns } from "./tools/filterCampaigns";
import List from "./List";
import { Container } from "styled-bootstrap-grid";
import { FlexBox } from "../../components/Grid";
import NoItems from "../../components/NoItems";
import Add from "./Add";
import { fetchUsers } from "../../store/users/actions";
import { getUsers } from "../../store/users/selectors";
import LoadIndicator from "../../components/LoadIndicator";

const Campaigns: FC = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { fetching, result: users } = useSelector(getUsers);
  const campaigns = useSelector(getCampains);
  const filteredCampaigns = useMemo(
    () => filterCampaigns({ startDate, endDate, search, campaigns }),
    [startDate, endDate, search, campaigns]
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
          <Add />
        </FlexBox>
      </Container>

      <LoadIndicator isLoading={fetching} />

      {!campaigns.length ? (
        <NoItems>
          No campaigns added yet, please use console method or press add button.
        </NoItems>
      ) : (
        <List campaigns={filteredCampaigns} users={users} />
      )}
    </>
  );
};

export default Campaigns;

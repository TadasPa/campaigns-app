import React, { FC, useCallback, useState } from "react";
import { FlexCol } from "../../../../components/Grid";
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
import TextArea from "../../../../components/TextArea";
import { palette as ThemeColors } from "../../../../theme/colors";

interface ICampaignsAddModalBody {
  errorMessage?: string;
  onAdd: (campaigns: string) => void;
}

const Body: FC<ICampaignsAddModalBody> = ({ errorMessage, onAdd }) => {
  const [campaigns, setCampaigns] = useState("");
  const handleAdd = useCallback(() => {
    onAdd(campaigns);
  }, [onAdd, campaigns]);

  return (
    <FlexCol alignItems="flex-end">
      <TextArea value={campaigns} setValue={setCampaigns} />
      <Button onClick={handleAdd} mt="12">
        Add campaigns
      </Button>
      {!!errorMessage && (
        <Text pt="12" color={ThemeColors.error}>
          {errorMessage}
        </Text>
      )}
    </FlexCol>
  );
};

export default Body;

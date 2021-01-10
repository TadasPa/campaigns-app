import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "../../../store";
import { CampaignActionType } from "../../../store/campaigns/reducer";
import { Campaign } from "../../../types/Campaign";
import { ReactComponent as AddSVG } from "../../../assets/icons/plus-circle-fill.svg";
import styled from "styled-components";
import { FlexBox, FlexCol } from "../../../components/Grid";
import { space, SpaceProps } from "styled-system";
import Modal from "../../../components/Modal";
import ModalField from "./Modal/Field";
import ModalAddButton from "./Modal/AddButton";

const AddImage = ({ ...rest }) => {
  return <AddSVG title="Add Campaigns" {...rest} />;
};

const StyledAddImage = styled(AddImage)`
  width: 30px;
  height: 30px;
  margin-right: 5px;
  fill: ${({ theme: { colors } }) => colors.buttons.primary};

  & :hover {
    opacity: 0.8;
  }
`;

const AddButton = ({ ...rest }) => {
  const fieldRef = useRef<string>();
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);
  const handleOnRequestClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleAdd = useCallback(() => {
    let campaigns;
    try {
      campaigns = JSON.parse(fieldRef.current ?? "");
    } catch {
      return;
    }

    dispatch<AnyAction<CampaignActionType, Campaign[]>>({
      type: CampaignActionType.Add,
      payload: campaigns,
    });

    handleOnRequestClose();
  }, [fieldRef, dispatch, handleOnRequestClose]);

  return (
    <FlexBox alignItems="center" {...rest}>
      <StyledAddImage onClick={handleOpen} />
      Add
      <Modal isOpen={modalIsOpen} onRequestClose={handleOnRequestClose}>
        <FlexCol alignItems="flex-end">
          <ModalField ref={fieldRef} />
          <ModalAddButton onAdd={handleAdd} mt="12" />
        </FlexCol>
      </Modal>
    </FlexBox>
  );
};

const StyledAddButton = styled(AddButton)<SpaceProps>`
  & :hover {
    cursor: pointer;
  }

  ${space}
`;

export default StyledAddButton;

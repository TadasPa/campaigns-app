import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "../../../store";
import { CampaignActionType } from "../../../store/campaigns/reducer";
import { Campaign } from "../../../types/Campaign";
import Modal from "../../../components/Modal";
import Body from "./Modal";
import AddIcon from "../../../components/AddIcon";

const AddButton = ({ ...rest }) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleOnRequestClose = useCallback(() => {
    setIsOpen(false);
    setErrorMessage("");
  }, [setIsOpen]);

  const handleAdd = useCallback(
    (campaignsToAdd: string) => {
      let campaigns;
      try {
        campaigns = JSON.parse(campaignsToAdd ?? "");
      } catch (e) {
        setErrorMessage(e.message);
        return;
      }

      dispatch<AnyAction<CampaignActionType, Campaign[]>>({
        type: CampaignActionType.Add,
        payload: campaigns,
      });

      handleOnRequestClose();
    },
    [dispatch, handleOnRequestClose, setErrorMessage]
  );

  return (
    <>
      <AddIcon onClick={handleOpen}>Add</AddIcon>
      <Modal isOpen={modalIsOpen} onRequestClose={handleOnRequestClose}>
        <Body errorMessage={errorMessage} onAdd={handleAdd} />
      </Modal>
    </>
  );
};

export default AddButton;

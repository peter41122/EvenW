import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import Drawers from "../../components/drawers";
import RecipientRegistration from "../../pages/auth/register/Information";
import SendMoney from "../../pages/sendMoney";
import SendMoneyConfirm from "../../pages/sendMoney/SendMoneyConfirm";
import Transfer from "../../pages/transfer";
import TransferConfirm from "../../pages/transfer/TransferConfirm";

const Sidebar = forwardRef((props, ref) => {
  const drawer = useRef();
  const recipientRegistration = useRef();
  const sendMony = useRef();
  const sendMonyConfirm = useRef();
  const transfer = useRef();
  const transferConfirm = useRef();

  useImperativeHandle(ref, () => ({
    changeStatus() {
      handleChangeStatus();
    },
  }));

  const handleChangeStatus = () => {
    drawer.current?.changeStatus();
  };

  return (
    <>
      <RecipientRegistration ref={recipientRegistration} />
      <SendMoney ref={sendMony} />
      <SendMoneyConfirm ref={sendMonyConfirm} />
      <Transfer ref={transfer} />
      <TransferConfirm ref={transferConfirm} />
      {/* // */}
      <Drawers ref={drawer}>
        <div>
          <div className="p-3 flex items-center">
            <Avatar
              sx={{ width: 70, height: 70, backgroundColor: "#012061" }}
              className="inline-block"
            >
              Even
            </Avatar>
            <div className="ml-2">
              <div className="font-semibold">Even</div>
              <div className="text-[13px] text-gray-500">info@even.com</div>
            </div>
          </div>
          <div className="mt-2">
            <List>
              <ListItem
                button
                onClick={(e) => sendMony.current?.changeStatus()}
              >
                <ListItemIcon>
                  <CardGiftcardOutlinedIcon
                    fontSize="medium"
                    className="blue-custom"
                  />
                </ListItemIcon>
                <ListItemText>
                  <span className="text-[14px] text-gray-800">Send Money</span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={(e) => sendMonyConfirm.current?.changeStatus()}
              >
                <ListItemIcon>
                  <CardGiftcardOutlinedIcon
                    fontSize="medium"
                    className="blue-custom"
                  />
                </ListItemIcon>
                <ListItemText>
                  <span className="text-[14px] text-gray-800">
                    Send Money - Confirm
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={(e) => recipientRegistration.current?.changeStatus()}
              >
                <ListItemIcon>
                  <HowToRegOutlinedIcon fontSize="medium" className="blue-custom" />
                </ListItemIcon>
                <ListItemText>
                  <span className="text-[14px] text-gray-800">
                    Recipient Registration
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={(e) => transfer.current?.changeStatus()}
              >
                <ListItemIcon>
                  <TransferWithinAStationIcon
                    fontSize="medium"
                    className="blue-custom"
                  />
                </ListItemIcon>
                <ListItemText>
                  <span className="text-[14px] text-gray-800">
                    Transfer Summary
                  </span>
                </ListItemText>
              </ListItem>
              <ListItem
                button
                onClick={(e) => transferConfirm.current?.changeStatus()}
              >
                <ListItemIcon>
                  <TransferWithinAStationIcon
                    fontSize="medium"
                    className="blue-custom"
                  />
                </ListItemIcon>
                <ListItemText>
                  <span className="text-[14px] text-gray-800">
                    Transfer - Confirm
                  </span>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </div>
      </Drawers>
    </>
  );
});

export default Sidebar;

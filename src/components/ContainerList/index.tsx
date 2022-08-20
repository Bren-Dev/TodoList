import { BsExclamationLg } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";

import {
  TitleTask,
  DivIcons,
  DivIconExclamation,
  DivIconTrash,
} from "./styles";

const ContainerList = ({
  childrenTask,
  functionCheck,
  functionDelete,
}: any) => {
  return (
    <>
      <TitleTask>{childrenTask}</TitleTask>
      <DivIcons>
        <DivIconExclamation onClick={functionCheck}>
          <BsExclamationLg />
        </DivIconExclamation>
        <DivIconTrash onClick={functionDelete}>
          <IoTrashOutline />
        </DivIconTrash>
      </DivIcons>
    </>
  );
};

export default ContainerList;

import {
  Abbreviation,
  HeaderMenuUser,
} from "../../../../styles/GlobalStyles/header.style";

export const UserIcon = ({
  name,
  onClick,
  isCliked,
  id,
}: {
  name: string;
  onClick: React.SetStateAction;
  isCliked: boolean;
  id: string;
}) => {
  const sizeName = name?.split(" ").length - 1;

  return (
    <HeaderMenuUser onClick={onClick} isCliked={isCliked} id={id}>
      <Abbreviation>
        {name?.split(" ")[0][0]}
        {name?.split(" ")[sizeName][0]}
      </Abbreviation>
    </HeaderMenuUser>
  );
};

import {
  Abbreviation,
  HeaderMenuUser,
} from "../../../../../styles/GlobalStyles/header.style";

export const UserIcon = ({
  name,
  onClick,
  isCliked,
}: {
  name: string;
  onClick: () => void;
  isCliked: boolean;
}) => {
  const sizeName = name?.split(" ").length - 1;

  return (
    <HeaderMenuUser onClick={onClick} isCliked={Boolean(isCliked)}>
      <Abbreviation>
        {name?.split(" ")[0][0]}
        {name?.split(" ")[sizeName][0]}
      </Abbreviation>
    </HeaderMenuUser>
  );
};

import { Abbreviation, HeaderMenuUser } from "../../../../styles/GlobalStyles/header.style"

export const UserIcon = ({ name }: { name: string }) => {
    const sizeName = name?.split(' ').length - 1

    return(
        <HeaderMenuUser>
            <Abbreviation>{name?.split(' ')[0][0]}{name?.split(' ')[sizeName][0]}</Abbreviation>
        </HeaderMenuUser>
    )
}
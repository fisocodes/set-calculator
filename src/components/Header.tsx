import { Flex } from "@mantine/core";

export function Header() {
    return <Flex justify='space-between' w='100%'>
        <img src='logos/tecnm_logo.png' alt='TecNM Logo' height={100}/>
        <img src='logos/itt_logo.png' alt='ITT Logo' height={100}/>
    </Flex>
}
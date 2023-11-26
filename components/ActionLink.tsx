import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router'
import NextLink from 'next/link';

interface AccordionProps {
    title: string;
    isOpen?: boolean;
}

const ActionLink = ({ title, isOpen, children }: PropsWithChildren<AccordionProps>) => {
    const router = useRouter()

    const handleClick = (e, path: string) => {
        e.preventDefault()

        if (path === "/about") {
            console.log("I clicked on the About Page");
            // then you can: 
            // router.push(path)
        }
        if (path === "/posts") {
            console.log("I clicked on the Posts Page");
            // then you can: 
            // router.push(path)
        }
    };


    return (
        <NextLink onClick={(e) => handleClick(e, "/about")}>
            {children}
        </NextLink>
    );
}

export default ActionLink
import { Drawer } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navbarElements = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery" },
  { name: "Register", href: "/register" },
  { name: "Partners", href: "/partners" },
  { name: "Team", href: "/team" },
];

export const LinkComponent = ({ link, name }) => {
  const router = useRouter();
  const cur = router.pathname;

  return (
    <Link href={link} passHref>
      <p
        className={`${
          cur == link ? "text-orange-400" : "text-gray-400"
        } text-semibold lg:px-1 xl:px-4 py-2 rounded-md hover:text-white cursor-pointer text-center hover:bg-gray-900`}
      >
        {name}
      </p>
    </Link>
  );
};

export const LinkElements = () => {
  return (
    <>
      {navbarElements.map((item) => (
        <LinkComponent key={item.name} link={item.href} name={item.name} />
      ))}
    </>
  );
};

export const NavbarDrawer = ({ opened, setOpened }) => (
  <Drawer
    className="pt-4 px-2 bg-black"
    onClick={() => setOpened(false)}
    opened={opened}
    position="right"
    size="100vh"
    onClose={() => setOpened(false)}
    overlayOpacity={0.55}
    overlayBlur={3}
    withCloseButton={false}
    zIndex={20}
  >
    <div className="text-2xl pt-16 space-y-4 py-2 font-semibold">
      <LinkElements />
    </div>
  </Drawer>
);

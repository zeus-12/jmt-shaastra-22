import { Burger } from "@mantine/core";
import { useState } from "react";
import { Logo, LinkElements, NavbarDrawer } from "./NavbarComponents";

export default function Navbar() {
  //for the burger & drawer
  const [opened, setOpened] = useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <div>
      <div className="px-6 border-b-[1px] border-gray-800 w-screen h-[8vh] bg-[#000000] relative top-0 flex justify-between items-center z-40 ">
        <Logo setOpened={setOpened} />
        <div className="sm:hidden">
          <Burger
            color="#e9672f"
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
          />
        </div>

        {/* so that the burger icon remains in the case --- you open the burger icon then increases the size */}
        {/* NOT REALLY REQUIRED */}
        {opened && (
          <div className="hidden sm:flex">
            <Burger
              color="#e9672f"
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
            />
          </div>
        )}
        {!opened && (
          <div className="text-gray-300 text-xl font-semibold hidden xl:gap-8 sm:flex gap-8 mx-auto">
            <LinkElements />
          </div>
        )}
      </div>

      <div className="absolute top-10">
        <NavbarDrawer setOpened={setOpened} opened={opened} />
      </div>
    </div>
  );
}

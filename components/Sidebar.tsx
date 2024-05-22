import React from "react";
import Link from "next/link";
import { getAllNotes } from "@/lib/redis";
import SidebarNoteList from "@/components/SidebarNoteList";
export default async function Sidebar() {
  const notes = await getAllNotes();
  return (
    <>
      <section className="bg-white overflow-y-scroll z-[100] flex-shrink-0 flex-grow w-[30%] max-w-[350px] min-w-[250px]">
        <Link href={"/"} className="link--unstyled">
          <section className="uppercase flex items-center justify-center p-2">
            <img
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="flex justify-between" role="menubar">
          {/* SideSearchField */}
        </section>
        <nav>
          <SidebarNoteList notes={notes} />
        </nav>
      </section>
    </>
  );
}

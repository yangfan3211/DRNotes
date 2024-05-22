import dayjs from "dayjs";
export default async function NoteList({ notes }: { notes: string[] }) {
  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className="p-8">{"No notes created yet!"}</div>;
  }

  return (
    <ul className="px-3">
      {arr.map(([noteId, note]) => {
        const { title, updateTime } = JSON.parse(note);
        return (
          <li key={noteId} className="py-1">
            <header className="z-[1] max-w-[85%] pointer-events-none">
              <strong className="text-xl block whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
              </strong>
              <small>{dayjs(updateTime).format("YYYY-MM-DD hh:mm:ss")}</small>
            </header>
          </li>
        );
      })}
    </ul>
  );
}

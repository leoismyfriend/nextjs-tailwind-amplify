export default function NoteStampCard() {
  return (
    <div class="flex flex-col w-96 pl-0 pt-10 relative bg-white border-t-[2px] border-r-[6px] border-b-[6px] border-l-[2px] border-black">
      <div class="bg-white absolute right-4 top-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </div>
      <div className="flex flex-row">
        <div className="mx-0 pl-2 pr-2 mb-4 w-full border-l-[8px] border-purple-400">
          <p>
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum. hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </p>
        </div>
      </div>
      <div class="bg-red-200 p-2 w-full">
        <p class="flex justify-end">some notestamp metadata</p>
      </div>
    </div>
  );
}

export default function StampBookTitle() {
  return (
    <div class="bg-green-200 flex flex-row relative pl-0 p-4 border-t-[2px] border-b-[2px] border-r-[6px]  border-l-[2px] border-black">
      <div class="m-1">
        <div>
          <p class="text-xl text-gray-700 font-bold">
            My 1st StampBook (Title)
          </p>
        </div>
      </div>

      <div class="absolute right-4 top-2">
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
    </div>
  );
}

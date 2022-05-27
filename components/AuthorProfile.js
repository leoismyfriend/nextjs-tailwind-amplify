export default function AuthorProfile() {
  return (
    <div class="bg-yellow-200 flex flex-row relative mt-6 p-2 pl-1 border-t-[2px] border-r-[6px] border-b-[6px] border-l-[2px] border-black">
      <div class="avatar">
        <div class="w-14 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
          <img src="https://api.lorem.space/image/face?hash=92310" />
        </div>
      </div>
      <div class="text-gray-500 ml-4 pt-2">
        <p>Created By: Author</p>
        <p>CreatedOn: 9/3/2018</p>
      </div>
      <div class="absolute right-0 mr-2 pt-1">
        <button class="btn btn-active btn-accent">Subscribe</button>
      </div>
    </div>
  );
}

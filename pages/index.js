import Head from 'next/head';
import styles from '../styles/Home.module.css';
import StampBookTitle from '../components/StampBookTitle';
import StampBookMetaData from '../components/StampBookMetaData';
import YoutubePlayer from '../components/YoutubePlayer';
import AuthorProfile from '../components/AuthorProfile';
import StampBookTextInput from '../components/StampBookTextInput';
import NavBar from '../components/NavBar';
import NoteStampCard from '../components/NoteStampCard';

export default function Home() {







  
  return (
    <div>
      {/* NavBar */}
      <NavBar />
      <div className="bg-purple-300 flex flex-row justify-center h-screen">
        {/* StampBook */}
        <div className="bg-gray-200 max-w-min p-10  mt-0 mb-14 flex flex-col border-t-[2px] border-b-[2px] border-l-[2px] border-black">
          {/* StampBook Title */}
          <StampBookTitle />
          {/* StampBook MetaData */}
          <StampBookMetaData />
          {/* Youtube Player */}
          <YoutubePlayer />
          {/* StampBook Author Profile */}
          <AuthorProfile />
          {/* Input Textarea */}
          <StampBookTextInput />
        </div>

        {/* NoteStamp List */}
        <div className="bg-gray-200 p-10 mb-14 mt-0 flex flex-col gap-4 overflow-auto border-l-[2px] border-r-[2px] border-t-[2px] border-b-[2px] border-black">
          {/* NoteStamp Card */}
          <NoteStampCard />
          <NoteStampCard />
          <NoteStampCard />
          <NoteStampCard />
          <NoteStampCard />
          <NoteStampCard />
        </div>
      </div>
    </div>
  );
}

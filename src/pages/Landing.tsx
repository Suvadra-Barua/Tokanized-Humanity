import { useState } from 'react';
import Quill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import HomeFeed from '../components/ui/landing/HomeFeed';
import SliderComponent from '../components/ui/landing/Slider';

function Landing() {
  const [status, setStatus] = useState('');

  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold">Title</h2>
      <div className="relative">
        <Quill
          onChange={setStatus}
          value={status}
          theme="snow"
          placeholder="What's on your mind?"
          style={
          {
            border: '1px solid #aaa',
            borderRadius: '5px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column-reverse',
            marginTop: '-20px',
          }
        }
          modules={
          {
            toolbar: [
              ['image'],
            ],
          }
        }
        />
        <button
          className="absolute px-4 py-1 text-xs text-white transition bg-blue-500 rounded-full bottom-2 right-2 hover:bg-blue-600"
          type="button"
        >
          Post
        </button>
      </div>
      <SliderComponent />
      <HomeFeed />
    </div>

  );
}

export default Landing;

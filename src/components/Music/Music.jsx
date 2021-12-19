import ReactPlayer from "react-player";
import "./Music.css";
// import ReactPlayer from ;

function Music() {
    return (
        <div>
          {/* <a href="https://www.cluemediator.com"></a> */}
          <ReactPlayer
            url="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
            // url = 'https://www.youtube.com/watch?v=hvvjiE4AdUI&t=61s'
            width="100%"
            height="100%"
            autoPlay="autoPlay"
            playing={true}
            controls={true}
            repeat={true}
          />
        </div>
      );
  }
  
  export default Music;
  
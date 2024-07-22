import react,{useEffect, useRef} from 'react';



function VideoPlayer(){
    const cloudinaryRef = useRef();
    const VideoRef = useRef();

    useEffect(()=> {
        cloudinaryRef.current = window.cloudinary;
        cloudinaryRef.current.VideoPlayer(VideoRef.current, {
            cloud_name: 'dsmlqksjw'
        });

    },[])




    return(
        <Video
        ref={VideoRef}
        />
    )
}

export default VideoPlayer;
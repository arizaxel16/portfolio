import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import "./Splash.scss";

const Splash = () => {
	const bgVids = useMemo(
		() => [
			"https://videos.pexels.com/video-files/8721923/8721923-sd_960_506_25fps.mp4",
			"https://videos.pexels.com/video-files/6754818/6754818-uhd_2560_1440_25fps.mp4",
			"https://videos.pexels.com/video-files/3108007/3108007-sd_640_360_25fps.mp4",
			"https://videos.pexels.com/video-files/7534239/7534239-sd_640_360_25fps.mp4",
			"https://videos.pexels.com/video-files/19419586/19419586-sd_640_360_30fps.mp4",
		],
		[]
	);

	const [videoSrc, setVideoSrc] = useState(null);
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);
	const videoRef = useRef(null);

	useEffect(() => {
		const checkVideoAvailability = async () => {
			for (const video of bgVids) {
				try {
					const response = await axios.head(video);
					if (response.status === 200) {
						setVideoSrc(video);
						break;
					}
				} catch (error) {
					console.error(`Video: ${video} not available`, error);
				}
			}
		};

		checkVideoAvailability();
	}, [bgVids]);

	return (
		<div className="container-intro">
			<div className="intro-text-content">
				<h1>AXEL ARIZA</h1>
				<h2>Software Engineer | FullStack Developer</h2>
				<button>Enter</button>
			</div>

			{!isVideoLoaded && <div className="intro-bg-fallback"></div>}
            
			{videoSrc && (
				<video
					ref={videoRef}
					className="intro-bg-vid"
					autoPlay
					loop
					muted
					playsInline
					onLoadedData={() => setIsVideoLoaded(true)}
					crossOrigin="anonymous"
				>
					<source src={videoSrc} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			)}
		</div>
	);
};

export default Splash;

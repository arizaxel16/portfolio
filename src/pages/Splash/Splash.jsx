import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Splash.scss";
import { useLanguage } from "../../context/Language/LanguageContext";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";
import { en, es } from "./SplashStrings";

const Splash = () => {
	// Navigation
	const navigate = useNavigate();

	// Language
	const { language } = useLanguage();
	const translations = language === "en" ? en : es;

	// Vid Rendering
	const bgVids = useMemo(
		() => [
			"https://videos.pexels.com/video-files/8721923/8721923-sd_960_506_25fps.mp4",
			"https://videos.pexels.com/video-files/6754818/6754818-uhd_2560_1440_25fps.mp4",
			"https://videos.pexels.com/video-files/8721654/8721654-uhd_2732_1440_25fps.mp4",
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
				<h1>{translations.name}</h1>
				<h2>{translations.profileDescription}</h2>
				<button onClick={() => navigate("/portfolio/home")}>
					{translations.btn}
				</button>
			</div>

			<div className="container-flag">
				<LanguageSelect />
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

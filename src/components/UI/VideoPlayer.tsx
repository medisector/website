"use client";

import useBreakpoint from "@/hooks/useBreakpoint";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

type VideoPlayerProps = {
    src: string;
    poster: string;
    posterMobile?: string;
};

const VideoPlayer = ({ src, poster, posterMobile }: VideoPlayerProps) => {
    const isDesktop = useBreakpoint("md");
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const currentPoster = posterMobile && !isDesktop ? posterMobile : poster;

    const handlePlay = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <div className="relative w-full overflow-hidden aspect-video lg:rounded-xl lg:border-black lg:border-[0.8pt]">
            {!isPlaying && (
                <div
                    className="absolute inset-0 z-10 cursor-pointer group"
                    onClick={handlePlay}
                >
                    <img
                        src={currentPoster}
                        alt="Video Preview"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                            <FontAwesomeIcon icon={faPlay} className="text-black text-xl" />
                        </div>
                    </div>
                </div>
            )}
            <video
                ref={videoRef}
                controls
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
            >
                <source src={src} type="video/mp4" />
                Ihr Browser unterstützt das Video-Tag nicht.
            </video>
        </div>
    );
};

export default VideoPlayer;

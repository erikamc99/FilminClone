import { useMemo } from "react";

export const useVideoConfig = (videoKey) => {
  return useMemo(
    () => ({
      url: `https://www.youtube.com/watch?v=${videoKey}`,
      muted: true,
      width: "100%",
      config: {
        youtube: {
          playerVars: {
            autoplay: 1,
            controls: 0,
            loop: 1,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            playlist: videoKey,
            start: 5,
          },
        },
      },
      style: { pointerEvents: "none" },
    }),
    [videoKey]
  );
};

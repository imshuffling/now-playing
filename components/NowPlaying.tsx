import React from 'react';
import ReadmeImg from './ReadmeImg';
import Text from './Text';

const noImage = "data:image/png;base64,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"

export interface Props {
  cover?: string;
  track: string;
  artist: string;
  progress: number;
  duration: number;
  isPlaying: boolean;
}

export const Player: React.FC<Props> = ({
  cover,
  track,
  artist,
  progress,
  duration,
  isPlaying,
}) => {
  return (
    <ReadmeImg width="500" height={!track ? '64' : '90'}>
      <style>
        {`
            .paused {
              animation-play-state: paused !important;
              background: #e1e4e8 !important;
            }

            img:not([src]) {
              content: url("data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==");
              border-radius: 6px;
              background: #FFF;
              border: 1px solid #e1e4e8;
            }

            p {
              display: block;
              opacity: 0;
            }

            .progress-bar {
              position: relative;
              width: 100%;
              height: 4px;
              margin: -1px;
              background: #e1e4e8;
              overflow: hidden;
              padding: 2px;
              z-index: 0;
            }

            #progress {
              position: absolute;
              top: -1px;
              left: 0;
              width: 100%;
              height: 6px;
              transform-origin: left center;
              background-color: #ff3ca9;
              animation: progress ${duration}ms linear;
              animation-delay: -${progress}ms;
            }

            .progress-bar,
            #track,
            #artist,
            #cover {
              opacity: 0;
              animation: appear 300ms ease-out forwards;
            }

            #now-playing {
              animation-delay: 200ms;
              opacity: 1;
              margin-bottom: 16px;
            }

            #track {
              animation-delay: 400ms;
            }

            #artist {
              animation-delay: 500ms;
            }
            .progress-bar {
              animation-delay: 550ms;
              margin-top: 4px;
            }

            .hide {
              display: none;
            }

            #cover {
              animation-name: cover-appear;
              animation-delay: 300ms;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1), 0 3px 10px rgba(0,0,0,0.05);
              border-radius: 2px;
            }

            #cover:not([src]) {
              box-shadow: none;
            }

            @keyframes cover-appear {
              from {
                opacity: 0;
                transform: scale(0.8);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }

            @keyframes appear {
              from {
                opacity: 0;
                transform: translateX(-8px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes progress {
              from {
                transform: scaleX(0)
              }
              to {
                transform: scaleX(1)
              }
            }
        `}
      </style>
      <Text id="now-playing" className={!isPlaying ? 'hide' : 'show'}>
        <strong>Now Playing</strong> on Spotify
      </Text>
      <div
        className={isPlaying ? 'disabled' : ''}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img id="cover" src={cover ?? noImage} width="48" height="48" />
        <div
          style={{
            display: 'flex',
            flexGrow: 0,
            flexShrink: 1,
            flexBasis: '50%',
            flexDirection: 'column',
            marginTop: -4,
            marginLeft: 8,
          }}
        >
          <Text id="track" weight="bold">
            {`${track ?? ''} `.trim()}
          </Text>
          <Text id="artist" color={!track ? 'gray' : undefined}>
            {artist || 'Radio silence...'}
          </Text>
          {track && (
            <div className="progress-bar">
              <div id="progress" className={!isPlaying ? 'paused' : ''} />
            </div>
          )}
        </div>
      </div>
    </ReadmeImg>
  );
};

import React from 'react';
import moment from 'moment';

export const VideoLength = ({ time }) => {
  // Ensure 'time' is valid and in seconds
  const seconds = parseInt(time, 10);
  if (isNaN(seconds) || seconds <= 0) {
    return null; // Return null or a message for invalid time
  }

  // Create a moment duration
  const videoDuration = moment.duration(seconds, 'seconds');

  // Format the duration as 'h:mm:ss'
  const formattedDuration = `${Math.floor(videoDuration.asHours())}:${moment.utc(seconds * 1000).format('mm:ss')}`;

  return (
    <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {formattedDuration}
    </span>
  );
};

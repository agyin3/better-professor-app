import React from 'react'
import animationData from '../assets/loading-lottie.json'
import Lottie from 'react-lottie';

export const LoadingLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return(
          <div>
              <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
              />
          </div>
      )
}
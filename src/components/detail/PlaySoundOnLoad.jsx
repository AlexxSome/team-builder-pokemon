// PlaySoundOnLoad.js
import React, { useEffect } from 'react';


const PlaySoundOnLoad = () => {
    useEffect(() => {
        const playSound = async () => {
            try {
                const { sound } = await Audio.Sound.createAsync(
                    require('../../assets/Big Bang - Last Farewell.mp3') // Make sure you have a sound file in the specified path
                );
                await sound.playAsync();
            } catch (error) {
                console.error('Error loading or playing sound:', error);
            }
        };

        playSound();

        // Clean up the sound on unmount
        return () => {
            //sound && sound.unloadAsync();
        };
    }, []);

    return null;
};

export default PlaySoundOnLoad;

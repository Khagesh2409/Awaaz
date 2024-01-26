import React, { useRef, useEffect } from 'react';
import '../CSS/Longfeatures.css'
import Card from './Features_div';
import eng from '../Assets/engaging_interface.png';
import pro from '../Assets/progress_tracking.png';
import hol from '../Assets/holistic_phonic_training.png';
import mot from '../Assets/motor_based.png';
import vis from '../Assets/visual_auditory_stimulation.png';
import mul from '../Assets/multimodal_learning.png'

const App = () => {
  const featuresRef = useRef(null);
  return (
    <div ref={featuresRef} id='Feature'>
      <div className='crdgrid'>
        <Card src={eng} name='Engaging Interface' details='Interactive sessions for an immersive learning experience.' />
        <Card src={pro} name='Progress Tracking' details='Track success, analyse and celebrate milestone. ' />
        <Card src={hol} name='Holistic Phonics Training' details='The software covers the sounds of Hindi in isolation and within different words across all word positions.' />
        <Card src={mot} name='Motor-Based Intervention' details='Incorporates both perceptual and production training.' />
        <Card src={vis} name='Visual, Auditory Stimulation' details='Emphasize the importance of both senses in the learning process for individuals with speech disorders.' />
        <Card src={mul} name='Multimodal Learning' details='Multimodal approach with visual & cues and 3-Dimensional animations for effective learning.' />
      </div>
    </div>
  )
}

export default App;
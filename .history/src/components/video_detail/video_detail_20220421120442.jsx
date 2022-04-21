import React from 'react';
import styles from './video_detail.module.css';
const VideoDetail = (props) => (
    <div className={styles.detail_container}>
        <h1>{props.video.snippet.title}</h1>
        <iframe id="player" type="text/html" width="640" height="360"
        videoId="44fvj466MoE"
        frameborder="0"></iframe>
    </div>
            
    );

export default VideoDetail;
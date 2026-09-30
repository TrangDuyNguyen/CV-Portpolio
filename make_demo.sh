#!/bin/bash
set -e

echo "Starting demo generation..."
mkdir -p demo_out

echo "1. Downloading royalty-free background music from Pixabay..."
# Download a royalty-free chill/lofi track
curl -s -L "https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" -o demo_out/bgm.mp3

echo "2. Processing screen recording..."
# Process the MOV video to be 1080x1920 (TikTok/Shorts format) and strip its original audio
ffmpeg -y -i "assets/video/Screen Recording 2026-09-30 at 12.03.14.mov" -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2,format=yuv420p" -c:v libx264 -r 30 -an demo_out/screen_record.mp4

echo "3. Mixing background music..."
# Find the exact duration of the screen recording
DUR=$(ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 demo_out/screen_record.mp4)
FADE_START=$(echo "$DUR - 3" | bc)

# Loop the background music to fit the screen recording length and fade out at the end
ffmpeg -y -i demo_out/screen_record.mp4 -stream_loop -1 -i demo_out/bgm.mp3 -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest -af "afade=t=out:st=${FADE_START}:d=3" demo_out/final_demo.mp4

echo "Demo created successfully with background music at: demo_out/final_demo.mp4"

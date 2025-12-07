package com.example.Javap;

import java.io.IOException;
import java.net.URL;
import javax.sound.sampled.AudioInputStream;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.Clip;
import javax.sound.sampled.LineUnavailableException;
import javax.sound.sampled.UnsupportedAudioFileException;


public class Sound {
    
    boolean isPaused = true;
    Clip clip;
    URL soundurl[] = new URL[30];
    
    public Sound(){
    
    soundurl[0] = getClass().getResource("/Background.wav");
    soundurl[1] = getClass().getResource("/Click.wav");
    soundurl[2] = getClass().getResource("/Correct.wav");
    soundurl[3] = getClass().getResource("/Wrong.wav");
    soundurl[4] = getClass().getResource("/Flip.wav");
    }
    
    public void setFile(int i){
    try{
    AudioInputStream ais = AudioSystem.getAudioInputStream(soundurl[i]);
    clip = AudioSystem.getClip();
    clip.open(ais);
    }catch(IOException | LineUnavailableException | UnsupportedAudioFileException e){
    }
    }
    
    public void play(){
    clip.start();
    }
    @SuppressWarnings("static-access")
    public void loop(){
    clip.loop(clip.LOOP_CONTINUOUSLY);
    }
    public void stop(){
    clip.stop();
    }
}
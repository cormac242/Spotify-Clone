let songIndex=0;
let audioElement=new Audio("Afusic Pal Pal Official Music Video Prod AliSoomroMusic.mp3")

let masterPlay= document.getElementById("masterPlay")
let progressBar=document.getElementById("myProgressBar")
let songItem=Array.from(document.getElementsByClassName('songItem')) 
let masterSongName=document.getElementById('masterSongName')


let songs=[
{songName:"Pal Pal",filePath:"1.mp3",coverPath:"cover/th (1).jpg"},
{songName:"Amara Samara",filePath:"2.mp3",coverPath:"cover/th (2).jpg"},
{songName:"Bande",filePath:"3.mp3",coverPath:"cover/th (3).jpg"},
{songName:"Chand Ke Tukdey",filePath:"4.mp3",coverPath:"cover/th (4).jpg"},
{songName:"Goli Maar Bheje Mein",filePath:"5.mp3",coverPath:"cover/th (5).jpg"},
{songName:"Zohra Jabeen",filePath:"6.mp3",coverPath:"cover/th.jpg"},
{songName:"Maahi Mera",filePath:"7.mp3",coverPath:"cover/hqdefault.jpg"},
{songName:"Let Me Love You",filePath:"8.mp3",coverPath:"cover/new.jpg"},
{songName:"Hutt Badmaash",filePath:"9.mp3",coverPath:"cover/new1.jpg"}
]

songItem.forEach((element,i)=>{
    
    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName('songNames')[0].innerText=songs[i].songName;

})

makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('playSong ')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
    })
}




Array.from(document.getElementsByClassName('playSong')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays()
        songIndex=parseInt(e.target.id)

        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src=`${songIndex+1}.mp3`
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0;
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    })
})








masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play()
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        
    }
    })

//listen Event
    audioElement.addEventListener('timeupdate',()=>{
        console.log("timeupdate");
        //update seek bar
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100)  
     console.log(progress);
        myProgressBar.value=progress
    })
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0
    }
    else{
        songIndex -= 1;
    }
     audioElement.src=`${songIndex+1}.mp3`
     masterSongName.innerText=songs[songIndex].songName
     audioElement.currentTime=0;
     audioElement.play()
     masterPlay.classList.remove('fa-circle-play')
     masterPlay.classList.add('fa-circle-pause')
})
document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0
    }
    else{
        songIndex += 1;
    }
     audioElement.src=`${songIndex+1}.mp3`
     masterSongName.innerText=songs[songIndex].songName
     audioElement.currentTime=0;
     audioElement.play()
     masterPlay.classList.remove('fa-circle-play')
     masterPlay.classList.add('fa-circle-pause')
})
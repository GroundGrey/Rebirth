AOS.init();



//音樂相關


const sounds = ['Rebirth',]

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;
    btn.style.display = 'block';
    btn.addEventListener('click', () => {
        stopSounds();

        document.getElementById(sound).play();
    })

    document.querySelector('#buttons').appendChild(btn);
})

function stopSounds() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
      audio.volume = 0.5;
        audio.pause();
        audio.currentTime = 0;
    })
}
//音樂相關








// 待辦事項註解
//1 (美術)主視覺圖欄位等圖
//英文引號較佳
//3 (美術)埃及相關美術圖--已有連結
//4桌游還要放嗎(開會討論)
//加賽特ㄉ介紹欄啦
//6 (遊戲程式)遊戲載點添加--MAC不一定有
//7 (文字內容)埃及知識的內容與參考資料
//8 (文字內容)桌游介紹
//9 (未定案)遊戲遊玩影片
//10(網頁程式)字體更改、滑入效果統一、字體大小放大、背景音樂撥放
//先註解掉的區域：影片連結、遊戲連結、部分知識
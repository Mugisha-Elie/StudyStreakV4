
function updateStreak(){
    const streakKey = "studyStreak";
    const today = new Date().toDateString();

    let streakData = JSON.parse(localStorage.getItem(streakKey)) || { count: 0, lastDate: null, };

    if(streakData.lastDate === today){
        //Already counted today
        return;
    }
    const yesterday = new Date(); 
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if(streakData.lastDate === yesterdayStr){
        //Continued streak
        streakData.count += 1;
    }else{
        //Missed a day or first time
        streakData.count = 1;
    }

    streakData.lastDate = today;
    localStorage.setItem(streakKey, JSON.stringify(streakData));
    updateStreakDisplay(streakData.count);
}

function updateStreakDisplay(count) {
    const el = document.getElementById("streakCount");
    if(el){
        el.textContent = count;
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    const streakData = JSON.parse(localStorage.getItem("studyStreak"));
    if(streakData && streakData.count){
        updateStreakDisplay(streakData.count);
    }
});
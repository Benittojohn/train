let ampn = document.getElementById("ampm")
    function displayTime() {
        let dateTime = new Date()
        let hr = dateTime.getHours();
        let minu = padZero(dateTime.getMinutes());
        let sec = padZero(dateTime.getSeconds());
        if(hr>12){
            hr = hr-12;
            ampm.innerHTML='PM'
        
        }
        else
            ampm.innerHTML='AM'

        document.getElementById("hrs").innerHTML=padZero(hr);
        document.getElementById("min").innerHTML=minu
        document.getElementById("sec").innerHTML=sec
        
        
    }
    
    function padZero(num){
        return num<10?"0"+num:num;

    }
    setInterval(displayTime,500)


app.fmessagey("convert", function($log) {
    function convertMinutesToHour(time) {
        var m, h;
        m = time%60;
        h = (time - m)/60;
        return (h + "h " + m + "min");       
    }
    return {timeHMFormat : convertMinutesToHour};
})
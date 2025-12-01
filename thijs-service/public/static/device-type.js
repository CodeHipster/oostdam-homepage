let deviceType;

if (screen.width <= 480) {
    deviceType = "hand";
} else if (screen.width <= 1280) {
    deviceType = "lap";
} else {
    deviceType = "desk";    
}

export default deviceType;
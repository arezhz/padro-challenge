export default function CountDownTimer(second: number) {
    if (!second) return "00:00";
    let duration: number = second;
    const min = Math.floor(duration / 60);
    duration %= 60;
    const sec = Math.ceil(duration);

    const finalSecond = sec < 10 ? `0${sec}` : sec;
    const finalMinute = min < 10 ? `0${min}` : min;
    return `${finalMinute}:${finalSecond}`;
}

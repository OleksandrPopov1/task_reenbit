export const generateTimeMessage = (messageDate: string): string => {
    const timeMessage: Date = new Date(messageDate);

    const date: string = timeMessage.getMonth() + 1 + '/' + timeMessage.getDay() + '/' + timeMessage.getFullYear().toString().slice(2, 4);
    const hour: string = timeMessage.getHours() > 12 ? 'PM' + (timeMessage.getHours() - 12) : 'AM' + timeMessage.getHours();

    const minute: string = timeMessage.getMinutes().toString().length < 2 ?
        '0' + timeMessage.getMinutes() : timeMessage.getMinutes().toString();

    const time: string = hour.slice(2, 4) + ':' + minute + ' ' + hour.slice(0, 2)
    return date + ', ' + time;
}
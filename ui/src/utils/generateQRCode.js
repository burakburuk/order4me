export function generateQRCode(tableNumber) {
    const link = 'http://192.168.2.2:8080';
    return `${link}/tableNumber=${tableNumber}`;
}

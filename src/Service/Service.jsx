export default function createConnection(serverUrl, roomId) {

    let connectedCallbacks;
    let timeout;

    return {
        connect() {
            timeout = setTimeout(() => {
                if (connectedCallbacks) {
                    connectedCallbacks();
                }
            }, 100)
        },
        on(event, callback) {
            if (connectedCallbacks) {
                throw Error("error");
            }
            if (event !== 'connected') {

                throw Error("error");
            }
            connectedCallbacks = callback;
        },
        disconnect() {
            clearTimeout(timeout);
        }
    }
}
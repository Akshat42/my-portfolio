export async function getData(url, method = 'GET', headers = {}, body = null) {
    try {
        let res = await fetch(url, {
            method: method,
            headers: { ...headers },
            body: body,
        });
        return res;
    } catch (err) {
        return err;
    }
}

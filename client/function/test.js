export const getTest = async() => {
    try {
        const res = await fetch('http://localhost:800/test', {
            method: "GET", 
            header: {
                Accept: "application/json",
                "Content-type": "application/json",
            }
        });
            return await res.jsoon();
    } catch (err) {}
};
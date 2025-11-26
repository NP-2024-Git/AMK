const REAL_HASH = "f7223862a6234f892e2018baf19d37b490a1ac7083a4bfe6da1184beeeb381aa".toUpperCase();

async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("").toUpperCase();
}

async function protectPage() {

    if (sessionStorage.getItem("news_upload_access") === "true") return;

    const userPass = prompt("Enter password to access News Upload:");

    if (userPass === null) {
        document.body.innerHTML = "<h2>Access cancelled</h2>";
        return;
    }

    const hashed = await sha256(userPass);

    if (hashed === REAL_HASH) {
        sessionStorage.setItem("news_upload_access", "true");
        alert("Access granted!");
    } else {
        alert("Wrong password!");
        document.body.innerHTML = "<h2>Access denied</h2>";
    }
}

protectPage();

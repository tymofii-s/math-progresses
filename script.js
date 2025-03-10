function caculate(source) {
    let result;
    let firstEl;
    let diff;
    let lastEl;
    let n;

    switch (source) {
        case "el-beetween-neighbors":
            let prevEl = Number.parseFloat(document.getElementById("prev").value)
            let nextEl = Number.parseFloat(document.getElementById("next").value)

            result = (prevEl + nextEl) / 2
            document.getElementById("output").textContent = result
            break;

        case "formula-an-el":
            firstEl = Number.parseFloat(document.getElementById("first").value)
            diff = Number.parseFloat(document.getElementById("difference").value)
            n = Number.parseFloat(document.getElementById("n").value)

            result = firstEl + diff * (n-1)
            document.getElementById("output").textContent = result
            break;

        case "sum-of-first-n-els":
            firstEl = Number.parseFloat(document.getElementById("first").value)
            lastEl = Number.parseFloat(document.getElementById("last").value)
            n = Number.parseFloat(document.getElementById("n").value)

            result = (firstEl + lastEl) / 2 * n
            document.getElementById("output").textContent = result
            break;

        case "sum-of-first-n-els_with-diff":
            firstEl = Number.parseFloat(document.getElementById("first").value)
            diff = Number.parseFloat(document.getElementById("difference").value)
            n = Number.parseFloat(document.getElementById("n").value)

            result = (2*firstEl + diff*(n-1)) / 2 * n
            document.getElementById("output").textContent = result
            break;
            
        case "sum-of-first-n-els_without-n":
            firstEl = Number.parseFloat(document.getElementById("first").value)
            lastEl = Number.parseFloat(document.getElementById("last").value)
            diff = Number.parseFloat(document.getElementById("difference").value)
            
            n = (lastEl - firstEl) / diff + 1

            result = (2*firstEl + diff*(n-1)) / 2 * n
            document.getElementById("output").textContent = result
            break;
    }
}
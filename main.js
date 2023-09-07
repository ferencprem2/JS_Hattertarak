document.getElementById("calculateButton").addEventListener("click", (e) => {
    var resultLabel = document.getElementById("results")

    var storageCapacity = parseFloat(document.getElementById("capacity").value);
    var capacityOption = document.getElementById("capacityDropDown").selectedIndex

    var cloningSpeed = parseFloat(document.getElementById("cloning").value);
    var cloningOption = document.getElementById("cloningDropDown").selectedIndex
    
    var convertCloneToMBps = 0;
    var convertSpaceToMBps = 0;

        if (storageCapacity != " " || capacityOption != -1 || cloningOption != -1) {
            switch (capacityOption)
            {
                case 0:
                    convertSpaceToMBps = storageCapacity;
                    break;
                case 1:
                    convertSpaceToMBps = storageCapacity * 1000;
                    break;
                case 2:
                    convertSpaceToMBps = storageCapacity * 1000 * 1000;
                    break;
            }
    
            switch (cloningOption)
            {
                case 0:
                    convertCloneToMBps = cloningSpeed / 8;
                    break;
                case 1:
                    convertCloneToMBps = cloningSpeed / 1000;
                    break;
                case 2:
                    convertCloneToMBps = cloningSpeed;
                    break;
                case 3:
                    convertCloneToMBps = cloningSpeed * 1000;
                    break;
            }

        }
        resultLabel.innerHTML = `${convertSpaceToMBps / convertCloneToMBps} másodpercbe fog telni megtelíteni a háttértárat`
    e.preventDefault()
})
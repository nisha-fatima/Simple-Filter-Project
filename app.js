const list = document.getElementById("list")

var allData = [
    {
        name: "Apple", type: "FRUITS"
    },
    {
        name: "Honda", type: "CARS"
    },
    {
        name: "Lion", type: "ANIMALS"
    },
    {
        name: "Red", type: "COLORS"
    },
    {
        name: "Banana", type: "FRUITS"
    },
    {
        name: "BMW", type: "CARS"
    },
    {
        name: "Bear", type: "ANIMALS"
    },
    {
        name: "Blue", type: "COLORS"
    },
    {
        name: "Orange", type: "FRUITS"
    },
    {
        name: "Corolla", type: "CARS"
    },
    {
        name: "Snake", type: "ANIMALS"
    },
    {
        name: "Purple", type: "COLORS"
    },
]

function filterObjects(name) {
    list.innerHTML = ""
    let filteredData = allData.filter(function (data) {
        if (data.type === name) {
            return data.name
        }  
        else if (name === "ALL") {
            return data.name
        }
    })
    filteredData.map((data) => {
        var li = document.createElement("div")
        li.innerHTML = (data.name)
        li.className = "box"
        list.appendChild(li)
    })

} 
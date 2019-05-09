let input = document.getElementById("nameInput");

document.getElementById("search").onclick = search;

let output = document.getElementById("result");

let people = [
    {
        "name": "Jane Doe",
        "sex": "f",
        "born": 1876,
        "died": 1956,
        "father": "Petrus de Milliano",
        "mother": "Sophia van Damme"
    },
    {
        "name": "Jane Ramirez",
        "sex": "f",
        "born": 1900,
        "died": 1950,
        "father": "Jon de Ro",
        "mother": "Len mo Mi"
    },
    {"name": "Jesse Framez",
        "sex": "f",
        "born": 1900,
        "died": 1943,
        "father": "Isra Campos",
        "mother": "Heath Hendricks"
    },
    {"name": "Mehreen Robins",
        "sex": "f",
        "born": 1911,
        "died": 1956,
        "father": "Karam Rios",
        "mother": "Katie-Louise Deleon"
    },
    {"name": "Maksim Watkinsz",
        "sex": "f",
        "born": 1932,
        "died": 1987,
        "father": "Emaan Paineo",
        "mother": "Patricia Peck"
    }
];

function search() {
    let searchPeople = input.value.toLowerCase();
    let result = "";

    for (let object of people) {
        if (object["name"].toLowerCase().includes(searchPeople)) {
            result += "<p>Name: " + object["name"] +
                "<br>Sex: " + object["sex"] +
                "<br>Born: " + object["born"] +
                "<br>Died: " + object["died"] +
                "<br>Mother: " + object["mother"] +
                "<br>Father: " + object["father"] +
                "</p><hr>";
        }
    }

    if (result) {
        output.innerHTML = result;
    }
    else {
        output.innerHTML = "<p>No person found.</p>";
    }
}
var firstNames = [];
var lastNames = [];
var fullNames = [];

fetch("https://randomuser.me/api/?results=200")
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        processData(myJson.results);
        return myJson;
    });

function processData(data){
    for (count = 0; count < data.length; count++) {
        firstNames.push(data[count].name.first);
        lastNames.push(data[count].name.last);
        fullNames.push(data[count].name.first + " " + data[count].name.last);
    }
}

function genCode(){
    var text = "  \"review\": [{\n" +
        "    \"@type\": \"Review\",\n" +
        "    \"reviewBody\": \"If you want to buy instagram likes, then this is the website for you! 10/10\",\n" +
        "    \"reviewRating\": {\n" +
        "      \"@type\": \"Rating\",\n" +
        "      \"ratingValue\": \"5\",\n" +
        "      \"bestRating\": \"5\",\n" +
        "      \"worstRating\": \"1\"\n" +
        "    }," +
        "    \"datePublished\": \"2019-" + getRndInteger(1, 13) + "-"+ getRndInteger(1, 32) + ",\n" +
        "    \"author\": {\"@type\": \"Person\", \"name\": "+fullNames[0]+"}\n" +
        "  },";
    for (count = 1; count < fullNames.length; count++){
        var month = getRndInteger(1, 13);
        function day (month){
            if (month === 2){
                return getRndInteger(1, 29);
            }
            else if (month % 2 === 0 && month !== 2){
                return getRndInteger(1, 31);
            }
            else {
                return getRndInteger(1, 32);
            }
        }
        var text = text + "  \"review\": [{\n" +
            "    \"@type\": \"Review\",\n" +
            "    \"reviewBody\": \"If you want to buy instagram likes, then this is the website for you! 10/10\",\n" +
            "    \"reviewRating\": {\n" +
            "      \"@type\": \"Rating\",\n" +
            "      \"ratingValue\": \"5\",\n" +
            "      \"bestRating\": \"5\",\n" +
            "      \"worstRating\": \"1\"\n" +
            "    }," +
            "    \"datePublished\": \"2019-" + month + "-"+ day(month) + ",\n" +
            "    \"author\": {\"@type\": \"Person\", \"name\": "+fullNames[count]+"}\n" +
            "  },";
    document.getElementById("goodShit").value = text;
    }
}

//https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function genForReview(){
    var review = document.getElementById("review").value;
    var name = fullNames[getRndInteger(0, fullNames.length - 1)];
    var text = "  \"review\": [{\n" +
        "    \"@type\": \"Review\",\n" +
        "    \"reviewBody\": \"" + review + ",\n" +
        "    \"reviewRating\": {\n" +
        "      \"@type\": \"Rating\",\n" +
        "      \"ratingValue\": \"5\",\n" +
        "      \"bestRating\": \"5\",\n" +
        "      \"worstRating\": \"1\"\n" +
        "    }," +
        "    \"datePublished\": \"2019-" + getRndInteger(1, 13) + "-"+ getRndInteger(1, 32) + ",\n" +
        "    \"author\": {\"@type\": \"Person\", \"name\": "+name+"}\n" +
        "  },";
    var htmlText = "<div class=\"reviews-items\">\n" +
        "<div class=\"reviews-names\"><b>" + name + "</b></div>\n" +
        "<div class=\"reviews-rating\">5<i class=\"fa fa-star\" aria-hidden=\"true\"></i></div>\n" +
        "<div class=\"reviews-text\">\"" + review + "\"</div>\n" +
        "</div>"
    document.getElementById("goodShit").value = text;
    document.getElementById("htmlGen").value = htmlText;
}

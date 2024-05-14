$(document).ready(function () {

    // Quiz Questions

    var quiz_data = {
        geography: [
            {
                question: "What is the capital of France?",
                options: ["Madrid", "London", "Paris", "Rome"],
                answer: "Paris"
            },
            {
                question: "Which river is the longest in the world?",
                options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
                answer: "Nile"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "India", "Australia"],
                answer: "Japan"
            },
            {
                question: "What is the tallest mountain in the world?",
                options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
                answer: "Mount Everest"
            },
            {
                question: "Which continent is the largest by land area?",
                options: ["Africa", "Asia", "North America", "Antarctica"],
                answer: "Asia"
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: "Pacific Ocean"
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Sahara Desert", "Arabian Desert", "Kalahari Desert", "Gobi Desert"],
                answer: "Sahara Desert"
            },
            {
                question: "Which country is both in Europe and Asia?",
                options: ["Russia", "Turkey", "Kazakhstan", "Iran"],
                answer: "Russia"
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Maldives", "Vatican City", "San Marino"],
                answer: "Vatican City"
            },
            {
                question: "Which city is known as the City of Love?",
                options: ["Paris", "Rome", "Venice", "Prague"],
                answer: "Paris"
            },
            {
                question: "What is the capital of Japan?",
                options: ["Kyoto", "Osaka", "Tokyo", "Seoul"],
                answer: "Tokyo"
            },
            {
                question: "Which continent is known as the 'Dark Continent'?",
                options: ["Africa", "Australia", "Europe", "Antarctica"],
                answer: "Africa"
            },
            {
                question: "Which country is famous for the Great Barrier Reef?",
                options: ["Australia", "Philippines", "Indonesia", "Fiji"],
                answer: "Australia"
            },
            {
                question: "Which city is known as the 'Eternal City'?",
                options: ["Rome", "Athens", "Jerusalem", "Cairo"],
                answer: "Rome"
            },
            {
                question: "What is the largest island in the world?",
                options: ["Greenland", "Australia", "Borneo", "Madagascar"],
                answer: "Greenland"
            },
            {
                question: "Which country is known as the 'Land of the Midnight Sun'?",
                options: ["Norway", "Sweden", "Finland", "Iceland"],
                answer: "Norway"
            },
            {
                question: "What is the highest waterfall in the world?",
                options: ["Angel Falls", "Victoria Falls", "Niagara Falls", "Iguazu Falls"],
                answer: "Angel Falls"
            },
            {
                question: "Which river flows through the Grand Canyon?",
                options: ["Colorado River", "Mississippi River", "Amazon River", "Nile River"],
                answer: "Colorado River"
            },
            {
                question: "Which country is known as the 'Land of Fire and Ice'?",
                options: ["Iceland", "Greenland", "Norway", "Canada"],
                answer: "Iceland"
            },
            {
                question: "What is the highest mountain range in the world?",
                options: ["Himalayas", "Andes", "Rockies", "Alps"],
                answer: "Himalayas"
            },
            {
                question: "Which city is known as the 'Pearl of the Adriatic'?",
                options: ["Dubrovnik", "Venice", "Barcelona", "Athens"],
                answer: "Dubrovnik"
            },
            {
                question: "What is the capital city of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Perth"],
                answer: "Canberra"
            },
            {
                question: "Which country is the largest by land area?",
                options: ["Russia", "Canada", "China", "United States"],
                answer: "Russia"
            },
            {
                question: "What is the tallest mountain in Africa?",
                options: ["Mount Kilimanjaro", "Mount Kenya", "Mount Stanley", "Mount Elgon"],
                answer: "Mount Kilimanjaro"
            },
            {
                question: "Which continent is the least populated?",
                options: ["Australia", "Antarctica", "South America", "Africa"],
                answer: "Antarctica"
            },
            {
                question: "Which country has the longest coastline?",
                options: ["Canada", "Australia", "Russia", "Norway"],
                answer: "Canada"
            },
            {
                question: "What is the capital city of Brazil?",
                options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                answer: "Brasília"
            },
            {
                question: "Which river runs through London?",
                options: ["Thames", "Seine", "Danube", "Rhine"],
                answer: "Thames"
            },
            {
                question: "Which ocean is the largest in the world?",
                options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
                answer: "Pacific Ocean"
            },
            {
                question: "Which country is known as the 'Land of the Rising Sun'?",
                options: ["Japan", "China", "Korea", "Vietnam"],
                answer: "Japan"
            },
            {
                question: "Which city is located at the mouth of the Amazon River?",
                options: ["Manaus", "Belem", "Iquitos", "Santarem"],
                answer: "Belem"
            },
            {
                question: "What is the smallest country in the world by land area?",
                options: ["Monaco", "Maldives", "Vatican City", "Nauru"],
                answer: "Vatican City"
            },
            {
                question: "Which African country is known as the 'Rainbow Nation'?",
                options: ["South Africa", "Kenya", "Nigeria", "Egypt"],
                answer: "South Africa"
            },
            {
                question: "Which strait separates Africa from Europe?",
                options: ["Strait of Gibraltar", "Strait of Hormuz", "Bering Strait", "Strait of Malacca"],
                answer: "Strait of Gibraltar"
            },
            {
                question: "Which country is the largest producer of coffee in the world?",
                options: ["Brazil", "Colombia", "Vietnam", "Ethiopia"],
                answer: "Brazil"
            },
            {
                question: "What is the highest mountain in North America?",
                options: ["Mount McKinley", "Mount Logan", "Mount Saint Elias", "Mount Foraker"],
                answer: "Mount McKinley"
            },
            {
                question: "Which African country was formerly known as Abyssinia?",
                options: ["Ethiopia", "Eritrea", "Djibouti", "Somalia"],
                answer: "Ethiopia"
            },
            {
                question: "Which sea is bordered by Europe to the north and Africa to the south?",
                options: ["Mediterranean Sea", "Black Sea", "Red Sea", "Caspian Sea"],
                answer: "Mediterranean Sea"
            },
            {
                question: "Which city is famous for its canals, gondolas, and grand squares?",
                options: ["Venice", "Paris", "Amsterdam", "Bruges"],
                answer: "Venice"
            },
            {
                question: "Which country has the most islands in the world?",
                options: ["Sweden", "Indonesia", "Philippines", "Japan"],
                answer: "Sweden"
            },
            {
                question: "What is the largest island in the Caribbean?",
                options: ["Cuba", "Hispaniola", "Jamaica", "Puerto Rico"],
                answer: "Cuba"
            },
            {
                question: "Which city is known as the 'City of Love'?",
                options: ["Paris", "Venice", "Florence", "Rome"],
                answer: "Paris"
            },
            {
                question: "Which country is located on the Iberian Peninsula?",
                options: ["Spain", "Italy", "Portugal", "Greece"],
                answer: "Spain"
            },
            {
                question: "Which African country is home to the Great Pyramid of Giza?",
                options: ["Egypt", "Sudan", "Algeria", "Libya"],
                answer: "Egypt"
            },
            {
                question: "Which country has the highest population in the world?",
                options: ["China", "India", "United States", "Russia"],
                answer: "China"
            },
            {
                question: "Which river flows through Baghdad?",
                options: ["Tigris", "Euphrates", "Nile", "Jordan"],
                answer: "Tigris"
            },
            {
                question: "What is the smallest continent in the world?",
                options: ["Australia", "Europe", "Asia", "Antarctica"],
                answer: "Australia"
            },
            {
                question: "What is the tallest mountain in Europe?",
                options: ["Mont Blanc", "Mount Elbrus", "Matterhorn", "Mount Blanc de Courmayeur"],
                answer: "Mount Elbrus"
            },
            {
                question: "Which country is located on the Scandinavian Peninsula?",
                options: ["Sweden", "Denmark", "Finland", "Norway"],
                answer: "Sweden"
            },
            {
                question: "Which strait separates Asia from North America?",
                options: ["Bering Strait", "Strait of Hormuz", "Strait of Gibraltar", "English Channel"],
                answer: "Bering Strait"
            },
            {
                question: "What is the capital city of New Zealand?",
                options: ["Wellington", "Auckland", "Christchurch", "Hamilton"],
                answer: "Wellington"
            },
            {
                question: "Which island is known as the 'Pearl of the Indian Ocean'?",
                options: ["Sri Lanka", "Maldives", "Madagascar", "Mauritius"],
                answer: "Sri Lanka"
            },
            {
                question: "Which river forms part of the border between the United States and Mexico?",
                options: ["Rio Grande", "Mississippi", "Colorado", "Columbia"],
                answer: "Rio Grande"
            },
            {
                question: "What is the largest city in Africa by population?",
                options: ["Lagos", "Cairo", "Kinshasa", "Johannesburg"],
                answer: "Lagos"
            },
            {
                question: "Which desert is often called the 'Forbidden Desert'?",
                options: ["Rub' al Khali", "Gobi Desert", "Sahara Desert", "Atacama Desert"],
                answer: "Rub' al Khali"
            },
            {
                question: "Which city is known as the 'City of Seven Hills'?",
                options: ["Rome", "Athens", "Lisbon", "Istanbul"],
                answer: "Rome"
            },
            {
                question: "What is the largest island in Asia?",
                options: ["Borneo", "Greenland", "Sumatra", "Honshu"],
                answer: "Borneo"
            },
            {
                question: "Which river flows through Paris?",
                options: ["Seine", "Thames", "Danube", "Rhine"],
                answer: "Seine"
            },
            {
                question: "What is the capital city of South Africa?",
                options: ["Johannesburg", "Pretoria", "Cape Town", "Durban"],
                answer: "Pretoria"
            },
            {
                question: "Which country has the longest coastline in the Mediterranean Sea?",
                options: ["Italy", "Spain", "Greece", "Turkey"],
                answer: "Greece"
            },
            {
                question: "What is the largest lake in Africa?",
                options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
                answer: "Lake Victoria"
            },
            {
                question: "Which country is known as the 'Land of a Thousand Lakes'?",
                options: ["Finland", "Sweden", "Canada", "Norway"],
                answer: "Finland"
            },
            {
                question: "Which city is located at the highest altitude of any capital city in the world?",
                options: ["La Paz", "Kathmandu", "Lhasa", "Bogotá"],
                answer: "La Paz"
            },
            {
                question: "Which country is known as the 'Roof of the World'?",
                options: ["Nepal", "Tibet", "Switzerland", "Bhutan"],
                answer: "Tibet"
            },
            {
                question: "What is the largest city in Canada by population?",
                options: ["Toronto", "Montreal", "Vancouver", "Calgary"],
                answer: "Toronto"
            },
            {
                question: "Which river is considered the lifeline of Egypt?",
                options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
                answer: "Nile"
            },
            {
                question: "What is the capital city of Argentina?",
                options: ["Buenos Aires", "Santiago", "Lima", "Brasília"],
                answer: "Buenos Aires"
            },
            {
                question: "Which mountain range is known as the 'Roof of the World'?",
                options: ["Himalayas", "Andes", "Alps", "Rocky Mountains"],
                answer: "Himalayas"
            },
            {
                question: "What is the smallest country in Africa by land area?",
                options: ["Seychelles", "Comoros", "Mauritius", "São Tomé and Príncipe"],
                answer: "Seychelles"
            },
            {
                question: "Which country is known as the 'Land of Lakes'?",
                options: ["Finland", "Sweden", "Canada", "Norway"],
                answer: "Finland"
            },
            {
                question: "Which river is known as 'The Yellow River'?",
                options: ["Yangtze", "Mekong", "Huang He", "Indus"],
                answer: "Huang He"
            },
            {
                question: "What is the largest island in the Mediterranean Sea?",
                options: ["Sardinia", "Sicily", "Cyprus", "Crete"],
                answer: "Sicily"
            },
            {
                question: "Which country is known as 'The Land of the Pharaohs'?",
                options: ["Greece", "Turkey", "Egypt", "Italy"],
                answer: "Egypt"
            },
            {
                question: "What is the largest city in Brazil by population?",
                options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
                answer: "São Paulo"
            },
            {
                question: "Which country is known as the 'Land of the Long White Cloud'?",
                options: ["New Zealand", "Iceland", "Canada", "Norway"],
                answer: "New Zealand"
            },
            {
                question: "What is the capital city of Indonesia?",
                options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
                answer: "Jakarta"
            },
            {
                question: "Which desert is often called 'The Land of Death'?",
                options: ["Atacama Desert", "Sahara Desert", "Namib Desert", "Kalahari Desert"],
                answer: "Namib Desert"
            },
            {
                question: "What is the smallest country in Asia by land area?",
                options: ["Singapore", "Maldives", "Bahrain", "Brunei"],
                answer: "Maldives"
            },
            {
                question: "Which river is known as 'The River of Sorrows'?",
                options: ["Nile", "Yangtze", "Indus", "Yellow River"],
                answer: "Yellow River"
            },
            {
                question: "What is the largest city in the United States by population?",
                options: ["New York City", "Los Angeles", "Chicago", "Houston"],
                answer: "New York City"
            },
            {
                question: "Which canal connects the Mediterranean Sea to the Red Sea?",
                options: ["Suez Canal", "Panama Canal", "Kiel Canal", "Corinth Canal"],
                answer: "Suez Canal"
            },
            {
                question: "What is the capital city of India?",
                options: ["Mumbai", "Delhi", "Kolkata", "Bangalore"],
                answer: "Delhi"
            }
        ],
        general_knowledge: [
            {
                question: "What is the capital of Canada?",
                options: ["Toronto", "Ottawa", "Montreal", "Vancouver"],
                answer: "Ottawa"
            },
            {
                question: "Who wrote 'To Kill a Mockingbird'?",
                options: ["Ernest Hemingway", "F. Scott Fitzgerald", "Harper Lee", "John Steinbeck"],
                answer: "Harper Lee"
            },
            {
                question: "What is the chemical symbol for water?",
                options: ["W", "H2", "H2O", "O2"],
                answer: "H2O"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: "Mars"
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
                answer: "Leonardo da Vinci"
            },
            {
                question: "What is the currency of Japan?",
                options: ["Yuan", "Yen", "Rupee", "Won"],
                answer: "Yen"
            },
            {
                question: "Which element has the chemical symbol 'Fe'?",
                options: ["Iron", "Gold", "Silver", "Copper"],
                answer: "Iron"
            },
            {
                question: "Who was the first woman to fly solo across the Atlantic Ocean?",
                options: ["Amelia Earhart", "Bessie Coleman", "Valentina Tereshkova", "Sally Ride"],
                answer: "Amelia Earhart"
            },
            {
                question: "Which country is famous for the ancient ruins of Machu Picchu?",
                options: ["Mexico", "Peru", "Brazil", "Chile"],
                answer: "Peru"
            },
            {
                question: "Who discovered penicillin?",
                options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Jonas Salk"],
                answer: "Alexander Fleming"
            },
            {
                question: "What is the tallest mammal in the world?",
                options: ["Elephant", "Giraffe", "Hippopotamus", "Rhino"],
                answer: "Giraffe"
            },
            {
                question: "Which ocean is the largest by size?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: "Pacific Ocean"
            },
            {
                question: "Who wrote 'Romeo and Juliet'?",
                options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
                answer: "William Shakespeare"
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Ag", "Au", "Gl"],
                answer: "Au"
            },
            {
                question: "What is the capital of Australia?",
                options: ["Melbourne", "Sydney", "Canberra", "Brisbane"],
                answer: "Canberra"
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "India", "Australia"],
                answer: "Japan"
            },
            {
                question: "Who wrote '1984'?",
                options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
                answer: "George Orwell"
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Liver", "Skin", "Heart", "Lung"],
                answer: "Skin"
            },
            {
                question: "What is the chemical symbol for oxygen?",
                options: ["O", "O2", "O3", "OH"],
                answer: "O"
            },
            {
                question: "Who is known as the father of modern physics?",
                options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
                answer: "Albert Einstein"
            },
            {
                question: "What is the capital city of France?",
                options: ["London", "Berlin", "Paris", "Rome"],
                answer: "Paris"
            },
            {
                question: "Who wrote the play 'Romeo and Juliet'?",
                options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
                answer: "William Shakespeare"
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                answer: "Mars"
            },
            {
                question: "Who is known as the 'Father of Computers'?",
                options: ["Bill Gates", "Alan Turing", "Steve Jobs", "Charles Babbage"],
                answer: "Charles Babbage"
            },
            {
                question: "Which continent is the largest by land area?",
                options: ["Asia", "Africa", "North America", "South America"],
                answer: "Asia"
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                answer: "Nile"
            },
            {
                question: "Who wrote the novel 'To Kill a Mockingbird'?",
                options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Mark Twain"],
                answer: "Harper Lee"
            },
            {
                question: "Which country is known as the 'Land of the Rising Sun'?",
                options: ["China", "India", "Japan", "Russia"],
                answer: "Japan"
            },
            {
                question: "Who is the author of 'The Great Gatsby'?",
                options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Mark Twain"],
                answer: "F. Scott Fitzgerald"
            },
            {
                question: "What is the largest mammal in the world?",
                options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
                answer: "Blue Whale"
            },
            {
                question: "Which element is the lightest?",
                options: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
                answer: "Hydrogen"
            },
            {
                question: "Who painted the ceiling of the Sistine Chapel?",
                options: ["Raphael", "Leonardo da Vinci", "Donatello", "Michelangelo"],
                answer: "Michelangelo"
            },
            {
                question: "What is the capital city of Canada?",
                options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
                answer: "Ottawa"
            },
            {
                question: "Which is the largest ocean in the world?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                answer: "Pacific Ocean"
            },
            {
                question: "Which country is known as the 'Land of the Midnight Sun'?",
                options: ["Norway", "Sweden", "Finland", "Denmark"],
                answer: "Norway"
            },
            {
                question: "Who composed the musical work 'The Four Seasons'?",
                options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Antonio Vivaldi", "Johann Sebastian Bach"],
                answer: "Antonio Vivaldi"
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Iron", "Diamond", "Gold", "Platinum"],
                answer: "Diamond"
            },
            {
                question: "Who was the first man to walk on the moon?",
                options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
                answer: "Neil Armstrong"
            },
            {
                question: "Which gas is most abundant in the Earth's atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
                answer: "Nitrogen"
            },
            {
                question: "Who painted 'Starry Night'?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dalí"],
                answer: "Vincent van Gogh"
            },
            {
                question: "What is the chemical symbol for carbon?",
                options: ["C", "Co", "Cr", "Ca"],
                answer: "C"
            },
            {
                question: "Who wrote the 'Harry Potter' series of books?",
                options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Stephenie Meyer"],
                answer: "J.K. Rowling"
            },
            {
                question: "What is the capital city of Spain?",
                options: ["Madrid", "Barcelona", "Valencia", "Seville"],
                answer: "Madrid"
            },
            {
                question: "Who invented the telephone?",
                options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
                answer: "Alexander Graham Bell"
            },
            {
                question: "What is the chemical symbol for potassium?",
                options: ["K", "P", "Pt", "Kr"],
                answer: "K"
            },
            {
                question: "Who wrote 'The Catcher in the Rye'?",
                options: ["J.D. Salinger", "Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain"],
                answer: "J.D. Salinger"
            },
            {
                question: "Who is known as the 'Father of Physics'?",
                options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Archimedes"],
                answer: "Isaac Newton"
            },
            {
                question: "What is the chemical symbol for sodium?",
                options: ["Na", "Ni", "Nb", "Ne"],
                answer: "Na"
            },
            {
                question: "Which is the only mammal capable of sustained flight?",
                options: ["Bat", "Bird", "Flying Squirrel", "Pterosaur"],
                answer: "Bat"
            },
            {
                question: "Who painted 'The Last Supper'?",
                options: ["Raphael", "Leonardo da Vinci", "Donatello", "Michelangelo"],
                answer: "Leonardo da Vinci"
            },
            {
                question: "What is the capital city of Italy?",
                options: ["Rome", "Milan", "Florence", "Venice"],
                answer: "Rome"
            },
            {
                question: "Who discovered electricity?",
                options: ["Benjamin Franklin", "Thomas Edison", "Nikola Tesla", "Michael Faraday"],
                answer: "Benjamin Franklin"
            },
            {
                question: "What is the chemical symbol for iron?",
                options: ["I", "Fe", "Ir", "In"],
                answer: "Fe"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Venus", "Jupiter", "Saturn", "Mars"],
                answer: "Jupiter"
            },
            {
                question: "Who is the author of 'The Lord of the Rings' trilogy?",
                options: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "George R.R. Martin"],
                answer: "J.R.R. Tolkien"
            },
            {
                question: "What is the chemical symbol for mercury?",
                options: ["Hg", "He", "Ho", "Hf"],
                answer: "Hg"
            },
            {
                question: "Who painted 'The Starry Night'?",
                options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dalí"],
                answer: "Vincent van Gogh"
            },
            {
                question: "What is the capital city of China?",
                options: ["Beijing", "Shanghai", "Guangzhou", "Hong Kong"],
                answer: "Beijing"
            },
            {
                question: "What is the chemical symbol for silver?",
                options: ["Si", "Au", "Ag", "Sr"],
                answer: "Ag"
            },
        ],
        maths: [
            {
                question: "What is 5 + 7?",
                options: ["10", "11", "12", "13"],
                answer: "12"
            },
            {
                question: "What is 9 * 3?",
                options: ["24", "27", "30", "33"],
                answer: "27"
            },
            {
                question: "What is 8 - 4?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                question: "What is 12 / 3?",
                options: ["2", "3", "4", "6"],
                answer: "4"
            },
            {
                question: "What is the square root of 81?",
                options: ["6", "7", "8", "9"],
                answer: "9"
            },
            {
                question: "What is 3 to the power of 4?",
                options: ["27", "64", "81", "12"],
                answer: "81"
            },
            {
                question: "What is 15 % 4?",
                options: ["2", "3", "4", "5"],
                answer: "3"
            },
            {
                question: "What is the value of pi (π) to two decimal places?",
                options: ["3.12", "3.14", "3.16", "3.18"],
                answer: "3.14"
            },
            {
                question: "What is 20 divided by 5?",
                options: ["2", "4", "6", "8"],
                answer: "4"
            },
            {
                question: "What is 10 squared?",
                options: ["100", "20", "50", "200"],
                answer: "100"
            },
            {
                question: "What is 2 plus the square root of 9?",
                options: ["2", "3", "4", "5"],
                answer: "5"
            },
            {
                question: "What is 3 factorial?",
                options: ["3", "6", "9", "12"],
                answer: "6"
            },
            {
                question: "What is 4 times 6?",
                options: ["20", "22", "24", "26"],
                answer: "24"
            },
            {
                question: "What is 7 minus 3?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                question: "What is the cube root of 64?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                question: "What is 15 divided by 5?",
                options: ["2", "3", "4", "5"],
                answer: "3"
            },
            {
                question: "What is 9 squared?",
                options: ["81", "18", "64", "72"],
                answer: "81"
            },
            {
                question: "What is 18 divided by 3?",
                options: ["4", "6", "8", "9"],
                answer: "6"
            },
            {
                question: "What is the value of 5 to the power of 3?",
                options: ["125", "135", "140", "145"],
                answer: "125"
            },
            {
                question: "What is 25 % 6?",
                options: ["1", "2", "3", "4"],
                answer: "1"
            },
            {
                question: "What is the value of π (pi)?",
                options: ["3.1416", "3.1428", "3.1412", "3.1408"],
                answer: "3.1416"
            },
            {
                question: "What is the result of 5 multiplied by 9?",
                options: ["45", "54", "36", "63"],
                answer: "45"
            },
            {
                question: "What is the square root of 64?",
                options: ["8", "6", "4", "10"],
                answer: "8"
            },
            {
                question: "What is the value of 10 to the power of 3?",
                options: ["100", "1000", "10", "10000"],
                answer: "1000"
            },
            {
                question: "What is the result of 25 divided by 5?",
                options: ["4", "5", "6", "7"],
                answer: "5"
            },
            {
                question: "What is the value of 3 factorial?",
                options: ["3", "6", "9", "12"],
                answer: "6"
            },
            {
                question: "What is the result of 12 minus 7?",
                options: ["5", "6", "7", "8"],
                answer: "5"
            },
            {
                question: "What is the value of log10(100)?",
                options: ["1", "2", "10", "100"],
                answer: "2"
            },
            {
                question: "What is the result of 3 plus 7?",
                options: ["8", "9", "10", "11"],
                answer: "10"
            },
            {
                question: "What is the value of sin(90 degrees)?",
                options: ["1", "0", "-1", "2"],
                answer: "1"
            },
            {
                question: "What is the result of 8 multiplied by 6?",
                options: ["46", "48", "54", "56"],
                answer: "48"
            },
            {
                question: "What is the value of 2 to the power of 5?",
                options: ["8", "16", "32", "64"],
                answer: "32"
            },
            {
                question: "What is the result of 15 divided by 3?",
                options: ["4", "5", "6", "7"],
                answer: "5"
            },
            {
                question: "What is the value of 4 factorial?",
                options: ["16", "20", "24", "28"],
                answer: "24"
            },
            {
                question: "What is the result of 20 minus 9?",
                options: ["9", "10", "11", "12"],
                answer: "11"
            },
            {
                question: "What is the value of log2(16)?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                question: "What is the result of 6 plus 8?",
                options: ["12", "14", "16", "18"],
                answer: "14"
            },
            {
                question: "What is the value of cos(0 degrees)?",
                options: ["1", "0", "-1", "2"],
                answer: "1"
            },
            {
                question: "What is the result of 7 multiplied by 9?",
                options: ["56", "63", "70", "77"],
                answer: "63"
            },
            {
                question: "What is the value of 3 to the power of 4?",
                options: ["27", "64", "81", "96"],
                answer: "81"
            },
            {
                question: "What is the result of 18 divided by 3?",
                options: ["4", "5", "6", "7"],
                answer: "6"
            },
            {
                question: "What is the value of 5 factorial?",
                options: ["120", "150", "180", "200"],
                answer: "120"
            },
            {
                question: "What is the result of 30 minus 11?",
                options: ["17", "18", "19", "20"],
                answer: "19"
            },
            {
                question: "What is the value of log5(125)?",
                options: ["2", "3", "4", "5"],
                answer: "3"
            },
            {
                question: "What is the result of 4 plus 9?",
                options: ["11", "12", "13", "14"],
                answer: "13"
            },
            {
                question: "What is the value of sin(180 degrees)?",
                options: ["1", "0", "-1", "2"],
                answer: "0"
            },
            {
                question: "What is the result of 12 multiplied by 11?",
                options: ["123", "132", "143", "156"],
                answer: "132"
            },
            {
                question: "What is the value of 2 to the power of 6?",
                options: ["32", "64", "128", "256"],
                answer: "64"
            },
            {
                question: "What is the result of 45 divided by 5?",
                options: ["8", "9", "10", "11"],
                answer: "9"
            },
            {
                question: "What is the value of 6 factorial?",
                options: ["720", "840", "960", "1080"],
                answer: "720"
            },
            {
                question: "What is the result of 40 minus 19?",
                options: ["17", "18", "21", "22"],
                answer: "21"
            },
            {
                question: "What is the value of log3(81)?",
                options: ["2", "3", "4", "5"],
                answer: "4"
            },
            {
                question: "What is the result of 8 plus 6?",
                options: ["12", "14", "16", "18"],
                answer: "14"
            },
            {
                question: "What is the value of cos(90 degrees)?",
                options: ["1", "0", "-1", "2"],
                answer: "0"
            },
            {
                question: "What is the result of 15 multiplied by 7?",
                options: ["105", "110", "115", "120"],
                answer: "105"
            },
            {
                question: "What is the value of 2 to the power of 8?",
                options: ["128", "256", "512", "1024"],
                answer: "256"
            },
            {
                question: "What is the result of 36 divided by 4?",
                options: ["6", "7", "8", "9"],
                answer: "9"
            },
            {
                question: "What is the value of 7 factorial?",
                options: ["5040", "6020", "7000", "8000"],
                answer: "5040"
            },
            {
                question: "What is the result of 50 minus 17?",
                options: ["30", "31", "33", "34"],
                answer: "33"
            },
            {
                question: "What is the value of log2(32)?",
                options: ["3", "4", "5", "6"],
                answer: "5"
            },
            {
                question: "What is the result of 11 plus 12?",
                options: ["21", "22", "23", "24"],
                answer: "23"
            },
            {
                question: "What is the value of sin(270 degrees)?",
                options: ["1", "0", "-1", "2"],
                answer: "-1"
            },
            {
                question: "What is the result of 18 multiplied by 8?",
                options: ["134", "142", "146", "148"],
                answer: "144"
            },
            {
                question: "What is the value of 3 to the power of 5?",
                options: ["243", "248", "253", "258"],
                answer: "243"
            },
            {
                question: "What is the result of 64 divided by 8?",
                options: ["6", "7", "8", "9"],
                answer: "8"
            },
            {
                question: "What is the result of 80 minus 25?",
                options: ["52", "55", "56", "65"],
                answer: "55"
            },
            {
                question: "What is the value of log5(625)?",
                options: ["3", "4", "5", "6"],
                answer: "4"
            },
            {
                question: "What is the result of 9 plus 14?",
                options: ["22", "23", "24", "25"],
                answer: "23"
            },
            {
                question: "What is the value of cos(180 degrees)?",
                options: ["1", "0", "-1", "2"],
                answer: "-1"
            },
            {
                question: "What is the result of 16 multiplied by 9?",
                options: ["140", "144", "148", "152"],
                answer: "144"
            },
            {
                question: "What is the value of 2 to the power of 7?",
                options: ["128", "256", "512", "1024"],
                answer: "128"
            },
            {
                question: "What is the result of 72 divided by 9?",
                options: ["6", "7", "8", "9"],
                answer: "8"
            },
            {
                question: "What is the value of 8 factorial?",
                options: ["40320", "40840", "40960", "41080"],
                answer: "40320"
            },
            {
                question: "What is the result of 90 minus 31?",
                options: ["52", "59", "61", "69"],
                answer: "59"
            },
            {
                question: "What is the value of log4(64)?",
                options: ["2", "3", "4", "5"],
                answer: "3"
            },
            {
                question: "What is the result of 10 plus 17?",
                options: ["26", "27", "28", "29"],
                answer: "27"
            },
            {
                question: "What is the value of sin(360 degrees)?",
                options: ["1", "0", "-1", "2"],
                answer: "0"
            },
            {
                question: "What is the result of 20 multiplied by 15?",
                options: ["300", "350", "400", "450"],
                answer: "300"
            },
            {
                question: "What is the value of 4 to the power of 4?",
                options: ["16", "64", "256", "1024"],
                answer: "256"
            },
            {
                question: "What is the result of 80 divided by 5?",
                options: ["14", "15", "16", "17"],
                answer: "16"
            },
            {
                question: "What is the value of 9 factorial?",
                options: ["362880", "364480", "365280", "366080"],
                answer: "362880"
            },
            {
                question: "What is the result of 100 minus 33?",
                options: ["67", "77", "87", "97"],
                answer: "67"
            },
            {
                question: "What is the value of log10(1000)?",
                options: ["1", "2", "3", "4"],
                answer: "3"
            },
            {
                question: "What is the result of 15 plus 19?",
                options: ["32", "34", "36", "38"],
                answer: "34"
            },
            {
                question: "What is the value of cos(270 degrees)?",
                options: ["1", "0", "-1", "2"],
                answer: "0"
            },
            {
                question: "What is the result of 24 multiplied by 7?",
                options: ["158", "162", "168", "172"],
                answer: "168"
            },
            {
                question: "What is the result of 96 divided by 6?",
                options: ["14", "16", "18", "20"],
                answer: "16"
            },
            {
                question: "What is the value of 10 factorial?",
                options: ["3628800", "3644800", "3652800", "3660800"],
                answer: "3628800"
            }
        ],
        cinema: [
            {
                question: "Who directed the movie 'Inception'?",
                options: ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
                answer: "Christopher Nolan"
            },
            {
                question: "Which actor played the role of Tony Stark in the Marvel Cinematic Universe?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
                answer: "Robert Downey Jr."
            },
            {
                question: "Which film won the Academy Award for Best Picture in 2019?",
                options: ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
                answer: "Parasite"
            },
            {
                question: "Who is the director of 'The Shawshank Redemption'?",
                options: ["Martin Scorsese", "Christopher Nolan", "Quentin Tarantino", "Frank Darabont"],
                answer: "Frank Darabont"
            },
            {
                question: "Which movie features characters named Neo, Morpheus, and Trinity?",
                options: ["The Matrix", "Inception", "Interstellar", "Blade Runner"],
                answer: "The Matrix"
            },
            {
                question: "In which film does Heath Ledger play the role of the Joker?",
                options: ["The Dark Knight", "Batman Begins", "Suicide Squad", "The Dark Knight Rises"],
                answer: "The Dark Knight"
            },
            {
                question: "Who won the Academy Award for Best Actor for his role in the film 'Forrest Gump'?",
                options: ["Tom Hanks", "Leonardo DiCaprio", "Brad Pitt", "Denzel Washington"],
                answer: "Tom Hanks"
            },
            {
                question: "Which movie features a character named Jack Dawson and is set aboard the Titanic?",
                options: ["Titanic", "The Great Gatsby", "Pirates of the Caribbean", "Cast Away"],
                answer: "Titanic"
            },
            {
                question: "Who directed the film 'Pulp Fiction'?",
                options: ["Quentin Tarantino", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"],
                answer: "Quentin Tarantino"
            },
            {
                question: "Which actress won an Academy Award for her role in 'La La Land'?",
                options: ["Meryl Streep", "Emma Stone", "Jennifer Lawrence", "Natalie Portman"],
                answer: "Emma Stone"
            },
            {
                question: "Which movie is based on a novel by J.R.R. Tolkien?",
                options: ["Harry Potter", "The Hunger Games", "The Lord of the Rings", "Game of Thrones"],
                answer: "The Lord of the Rings"
            },
            {
                question: "Who directed the film 'Schindler's List'?",
                options: ["Martin Scorsese", "Steven Spielberg", "Christopher Nolan", "Quentin Tarantino"],
                answer: "Steven Spielberg"
            },
            {
                question: "Which actor played the character of Wolverine in the X-Men film series?",
                options: ["Hugh Jackman", "Ryan Reynolds", "Chris Pratt", "Chris Evans"],
                answer: "Hugh Jackman"
            },
            {
                question: "Which movie features a young boy named Harry Potter attending Hogwarts School of Witchcraft and Wizardry?",
                options: ["Harry Potter and the Philosopher's Stone", "The Chronicles of Narnia", "Percy Jackson & the Olympians", "The Golden Compass"],
                answer: "Harry Potter and the Philosopher's Stone"
            },
            {
                question: "Who directed the movie 'Avatar'?",
                options: ["James Cameron", "Peter Jackson", "George Lucas", "Steven Spielberg"],
                answer: "James Cameron"
            },
            {
                question: "Which actress won an Academy Award for her role in 'Black Swan'?",
                options: ["Natalie Portman", "Scarlett Johansson", "Jennifer Lawrence", "Cate Blanchett"],
                answer: "Natalie Portman"
            },
            {
                question: "Which movie is known for the line 'Here's looking at you, kid'?",
                options: ["Gone with the Wind", "Casablanca", "Citizen Kane", "The Maltese Falcon"],
                answer: "Casablanca"
            },
            {
                question: "Who played the character of Clarice Starling in the film 'The Silence of the Lambs'?",
                options: ["Jodie Foster", "Julianne Moore", "Halle Berry", "Nicole Kidman"],
                answer: "Jodie Foster"
            },
            {
                question: "Which movie features a character named Forrest Gump?",
                options: ["Saving Private Ryan", "Forrest Gump", "Good Will Hunting", "A Beautiful Mind"],
                answer: "Forrest Gump"
            },
            {
                question: "Who directed the movie 'The Godfather'?",
                options: ["Martin Scorsese", "Francis Ford Coppola", "Quentin Tarantino", "Alfred Hitchcock"],
                answer: "Francis Ford Coppola"
            },
            {
                question: "Who directed the 1994 film 'Pulp Fiction'?",
                options: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Christopher Nolan"],
                answer: "Quentin Tarantino"
            },
            {
                question: "Which actor won the Academy Award for Best Actor for his role in the film 'The Revenant'?",
                options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Hanks", "Daniel Day-Lewis"],
                answer: "Leonardo DiCaprio"
            },
            {
                question: "Which movie won the Academy Award for Best Picture in 2019?",
                options: ["Parasite", "Green Book", "The Shape of Water", "Moonlight"],
                answer: "Parasite"
            },
            {
                question: "Who played the character of Jack Dawson in the film 'Titanic'?",
                options: ["Tom Cruise", "Brad Pitt", "Leonardo DiCaprio", "Matt Damon"],
                answer: "Leonardo DiCaprio"
            },
            {
                question: "Which movie features the famous line: 'Here's looking at you, kid'?",
                options: ["Casablanca", "Gone with the Wind", "Citizen Kane", "The Godfather"],
                answer: "Casablanca"
            },
            {
                question: "Who directed the science fiction film 'Interstellar'?",
                options: ["James Cameron", "Christopher Nolan", "Ridley Scott", "George Lucas"],
                answer: "Christopher Nolan"
            },
            {
                question: "Which film is known for its iconic dance sequence featuring John Travolta and Uma Thurman?",
                options: ["Saturday Night Fever", "Dirty Dancing", "La La Land", "Pulp Fiction"],
                answer: "Pulp Fiction"
            },
            {
                question: "In which movie does Heath Ledger play the role of the Joker?",
                options: ["The Dark Knight", "Batman Begins", "Suicide Squad", "The Dark Knight Rises"],
                answer: "The Dark Knight"
            },
            {
                question: "Who played the lead role in the film 'The Shawshank Redemption'?",
                options: ["Tom Hanks", "Morgan Freeman", "Brad Pitt", "Tim Robbins"],
                answer: "Tim Robbins"
            },
            {
                question: "Which film won the Academy Award for Best Animated Feature in 2020?",
                options: ["Toy Story 4", "Frozen II", "Soul", "Coco"],
                answer: "Soul"
            },
            {
                question: "Which actor starred in the film 'Forrest Gump'?",
                options: ["Tom Cruise", "Tom Hanks", "Brad Pitt", "Johnny Depp"],
                answer: "Tom Hanks"
            },
            {
                question: "Who directed the film 'Inception'?",
                options: ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
                answer: "Christopher Nolan"
            },
            {
                question: "Which movie is based on a Stephen King novel about a haunted hotel?",
                options: ["The Shining", "Misery", "Carrie", "Pet Sematary"],
                answer: "The Shining"
            },
            {
                question: "Who played the role of Harry Potter in the film series?",
                options: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson", "Tom Felton"],
                answer: "Daniel Radcliffe"
            },
            {
                question: "Which film features a character named Hannibal Lecter?",
                options: ["The Silence of the Lambs", "Psycho", "Se7en", "American Psycho"],
                answer: "The Silence of the Lambs"
            },
            {
                question: "Who played the role of Tony Stark / Iron Man in the Marvel Cinematic Universe?",
                options: ["Chris Hemsworth", "Chris Evans", "Robert Downey Jr.", "Mark Ruffalo"],
                answer: "Robert Downey Jr."
            },
            {
                question: "Which film features a character named Neo who is 'The One'?",
                options: ["The Matrix", "Inception", "Blade Runner", "Terminator"],
                answer: "The Matrix"
            },
            {
                question: "Which actress starred in the film 'La La Land'?",
                options: ["Emma Stone", "Jennifer Lawrence", "Anne Hathaway", "Scarlett Johansson"],
                answer: "Emma Stone"
            },
            {
                question: "Which film is based on the life of mathematician John Nash?",
                options: ["A Beautiful Mind", "Good Will Hunting", "Rain Man", "The Theory of Everything"],
                answer: "A Beautiful Mind"
            },
            {
                question: "Who directed the film 'Jurassic Park'?",
                options: ["James Cameron", "Steven Spielberg", "Michael Bay", "Peter Jackson"],
                answer: "Steven Spielberg"
            },
            {
                question: "Who played the role of James Bond in the film 'Skyfall'?",
                options: ["Pierce Brosnan", "Sean Connery", "Daniel Craig", "Roger Moore"],
                answer: "Daniel Craig"
            },
            {
                question: "Which film features a character named Forrest Gump?",
                options: ["Forrest Gump", "Saving Private Ryan", "The Green Mile", "Apollo 13"],
                answer: "Forrest Gump"
            },
            {
                question: "Which actor played the role of The Joker in the film 'Joker'?",
                options: ["Heath Ledger", "Joaquin Phoenix", "Jared Leto", "Jack Nicholson"],
                answer: "Joaquin Phoenix"
            },
            {
                question: "Which film is known for its famous line: 'You can't handle the truth!'?",
                options: ["A Few Good Men", "The Departed", "Gladiator", "The Shawshank Redemption"],
                answer: "A Few Good Men"
            },
            {
                question: "Who played the lead role in the film 'The Godfather'?",
                options: ["Al Pacino", "Robert De Niro", "Marlon Brando", "James Caan"],
                answer: "Marlon Brando"
            },
            {
                question: "Who directed the film 'The Shawshank Redemption'?",
                options: ["Frank Darabont", "Quentin Tarantino", "Steven Spielberg", "Martin Scorsese"],
                answer: "Frank Darabont"
            },
            {
                question: "Which actress played the lead role in the film 'Kill Bill'?",
                options: ["Uma Thurman", "Angelina Jolie", "Scarlett Johansson", "Meryl Streep"],
                answer: "Uma Thurman"
            },
            {
                question: "Which film features a character named Tyler Durden?",
                options: ["Fight Club", "American Psycho", "Se7en", "The Departed"],
                answer: "Fight Club"
            },
            {
                question: "Who played the lead role in the film 'The Departed'?",
                options: ["Leonardo DiCaprio", "Matt Damon", "Mark Wahlberg", "Jack Nicholson"],
                answer: "Leonardo DiCaprio"
            },
            {
                question: "Which movie features the famous line: 'May the Force be with you'?",
                options: ["Star Wars", "Star Trek", "Guardians of the Galaxy", "The Matrix"],
                answer: "Star Wars"
            },
            {
                question: "Who directed the film 'The Lord of the Rings: The Fellowship of the Ring'?",
                options: ["Peter Jackson", "George Lucas", "Christopher Nolan", "James Cameron"],
                answer: "Peter Jackson"
            },
            {
                question: "Which movie features the famous line: 'Houston, we have a problem'?",
                options: ["Apollo 13", "Gravity", "Interstellar", "The Martian"],
                answer: "Apollo 13"
            },
            {
                question: "Who directed the film 'The Silence of the Lambs'?",
                options: ["Jonathan Demme", "David Fincher", "Martin Scorsese", "Alfred Hitchcock"],
                answer: "Jonathan Demme"
            },
            {
                question: "Which film won the Academy Award for Best Picture in 1994?",
                options: ["Forrest Gump", "Pulp Fiction", "Schindler's List", "The Shawshank Redemption"],
                answer: "Forrest Gump"
            },
            {
                question: "Who played the role of Captain Jack Sparrow in the film 'Pirates of the Caribbean'?",
                options: ["Johnny Depp", "Orlando Bloom", "Geoffrey Rush", "Keira Knightley"],
                answer: "Johnny Depp"
            },
            {
                question: "Which film is known for its iconic line: 'Here's Johnny!'?",
                options: ["The Shining", "Psycho", "Halloween", "Friday the 13th"],
                answer: "The Shining"
            },
            {
                question: "Who directed the film 'Citizen Kane'?",
                options: ["Orson Welles", "Alfred Hitchcock", "Stanley Kubrick", "Francis Ford Coppola"],
                answer: "Orson Welles"
            },
            {
                question: "Which movie is based on a novel by Stephen King about a haunted hotel?",
                options: ["The Shining", "Misery", "Carrie", "Pet Sematary"],
                answer: "The Shining"
            },
            {
                question: "Which film won the Academy Award for Best Animated Feature in 2019?",
                options: ["Spider-Man: Into the Spider-Verse", "Toy Story 4", "Frozen II", "How to Train Your Dragon: The Hidden World"],
                answer: "Spider-Man: Into the Spider-Verse"
            },
            {
                question: "Who directed the film 'The Dark Knight'?",
                options: ["Christopher Nolan", "Zack Snyder", "Tim Burton", "Joss Whedon"],
                answer: "Christopher Nolan"
            },
            {
                question: "Which actress starred in the film 'Gravity'?",
                options: ["Sandra Bullock", "Julia Roberts", "Meryl Streep", "Cate Blanchett"],
                answer: "Sandra Bullock"
            },
            {
                question: "Who played the role of Norman Bates in the film 'Psycho'?",
                options: ["Anthony Perkins", "Jack Nicholson", "Marlon Brando", "James Stewart"],
                answer: "Anthony Perkins"
            },
            {
                question: "Which movie features the famous line: 'I'm king of the world!'?",
                options: ["Titanic", "The Lion King", "Avatar", "The Lord of the Rings: The Return of the King"],
                answer: "Titanic"
            },
            {
                question: "Who directed the film 'The Social Network'?",
                options: ["David Fincher", "Christopher Nolan", "Martin Scorsese", "Quentin Tarantino"],
                answer: "David Fincher"
            },
            {
                question: "Which actress played the lead role in the film 'The Hunger Games'?",
                options: ["Jennifer Lawrence", "Emma Watson", "Scarlett Johansson", "Angelina Jolie"],
                answer: "Jennifer Lawrence"
            },
            {
                question: "Who directed the film 'Jaws'?",
                options: ["Steven Spielberg", "Alfred Hitchcock", "Martin Scorsese", "Francis Ford Coppola"],
                answer: "Steven Spielberg"
            },
            {
                question: "Which movie is known for its famous line: 'I'll be back'?",
                options: ["The Terminator", "Die Hard", "Rambo", "Predator"],
                answer: "The Terminator"
            },
            {
                question: "Who played the role of Neo in the film 'The Matrix'?",
                options: ["Keanu Reeves", "Hugo Weaving", "Laurence Fishburne", "Carrie-Anne Moss"],
                answer: "Keanu Reeves"
            },
            {
                question: "Which film won the Academy Award for Best Picture in 2010?",
                options: ["The King's Speech", "Inception", "The Social Network", "Black Swan"],
                answer: "The King's Speech"
            },
            {
                question: "Who directed the film 'Fight Club'?",
                options: ["David Fincher", "Christopher Nolan", "Quentin Tarantino", "Martin Scorsese"],
                answer: "David Fincher"
            },
            {
                question: "Which actress played the lead role in the film 'Wonder Woman'?",
                options: ["Gal Gadot", "Scarlett Johansson", "Emma Stone", "Jennifer Lawrence"],
                answer: "Gal Gadot"
            },
            {
                question: "Which movie features the song 'My Heart Will Go On'?",
                options: ["Titanic", "The Lion King", "Forrest Gump", "Braveheart"],
                answer: "Titanic"
            },
            {
                question: "Who played the role of Sarah Connor in the film 'Terminator 2: Judgment Day'?",
                options: ["Linda Hamilton", "Sigourney Weaver", "Milla Jovovich", "Uma Thurman"],
                answer: "Linda Hamilton"
            },
            {
                question: "Which film is based on a novel by J.K. Rowling?",
                options: ["Harry Potter", "Twilight", "The Hunger Games", "Percy Jackson"],
                answer: "Harry Potter"
            },
            {
                question: "Who directed the film 'The Lord of the Rings: The Two Towers'?",
                options: ["Peter Jackson", "Christopher Nolan", "George Lucas", "James Cameron"],
                answer: "Peter Jackson"
            },
            {
                question: "Which movie features the famous line: 'To infinity and beyond'?",
                options: ["Toy Story", "Finding Nemo", "Monsters, Inc.", "The Incredibles"],
                answer: "Toy Story"
            },
            {
                question: "Who played the role of Clarice Starling in the film 'The Silence of the Lambs'?",
                options: ["Jodie Foster", "Michelle Pfeiffer", "Halle Berry", "Sandra Bullock"],
                answer: "Jodie Foster"
            },
            {
                question: "Which film won the Academy Award for Best Picture in 2008?",
                options: ["Slumdog Millionaire", "No Country for Old Men", "There Will Be Blood", "Atonement"],
                answer: "Slumdog Millionaire"
            },
            {
                question: "Who directed the film 'Blade Runner'?",
                options: ["Ridley Scott", "Steven Spielberg", "James Cameron", "George Lucas"],
                answer: "Ridley Scott"
            },
            {
                question: "Which actress played the lead role in the film 'La La Land'?",
                options: ["Emma Stone", "Jennifer Lawrence", "Anne Hathaway", "Scarlett Johansson"],
                answer: "Emma Stone"
            },
            {
                question: "Who played the role of Maximus in the film 'Gladiator'?",
                options: ["Russell Crowe", "Joaquin Phoenix", "Oliver Reed", "Richard Harris"],
                answer: "Russell Crowe"
            },
            {
                question: "Which movie won the Academy Award for Best Picture in 2016?",
                options: ["Moonlight", "La La Land", "Manchester by the Sea", "Arrival"],
                answer: "Moonlight"
            },
            {
                question: "Which film is known for its iconic line: 'You talking to me'?",
                options: ["Taxi Driver", "Raging Bull", "Goodfellas", "Casino"],
                answer: "Taxi Driver"
            },
            {
                question: "Who played the role of Michael Corleone in 'The Godfather'?",
                options: ["Al Pacino", "Marlon Brando", "Robert De Niro", "James Caan"],
                answer: "Al Pacino"
            },
            {
                question: "Which film features a character named Vito Corleone?",
                options: ["The Godfather", "Goodfellas", "Scarface", "The Departed"],
                answer: "The Godfather"
            },
            {
                question: "Who played the lead role in the film 'The Matrix'?",
                options: ["Keanu Reeves", "Hugo Weaving", "Laurence Fishburne", "Carrie-Anne Moss"],
                answer: "Keanu Reeves"
            },
            {
                question: "Which film won the Academy Award for Best Picture in 2020?",
                options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
                answer: "Parasite"
            },
            {
                question: "Who directed the film 'Goodfellas'?",
                options: ["Martin Scorsese", "Francis Ford Coppola", "Quentin Tarantino", "Alfred Hitchcock"],
                answer: "Martin Scorsese"
            },
            {
                question: "Which actress starred in the film 'Black Swan'?",
                options: ["Natalie Portman", "Scarlett Johansson", "Keira Knightley", "Anne Hathaway"],
                answer: "Natalie Portman"
            },
            {
                question: "Who directed the film 'The Godfather'?",
                options: ["Francis Ford Coppola", "Martin Scorsese", "Alfred Hitchcock", "Stanley Kubrick"],
                answer: "Francis Ford Coppola"
            },
            {
                question: "Who directed the film 'Avatar'?",
                options: ["James Cameron", "George Lucas", "Peter Jackson", "Steven Spielberg"],
                answer: "James Cameron"
            },
            {
                question: "Who played the role of Batman in Christopher Nolan's 'The Dark Knight Trilogy'?",
                options: ["Christian Bale", "Ben Affleck", "Michael Keaton", "Val Kilmer"],
                answer: "Christian Bale"
            },
            {
                question: "Which movie features the song 'Let It Go'?",
                options: ["Frozen", "Moana", "The Lion King", "Aladdin"],
                answer: "Frozen"
            }
        ],
        history: [
            {
                question: "Who was the first President of the United States?",
                options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
                answer: "George Washington"
            },
            {
                question: "Which civilization built the Great Pyramids of Giza?",
                options: ["Greek", "Roman", "Egyptian", "Mesopotamian"],
                answer: "Egyptian"
            },
            {
                question: "Who wrote 'The Communist Manifesto'?",
                options: ["Karl Marx and Friedrich Engels", "Vladimir Lenin", "Joseph Stalin", "Leon Trotsky"],
                answer: "Karl Marx and Friedrich Engels"
            },
            {
                question: "Which event marked the beginning of World War II?",
                options: ["Invasion of Poland", "Attack on Pearl Harbor", "Battle of Stalingrad", "D-Day Invasion"],
                answer: "Invasion of Poland"
            },
            {
                question: "Who was the first emperor of Rome?",
                options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
                answer: "Augustus"
            },
            {
                question: "Which war was fought between the North and South regions of the United States?",
                options: ["World War I", "World War II", "American Civil War", "Vietnam War"],
                answer: "American Civil War"
            },
            {
                question: "Who was the longest-reigning monarch in British history?",
                options: ["Queen Victoria", "King Henry VIII", "Queen Elizabeth I", "King George III"],
                answer: "Queen Victoria"
            },
            {
                question: "Which ancient city was buried under volcanic ash in 79 AD?",
                options: ["Athens", "Pompeii", "Rome", "Alexandria"],
                answer: "Pompeii"
            },
            {
                question: "Which treaty formally ended World War I?",
                options: ["Treaty of Versailles", "Treaty of Brest-Litovsk", "Treaty of Trianon", "Treaty of Lausanne"],
                answer: "Treaty of Versailles"
            },
            {
                question: "Who was the first female Prime Minister of the United Kingdom?",
                options: ["Margaret Thatcher", "Theresa May", "Indira Gandhi", "Angela Merkel"],
                answer: "Margaret Thatcher"
            },
            {
                question: "Which event triggered the start of the French Revolution?",
                options: ["Storming of the Bastille", "Execution of Louis XVI", "Reign of Terror", "Napoleon's coup"],
                answer: "Storming of the Bastille"
            },
            {
                question: "Who was the first European explorer to reach India by sea?",
                options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "John Cabot"],
                answer: "Vasco da Gama"
            },
            {
                question: "Which ancient civilization is known for creating the first written language?",
                options: ["Sumerians", "Egyptians", "Greeks", "Romans"],
                answer: "Sumerians"
            },
            {
                question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
                options: ["Joseph Stalin", "Nikita Khrushchev", "Leonid Brezhnev", "Mikhail Gorbachev"],
                answer: "Nikita Khrushchev"
            },
            {
                question: "Which city was the capital of the Byzantine Empire?",
                options: ["Rome", "Athens", "Constantinople", "Alexandria"],
                answer: "Constantinople"
            },
            {
                question: "Who was the first African-American President of the United States?",
                options: ["Barack Obama", "Martin Luther King Jr.", "Malcolm X", "Nelson Mandela"],
                answer: "Barack Obama"
            },
            {
                question: "Which ancient civilization is known for building the Colosseum?",
                options: ["Greeks", "Persians", "Romans", "Byzantines"],
                answer: "Romans"
            },
            {
                question: "Which treaty ended the Thirty Years' War?",
                options: ["Treaty of Versailles", "Treaty of Westphalia", "Treaty of Utrecht", "Treaty of Vienna"],
                answer: "Treaty of Westphalia"
            },
            {
                question: "Who was the last ruler of the Roman Republic?",
                options: ["Julius Caesar", "Augustus", "Nero", "Cleopatra"],
                answer: "Augustus"
            },
            {
                question: "Which event is often considered the beginning of the Renaissance?",
                options: ["Fall of Constantinople", "Invention of the printing press", "Discovery of the New World", "Sack of Rome"],
                answer: "Fall of Constantinople"
            },
            {
                question: "Who was the first president of the United States?",
                options: ["Thomas Jefferson", "George Washington", "John Adams", "Abraham Lincoln"],
                answer: "George Washington"
            },
            {
                question: "What year did World War I begin?",
                options: ["1914", "1918", "1939", "1941"],
                answer: "1914"
            },
            {
                question: "What year did the Berlin Wall fall?",
                options: ["1989", "1991", "1979", "1985"],
                answer: "1989"
            },
            {
                question: "Which ancient civilization built the Machu Picchu complex?",
                options: ["Maya", "Aztec", "Inca", "Egyptian"],
                answer: "Inca"
            },
            {
                question: "What was the main goal of the Lewis and Clark expedition?",
                options: ["To find a water route to the Pacific Ocean", "To study native plants and animals", "To discover new trade routes", "To establish a new colony"],
                answer: "To find a water route to the Pacific Ocean"
            },
            {
                question: "Who was the first explorer to circumnavigate the globe?",
                options: ["Ferdinand Magellan", "Christopher Columbus", "Vasco da Gama", "John Cabot"],
                answer: "Ferdinand Magellan"
            },
            {
                question: "What year did the American Civil War end?",
                options: ["1865", "1876", "1858", "1870"],
                answer: "1865"
            },
            {
                question: "Who was the founder of the Mongol Empire?",
                options: ["Genghis Khan", "Attila the Hun", "Tamerlane", "Kublai Khan"],
                answer: "Genghis Khan"
            },
            {
                question: "Which ancient civilization built the Great Pyramid of Giza?",
                options: ["Sumerians", "Romans", "Greeks", "Egyptians"],
                answer: "Egyptians"
            },
            {
                question: "Who was the first European to reach India by sea?",
                options: ["Vasco da Gama", "Christopher Columbus", "Amerigo Vespucci", "Ferdinand Magellan"],
                answer: "Vasco da Gama"
            },
            {
                question: "Who was the last ruler of the Russian Empire?",
                options: ["Nicholas II", "Peter the Great", "Catherine the Great", "Ivan the Terrible"],
                answer: "Nicholas II"
            },
            {
                question: "Which empire was ruled by Julius Caesar?",
                options: ["Roman Empire", "Byzantine Empire", "Macedonian Empire", "Ottoman Empire"],
                answer: "Roman Empire"
            },
            {
                question: "Which country was not part of the Axis Powers during World War II?",
                options: ["Spain", "Italy", "Germany", "Japan"],
                answer: "Spain"
            },
            {
                question: "What year did the Treaty of Versailles end World War I?",
                options: ["1919", "1921", "1918", "1923"],
                answer: "1919"
            },
            {
                question: "Who was the first explorer to reach the Americas in 1492?",
                options: ["Christopher Columbus", "Amerigo Vespucci", "Ferdinand Magellan", "John Cabot"],
                answer: "Christopher Columbus"
            },
            {
                question: "Who was the first female pharaoh of ancient Egypt?",
                options: ["Hatshepsut", "Cleopatra", "Nefertiti", "Nitocris"],
                answer: "Hatshepsut"
            },
            {
                question: "Who was the first man to walk on the moon?",
                options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"],
                answer: "Neil Armstrong"
            },
            {
                question: "Which city was the capital of the Aztec Empire?",
                options: ["Tenochtitlan", "Cuzco", "Machu Picchu", "Teotihuacan"],
                answer: "Tenochtitlan"
            },
            {
                question: "What year did the Spanish Civil War begin?",
                options: ["1936", "1939", "1941", "1945"],
                answer: "1936"
            },
            {
                question: "Which explorer led the first expedition to circumnavigate the Earth?",
                options: ["Ferdinand Magellan", "Christopher Columbus", "John Cabot", "Vasco da Gama"],
                answer: "Ferdinand Magellan"
            },
            {
                question: "What year did the Korean War begin?",
                options: ["1950", "1945", "1953", "1960"],
                answer: "1950"
            },
            {
                question: "Who founded the city of Rome according to legend?",
                options: ["Romulus and Remus", "Julius Caesar", "Augustus", "Nero"],
                answer: "Romulus and Remus"
            },
            {
                question: "What year did the Magna Carta get signed?",
                options: ["1215", "1066", "1348", "1485"],
                answer: "1215"
            },
            {
                question: "Which pharaoh built the Great Pyramid of Giza?",
                options: ["Khufu", "Tutankhamun", "Ramses II", "Hatshepsut"],
                answer: "Khufu"
            },
            {
                question: "Which Greek philosopher was the teacher of Alexander the Great?",
                options: ["Aristotle", "Socrates", "Plato", "Pythagoras"],
                answer: "Aristotle"
            },
            {
                question: "Which ancient civilization built the city of Machu Picchu?",
                options: ["Inca", "Maya", "Aztec", "Egyptian"],
                answer: "Inca"
            },
            {
                question: "Who was the first woman to fly solo across the Atlantic Ocean?",
                options: ["Amelia Earhart", "Bessie Coleman", "Jacqueline Cochran", "Harriet Quimby"],
                answer: "Amelia Earhart"
            },
            {
                question: "Which ancient civilization is known for inventing the wheel?",
                options: ["Mesopotamians", "Ancient Egyptians", "Indus Valley Civilization", "Minoans"],
                answer: "Mesopotamians"
            },
            {
                question: "Who was the first emperor of China?",
                options: ["Qin Shi Huang", "Sun Tzu", "Liu Bang", "Han Wudi"],
                answer: "Qin Shi Huang"
            },
            {
                question: "What year did the French Revolution begin?",
                options: ["1789", "1799", "1804", "1776"],
                answer: "1789"
            },
            {
                question: "Who was the first African-American president of the United States?",
                options: ["Barack Obama", "Joe Biden", "Bill Clinton", "George W. Bush"],
                answer: "Barack Obama"
            },
            {
                question: "Who wrote 'The Prince', a political treatise on governing and political tactics?",
                options: ["Niccolò Machiavelli", "Thomas More", "Plato", "Aristotle"],
                answer: "Niccolò Machiavelli"
            },
            {
                question: "Who was the first woman to win a Nobel Prize?",
                options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Dorothy Hodgkin"],
                answer: "Marie Curie"
            },
            {
                question: "Which ancient civilization built the city of Troy?",
                options: ["Greeks", "Romans", "Egyptians", "Persians"],
                answer: "Greeks"
            },
            {
                question: "What year did the American Declaration of Independence get signed?",
                options: ["1776", "1789", "1804", "1812"],
                answer: "1776"
            },
            {
                question: "Which battle is considered the turning point of World War II in Europe?",
                options: ["Battle of Stalingrad", "Battle of Midway", "Battle of the Bulge", "D-Day Invasion"],
                answer: "Battle of Stalingrad"
            },
            {
                question: "What year did the Cold War end?",
                options: ["1991", "1989", "1975", "1990"],
                answer: "1991"
            },
            {
                question: "What year did the Great Depression begin?",
                options: ["1929", "1933", "1936", "1925"],
                answer: "1929"
            },
            {
                question: "Who was the first person to discover America?",
                options: ["Leif Erikson", "Christopher Columbus", "Amerigo Vespucci", "Marco Polo"],
                answer: "Leif Erikson"
            },
            {
                question: "Who was the first female prime minister of India?",
                options: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Margaret Thatcher"],
                answer: "Indira Gandhi"
            },
            {
                question: "Who was the first emperor of Japan?",
                options: ["Emperor Jimmu", "Emperor Meiji", "Emperor Hirohito", "Emperor Taisho"],
                answer: "Emperor Jimmu"
            },
            {
                question: "What year did the Battle of Hastings take place?",
                options: ["1066", "1099", "1215", "1348"],
                answer: "1066"
            },
            {
                question: "Who was the first emperor of the Maurya Empire in ancient India?",
                options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Babur"],
                answer: "Chandragupta Maurya"
            },
            {
                question: "What year did the Industrial Revolution begin?",
                options: ["18th century", "19th century", "20th century", "17th century"],
                answer: "18th century"
            }
        ],
        science: [
            {
                question: "What is the smallest unit of matter?",
                options: ["Atom", "Molecule", "Cell", "Particle"],
                answer: "Atom"
            },
            {
                question: "What causes tides on Earth?",
                options: ["Gravitational pull of the Moon", "Earth's rotation", "Sun's magnetic field", "Underwater earthquakes"],
                answer: "Gravitational pull of the Moon"
            },
            {
                question: "Which planet is known as the 'Red Planet'?",
                options: ["Earth", "Mars", "Venus", "Jupiter"],
                answer: "Mars"
            },
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "NaCl", "O2"],
                answer: "H2O"
            },
            {
                question: "Which gas do plants use for photosynthesis?",
                options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
                answer: "Carbon dioxide"
            },
            {
                question: "What is the speed of light?",
                options: ["299,792,458 meters per second", "300,000 kilometers per second", "186,282 miles per second", "299,792,458 kilometers per hour"],
                answer: "299,792,458 meters per second"
            },
            {
                question: "What is the process by which plants make their own food?",
                options: ["Photosynthesis", "Respiration", "Transpiration", "Pollination"],
                answer: "Photosynthesis"
            },
            {
                question: "Which scientist is known for the theory of relativity?",
                options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
                answer: "Albert Einstein"
            },
            {
                question: "What is the Earth's primary source of energy?",
                options: ["Sun", "Moon", "Stars", "Volcanoes"],
                answer: "Sun"
            },
            {
                question: "What is the study of living organisms called?",
                options: ["Biology", "Geology", "Astronomy", "Chemistry"],
                answer: "Biology"
            },
            {
                question: "Which planet is the hottest in our solar system?",
                options: ["Mercury", "Venus", "Earth", "Mars"],
                answer: "Venus"
            },
            {
                question: "What is the chemical symbol for gold?",
                options: ["Au", "Ag", "Fe", "Cu"],
                answer: "Au"
            },
            {
                question: "What is the closest star to Earth, after the Sun?",
                options: ["Alpha Centauri", "Proxima Centauri", "Sirius", "Betelgeuse"],
                answer: "Proxima Centauri"
            },
            {
                question: "What is the force that causes objects to fall towards the Earth?",
                options: ["Gravity", "Friction", "Magnetism", "Centrifugal force"],
                answer: "Gravity"
            },
            {
                question: "What is the chemical symbol for silver?",
                options: ["Ag", "Au", "Fe", "Cu"],
                answer: "Ag"
            },
            {
                question: "What is the process of converting a solid directly to a gas called?",
                options: ["Sublimation", "Evaporation", "Condensation", "Melting"],
                answer: "Sublimation"
            },
            {
                question: "What is the chemical symbol for iron?",
                options: ["Fe", "Au", "Ag", "Cu"],
                answer: "Fe"
            },
            {
                question: "Which element is essential for human life and is found in hemoglobin?",
                options: ["Iron", "Calcium", "Sodium", "Potassium"],
                answer: "Iron"
            },
            {
                question: "What is the study of the Earth's atmosphere called?",
                options: ["Meteorology", "Geology", "Oceanography", "Climatology"],
                answer: "Meteorology"
            },
            {
                question: "What is the process by which water vapor turns into liquid water?",
                options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"],
                answer: "Condensation"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Mars", "Jupiter", "Venus", "Mercury"],
                answer: "Mars"
            },
            {
                question: "What is the freezing point of water in Fahrenheit?",
                options: ["32°F", "0°F", "100°F", "212°F"],
                answer: "32°F"
            },
            {
                question: "What is the study of fossils called?",
                options: ["Paleontology", "Archaeology", "Geology", "Anthropology"],
                answer: "Paleontology"
            },
            {
                question: "Which element is the lightest?",
                options: ["Hydrogen", "Helium", "Lithium", "Oxygen"],
                answer: "Hydrogen"
            },
            {
                question: "What is the chemical formula for table salt?",
                options: ["NaCl", "HCl", "KCl", "CaCl2"],
                answer: "NaCl"
            },
            {
                question: "Which scientist proposed the theory of relativity?",
                options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
                answer: "Albert Einstein"
            },
            {
                question: "Which gas is most abundant in Earth's atmosphere?",
                options: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
                answer: "Nitrogen"
            },
            {
                question: "What is the main component of natural gas?",
                options: ["Methane", "Ethane", "Propane", "Butane"],
                answer: "Methane"
            },
            {
                question: "What is the process by which plants make their food called?",
                options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
                answer: "Photosynthesis"
            },
            {
                question: "Which planet is known as the Morning Star and the Evening Star?",
                options: ["Venus", "Mars", "Jupiter", "Mercury"],
                answer: "Venus"
            },
            {
                question: "What is the center of an atom called?",
                options: ["Nucleus", "Electron", "Proton", "Neutron"],
                answer: "Nucleus"
            },
            {
                question: "What is the hardest substance in the human body?",
                options: ["Tooth Enamel", "Bone", "Cartilage", "Tendon"],
                answer: "Tooth Enamel"
            },
            {
                question: "What is the chemical symbol for oxygen?",
                options: ["O", "O2", "CO2", "H2O"],
                answer: "O"
            },
            {
                question: "What is the primary function of red blood cells?",
                options: ["Transport Oxygen", "Fight Infection", "Digest Food", "Produce Hormones"],
                answer: "Transport Oxygen"
            },
            {
                question: "What type of energy does the Sun primarily emit?",
                options: ["Solar Energy", "Nuclear Energy", "Wind Energy", "Hydroelectric Energy"],
                answer: "Solar Energy"
            },
            {
                question: "What is the chemical formula for methane?",
                options: ["CH4", "CO2", "H2O", "NH3"],
                answer: "CH4"
            },
            {
                question: "Which planet is known as the Blue Planet?",
                options: ["Earth", "Neptune", "Uranus", "Saturn"],
                answer: "Earth"
            },
            {
                question: "What is the process by which plants lose water called?",
                options: ["Transpiration", "Photosynthesis", "Respiration", "Fermentation"],
                answer: "Transpiration"
            },
            {
                question: "What is the chemical symbol for carbon dioxide?",
                options: ["CO2", "O2", "CO", "CH4"],
                answer: "CO2"
            },
            {
                question: "Which force holds the planets in orbit around the Sun?",
                options: ["Gravity", "Magnetism", "Electromagnetic Force", "Nuclear Force"],
                answer: "Gravity"
            },
            {
                question: "What is the chemical formula for water?",
                options: ["H2O", "CO2", "O2", "NaCl"],
                answer: "H2O"
            },
            {
                question: "Which metal is used to make batteries?",
                options: ["Lithium", "Sodium", "Aluminum", "Magnesium"],
                answer: "Lithium"
            },
            {
                question: "What is the hardest substance found in nature?",
                options: ["Diamond", "Graphite", "Coal", "Iron"],
                answer: "Diamond"
            },
            {
                question: "What is the unit of measurement for force?",
                options: ["Newton", "Watt", "Joule", "Volt"],
                answer: "Newton"
            },
            {
                question: "Which gas is responsible for the greenhouse effect?",
                options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Argon"],
                answer: "Carbon Dioxide"
            },
            {
                question: "What is the chemical formula for ammonia?",
                options: ["NH3", "H2O", "CO2", "CH4"],
                answer: "NH3"
            },
            {
                question: "What is the chemical symbol for sodium?",
                options: ["Na", "Ni", "Au", "Ag"],
                answer: "Na"
            },
            {
                question: "Which planet is known as the 'Morning Star'?",
                options: ["Venus", "Mars", "Jupiter", "Mercury"],
                answer: "Venus"
            },
            {
                question: "What is the chemical formula for carbon monoxide?",
                options: ["CO", "CO2", "C", "CO3"],
                answer: "CO"
            },
            {
                question: "What is the freezing point of water in Celsius?",
                options: ["0°C", "-10°C", "100°C", "32°C"],
                answer: "0°C"
            },
            {
                question: "What is the atomic number of hydrogen?",
                options: ["1", "2", "3", "4"],
                answer: "1"
            },
            {
                question: "What is the largest planet in our solar system?",
                options: ["Jupiter", "Saturn", "Neptune", "Earth"],
                answer: "Jupiter"
            },
            {
                question: "Which gas do humans exhale when they breathe?",
                options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
                answer: "Carbon Dioxide"
            },
            {
                question: "What is the process of a liquid turning into a gas called?",
                options: ["Evaporation", "Condensation", "Sublimation", "Vaporization"],
                answer: "Evaporation"
            },
            {
                question: "What is the chemical formula for ozone?",
                options: ["O3", "O2", "CO2", "H2O"],
                answer: "O3"
            },
            {
                question: "What is the densest planet in our solar system?",
                options: ["Earth", "Jupiter", "Saturn", "Mercury"],
                answer: "Earth"
            },
            {
                question: "What is the smallest planet in our solar system?",
                options: ["Mercury", "Venus", "Mars", "Earth"],
                answer: "Mercury"
            },
            {
                question: "What is the chemical symbol for potassium?",
                options: ["K", "P", "Kt", "Ka"],
                answer: "K"
            },
            {
                question: "Which metal is liquid at room temperature?",
                options: ["Mercury", "Gold", "Aluminum", "Copper"],
                answer: "Mercury"
            },
            {
                question: "What is the SI unit of temperature?",
                options: ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
                answer: "Kelvin"
            },
            {
                question: "What is the chemical symbol for calcium?",
                options: ["Ca", "C", "Ce", "Cu"],
                answer: "Ca"
            },
            {
                question: "Which organ produces insulin in the human body?",
                options: ["Pancreas", "Liver", "Kidney", "Stomach"],
                answer: "Pancreas"
            },
            {
                question: "What is the hardest substance found in the human body?",
                options: ["Tooth Enamel", "Bone", "Cartilage", "Tendon"],
                answer: "Tooth Enamel"
            },
            {
                question: "What is the chemical formula for carbon dioxide?",
                options: ["CO2", "CO", "O2", "C2O"],
                answer: "CO2"
            },
            {
                question: "Which gas is known as laughing gas?",
                options: ["Nitrous Oxide", "Oxygen", "Carbon Dioxide", "Hydrogen"],
                answer: "Nitrous Oxide"
            },
            {
                question: "What is the hardest natural substance on Earth?",
                options: ["Diamond", "Gold", "Platinum", "Silver"],
                answer: "Diamond"
            },
            {
                question: "What is the largest bone in the human body?",
                options: ["Femur", "Tibia", "Humerus", "Fibula"],
                answer: "Femur"
            },
            {
                question: "Which gas is produced by vehicles and contributes to air pollution?",
                options: ["Carbon Monoxide", "Oxygen", "Nitrogen", "Hydrogen"],
                answer: "Carbon Monoxide"
            },
            {
                question: "What is the atomic number of gold?",
                options: ["79", "70", "80", "82"],
                answer: "79"
            },
            {
                question: "What is the main function of the large intestine?",
                options: ["Absorb Water", "Digest Food", "Produce Hormones", "Absorb Nutrients"],
                answer: "Absorb Water"
            },
            {
                question: "What is the study of the Earth's rocks called?",
                options: ["Geology", "Meteorology", "Astronomy", "Biology"],
                answer: "Geology"
            },
            {
                question: "Which gas do plants produce during photosynthesis?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                answer: "Oxygen"
            },
            {
                question: "What is the chemical formula for salt?",
                options: ["NaCl", "H2O", "CO2", "CH4"],
                answer: "NaCl"
            },
            {
                question: "Which force holds the nucleus of an atom together?",
                options: ["Strong Nuclear Force", "Electromagnetic Force", "Weak Nuclear Force", "Gravitational Force"],
                answer: "Strong Nuclear Force"
            },
            {
                question: "What is the SI unit of force?",
                options: ["Newton", "Watt", "Joule", "Volt"],
                answer: "Newton"
            },
            {
                question: "What is the SI unit of energy?",
                options: ["Joule", "Newton", "Watt", "Volt"],
                answer: "Joule"
            },
            {
                question: "What is the SI unit of electric charge?",
                options: ["Coulomb", "Ampere", "Ohm", "Farad"],
                answer: "Coulomb"
            },
            {
                question: "What is the SI unit of electric current?",
                options: ["Ampere", "Volt", "Ohm", "Watt"],
                answer: "Ampere"
            },
            {
                question: "What is the SI unit of resistance?",
                options: ["Ohm", "Ampere", "Volt", "Watt"],
                answer: "Ohm"
            },
            {
                question: "What is the SI unit of voltage?",
                options: ["Volt", "Ampere", "Ohm", "Watt"],
                answer: "Volt"
            },
            {
                question: "What is the SI unit of capacitance?",
                options: ["Farad", "Ampere", "Ohm", "Volt"],
                answer: "Farad"
            },
            {
                question: "What is the SI unit of magnetic flux?",
                options: ["Weber", "Tesla", "Ohm", "Hertz"],
                answer: "Weber"
            },
            {
                question: "What is the SI unit of magnetic flux density?",
                options: ["Tesla", "Weber", "Ohm", "Hertz"],
                answer: "Tesla"
            },
            {
                question: "What is the SI unit of magnetic field strength?",
                options: ["Ampere per meter", "Tesla", "Weber", "Ohm"],
                answer: "Ampere per meter"
            },
            {
                question: "What is the SI unit of electric field strength?",
                options: ["Volt per meter", "Tesla", "Weber", "Ohm"],
                answer: "Volt per meter"
            },
            {
                question: "What is the SI unit of magnetic permeability?",
                options: ["Henry per meter", "Tesla", "Weber", "Ohm"],
                answer: "Henry per meter"
            },
            {
                question: "What is the SI unit of inductance?",
                options: ["Henry", "Tesla", "Weber", "Ohm"],
                answer: "Henry"
            },
            {
                question: "What is the SI unit of potential difference?",
                options: ["Volt", "Tesla", "Weber", "Ohm"],
                answer: "Volt"
            },
            {
                question: "What is the SI unit of electrical conductivity?",
                options: ["Siemens per meter", "Tesla", "Weber", "Ohm"],
                answer: "Siemens per meter"
            },
            {
                question: "What is the SI unit of luminous intensity?",
                options: ["Candela", "Tesla", "Weber", "Ohm"],
                answer: "Candela"
            },
            {
                question: "What is the SI unit of illuminance?",
                options: ["Lux", "Tesla", "Weber", "Ohm"],
                answer: "Lux"
            },
            {
                question: "What is the SI unit of radiation dose?",
                options: ["Sievert", "Tesla", "Weber", "Ohm"],
                answer: "Sievert"
            },
            {
                question: "What is the SI unit of specific energy?",
                options: ["Joule per kilogram", "Tesla", "Weber", "Ohm"],
                answer: "Joule per kilogram"
            },
            {
                question: "What is the SI unit of specific heat capacity?",
                options: ["Joule per kilogram per Kelvin", "Tesla", "Weber", "Ohm"],
                answer: "Joule per kilogram per Kelvin"
            },
            {
                question: "What is the SI unit of surface tension?",
                options: ["Newton per meter", "Tesla", "Weber", "Ohm"],
                answer: "Newton per meter"
            },
            {
                question: "What is the SI unit of thermal conductivity?",
                options: ["Watt per meter per Kelvin", "Tesla", "Weber", "Ohm"],
                answer: "Watt per meter per Kelvin"
            },
            {
                question: "What is the SI unit of velocity?",
                options: ["Meter per second", "Tesla", "Weber", "Ohm"],
                answer: "Meter per second"
            },
            {
                question: "What is the SI unit of acceleration?",
                options: ["Meter per second squared", "Tesla", "Weber", "Ohm"],
                answer: "Meter per second squared"
            },
            {
                question: "What is the SI unit of area?",
                options: ["Square meter", "Tesla", "Weber", "Ohm"],
                answer: "Square meter"
            },
            {
                question: "What is the SI unit of volume?",
                options: ["Cubic meter", "Tesla", "Weber", "Ohm"],
                answer: "Cubic meter"
            },
            {
                question: "What is the SI unit of density?",
                options: ["Kilogram per cubic meter", "Tesla", "Weber", "Ohm"],
                answer: "Kilogram per cubic meter"
            },
            {
                question: "What is the SI unit of pressure?",
                options: ["Pascal", "Tesla", "Weber", "Ohm"],
                answer: "Pascal"
            },
            {
                question: "What is the SI unit of frequency?",
                options: ["Hertz", "Tesla", "Weber", "Ohm"],
                answer: "Hertz"
            },
            {
                question: "What is the SI unit of charge?",
                options: ["Coulomb", "Tesla", "Weber", "Ohm"],
                answer: "Coulomb"
            },
            {
                question: "What is the SI unit of work?",
                options: ["Joule", "Tesla", "Weber", "Ohm"],
                answer: "Joule"
            },
            {
                question: "What is the SI unit of heat?",
                options: ["Joule", "Tesla", "Weber", "Ohm"],
                answer: "Joule"
            },
            {
                question: "What is the SI unit of angle?",
                options: ["Radian", "Tesla", "Weber", "Ohm"],
                answer: "Radian"
            },
            {
                question: "What is the SI unit of electric field?",
                options: ["Volt per meter", "Tesla", "Weber", "Ohm"],
                answer: "Volt per meter"
            },
            {
                question: "What is the SI unit of magnetic field?",
                options: ["Tesla", "Volt per meter", "Weber", "Ohm"],
                answer: "Tesla"
            },
            {
                question: "What is the SI unit of wave number?",
                options: ["Radian per meter", "Tesla", "Weber", "Ohm"],
                answer: "Radian per meter"
            },
            {
                question: "What is the SI unit of electric flux?",
                options: ["Volt meter squared per meter", "Tesla", "Weber", "Ohm"],
                answer: "Volt meter squared per meter"
            },
            {
                question: "What is the SI unit of torque?",
                options: ["Newton meter", "Tesla", "Weber", "Ohm"],
                answer: "Newton meter"
            },
            {
                question: "What is the SI unit of moment of inertia?",
                options: ["Kilogram meter squared", "Tesla", "Weber", "Ohm"],
                answer: "Kilogram meter squared"
            },
            {
                question: "What is the SI unit of power?",
                options: ["Watt", "Tesla", "Weber", "Ohm"],
                answer: "Watt"
            },
            {
                question: "What is the SI unit of surface charge density?",
                options: ["Coulomb per square meter", "Tesla", "Weber", "Ohm"],
                answer: "Coulomb per square meter"
            },
            {
                question: "What is the SI unit of volume charge density?",
                options: ["Coulomb per cubic meter", "Tesla", "Weber", "Ohm"],
                answer: "Coulomb per cubic meter"
            },
            {
                question: "What is the SI unit of electric dipole moment?",
                options: ["Coulomb meter", "Tesla", "Weber", "Ohm"],
                answer: "Coulomb meter"
            },
            {
                question: "What is the SI unit of thermal resistance?",
                options: ["Kelvin per watt", "Tesla", "Weber", "Ohm"],
                answer: "Kelvin per watt"
            },
            {
                question: "What is the SI unit of wave impedance?",
                options: ["Ohm", "Tesla", "Weber", "Newton per meter squared"],
                answer: "Ohm"
            },
            {
                question: "What is the SI unit of characteristic impedance?",
                options: ["Ohm", "Tesla", "Weber", "Newton per meter squared"],
                answer: "Ohm"
            },
            {
                question: "What is the SI unit of angular velocity?",
                options: ["Radian per second", "Tesla", "Weber", "Ohm"],
                answer: "Radian per second"
            },
            {
                question: "What is the SI unit of angular acceleration?",
                options: ["Radian per second squared", "Tesla", "Weber", "Ohm"],
                answer: "Radian per second squared"
            },
            {
                question: "What is the SI unit of angular momentum?",
                options: ["Kilogram meter squared per second", "Tesla", "Weber", "Ohm"],
                answer: "Kilogram meter squared per second"
            },
            {
                question: "What is the SI unit of radiant intensity?",
                options: ["Watt per steradian", "Tesla", "Weber", "Ohm"],
                answer: "Watt per steradian"
            },
            {
                question: "What is the SI unit of luminous flux?",
                options: ["Lumen", "Tesla", "Weber", "Ohm"],
                answer: "Lumen"
            },
            {
                question: "What is the SI unit of activity?",
                options: ["Becquerel", "Tesla", "Weber", "Ohm"],
                answer: "Becquerel"
            },
            {
                question: "What is the SI unit of radiation dose equivalent?",
                options: ["Sievert", "Tesla", "Weber", "Ohm"],
                answer: "Sievert"
            },
            {
                question: "What is the SI unit of absorbed dose?",
                options: ["Gray", "Tesla", "Weber", "Ohm"],
                answer: "Gray"
            },
            {
                question: "What is the SI unit of momentum?",
                options: ["Kilogram meter per second", "Tesla", "Weber", "Ohm"],
                answer: "Kilogram meter per second"
            },
            {
                question: "What is the SI unit of impulse?",
                options: ["Newton second", "Tesla", "Weber", "Ohm"],
                answer: "Newton second"
            },
            {
                question: "What is the SI unit of wave vector?",
                options: ["Radian per meter", "Tesla", "Weber", "Ohm"],
                answer: "Radian per meter"
            },
            {
                question: "What is the SI unit of magnetic dipole moment?",
                options: ["Ampere meter squared", "Tesla", "Weber", "Ohm"],
                answer: "Ampere meter squared"
            },
            {
                question: "What is the chemical symbol for hydrogen?",
                options: ["H", "He", "N", "O"],
                answer: "H"
            },
            {
                question: "What is the chemical formula for sulfuric acid?",
                options: ["H2SO4", "HCl", "NaOH", "CH3COOH"],
                answer: "H2SO4"
            },
            {
                question: "What is the chemical formula for hydrochloric acid?",
                options: ["HCl", "H2SO4", "NaOH", "CH3COOH"],
                answer: "HCl"
            },
            {
                question: "What is the chemical formula for sodium hydroxide?",
                options: ["NaOH", "HCl", "H2SO4", "CH3COOH"],
                answer: "NaOH"
            },
            {
                question: "What is the chemical formula for acetic acid?",
                options: ["CH3COOH", "HCl", "H2SO4", "NaOH"],
                answer: "CH3COOH"
            },
            {
                question: "What is the chemical formula for hydrogen peroxide?",
                options: ["H2O2", "HCl", "NaOH", "CH3COOH"],
                answer: "H2O2"
            },
            {
                question: "What is the chemical formula for nitric acid?",
                options: ["HNO3", "HCl", "NaOH", "CH3COOH"],
                answer: "HNO3"
            },
            {
                question: "What is the chemical symbol for aluminum?",
                options: ["Al", "Au", "Ag", "Fe"],
                answer: "Al"
            },
            {
                question: "What is the chemical symbol for copper?",
                options: ["Cu", "Ca", "Cl", "C"],
                answer: "Cu"
            },
            {
                question: "What is the chemical symbol for zinc?",
                options: ["Zn", "Zc", "Zi", "Ze"],
                answer: "Zn"
            },
            {
                question: "What is the chemical formula for nitrous oxide?",
                options: ["N2O", "NO2", "NO", "N"],
                answer: "N2O"
            },
            {
                question: "What is the chemical formula for sulfur dioxide?",
                options: ["SO2", "SO3", "H2SO4", "HSO4"],
                answer: "SO2"
            },
            {
                question: "What is the chemical formula for phosphoric acid?",
                options: ["H3PO4", "HCl", "NaOH", "CH3COOH"],
                answer: "H3PO4"
            },
            {
                question: "What is the chemical symbol for phosphorus?",
                options: ["P", "Po", "Pr", "Pa"],
                answer: "P"
            },
            {
                question: "What is the chemical symbol for mercury?",
                options: ["Hg", "He", "Me", "Hy"],
                answer: "Hg"
            },
            {
                question: "What is the chemical symbol for lead?",
                options: ["Pb", "Le", "Ld", "Pl"],
                answer: "Pb"
            },
            {
                question: "What is the chemical formula for carbonic acid?",
                options: ["H2CO3", "HCl", "NaOH", "CH3COOH"],
                answer: "H2CO3"
            },
            {
                question: "What is the chemical symbol for magnesium?",
                options: ["Mg", "Ma", "Me", "Mu"],
                answer: "Mg"
            },
            {
                question: "What is the chemical symbol for lithium?",
                options: ["Li", "L", "Lt", "Ly"],
                answer: "Li"
            },
            {
                question: "What is the chemical formula for hydrobromic acid?",
                options: ["HBr", "HCl", "H2SO4", "HNO3"],
                answer: "HBr"
            },
            {
                question: "What is the chemical symbol for barium?",
                options: ["Ba", "Br", "Bu", "Be"],
                answer: "Ba"
            },
            {
                question: "What is the chemical symbol for beryllium?",
                options: ["Be", "Br", "Ba", "Bu"],
                answer: "Be"
            },
            {
                question: "What is the chemical symbol for boron?",
                options: ["B", "Bo", "Br", "Be"],
                answer: "B"
            },
            {
                question: "What is the chemical formula for hydroiodic acid?",
                options: ["HI", "HCl", "H2SO4", "HNO3"],
                answer: "HI"
            },
            {
                question: "What is the chemical symbol for nitrogen?",
                options: ["N", "Ni", "Na", "Ne"],
                answer: "N"
            },
            {
                question: "What is the chemical symbol for fluorine?",
                options: ["F", "Fl", "Fr", "Fo"],
                answer: "F"
            },
            {
                question: "What is the chemical symbol for argon?",
                options: ["Ar", "Ag", "Ao", "Am"],
                answer: "Ar"
            },
            {
                question: "What is the chemical symbol for neon?",
                options: ["Ne", "Na", "Ni", "N"],
                answer: "Ne"
            },
            {
                question: "What is the chemical symbol for helium?",
                options: ["He", "H", "Ha", "Ho"],
                answer: "He"
            },
            {
                question: "What is the chemical symbol for xenon?",
                options: ["Xe", "X", "Xn", "Xo"],
                answer: "Xe"
            },
            {
                question: "What is the chemical symbol for krypton?",
                options: ["Kr", "K", "Kn", "Kt"],
                answer: "Kr"
            },
            {
                question: "What is the chemical symbol for radon?",
                options: ["Rn", "Ra", "Ro", "Rd"],
                answer: "Rn"
            },
            {
                question: "What is the chemical symbol for sulfur?",
                options: ["S", "Su", "Se", "Sr"],
                answer: "S"
            },
            {
                question: "What is the chemical symbol for chlorine?",
                options: ["Cl", "C", "Cr", "Ca"],
                answer: "Cl"
            },
            {
                question: "What is the chemical symbol for bromine?",
                options: ["Br", "B", "Be", "Bl"],
                answer: "Br"
            },
            {
                question: "What is the chemical symbol for iodine?",
                options: ["I", "Id", "Io", "In"],
                answer: "I"
            },
            {
                question: "What is the chemical symbol for carbon?",
                options: ["C", "Ca", "Co", "Cr"],
                answer: "C"
            },
            {
                question: "What is the chemical symbol for silicon?",
                options: ["Si", "S", "Se", "Sa"],
                answer: "Si"
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
                answer: "Mitochondria"
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Skin", "Liver", "Brain", "Heart"],
                answer: "Skin"
            },
            {
                question: "Which blood cells are responsible for oxygen transport?",
                options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
                answer: "Red blood cells"
            },
            {
                question: "Which organ is responsible for filtering blood in the human body?",
                options: ["Kidneys", "Liver", "Spleen", "Pancreas"],
                answer: "Kidneys"
            },
            {
                question: "What is the main function of the respiratory system?",
                options: ["To breathe in oxygen and remove carbon dioxide", "To pump blood around the body", "To digest food", "To control body movements"],
                answer: "To breathe in oxygen and remove carbon dioxide"
            },
            {
                question: "Which part of the plant conducts photosynthesis?",
                options: ["Chloroplasts", "Mitochondria", "Nucleus", "Ribosome"],
                answer: "Chloroplasts"
            },
            {
                question: "Which system in the body is responsible for regulating metabolism?",
                options: ["Endocrine system", "Nervous system", "Muscular system", "Skeletal system"],
                answer: "Endocrine system"
            },
            {
                question: "What is the basic unit of life?",
                options: ["Cell", "Molecule", "Organ", "Tissue"],
                answer: "Cell"
            },
            {
                question: "What is the longest bone in the human body?",
                options: ["Femur", "Tibia", "Fibula", "Humerus"],
                answer: "Femur"
            },
            {
                question: "What is the pigment that gives skin its color?",
                options: ["Melanin", "Hemoglobin", "Chlorophyll", "Keratin"],
                answer: "Melanin"
            },
            {
                question: "What is the main function of the circulatory system?",
                options: ["To transport nutrients and oxygen to cells", "To regulate body temperature", "To produce hormones", "To support and protect the body"],
                answer: "To transport nutrients and oxygen to cells"
            },
            {
                question: "Which part of the brain controls balance and coordination?",
                options: ["Cerebellum", "Cerebrum", "Brainstem", "Hypothalamus"],
                answer: "Cerebellum"
            },
            {
                question: "What is the smallest bone in the human body?",
                options: ["Stapes (in the ear)", "Femur", "Tibia", "Fibula"],
                answer: "Stapes (in the ear)"
            },
            {
                question: "Which type of tissue connects muscles to bones?",
                options: ["Tendon", "Ligament", "Cartilage", "Adipose tissue"],
                answer: "Tendon"
            },
            {
                question: "Which type of cell is responsible for transmitting nerve impulses?",
                options: ["Neuron", "Red blood cell", "White blood cell", "Platelet"],
                answer: "Neuron"
            },
            {
                question: "What is the process by which plants make their own food called?",
                options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
                answer: "Photosynthesis"
            },
            {
                question: "What is the process by which cells break down glucose to produce energy?",
                options: ["Cellular respiration", "Photosynthesis", "Glycolysis", "Fermentation"],
                answer: "Cellular respiration"
            },
            {
                question: "Which organ in the digestive system stores bile?",
                options: ["Gallbladder", "Pancreas", "Stomach", "Liver"],
                answer: "Gallbladder"
            },
            {
                question: "What is the main function of the excretory system?",
                options: ["To remove waste products from the body", "To regulate body temperature", "To transport nutrients to cells", "To produce hormones"],
                answer: "To remove waste products from the body"
            },
            {
                question: "Which part of the plant anchors it to the ground and absorbs water and nutrients?",
                options: ["Roots", "Stems", "Leaves", "Flowers"],
                answer: "Roots"
            },
            {
                question: "Which gland in the endocrine system regulates metabolism?",
                options: ["Thyroid gland", "Pituitary gland", "Adrenal gland", "Pancreas"],
                answer: "Thyroid gland"
            },
            {
                question: "What is the primary function of the skeletal system?",
                options: ["To provide support and protection for the body", "To produce hormones", "To transport oxygen around the body", "To regulate body temperature"],
                answer: "To provide support and protection for the body"
            },
            {
                question: "Which part of the human eye is responsible for controlling the amount of light that enters?",
                options: ["Iris", "Retina", "Cornea", "Lens"],
                answer: "Iris"
            },
            {
                question: "What is the process by which organisms produce offspring called?",
                options: ["Reproduction", "Respiration", "Digestion", "Photosynthesis"],
                answer: "Reproduction"
            },
            {
                question: "Which part of the respiratory system contains the vocal cords?",
                options: ["Larynx", "Trachea", "Bronchi", "Pharynx"],
                answer: "Larynx"
            },
            {
                question: "What is the liquid component of blood called?",
                options: ["Plasma", "Serum", "Red blood cells", "White blood cells"],
                answer: "Plasma"
            },
            {
                question: "Which part of the nervous system is responsible for involuntary functions like heartbeat and digestion?",
                options: ["Autonomic nervous system", "Central nervous system", "Peripheral nervous system", "Somatic nervous system"],
                answer: "Autonomic nervous system"
            },
            {
                question: "What is the process by which DNA is copied called?",
                options: ["Replication", "Transcription", "Translation", "Mutation"],
                answer: "Replication"
            },
            {
                question: "Which organ in the human body produces insulin?",
                options: ["Pancreas", "Liver", "Kidney", "Stomach"],
                answer: "Pancreas"
            },
            {
                question: "What is the process by which plants release water vapor into the atmosphere called?",
                options: ["Transpiration", "Photosynthesis", "Respiration", "Evaporation"],
                answer: "Transpiration"
            },
            {
                question: "Which type of tissue connects bones to each other?",
                options: ["Ligament", "Tendon", "Cartilage", "Adipose tissue"],
                answer: "Ligament"
            },
            {
                question: "What is the main function of the lymphatic system?",
                options: ["To fight infections and diseases", "To regulate metabolism", "To transport oxygen", "To produce hormones"],
                answer: "To fight infections and diseases"
            },
            {
                question: "What is the process by which food is broken down into simpler substances in the digestive system?",
                options: ["Digestion", "Absorption", "Assimilation", "Egestion"],
                answer: "Digestion"
            },
            {
                question: "Which part of the plant is responsible for producing seeds?",
                options: ["Flowers", "Leaves", "Stems", "Roots"],
                answer: "Flowers"
            },
            {
                question: "What is the main function of the endocrine system?",
                options: ["To regulate hormones", "To regulate metabolism", "To produce antibodies", "To produce enzymes"],
                answer: "To regulate hormones"
            },
            {
                question: "Which type of cell is responsible for fighting infections?",
                options: ["White blood cell", "Red blood cell", "Platelet", "Neuron"],
                answer: "White blood cell"
            },
            {
                question: "What is the process by which plants and animals convert glucose into usable energy?",
                options: ["Cellular respiration", "Photosynthesis", "Glycolysis", "Fermentation"],
                answer: "Cellular respiration"
            },
            {
                question: "Which part of the human brain is responsible for regulating basic bodily functions like heartbeat and breathing?",
                options: ["Brainstem", "Cerebrum", "Cerebellum", "Thalamus"],
                answer: "Brainstem"
            },
            {
                question: "What is the smallest unit of an element?",
                options: ["Atom", "Molecule", "Cell", "Tissue"],
                answer: "Atom"
            },
            {
                question: "Which part of the human brain is responsible for relaying sensory and motor signals to the rest of the body?",
                options: ["Brainstem", "Cerebellum", "Cerebrum", "Thalamus"],
                answer: "Thalamus"
            },
            {
                question: "What is the main function of the immune system?",
                options: ["To defend the body against infections and diseases", "To regulate metabolism", "To produce hormones", "To transport oxygen"],
                answer: "To defend the body against infections and diseases"
            },
            {
                question: "Which type of cell is responsible for clotting blood?",
                options: ["Platelet", "Red blood cell", "White blood cell", "Neuron"],
                answer: "Platelet"
            },
            {
                question: "What is the process by which plants absorb water from the soil?",
                options: ["Osmosis", "Transpiration", "Photosynthesis", "Diffusion"],
                answer: "Osmosis"
            },
            {
                question: "Which part of the human eye is responsible for focusing light onto the retina?",
                options: ["Lens", "Cornea", "Retina", "Iris"],
                answer: "Lens"
            },
            {
                question: "What is the main function of the integumentary system?",
                options: ["To protect the body from external damage", "To regulate metabolism", "To produce hormones", "To pump blood around the body"],
                answer: "To protect the body from external damage"
            },
            {
                question: "Which part of the human brain is responsible for coordinating voluntary movements?",
                options: ["Cerebellum", "Cerebrum", "Brainstem", "Thalamus"],
                answer: "Cerebellum"
            },
            {
                question: "What is the process by which plants and animals exchange gases with the environment?",
                options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
                answer: "Respiration"
            },
            {
                question: "Which part of the human ear is responsible for maintaining balance?",
                options: ["Semicircular canals", "Cochlea", "Eardrum", "Auditory nerve"],
                answer: "Semicircular canals"
            },
            {
                question: "Which part of the human brain is responsible for higher functions like thinking and memory?",
                options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"],
                answer: "Cerebrum"
            },
            {
                question: "What is the main function of the reproductive system?",
                options: ["To produce offspring", "To regulate body temperature", "To transport nutrients", "To produce hormones"],
                answer: "To produce offspring"
            },
            {
                question: "Which part of the human ear is responsible for hearing?",
                options: ["Cochlea", "Eardrum", "Auditory nerve", "Semicircular canals"],
                answer: "Cochlea"
            },
            {
                question: "What is the process by which cells use oxygen to produce energy?",
                options: ["Cellular respiration", "Photosynthesis", "Glycolysis", "Fermentation"],
                answer: "Cellular respiration"
            },
            {
                question: "Which gland in the endocrine system regulates blood sugar levels?",
                options: ["Pancreas", "Thyroid gland", "Pituitary gland", "Adrenal gland"],
                answer: "Pancreas"
            },
            {
                question: "What is the main function of the muscular system?",
                options: ["To produce movement", "To protect internal organs", "To produce hormones", "To regulate metabolism"],
                answer: "To produce movement"
            },
            {
                question: "Which type of tissue covers and protects body surfaces?",
                options: ["Epithelial tissue", "Connective tissue", "Muscle tissue", "Nervous tissue"],
                answer: "Epithelial tissue"
            },
        ],
        sports: [
            {
                question: "What is the distance between bases on a baseball field?",
                options: ["90 feet", "100 feet", "75 feet", "110 feet"],
                answer: "90 feet"
            },
            {
                question: "Which player holds the MLB record for the most career home runs?",
                options: ["Barry Bonds", "Babe Ruth", "Hank Aaron", "Willie Mays"],
                answer: "Barry Bonds"
            },
            {
                question: "What is the term for a pitch that is thrown outside the strike zone and the batter does not swing at it?",
                options: ["Ball", "Strike", "Foul", "Swing"],
                answer: "Ball"
            },
            {
                question: "What is the infield dirt area between the bases called?",
                options: ["Infield", "Outfield", "Diamond", "Baseline"],
                answer: "Infield"
            },
            {
                question: "What is the term for a batter who hits the ball and then runs around all the bases back to home plate?",
                options: ["Home run", "Grand slam", "Triple", "Inside the park home run"],
                answer: "Home run"
            },
            {
                question: "Which player holds the MLB record for the highest career batting average?",
                options: ["Ty Cobb", "Ted Williams", "Babe Ruth", "Tony Gwynn"],
                answer: "Ty Cobb"
            },
            {
                question: "What is the term for a ball that is hit high into the air and caught by a fielder before it hits the ground?",
                options: ["Fly ball", "Ground ball", "Line drive", "Pop-up"],
                answer: "Fly ball"
            },
            {
                question: "What is the term for a defensive play where the fielder catches a batted ball before it hits the ground?",
                options: ["Line drive", "Pop-up", "Fly ball", "Line out"],
                answer: "Line out"
            },
            {
                question: "How many strikes does a batter get before they are called out?",
                options: ["3", "2", "4", "5"],
                answer: "3"
            },
            {
                question: "What is the term for a pitch that is thrown in such a way that it curves as it approaches the batter?",
                options: ["Curveball", "Fastball", "Changeup", "Slider"],
                answer: "Curveball"
            },
            {
                question: "What is the term for a situation where the batter hits the ball and it is caught by a fielder before it hits the ground, resulting in the batter being out?",
                options: ["Out", "Foul ball", "Fly out", "Line out"],
                answer: "Fly out"
            },
            {
                question: "Which player holds the MLB record for the most career hits?",
                options: ["Pete Rose", "Ty Cobb", "Hank Aaron", "Stan Musial"],
                answer: "Pete Rose"
            },
            {
                question: "What is the term for a pitch that is thrown with a high velocity?",
                options: ["Fastball", "Curveball", "Changeup", "Slider"],
                answer: "Fastball"
            },
            {
                question: "What is the term for a pitch that is intentionally thrown outside the strike zone in an attempt to get the batter to swing and miss?",
                options: ["Ball", "Strike", "Foul", "Swing and miss"],
                answer: "Ball"
            },
            {
                question: "What is the term for a ball that is hit into play but does not leave the field of play?",
                options: ["Fair ball", "Foul ball", "Ground ball", "Pop-up"],
                answer: "Fair ball"
            },
            {
                question: "Which player holds the MLB record for the most career strikeouts as a pitcher?",
                options: ["Nolan Ryan", "Randy Johnson", "Roger Clemens", "Steve Carlton"],
                answer: "Nolan Ryan"
            },
            {
                question: "What is the term for a situation where the batter hits the ball and it rolls or bounces along the ground?",
                options: ["Ground ball", "Line drive", "Fly ball", "Pop-up"],
                answer: "Ground ball"
            },
            {
                question: "What is the term for a situation where the pitcher throws four balls to a batter, allowing the batter to advance to first base?",
                options: ["Walk", "Strikeout", "Hit by pitch", "Intentional walk"],
                answer: "Walk"
            },
            {
                question: "Which player holds the MLB record for the most career stolen bases?",
                options: ["Rickey Henderson", "Lou Brock", "Ty Cobb", "Tim Raines"],
                answer: "Rickey Henderson"
            },
            {
                question: "What is the term for a pitch that is thrown with the intention of hitting the batter?",
                options: ["Hit by pitch", "Strike", "Ball", "Walk"],
                answer: "Hit by pitch"
            },
            {
                question: "What is the term for a pitch that is thrown with the intention of enticing the batter to swing at it?",
                options: ["Strike", "Ball", "Foul", "Pitchout"],
                answer: "Strike"
            },
            {
                question: "Which player holds the MLB record for the most career wins as a pitcher?",
                options: ["Cy Young", "Walter Johnson", "Pete Alexander", "Christy Mathewson"],
                answer: "Cy Young"
            },
            {
                question: "What is the term for a hit that allows the batter to reach second base?",
                options: ["Double", "Single", "Triple", "Home run"],
                answer: "Double"
            },
            {
                question: "What is the term for a hit that allows the batter to reach third base?",
                options: ["Triple", "Single", "Double", "Home run"],
                answer: "Triple"
            },
            {
                question: "What is the term for a pitch that is thrown outside the strike zone and the batter swings at it?",
                options: ["Strike", "Ball", "Foul", "Swing and miss"],
                answer: "Ball"
            },
            {
                question: "Which player holds the MLB record for the most career saves as a relief pitcher?",
                options: ["Mariano Rivera", "Trevor Hoffman", "Lee Smith", "Billy Wagner"],
                answer: "Mariano Rivera"
            },
            {
                question: "What is the term for a situation where a defensive player catches a batted ball before it hits the ground?",
                options: ["Out", "Fly out", "Line out", "Pop-up"],
                answer: "Fly out"
            },
            {
                question: "What is the term for a situation where the batter swings at and misses the ball three times, resulting in an out?",
                options: ["Strikeout", "Walk", "Hit by pitch", "Home run"],
                answer: "Strikeout"
            },
            {
                question: "Which player holds the MLB record for the most career runs scored?",
                options: ["Rickey Henderson", "Barry Bonds", "Pete Rose", "Ty Cobb"],
                answer: "Rickey Henderson"
            },
            {
                question: "What is the term for a ball that is hit outside the foul lines?",
                options: ["Foul ball", "Fair ball", "Ground ball", "Fly ball"],
                answer: "Foul ball"
            },
            {
                question: "What is the term for a situation where the batter hits the ball and it goes over the outfield fence for a home run?",
                options: ["Home run", "Grand slam", "Triple", "Inside the park home run"],
                answer: "Home run"
            },
            {
                question: "Which player holds the MLB record for the most career runs batted in (RBIs)?",
                options: ["Hank Aaron", "Babe Ruth", "Barry Bonds", "Alex Rodriguez"],
                answer: "Hank Aaron"
            },
            {
                question: "What is the term for a situation where the batter hits the ball and it lands in fair territory but then rolls or bounces into foul territory?",
                options: ["Foul ball", "Fair ball", "Ground ball", "Fly ball"],
                answer: "Fair ball"
            },
            {
                question: "What is the term for a pitch that is thrown with a lot of spin, causing it to break sharply downward as it approaches the plate?",
                options: ["Curveball", "Fastball", "Changeup", "Slider"],
                answer: "Curveball"
            },
            {
                question: "Which player holds the MLB record for the most career strikeouts as a batter?",
                options: ["Reggie Jackson", "Alex Rodriguez", "Jim Thome", "Adam Dunn"],
                answer: "Reggie Jackson"
            },
            {
                question: "Which country won the first Cricket World Cup in 1975?",
                options: ["West Indies", "Australia", "England", "India"],
                answer: "West Indies"
            },
            {
                question: "Who is the leading run-scorer in Test cricket?",
                options: ["Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis", "Alastair Cook"],
                answer: "Sachin Tendulkar"
            },
            {
                question: "Which player holds the record for the highest individual score in Test cricket?",
                options: ["Brian Lara", "Matthew Hayden", "Virender Sehwag", "Don Bradman"],
                answer: "Brian Lara"
            },
            {
                question: "Who has taken the most wickets in Test cricket?",
                options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
                answer: "Muttiah Muralitharan"
            },
            {
                question: "Which team won the ICC Cricket World Cup in 2019?",
                options: ["England", "India", "Australia", "New Zealand"],
                answer: "England"
            },
            {
                question: "Who is known as the 'God of Cricket'?",
                options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Kumar Sangakkara"],
                answer: "Sachin Tendulkar"
            },
            {
                question: "Which player has scored the most centuries in international cricket?",
                options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Kumar Sangakkara"],
                answer: "Sachin Tendulkar"
            },
            {
                question: "Which country has won the most ICC Cricket World Cups?",
                options: ["Australia", "West Indies", "India", "England"],
                answer: "Australia"
            },
            {
                question: "Who is the current captain of the Indian cricket team in Test matches?",
                options: ["Virat Kohli", "Rohit Sharma", "Ajinkya Rahane", "Cheteshwar Pujara"],
                answer: "Virat Kohli"
            },
            {
                question: "Who was the first bowler to take a hat-trick in a Cricket World Cup match?",
                options: ["Chetan Sharma", "Saqlain Mushtaq", "Wasim Akram", "Lasith Malinga"],
                answer: "Chetan Sharma"
            },
            {
                question: "Which player holds the record for the fastest century in One Day Internationals?",
                options: ["AB de Villiers", "Shahid Afridi", "Corey Anderson", "Mark Boucher"],
                answer: "AB de Villiers"
            },
            {
                question: "Who is the fastest bowler in cricket history?",
                options: ["Shoaib Akhtar", "Brett Lee", "Jeff Thomson", "Mitchell Johnson"],
                answer: "Shoaib Akhtar"
            },
            {
                question: "Which country won the ICC Champions Trophy in 2017?",
                options: ["Pakistan", "India", "England", "Australia"],
                answer: "Pakistan"
            },
            {
                question: "Who is the only player to score a triple century in a Test match for Pakistan?",
                options: ["Younis Khan", "Inzamam-ul-Haq", "Hanif Mohammad", "Azhar Ali"],
                answer: "Hanif Mohammad"
            },
            {
                question: "Which bowler has taken the most wickets in a single Test match?",
                options: ["Jim Laker", "Anil Kumble", "Shane Warne", "Muttiah Muralitharan"],
                answer: "Jim Laker"
            },
            {
                question: "Who was the first player to score a double century in One Day Internationals?",
                options: ["Sachin Tendulkar", "Martin Guptill", "Virender Sehwag", "Rohit Sharma"],
                answer: "Sachin Tendulkar"
            },
            {
                question: "Which cricketer is known as the 'Sultan of Swing'?",
                options: ["Wasim Akram", "Waqar Younis", "Imran Khan", "Shoaib Akhtar"],
                answer: "Wasim Akram"
            },
            {
                question: "Who is the highest run-scorer in Women's T20 Internationals?",
                options: ["Suzie Bates", "Meg Lanning", "Stafanie Taylor", "Mithali Raj"],
                answer: "Suzie Bates"
            },
            {
                question: "Who holds the record for the highest individual score in Women's One Day Internationals?",
                options: ["Belinda Clark", "Charlotte Edwards", "Rohini Kottachi", "Deepti Sharma"],
                answer: "Belinda Clark"
            },
            {
                question: "Which country has won the most ICC Women's Cricket World Cups?",
                options: ["Australia", "England", "India", "New Zealand"],
                answer: "Australia"
            },
            {
                question: "Who is the only cricketer to score a century in all three formats of international cricket as captain?",
                options: ["Virat Kohli", "Ricky Ponting", "AB de Villiers", "Kane Williamson"],
                answer: "Virat Kohli"
            },
            {
                question: "Who is the current captain of the Australian cricket team in Test matches?",
                options: ["Tim Paine", "Steve Smith", "David Warner", "Pat Cummins"],
                answer: "Pat Cummins"
            },
            {
                question: "Who was the first cricketer to take 800 Test wickets?",
                options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
                answer: "Muttiah Muralitharan"
            },
            {
                question: "Which Indian cricketer has scored the most centuries in international cricket?",
                options: ["Sachin Tendulkar", "Virat Kohli", "Rahul Dravid", "Sunil Gavaskar"],
                answer: "Sachin Tendulkar"
            },
            {
                question: "Who is the only player to score a double century in T20 International cricket?",
                options: ["Rohit Sharma", "Martin Guptill", "Aaron Finch", "Chris Gayle"],
                answer: "Aaron Finch"
            },
            {
                question: "Who is the current captain of the England cricket team in Test matches?",
                options: ["Joe Root", "Eoin Morgan", "Ben Stokes", "Jos Buttler"],
                answer: "Joe Root"
            },
            {
                question: "Who is the youngest cricketer to score a century in Test cricket?",
                options: ["Sachin Tendulkar", "Mohammad Ashraful", "Don Bradman", "Brian Lara"],
                answer: "Mohammad Ashraful"
            },
            {
                question: "Which cricketer has taken the most wickets in a single IPL season?",
                options: ["Dwayne Bravo", "Lasith Malinga", "Bhuvneshwar Kumar", "Kagiso Rabada"],
                answer: "Dwayne Bravo"
            },
            {
                question: "Who was the first cricketer to score a century in IPL history?",
                options: ["Brendon McCullum", "Chris Gayle", "Adam Gilchrist", "Virender Sehwag"],
                answer: "Brendon McCullum"
            },
            {
                question: "Who is the only cricketer to take 10 wickets in a single innings of a Test match?",
                options: ["Jim Laker", "Anil Kumble", "Muttiah Muralitharan", "Shane Warne"],
                answer: "Jim Laker"
            },
            {
                question: "Who is the highest run-scorer in IPL history?",
                options: ["Virat Kohli", "Suresh Raina", "Rohit Sharma", "David Warner"],
                answer: "Virat Kohli"
            },
            {
                question: "Which cricketer has hit the most sixes in international cricket?",
                options: ["Chris Gayle", "Shahid Afridi", "Rohit Sharma", "Brendon McCullum"],
                answer: "Chris Gayle"
            },
            {
                question: "Who is the fastest cricketer to reach 10,000 runs in One Day Internationals?",
                options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "AB de Villiers"],
                answer: "Virat Kohli"
            },
            {
                question: "Who is the only cricketer to take a hat-trick in both Test and One Day International cricket?",
                options: ["Wasim Akram", "Brett Lee", "Saqlain Mushtaq", "Lasith Malinga"],
                answer: "Saqlain Mushtaq"
            },
            {
                question: "Who is the only cricketer to score 400 runs in a single Test innings?",
                options: ["Brian Lara", "Don Bradman", "Virender Sehwag", "Matthew Hayden"],
                answer: "Brian Lara"
            },
            {
                question: "Who is the only cricketer to score centuries in both innings of a Test match on three occasions?",
                options: ["Sunil Gavaskar", "Ricky Ponting", "Kumar Sangakkara", "Steve Smith"],
                answer: "Ricky Ponting"
            },
            {
                question: "Who holds the record for the fastest century in IPL history?",
                options: ["Chris Gayle", "AB de Villiers", "Yusuf Pathan", "David Miller"],
                answer: "Chris Gayle"
            },
            {
                question: "Who is the only bowler to take a hat-trick in a T20 International World Cup match?",
                options: ["Brett Lee", "Lasith Malinga", "Wasim Akram", "Rashid Khan"],
                answer: "Brett Lee"
            },
            {
                question: "Who is the first player to score 1000 runs in IPL history?",
                options: ["Suresh Raina", "Sachin Tendulkar", "Chris Gayle", "Virat Kohli"],
                answer: "Suresh Raina"
            },
            {
                question: "Who was the first cricketer to hit six sixes in an over in T20 Internationals?",
                options: ["Yuvraj Singh", "Chris Gayle", "Shahid Afridi", "Brendon McCullum"],
                answer: "Yuvraj Singh"
            },
            {
                question: "Who is the highest wicket-taker in Women's T20 International cricket?",
                options: ["Anya Shrubsole", "Ellyse Perry", "Sophie Devine", "Poonam Yadav"],
                answer: "Poonam Yadav"
            },
            {
                question: "Which Indian cricketer is known as 'Captain Cool'?",
                options: ["MS Dhoni", "Rohit Sharma", "Virat Kohli", "Sachin Tendulkar"],
                answer: "MS Dhoni"
            },
            {
                question: "Who is the only cricketer to score four double centuries in Test cricket?",
                options: ["Don Bradman", "Brian Lara", "Virat Kohli", "Kumar Sangakkara"],
                answer: "Virat Kohli"
            },
            {
                question: "Who was the first cricketer to take 500 wickets in Test cricket?",
                options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "Glenn McGrath"],
                answer: "Shane Warne"
            },
            {
                question: "Which player has hit the most sixes in IPL history?",
                options: ["Chris Gayle", "AB de Villiers", "Rohit Sharma", "MS Dhoni"],
                answer: "Chris Gayle"
            },
            {
                question: "Who is the only cricketer to take 5 wickets in an innings in a World Cup final?",
                options: ["Gary Gilmour", "Wasim Akram", "Clive Lloyd", "Glenn McGrath"],
                answer: "Gary Gilmour"
            },
            {
                question: "Who is the youngest cricketer to score a century in IPL history?",
                options: ["Rishabh Pant", "Prithvi Shaw", "Shubman Gill", "Sanju Samson"],
                answer: "Rishabh Pant"
            },
            {
                question: "Who holds the record for the fastest half-century in IPL history?",
                options: ["Sunil Narine", "KL Rahul", "Chris Gayle", "Yusuf Pathan"],
                answer: "Sunil Narine"
            },
            {
                question: "Who is the first cricketer to score 2000 runs in T20 International cricket?",
                options: ["Brendon McCullum", "Martin Guptill", "Chris Gayle", "Rohit Sharma"],
                answer: "Brendon McCullum"
            },
            {
                question: "Who is the highest wicket-taker in IPL history?",
                options: ["Lasith Malinga", "Amit Mishra", "Piyush Chawla", "Dwayne Bravo"],
                answer: "Lasith Malinga"
            },
            {
                question: "Who is the only cricketer to score centuries in five consecutive Test matches?",
                options: ["Don Bradman", "Kumar Sangakkara", "Virat Kohli", "Steve Smith"],
                answer: "Don Bradman"
            },
            {
                question: "Which cricketer is known as the 'Rawalpindi Express'?",
                options: ["Shoaib Akhtar", "Wasim Akram", "Waqar Younis", "Imran Khan"],
                answer: "Shoaib Akhtar"
            },
            {
                question: "Who is the youngest cricketer to take 10 wickets in a Test match?",
                options: ["Mohammad Amir", "Shaheen Afridi", "Aaqib Javed", "Anil Kumble"],
                answer: "Mohammad Amir"
            },
            {
                question: "Who is the highest wicket-taker in Women's One Day International cricket?",
                options: ["Jhulan Goswami", "Ellyse Perry", "Mithali Raj", "Anya Shrubsole"],
                answer: "Jhulan Goswami"
            },
            {
                question: "Who is the only cricketer to score 3000 runs and take 300 wickets in One Day Internationals?",
                options: ["Jacques Kallis", "Shahid Afridi", "Sanath Jayasuriya", "Chris Gayle"],
                answer: "Jacques Kallis"
            },
            {
                question: "Who is the highest run-scorer in IPL 2021?",
                options: ["Faf du Plessis", "KL Rahul", "Shikhar Dhawan", "Ruturaj Gaikwad"],
                answer: "Faf du Plessis"
            },
            {
                question: "Who is the first cricketer to take a hat-trick in a T20 International match?",
                options: ["Brett Lee", "Lasith Malinga", "Rashid Khan", "Yuzvendra Chahal"],
                answer: "Brett Lee"
            },
            {
                question: "Who was the first cricketer to score a century in Test cricket?",
                options: ["Charles Bannerman", "WG Grace", "Victor Trumper", "KS Ranjitsinhji"],
                answer: "Charles Bannerman"
            },
            {
                question: "Who was the first cricketer to score a double century in One Day Internationals?",
                options: ["Sachin Tendulkar", "Martin Guptill", "Virender Sehwag", "Chris Gayle"],
                answer: "Sachin Tendulkar"
            },
            {
                question: "Which cricketer has taken the most wickets in T20 International cricket?",
                options: ["Lasith Malinga", "Shahid Afridi", "Rashid Khan", "Saeed Ajmal"],
                answer: "Lasith Malinga"
            },
            {
                question: "Who is the first cricketer to take a hat-trick in IPL history?",
                options: ["Lakshmipathy Balaji", "Amit Mishra", "Bhuvneshwar Kumar", "Amit Mishra"],
                answer: "Lakshmipathy Balaji"
            },
            {
                question: "Who is the only cricketer to score a century in his 100th Test match?",
                options: ["Gordon Greenidge", "Graeme Smith", "Ricky Ponting", "Hashim Amla"],
                answer: "Ricky Ponting"
            },
            {
                question: "Who was the first cricketer to take 600 Test wickets?",
                options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "Glenn McGrath"],
                answer: "Shane Warne"
            },
            {
                question: "Who is the highest wicket-taker in Women's Test cricket?",
                options: ["Katherine Brunt", "Anya Shrubsole", "Ellyse Perry", "Mithali Raj"],
                answer: "Katherine Brunt"
            },
            {
                question: "Which cricketer has scored the most runs in a single Test match?",
                options: ["Brian Lara", "Don Bradman", "Matthew Hayden", "Sanath Jayasuriya"],
                answer: "Brian Lara"
            },
            {
                question: "Who is the only cricketer to score a century and take 5 wickets in a World Cup match?",
                options: ["Shahid Afridi", "Yuvraj Singh", "Viv Richards", "Kapil Dev"],
                answer: "Shahid Afridi"
            },
            {
                question: "Who is the only cricketer to win the 'ICC Cricketer of the Year' award three times?",
                options: ["Ricky Ponting", "Sachin Tendulkar", "Virat Kohli", "Jacques Kallis"],
                answer: "Ricky Ponting"
            },
            {
                question: "Who is the only cricketer to score a century in a World Cup final?",
                options: ["Viv Richards", "Ricky Ponting", "Aravinda de Silva", "Adam Gilchrist"],
                answer: "Adam Gilchrist"
            },
            {
                question: "What is the maximum number of players allowed on the court per team during a volleyball game?",
                options: ["6", "5", "7", "8"],
                answer: "6"
            },
            {
                question: "What is the height of a standard volleyball net for men's games?",
                options: ["2.43 meters", "2.24 meters", "2.55 meters", "2.74 meters"],
                answer: "2.43 meters"
            },
            {
                question: "What is the height of a standard volleyball net for women's games?",
                options: ["2.24 meters", "2.43 meters", "2.55 meters", "2.74 meters"],
                answer: "2.24 meters"
            },
            {
                question: "In volleyball, what is it called when the ball touches the ground outside of the court boundaries?",
                options: ["Out of bounds", "Foul", "Fault", "Error"],
                answer: "Out of bounds"
            },
            {
                question: "What is the term for a legal play in which the ball is directed over the net with one hand?",
                options: ["Set", "Spike", "Dig", "Dump"],
                answer: "Dump"
            },
            {
                question: "Which player is responsible for setting up offensive plays in volleyball?",
                options: ["Setter", "Libero", "Middle blocker", "Outside hitter"],
                answer: "Setter"
            },
            {
                question: "What is the maximum number of hits allowed per team before the ball must be returned over the net?",
                options: ["3", "4", "5", "6"],
                answer: "3"
            },
            {
                question: "What is the term for a player who specializes in defensive skills and wears a different colored jersey?",
                options: ["Libero", "Setter", "Middle blocker", "Outside hitter"],
                answer: "Libero"
            },
            {
                question: "Which player is positioned in the back row and primarily focuses on serving and defense?",
                options: ["Libero", "Setter", "Middle blocker", "Outside hitter"],
                answer: "Libero"
            },
            {
                question: "What is the term for a quick attack executed by a hitter jumping and striking the ball before it reaches its peak?",
                options: ["Quick set", "Spike", "Dump", "Block"],
                answer: "Quick set"
            },
            {
                question: "What is the term for a defensive play in which a player uses their hands to redirect an attacked ball?",
                options: ["Block", "Spike", "Dig", "Dump"],
                answer: "Dig"
            },
            {
                question: "What is the term for a player who blocks an opponent's attack at the net?",
                options: ["Blocker", "Spiker", "Setter", "Libero"],
                answer: "Blocker"
            },
            {
                question: "In volleyball, what is the term for a serve that results in a point without the receiving team touching the ball?",
                options: ["Ace", "Kill", "Dig", "Block"],
                answer: "Ace"
            },
            {
                question: "What is the term for a hit that is spiked forcefully into the opponent's court?",
                options: ["Kill", "Block", "Ace", "Dump"],
                answer: "Kill"
            },
            {
                question: "In volleyball, what is the term for a play in which the ball is sent over the net with a soft touch?",
                options: ["Tip", "Dump", "Set", "Kill"],
                answer: "Tip"
            },
            {
                question: "What is the term for a hit that results in the ball landing in the opponent's court untouched?",
                options: ["Kill", "Ace", "Tip", "Dump"],
                answer: "Kill"
            },
            {
                question: "What is the diameter of a standard basketball?",
                options: ["29.5 inches", "30 inches", "28.5 inches", "31 inches"],
                answer: "29.5 inches"
            },
            {
                question: "What is the height of a standard basketball hoop in the NBA?",
                options: ["10 feet", "9 feet", "11 feet", "12 feet"],
                answer: "10 feet"
            },
            {
                question: "How many players are there on a basketball team on the court at once?",
                options: ["5", "6", "7", "4"],
                answer: "5"
            },
            {
                question: "What is the duration of a standard NBA basketball game?",
                options: ["48 minutes", "60 minutes", "40 minutes", "50 minutes"],
                answer: "48 minutes"
            },
            {
                question: "Which player holds the record for the most points scored in a single NBA game?",
                options: ["Wilt Chamberlain", "Michael Jordan", "Kobe Bryant", "LeBron James"],
                answer: "Wilt Chamberlain"
            },
            {
                question: "What is the term for a field goal scored from behind the three-point line?",
                options: ["Three-pointer", "Free throw", "Layup", "Dunk"],
                answer: "Three-pointer"
            },
            {
                question: "Which NBA team has won the most championships?",
                options: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"],
                answer: "Boston Celtics"
            },
            {
                question: "Who is the all-time leading scorer in NBA history?",
                options: ["Kareem Abdul-Jabbar", "Michael Jordan", "LeBron James", "Kobe Bryant"],
                answer: "Kareem Abdul-Jabbar"
            },
            {
                question: "What is the term for a shot attempt that is unsuccessful and does not go in the basket?",
                options: ["Miss", "Foul", "Block", "Turnover"],
                answer: "Miss"
            },
            {
                question: "What is the term for the violation that occurs when a player takes too many steps without dribbling the ball?",
                options: ["Traveling", "Double dribble", "Palming", "Carry"],
                answer: "Traveling"
            },
            {
                question: "Which NBA player is known as 'The Greek Freak'?",
                options: ["Giannis Antetokounmpo", "LeBron James", "Kevin Durant", "Stephen Curry"],
                answer: "Giannis Antetokounmpo"
            },
            {
                question: "What is the term for a shot attempt in which the player jumps and throws the ball downward into the basket?",
                options: ["Dunk", "Layup", "Three-pointer", "Free throw"],
                answer: "Dunk"
            },
            {
                question: "Who is the youngest player to score 10,000 career points in the NBA?",
                options: ["LeBron James", "Kobe Bryant", "Kevin Durant", "Michael Jordan"],
                answer: "LeBron James"
            },
            {
                question: "Which NBA team won the first-ever NBA Championship?",
                options: ["Philadelphia Warriors", "Boston Celtics", "Los Angeles Lakers", "Chicago Stags"],
                answer: "Philadelphia Warriors"
            },
            {
                question: "What is the term for a shot attempt that is successful and goes in the basket?",
                options: ["Field goal", "Miss", "Rebound", "Assist"],
                answer: "Field goal"
            },
            {
                question: "Who is the NBA's all-time leader in assists?",
                options: ["John Stockton", "Magic Johnson", "Chris Paul", "Steve Nash"],
                answer: "John Stockton"
            },
            {
                question: "What is the diameter of a standard basketball?",
                options: ["29.5 inches", "30 inches", "28.5 inches", "31 inches"],
                answer: "29.5 inches"
            },
            {
                question: "What is the height of a standard basketball hoop in the NBA?",
                options: ["10 feet", "9 feet", "11 feet", "12 feet"],
                answer: "10 feet"
            },
            {
                question: "How many players are there on a basketball team on the court at once?",
                options: ["5", "6", "7", "4"],
                answer: "5"
            },
            {
                question: "What is the duration of a standard NBA basketball game?",
                options: ["48 minutes", "60 minutes", "40 minutes", "50 minutes"],
                answer: "48 minutes"
            },
            {
                question: "Which player holds the record for the most points scored in a single NBA game?",
                options: ["Wilt Chamberlain", "Michael Jordan", "Kobe Bryant", "LeBron James"],
                answer: "Wilt Chamberlain"
            },
            {
                question: "What is the term for a field goal scored from behind the three-point line?",
                options: ["Three-pointer", "Free throw", "Layup", "Dunk"],
                answer: "Three-pointer"
            },
            {
                question: "Which NBA team has won the most championships?",
                options: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"],
                answer: "Boston Celtics"
            },
            {
                question: "Who is the all-time leading scorer in NBA history?",
                options: ["Kareem Abdul-Jabbar", "Michael Jordan", "LeBron James", "Kobe Bryant"],
                answer: "Kareem Abdul-Jabbar"
            },
            {
                question: "What is the term for a shot attempt that is unsuccessful and does not go in the basket?",
                options: ["Miss", "Foul", "Block", "Turnover"],
                answer: "Miss"
            },
            {
                question: "What is the term for the violation that occurs when a player takes too many steps without dribbling the ball?",
                options: ["Traveling", "Double dribble", "Palming", "Carry"],
                answer: "Traveling"
            },
            {
                question: "Which NBA player is known as 'The Greek Freak'?",
                options: ["Giannis Antetokounmpo", "LeBron James", "Kevin Durant", "Stephen Curry"],
                answer: "Giannis Antetokounmpo"
            },
            {
                question: "What is the term for a shot attempt in which the player jumps and throws the ball downward into the basket?",
                options: ["Dunk", "Layup", "Three-pointer", "Free throw"],
                answer: "Dunk"
            },
            {
                question: "Who is the youngest player to score 10,000 career points in the NBA?",
                options: ["LeBron James", "Kobe Bryant", "Kevin Durant", "Michael Jordan"],
                answer: "LeBron James"
            },
            {
                question: "Which NBA team won the first-ever NBA Championship?",
                options: ["Philadelphia Warriors", "Boston Celtics", "Los Angeles Lakers", "Chicago Stags"],
                answer: "Philadelphia Warriors"
            },
            {
                question: "What is the term for a shot attempt that is successful and goes in the basket?",
                options: ["Field goal", "Miss", "Rebound", "Assist"],
                answer: "Field goal"
            },
            {
                question: "Who is the NBA's all-time leader in assists?",
                options: ["John Stockton", "Magic Johnson", "Chris Paul", "Steve Nash"],
                answer: "John Stockton"
            },
            {
                question: "Which country won the FIFA World Cup in 2018?",
                options: ["France", "Brazil", "Germany", "Argentina"],
                answer: "France"
            },
            {
                question: "Who is the all-time leading goal scorer in the UEFA Champions League?",
                options: ["Lionel Messi", "Cristiano Ronaldo", "Raul", "Robert Lewandowski"],
                answer: "Cristiano Ronaldo"
            },
            {
                question: "Which club has won the most English Premier League titles?",
                options: ["Manchester United", "Liverpool", "Chelsea", "Arsenal"],
                answer: "Manchester United"
            },
            {
                question: "Who is the current coach of the Spanish national team?",
                options: ["Luis Enrique", "Vicente del Bosque", "Pep Guardiola", "Diego Simeone"],
                answer: "Luis Enrique"
            },
            {
                question: "Which player has won the most Ballon d'Or awards?",
                options: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"],
                answer: "Lionel Messi"
            },
            {
                question: "In which year was the UEFA Europa League founded?",
                options: ["1971", "1991", "2001", "2011"],
                answer: "1971"
            },
            {
                question: "Who won the UEFA European Championship in 2016?",
                options: ["Portugal", "Germany", "France", "Spain"],
                answer: "Portugal"
            },
            {
                question: "Which team has won the most Copa America titles?",
                options: ["Argentina", "Brazil", "Uruguay", "Chile"],
                answer: "Uruguay"
            },
            {
                question: "Who is the all-time leading goal scorer for the Brazilian national team?",
                options: ["Pele", "Neymar", "Ronaldo", "Romario"],
                answer: "Pele"
            },
            {
                question: "Which player has won the most FIFA World Cup titles?",
                options: ["Pele", "Diego Maradona", "Cristiano Ronaldo", "Lionel Messi"],
                answer: "Pele"
            },
            {
                question: "Which club has won the most UEFA Champions League titles?",
                options: ["Real Madrid", "Barcelona", "Bayern Munich", "AC Milan"],
                answer: "Real Madrid"
            },
            {
                question: "Who is the current captain of the Argentina national team?",
                options: ["Lionel Messi", "Sergio Aguero", "Paulo Dybala", "Angel Di Maria"],
                answer: "Lionel Messi"
            },
            {
                question: "Which player is known as 'The Egyptian King'?",
                options: ["Mohamed Salah", "Sadio Mane", "Roberto Firmino", "Virgil van Dijk"],
                answer: "Mohamed Salah"
            },
            {
                question: "Which country hosted the first FIFA World Cup in 1930?",
                options: ["Uruguay", "Brazil", "Italy", "France"],
                answer: "Uruguay"
            },
            {
                question: "Who won the FIFA World Cup in 2010?",
                options: ["Spain", "Germany", "Netherlands", "Argentina"],
                answer: "Spain"
            },
            {
                question: "Which player has won the most Premier League Golden Boot awards?",
                options: ["Alan Shearer", "Thierry Henry", "Wayne Rooney", "Mohamed Salah"],
                answer: "Thierry Henry"
            },
            {
                question: "Which club has won the most Serie A titles?",
                options: ["Juventus", "AC Milan", "Inter Milan", "AS Roma"],
                answer: "Juventus"
            },
            {
                question: "Who won the FIFA Women's World Cup in 2019?",
                options: ["United States", "Netherlands", "Germany", "Sweden"],
                answer: "United States"
            },
            {
                question: "Which player has won the most FIFA Ballon d'Or awards?",
                options: ["Lionel Messi", "Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"],
                answer: "Lionel Messi"
            },
            {
                question: "Who is the all-time leading goal scorer for the Germany national team?",
                options: ["Miroslav Klose", "Gerd Muller", "Thomas Muller", "Lothar Matthaus"],
                answer: "Miroslav Klose"
            },
            {
                question: "Which club did Cristiano Ronaldo join after leaving Real Madrid in 2018?",
                options: ["Juventus", "Paris Saint-Germain", "Manchester United", "Bayern Munich"],
                answer: "Juventus"
            },
            {
                question: "Who is the current captain of the England national team?",
                options: ["Harry Kane", "Raheem Sterling", "Jordan Henderson", "Marcus Rashford"],
                answer: "Harry Kane"
            },
            {
                question: "Which player has won the most UEFA European Championship titles?",
                options: ["Cristiano Ronaldo", "Michel Platini", "Marco van Basten", "Karl-Heinz Rummenigge"],
                answer: "Cristiano Ronaldo"
            },
            {
                question: "Which country won the first FIFA Women's World Cup in 1991?",
                options: ["United States", "China", "Norway", "Sweden"],
                answer: "United States"
            },
            {
                question: "Who is the all-time leading goal scorer for the Portugal national team?",
                options: ["Cristiano Ronaldo", "Eusebio", "Pauleta", "Luis Figo"],
                answer: "Cristiano Ronaldo"
            },
            {
                question: "Which player has won the most UEFA Champions League titles?",
                options: ["Cristiano Ronaldo", "Lionel Messi", "Paolo Maldini", "Clarence Seedorf"],
                answer: "Cristiano Ronaldo"
            },
            {
                question: "Who is the current coach of the Brazil national team?",
                options: ["Tite", "Felipe Scolari", "Dunga", "Carlos Queiroz"],
                answer: "Tite"
            },
            {
                question: "Which club has won the most Copa Libertadores titles?",
                options: ["Independiente", "Boca Juniors", "River Plate", "Peñarol"],
                answer: "Independiente"
            },
            {
                question: "Who won the FIFA World Cup in 2006?",
                options: ["Italy", "France", "Brazil", "Germany"],
                answer: "Italy"
            },
            {
                question: "Who holds the record for the most major championships won in golf?",
                options: ["Tiger Woods", "Jack Nicklaus", "Rory McIlroy", "Arnold Palmer"],
                answer: "Jack Nicklaus"
            },
            {
                question: "What is the term for a hole completed in one stroke under par?",
                options: ["Birdie", "Eagle", "Albatross", "Hole-in-one"],
                answer: "Birdie"
            },
            {
                question: "Which golf course hosts the Masters Tournament?",
                options: ["Augusta National", "Pebble Beach", "Royal Birkdale", "St. Andrews"],
                answer: "Augusta National"
            },
            {
                question: "What is the maximum number of clubs allowed in a golfer's bag during a round?",
                options: ["14", "16", "12", "10"],
                answer: "14"
            },
            {
                question: "Who was the first golfer to achieve a career Grand Slam?",
                options: ["Bobby Jones", "Ben Hogan", "Gary Player", "Tiger Woods"],
                answer: "Bobby Jones"
            },
            {
                question: "Which golfer is known as 'The Golden Bear'?",
                options: ["Jack Nicklaus", "Arnold Palmer", "Tiger Woods", "Tom Watson"],
                answer: "Jack Nicklaus"
            },
            {
                question: "What is the term for a score of two strokes under par on a hole?",
                options: ["Eagle", "Birdie", "Albatross", "Hole-in-one"],
                answer: "Eagle"
            },
            {
                question: "Which major championship is known as 'The Open'?",
                options: ["The Open Championship", "The Masters", "PGA Championship", "U.S. Open"],
                answer: "The Open Championship"
            },
            {
                question: "What is the name of the golf tournament played between the United States and Europe?",
                options: ["Ryder Cup", "Presidents Cup", "Walker Cup", "Solheim Cup"],
                answer: "Ryder Cup"
            },
            {
                question: "Which golf course is known as 'The Old Course'?",
                options: ["St. Andrews", "Pebble Beach", "Augusta National", "Royal Birkdale"],
                answer: "St. Andrews"
            },
        ],
        literature: [

            {
                question: "Who wrote the play 'Romeo and Juliet'?",
                options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
                answer: "William Shakespeare"
            },
            {
                question: "Which novel features the character Atticus Finch?",
                options: ["To Kill a Mockingbird", "Pride and Prejudice", "1984", "The Catcher in the Rye"],
                answer: "To Kill a Mockingbird"
            },
            {
                question: "Who is the author of 'Pride and Prejudice'?",
                options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Louisa May Alcott"],
                answer: "Jane Austen"
            },
            {
                question: "Which Shakespearean play features the character Hamlet?",
                options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
                answer: "Hamlet"
            },
            {
                question: "Who wrote the novel '1984'?",
                options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
                answer: "George Orwell"
            },
            {
                question: "Which author created the character Sherlock Holmes?",
                options: ["Agatha Christie", "Arthur Conan Doyle", "Edgar Allan Poe", "Dashiell Hammett"],
                answer: "Arthur Conan Doyle"
            },
            {
                question: "In which novel would you find the character Holden Caulfield?",
                options: ["To Kill a Mockingbird", "Pride and Prejudice", "1984", "The Catcher in the Rye"],
                answer: "The Catcher in the Rye"
            },
            {
                question: "Who wrote the epic poem 'Paradise Lost'?",
                options: ["John Milton", "William Wordsworth", "Geoffrey Chaucer", "Dante Alighieri"],
                answer: "John Milton"
            },
            {
                question: "Which novel features the character Jay Gatsby?",
                options: ["To Kill a Mockingbird", "The Great Gatsby", "Moby-Dick", "The Grapes of Wrath"],
                answer: "The Great Gatsby"
            },
            {
                question: "Who is the author of 'Jane Eyre'?",
                options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Louisa May Alcott"],
                answer: "Charlotte Brontë"
            },
            {
                question: "Which of Shakespeare's plays is set in Venice and features the character Shylock?",
                options: ["Romeo and Juliet", "The Merchant of Venice", "Julius Caesar", "Hamlet"],
                answer: "The Merchant of Venice"
            },
            {
                question: "Who wrote the novel 'Moby-Dick'?",
                options: ["Herman Melville", "Nathaniel Hawthorne", "Henry David Thoreau", "Ralph Waldo Emerson"],
                answer: "Herman Melville"
            },
            {
                question: "Which novel is set in the fictional land of Narnia?",
                options: ["The Hobbit", "The Lion, the Witch and the Wardrobe", "Alice's Adventures in Wonderland", "Wuthering Heights"],
                answer: "The Lion, the Witch and the Wardrobe"
            },
            {
                question: "Who wrote the play 'Macbeth'?",
                options: ["William Shakespeare", "George Bernard Shaw", "Oscar Wilde", "Samuel Beckett"],
                answer: "William Shakespeare"
            },
            {
                question: "Which novel features the character Elizabeth Bennet?",
                options: ["To Kill a Mockingbird", "Pride and Prejudice", "1984", "Jane Eyre"],
                answer: "Pride and Prejudice"
            },
            {
                question: "Who is the author of 'The Great Gatsby'?",
                options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "Tennessee Williams"],
                answer: "F. Scott Fitzgerald"
            },
            {
                question: "Which novel features the character Winston Smith?",
                options: ["To Kill a Mockingbird", "Pride and Prejudice", "1984", "The Catcher in the Rye"],
                answer: "1984"
            },
            {
                question: "Who wrote the poem 'The Raven'?",
                options: ["Edgar Allan Poe", "Emily Dickinson", "Walt Whitman", "Robert Frost"],
                answer: "Edgar Allan Poe"
            },
            {
                question: "Which Shakespearean play features the character King Lear?",
                options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
                answer: "King Lear"
            },
            {
                question: "Who is the author of 'Wuthering Heights'?",
                options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Louisa May Alcott"],
                answer: "Emily Brontë"
            },
        ],

        trial: [

        ]
    }

    console.log(quiz_data.literature.length)

    var question_counter = 0;
    var number_of_question = 0;
    var correct = 0;
    var wrong = 0;
    var accuracy = 0;

    var selected_choice = "";

    var question_array = [];

    var question_random = 0;
    var option_random = 0;

    var total_quiz = 10;

    $(".header_title, .home").click(function () {
        location.reload();
    })

    var inner_dup = 0, outer_dup = 0;

    var base_object = "trial", searching_object = "trial";

    base_object = base_object.toLowerCase();
    searching_object = searching_object.toLowerCase();

    // Duplication Checking in Within Object

    for (i = 0; i < quiz_data[base_object].length; i++) {
        for (j = i + 1; j < quiz_data[base_object].length; j++) {
            if ((quiz_data[base_object][i].question) == (quiz_data[base_object][j].question)) {
                console.log("Index " + (j + 1) + " : " + quiz_data[base_object][j].question);
                inner_dup++;
            }
        }
    }

    if (inner_dup == 0) {
        console.log("No More Duplicay within objects");
    }
    else {
        console.log(`Total number of New Records : ${quiz_data[base_object].length} \nTotal Number of Duplicate in New Records ${inner_dup}`);
        // console.log(`Total Number of Inner Duplicates : ${inner_dup}`);
    }

    // // Duplication Checking between two objects

    // for (var i = 0; i < quiz_data[base_object].length; i++) {
    //     for (var j = 0; j < quiz_data[searching_object].length; j++) {
    //         if ((quiz_data[base_object][i].question) === (quiz_data[searching_object][j].question)) {
    //             console.log("Index " + (j + 1) + " : " + quiz_data[searching_object][j].question);
    //             outer_dup++;
    //         }
    //     }
    // }
    // if (outer_dup == 0) {
    //     console.log("No More Duplicay between two objects");
    // }
    // else {
    //     console.log(`Total number of New Records : ${quiz_data.trial.length} \nTotal Number of Duplicate in New Records ${outer_dup}`);
    // }

    $(".start").click(function () {
        $(".main_page").hide();
        $(".game_zone").show();

        selected_choice = $(this).attr("id");
        selected_choice = $(this).attr("id");

        $(".question_count").text(question_counter + 1);
        $(".question_total").text(total_quiz);

        question_random = parseInt(Math.random() * (quiz_data[selected_choice].length));
        console.log(question_random);

        console.log(question_array);

        // Inserting Random Question Number in question_array
        question_array.push(question_random);

        console.log(question_array);

        $(".game_zone_question").text(`Q${question_counter + 1} : ` + quiz_data[selected_choice][question_random].question);

        var option_array = [];

        for (var i = 0; i < 4; i++) {

            option_random = parseInt(Math.random() * 4);

            if (option_array.indexOf(option_random) != -1) {
                i--;
            }
            else {
                option_array.push(option_random);
                $(`.option${i + 1}`).text(quiz_data[selected_choice][question_random].options[option_random]);
            }
        }

        // $(".option1").text(quiz_data[selected_choice][question_random].options[0]);
        // $(".option2").text(quiz_data[selected_choice][question_random].options[1]);
        // $(".option3").text(quiz_data[selected_choice][question_random].options[2]);
        // $(".option4").text(quiz_data[selected_choice][question_random].options[3]);
    })

    $(".game_zone_option").click(function () {

        $(`.game_zone_option`).css({ "pointer-events": "none" });

        if ($(this).text() == quiz_data[selected_choice][question_random].answer) {
            // $(this).css({ "background-color": "green", "color": "white","background-image":"none" });
            $(this).css({ "border-color": "green" });
            correct++;
        }
        else {
            for (i = 1; i <= 4; i++) {
                if ($(`.option${i}`).text() == quiz_data[selected_choice][question_random].answer) {
                    // $(`.option${i}`).css({ "background-color": "green", "color": "white","background-image":"none"  });
                    $(`.option${i}`).css({ "border-color": "green" });
                }
            }
            wrong++;
            // $(this).css({ "background-color": "rgb(225, 20, 20)", "color": "white","background-image":"none"  });
            $(this).css({ "border-color": "red" });
        }

        $(".next_question").show();
    })

    $(".next_question").click(function () {

        if ((question_counter + 1) == total_quiz) {
            $(".game_zone").hide();
            $(".result").show();

            $(".correct").text(correct);
            $(".wrong").text(wrong);
            $(".accuracy").text(((correct / total_quiz) * 100.0).toFixed(2) + "%");

        }
        else {
            $(`.game_zone_option`).css({ "pointer-events": "all" });

            question_counter++;
            $(".question_count").text(question_counter + 1);

            if ((question_counter + 1) == total_quiz) {
                $(".next_question").text("Submit");
            }

            for (i = 1; i <= 4; i++) {
                $(`.option${i}`).css({ "border-color": "white" });
            }

            question_random = parseInt(Math.random() * (quiz_data[selected_choice].length));

            while (question_array.indexOf(question_random) != -1) {
                question_random = parseInt(Math.random() * (quiz_data[selected_choice].length));
            }

            question_array.push(question_random);

            $(".game_zone_question").text(`Q${question_counter + 1} : ` + quiz_data[selected_choice][question_random].question);

            var option_array = [];

            for (var i = 0; i < 4; i++) {

                option_random = parseInt(Math.random() * 4);

                if (option_array.indexOf(option_random) != -1) {
                    i--;
                }
                else {
                    option_array.push(option_random);
                    $(`.option${i + 1}`).text(quiz_data[selected_choice][question_random].options[option_random]);
                }
            }

            console.log(option_array);
            // $(".option2").text(quiz_data[selected_choice][random].options[1]);
            // $(".option3").text(quiz_data[selected_choice][random].options[2]);
            // $(".option4").text(quiz_data[selected_choice][random].options[3]);

            $(".next_question").hide();
        }
    })
})
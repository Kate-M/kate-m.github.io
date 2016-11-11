var app = angular.module("calendar", ["customFilters"]);

angular.module("calendar")
    .controller("calendarCtrl", function($scope, $filter) {
        var selectedGenge = "Hip Hop";

        $scope.days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        $scope.times = ["16.00", "17.00", "18.00", "19.00", "20.00"]
        $scope.studios = [
            { id: 1, address: "1/6.  Москва, Литовский бульвар, 17/4" },
            { id: 2, address: "2/6.  Москва, Литовский бульвар д.17 к.3" },
            { id: 3, address: "3/6.  Москва, Литовский бульвар д.11 к.2" },
            { id: 4, address: "4/6.  Москва, Кировоградская д.21 к.1 стр. 2" },
            { id: 5, address: "5/6.  Москва, Бутово, Кадырова д. 10" },
            { id: 6, address: "6/6.  Москва, Щербинка, Железнодорожная ул. д. 41" },
        ]

        $scope.events = [{
                genre: "Break Dance",
                group: "Средняя группа (11-13 лет)",
                startTime: "16.00",
                endTime: "17.00",
                startDay: "Понедельник",
                teacher: "Катя Петрова",
                address_id: 4
            },
            {
                genre: "Break Dance",
                group: "Средняя группа (11-13 лет)",
                startTime: "16.00",
                endTime: "17.00",
                startDay: "Понедельник",
                teacher: "Катя Петрова",
                address_id: 6
            },
            {
                genre: "Hip Hop",
                group: "Средняя группа (11-13 лет)",
                startTime: "16.00",
                endTime: "17.00",
                startDay: "Вторник",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Hip Hop",
                group: "Средняя группа (11-13 лет)",
                startTime: "16.00",
                endTime: "17.00",
                startDay: "Четверг",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Hip Hop",
                group: "Старшая группа (14-18 лет)",
                startTime: "20.00",
                endTime: "21.00",
                startDay: "Вторник",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Hip Hop",
                group: "Старшая группа (14-18 лет)",
                startTime: "20.00",
                endTime: "21.00",
                startDay: "Пятница",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Hip Hop",
                group: "Средняя группа (11-13 лет)",
                startTime: "19.00",
                endTime: "20.00",
                startDay: "Вторник",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Hip Hop",
                group: "Средняя группа (11-13 лет)",
                startTime: "19.00",
                endTime: "20.00",
                startDay: "Четверг",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Hip Hop",
                group: "Младшая группа (8-10 лет)",
                startTime: "18.00",
                endTime: "19.00",
                startDay: "Вторник",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Hip Hop",
                group: "Младшая группа (8-10 лет)",
                startTime: "18.00",
                endTime: "19.00",
                startDay: "Четверг",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Break Dance",
                group: "Средняя группа (11-13 лет)",
                startTime: "16.00",
                endTime: "17.00",
                startDay: "Среда",
                teacher: "Катя Петрова",
                address_id: 2
            },
            {
                genre: "Lady Style",
                group: "Средняя группа (11-13 лет)",
                startTime: "17.00",
                endTime: "18.00",
                startDay: "Четверг",
                teacher: "Катя Петрова",
                address_id: 2
            },
            {
                genre: "Hip Hop",
                group: "Старшая группа (14-18 лет)",
                startTime: "18.00",
                endTime: "19.00",
                startDay: "Пятница",
                teacher: "Катя Петрова",
                address_id: 3
            },

            {
                genre: "Lady Style",
                group: "Средняя группа (11-13 лет)",
                startTime: "17.00",
                endTime: "18.00",
                startDay: "Четверг",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Zumba",
                group: "Старшая группа (14-18 лет)",
                startTime: "18.00",
                endTime: "19.00",
                startDay: "Суббота",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Stretcing",
                group: "Старшая группа (14-18 лет)",
                startTime: "18.00",
                endTime: "19.00",
                startDay: "Пятница",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Дети",
                group: "Средняя группа (11-13 лет)",
                startTime: "16.00",
                endTime: "17.00",
                startDay: "Среда",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Свадебный танец",
                group: "Средняя группа (11-13 лет)",
                startTime: "17.00",
                endTime: "18.00",
                startDay: "Воскресенье",
                teacher: "Катя Петрова",
                address_id: 2
            },
            {
                genre: "Бальные танцы",
                group: "Старшая группа (14-18 лет)",
                startTime: "18.00",
                endTime: "19.00",
                startDay: "Пятница",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Индивидуальные занятия",
                group: "Старшая группа (14-18 лет)",
                startTime: "18.00",
                endTime: "19.00",
                startDay: "Пятница",
                teacher: "Катя Петрова",
                address_id: 1
            },
            {
                genre: "Бальные танцы",
                group: "Старшая группа (14-18 лет)",
                startTime: "19.00",
                endTime: "20.00",
                startDay: "Пятница",
                teacher: "Катя Петрова",
                address_id: 3
            }
        ];

        $scope.getStudioId = function() {
            return $scope.studios[addressIndex].id;
        }

        $scope.selectGenre = function(genre) {
            selectedGenge = genre;
        }

        $scope.filterByGenre = function(event) {
            if (event.genre == selectedGenge) return true;
            return false;
        }
        $scope.getLinkClass = function(genre) {
            return genre == selectedGenge ? "active" : "";
        }
        $scope.getGenreCss = function(genre) {
            if (genre == 'Hip Hop')
                return 'hip';
            if (genre == 'Break Dance')
                return 'break';
            if (genre == 'Дети')
                return 'kids';
            if (genre == 'Stretcing') {
                return 'stret'
            }
            if (genre == 'Lady Style') {
                return 'lady'
            }
            if (genre == 'Бальные танцы') {
                return 'lady'
            }
            if (genre == 'Бальные танцы') {
                return 'lady'
            }
            if (genre == 'Zumba') {
                return 'lady'
            } else return 'hip';
        }
    })
    .controller("addressCtrl", function($scope) {
        addressIndex = 0;
        $scope.moveNextAddress = function() {
            addressIndex++;
            if (addressIndex == $scope.studios.length) {
                addressIndex = 0;
            }
        }

        $scope.movePreviousAddress = function() {
            addressIndex--;
            if (addressIndex < 0) {
                addressIndex = $scope.studios.length - 1;
            }
        }

        $scope.getAddress = function() {
            return $scope.studios[addressIndex].address;
        }

        $scope.filterByStudio = function(event) {
            if (event.address_id == $scope.getStudioId())
                return true;
            return false;
        }
    })
    .filter("dateFilter", function() {
        return function(data, day, time) {
            var temp = [];
            if (angular.isArray(data)) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].startTime == time && data[i].startDay == day)
                        temp.push(data[i]);
                }
                return temp;
            }
        }
    });
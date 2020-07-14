var Examples = function () {
    var self = this;
    var init = function () {
        // example 1: Text, Html, Attr, Style, Css data binding
        var viewModel1 = function () {            
            this.name = 'Steve Kennedy';
            this.getName = function () {
                return 'Hello <em>' + self.name + '</em>!';
            };
        };
        ko.applyBindings(new viewModel1(), document.getElementById("example1"));
        // example 2: Foreach
        var viewModel2 = function (book) {
            var self = this;
            self.book = book;

            self.books = [
                'Rapid Application Development With CakePHP',
                '20 Recipes for Programming MVC 3: Faster, Smarter Web Development',
                '20 Recipes for Programming PhoneGap:Cross - Platform Mobile Development for Android and iPhone'
            ];

            self.books2 = [
                {
                    title: 'Rapid Application Development With CakePHP',
                    isbn: '1460954394',
                    publishedDate: '2011-02-17',
                    image:
                        'http://ecx.images-amazon.com/images/I/41JC54HEroL._AA160_.jpg'
                }, {
                    title: '20 Recipes for Programming MVC 3: Faster, Smarter Web Development',
                    isbn: '1449309860',
                    publishedDate: '2011-10-14',
                    image:
                        'http://ecx.images-amazon.com/images/I/51LpqnDq8-L._AA160_.jpg'
                }, {
                    title: '20 Recipes for Programming PhoneGap: Cross- Platform Mobile Development for Android and iPhone',
            isbn: '1449319548',
                publishedDate: '2012-04-06',
                    image:
            'http://ecx.images-amazon.com/images/I/51AkFkNeUxL._AA160_.jpg'
        }
];
            self.formatDate = function (dateToFormat) {
                var months = new Array("January", "February", "March", "April",
                                        "May", "June", "July", "August", "September", "October",
                                        "November", "December");
                var d = new Date(dateToFormat);
                return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
            };
            self.loadImage = function (element, index, data) {
                $('#image_' + index.isbn).attr('src', index.image);
            };
            //return this;
        };
        var book = {
            title: 'Rapid Application Development With CakePHP',
            synposis: '...',
            isbn: '1460954394',
            publishedDate: '2011-02-17'
        };

        var model2 = new viewModel2(book);

        console.log(model2);
        ko.applyBindings(model2, document.getElementById("example2"));
        // example 3: observables and computed
        var viewModel3 = function () {
            var self = this;

            self.firstName = ko.observable('Steve');
            self.lastName = ko.observable('Kennedy');
            self.fullName = ko.computed(function () {
                return 'Hello ' + self.firstName() + ' ' + self.lastName();
            });

            self.myText = ko.observable('');
            self.maxCharacters = 140;
            self.charactersRemaining = ko.computed(function () {
                debugger
                return self.maxCharacters - self.myText().length;
            });
        };
        var model3 = new viewModel3();
        ko.applyBindings(model3, document.getElementById("example3"));
    };

    init();
}();


var app = new Vue ({
    el: '#app',
    data: {
        title: "Лист задач",
        isActive: false,
        items: [

        ]
    },
    methods: {
        addItem: function () {
            var input = document.getElementById('itemForm');

            if (input.value !== '') {
                this.items.push({
                    text:input.value
                })
                input.value = "";
            }
        },
        deleteItem: function (index) {
            this.items.splice(index, 1);
        },
        successItem: function (index) {
            document.getElementsByTagName('th')[index + 1].style.opacity = '0.5';
            document.getElementsByTagName('th')[index + 1].style.backgroundColor = 'darkgray'
            document.getElementsByTagName('span')[index].style.textDecoration = 'line-through';
        },
    },
})
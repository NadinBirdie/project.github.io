var hotels = [
    {
        name: "Яблуниця",        
        image: "yablunucia.jpg",
        price: 2200.00 
    },
    {
        name: "Драгобрат",
        image: "gasthaus.jpg",
        price: 150.00
    },
    {
        name: "Кривопілля",        
        image: "kruvopillia.jpg",
        price: 600.00
    },
    {
        name: "Буковель",
        image: "bukovel.jpg",
        price: 9.99
    },
    {
        name: "Буковель",
        image: "bukovel2.jpg",
        price: 6.99
    },
    {
        name: "Драгобрат",
        image: "dobosh.jpg",
        price: 5.99
    },
    {
        name: "Буковель",
        image: "whitehouse.jpg",
        price: 4.99
    },
    {
        name: "Микуличин",    
        image: "zarinok.jpg",
        price: 3.99
    },
    {
        name: "Косів",
        image: "kosiv.jpg",
        price: 1.99
    },
    {
        name: "Буковель",    
        image: "12mounth.jpg",
        price: 3.99
    },
    {
        name: "Татарів",    
        image: "karpatski-zori.jpg",
        price: 3.99
    },
    {
        name: "Косів",    
        image: "kosiv.jpg",
        price: 3.99
    },
    {
        name: "Микуличин",    
        image: "zarinok.jpg",
        price: 3.99
    },
    {
        name: "Яремче",        
        image: "oldhouse.jpg",
        price: 3.99
    },
    {
        name: "Яремче",        
        image: "rychay.jpg",
        price: 3.99
    },
    {
        name: "Буковель",        
        image: "silverocks.jpg",
        price: 3.99
    },
    {
        name: "Татарів",        
        image: "vershyna.jpg",
        price: 3.99
    },
    {
        name: "Янтари",        
        image: "yantary.jpg",
        price: 3.99
    },
    
    
];
//ця функція запускається тільки після того, як буде завантажено весь html документ
$(function(){

    listItems();

});

function listItems() {
    //вибираємо контейнер, що відображає вмість динамічних html елементів і очищуємо його від попереднього вмісту
    $("#content").empty();
    //цикл, що перебирає всі елементи масиву hotels
    hotels.forEach(function(item, index) {
        //добавляємо нові елементи html до div елементу
        //використовуємо для вигляду класи bootstrap 
        $("#content").append("<div class=\"col-sm-4 \">"
        //добавили клас item-click-image-detail щоб jquery міг додати функцію, яка запускається при кліканні мишкою
        //цю функцію ми добавимо низче : $(".item-click-image-detail").click(function() {
        //назва зображення беремо із змінної циклу - item
        + "<div class=\"panel panel-primary\">"       
        + "<div class=\" panel-heading \"> <h5 class=\"text-left\">" + item.name + "</h5></div>"
        + "<div class=\"panel-body cont-hover\"><img src=\"img/" + item.image + "\" class=\" item-click-image-detail small-img-thumbnail img-responsive\" alt=\"" +
         item.name + "\" data-item=\"" + index +  "</div>"   
        + "<div class=\"panel-footer\"><div class=\"pull-left \"> <p class=\"price\">" + item.price +  "</p>"
        + "</div>"
        +
        + "</div>"
        + "</div>");
    });

    //функція обробляє клік на кнопці із корзинкою, оскільки $(".buy-item-click")
    $(".buy-item-click").click(function() {
        //зчитуємо текст елементу span і перетворюємо його в число
        var prevPrice = Number($("#total-price").text());
        //зчитуємо атрибут data-item  із кнопки-корзинки, цей атрибут дорівнює порядковому номеру
        //елемента масиву hotels на який клацнути
        var index = $(this).data("item");

        //перевіряємо чи має кнопка клас btn-outline-info, якщо має, значить на неї ще не клацнули
        //додаємо ціну товару в загальну і змінюємо клас
        if($(this).hasClass("btn-outline-info")) {
            //змінюємо клас
            $(this).removeClass("btn-outline-info").addClass("btn-success");
            //додаємо вартість товару до загального
            var frmPrice = String(prevPrice + hotels[index].price).substring(0, 5);
            //втавляємо додану суму в елемент загальної ціни span
            $("#total-price").text(frmPrice);
        } else {
            //робимо протилежні дії - міняємо клас на той який був, віднімаємо ціну від загальної
            $(this).removeClass("btn-success").addClass("btn-outline-info");
            var frmPrice = String(prevPrice - hotels[index].price).substring(0, 5);
            $("#total-price").text(frmPrice);
        }

    });

 /*   //оброблює клацання на зображення, змінює вміст елементу div, що відображає динамічні html елементи
    $(".item-click-image-detail").click(function() {
        //отримуємо об'єкт із масиву на яким ми клацнули
        var item = hotels[$(this).data("item")];
        //очищуємо попередній контент і додаємо нивий у три колонки
        $("#content").empty().append("<div class=\"col-4\">" 
        + "<button id=\"back-to-list-items\" type=\"button\" class=\"btn btn-outline-info \">"
        + "<i class=\"fas fa-angle-left\"></i>&nbspНазад</button>"
        + "</div><div class=\"col-8\"></div>")
        .append("<div class=\"col-4 mt-2\">"
        + "<img src=\"imgs/" + item.image + "\" class=\"img-thumbnail\" alt=\"" + item.name + "\">"
        + "</div>")
        .append("<div class=\"col-4\">"
                + "<p>Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад. </p>"
            + "</div>")
            .append("<div class=\"col-4\"></div>");

        //обробник події клацання мишкою на кнопку назад
        //запускаємо функцію listItems(); що буде відображати список фруктів у елементі div
        $("#back-to-list-items").click(function() {
            listItems();
            $("#list-items-menu-li").addClass("active");
            $("#item-detail-menu-li").removeClass("active");
        });
        // змінюємо клас active у меню
        $("#list-items-menu-li").removeClass("active");
        $("#item-detail-menu-li").addClass("active");
    });

    //обробник події клацання мишкою на меню
    //запускаємо функцію listItems(); що буде відображати список фруктів у елементі div
    $("#list-items-menu").click(function() {
        listItems();
        $("#list-items-menu-li").addClass("active");
        $("#item-detail-menu-li").removeClass("active");
    });

    $("#list-items-menu-home").click(function() {
        $("#list-items-menu-li").addClass("active");
        $("#item-detail-menu-li").removeClass("active");
        listItems();
    });

   */
}
$(document).ready(function(){
    $("#flip-reserve").click(function(){
        $("#panel-reserve").slideToggle("slow");
    });
});
$("date").datetimepicker();

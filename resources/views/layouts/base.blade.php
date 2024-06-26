<!DOCTYPE html>
<html lang="ru">

<head>
    @section('head')
        <title>ООО «Архангельские городские тепловые сети» </title>
        <meta name="description" content="Занимаемся обслуживанием тепловых сетей и передачей тепловой энергии на территории Северного и Исакогорского округов города Архангельска.">
  <meta name="keywords" content="тепловые сети, обслуживание сетей, чинить трубы, горячая вода">
        <meta charset="UTF-8">
        <meta name="format-detection" content="telephone=no">
        <!-- <style>body{opacity: 0;}</style> -->
        <link rel="stylesheet" href="/css/style.min.css?_v=20230524135203">
        <link rel="shortcut icon" href="/favicon.ico">
        <!-- <meta name="robots" content="noindex, nofollow"> -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap&_v=20230524135203"
            rel="stylesheet">
        <script
            src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js?_v=20230524135203"></script>
        <link rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css?_v=20230524135203"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @show
</head>

<body>
<div class="wrapper">
    @section('header')
        <header class="header">
        <div class="header__top">
            <div class="header__container">
                <span class="working-time">9:00- 17:00 с пн по пятницу</span>
                <ul class="social-icon">
                    <li><a href="https://vk.link/public210200045">
                            <svg width="32" height="19" viewBox="0 0 32 19" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_37_1599)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M26.2613 0.276247H29.6765C30.7059 0.276247 30.9211 0.808678 30.7059 1.52826H30.6871C30.2472 3.50901 26.093 9.35816 26.093 9.35816C25.728 9.93748 25.5876 10.2176 26.093 10.8718C26.2733 11.1211 26.6549 11.4961 27.0907 11.9244C27.5365 12.3626 28.0392 12.8566 28.4414 13.3291C29.9106 14.9735 31.0146 16.3658 31.3234 17.3188C31.6041 18.2812 31.1176 18.7671 30.1443 18.7671H26.7292C25.8153 18.7671 25.3542 18.255 24.3591 17.1499C23.9379 16.6822 23.4211 16.1083 22.7339 15.4221C20.7128 13.4695 19.8427 13.2171 19.3373 13.2171C18.6544 13.2171 18.4485 13.4133 18.4485 14.385V17.4403C18.4485 18.2812 18.1864 18.7671 16.0157 18.7671C12.404 18.7671 8.4274 16.5808 5.61097 12.535C1.38169 6.62052 0.221473 2.14507 0.221473 1.23868C0.221473 0.73406 0.417884 0.276247 1.39094 0.276247H4.80621C5.67652 0.276247 6.00405 0.659267 6.33148 1.60305C8.00638 6.46169 10.8134 10.7037 11.9736 10.7037C12.4133 10.7037 12.6099 10.5074 12.6099 9.40488V4.38741C12.5289 2.96198 12.0303 2.3456 11.661 1.889C11.4323 1.60633 11.2531 1.38481 11.2531 1.07045C11.2531 0.687338 11.5806 0.28566 12.1231 0.28566H17.4847C18.2052 0.28566 18.4485 0.668596 18.4485 1.53759V8.28379C18.4485 9.0032 18.776 9.25539 18.9912 9.25539C19.4215 9.25539 19.7865 9.0032 20.5819 8.20892C23.0427 5.46195 24.7736 1.23868 24.7736 1.23868C24.9982 0.73406 25.3913 0.276247 26.2613 0.276247Z"
                                          fill="#00426D"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_37_1599">
                                        <rect width="32" height="19" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a></li>
                    <li><a href="https://api.whatsapp.com/send?phone=79115948880&text=">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_37_1597)">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M15.2626 13.1911C15.5743 13.3064 17.2481 14.1222 17.5864 14.2951L17.5908 14.2906C17.6559 14.3234 17.7168 14.3531 17.7733 14.3805C18.0145 14.4979 18.1759 14.5763 18.2407 14.6984C18.3334 15.2429 18.2637 15.8022 18.0405 16.3077C17.7556 17.1014 16.3976 17.824 15.7433 17.9169C15.029 18.0398 14.2957 17.9943 13.602 17.7839C12.9448 17.5776 12.2984 17.3378 11.6656 17.0657C8.43885 15.6887 6.29693 12.5985 5.91571 12.0485C5.89196 12.0143 5.87503 11.9899 5.86511 11.9763C5.86074 11.9704 5.85563 11.9635 5.84985 11.9556C5.63344 11.6622 4.4762 10.0933 4.4762 8.46963C4.46699 7.94152 4.56828 7.41728 4.77371 6.93032C4.97911 6.44335 5.28409 6.00431 5.66924 5.64119C5.77947 5.51076 5.91529 5.40413 6.0684 5.32788C6.22152 5.25166 6.38867 5.20739 6.55959 5.19786C6.63646 5.19786 6.71179 5.19633 6.78593 5.19484C6.93079 5.1919 7.07114 5.18906 7.20952 5.19786C7.23826 5.19969 7.26845 5.19909 7.29982 5.19846C7.49687 5.19456 7.74156 5.18969 7.97967 5.77863C8.25566 6.46134 8.93676 8.12827 9.02579 8.29673C9.07868 8.38604 9.10878 8.48689 9.11344 8.59045C9.1181 8.69401 9.09717 8.79716 9.05251 8.89079C8.96689 9.09474 8.85302 9.28577 8.71417 9.45825C8.65238 9.52929 8.58942 9.60593 8.52697 9.68199C8.41399 9.81958 8.30259 9.95525 8.20223 10.0523C8.14471 10.0866 8.09484 10.1322 8.05576 10.1865C8.01665 10.2407 7.98917 10.3024 7.97498 10.3676C7.96079 10.4329 7.96019 10.5003 7.97326 10.5658C7.98631 10.6313 8.01274 10.6934 8.05089 10.7483C8.5646 11.6181 9.20354 12.4082 9.94728 13.0936C10.7535 13.8086 11.6784 14.3786 12.6806 14.7781C13.0189 14.951 13.2237 14.9244 13.415 14.694C13.4557 14.6453 13.5171 14.5729 13.5908 14.4859C13.8661 14.1615 14.3145 13.6331 14.497 13.364C14.7285 13.0226 14.9509 13.0758 15.2626 13.1911ZM5.59802 21.1667C7.34987 22.1973 9.34803 22.7395 11.3828 22.7358C13.889 22.7411 16.3263 21.9172 18.3113 20.3936C20.2971 18.8695 21.7181 16.7313 22.3511 14.3156C22.9844 11.8998 22.7935 9.34305 21.809 7.04692C20.8244 4.75081 19.1019 2.84551 16.9117 1.63031C14.7217 0.415143 12.1882 -0.0410477 9.70951 0.333456C7.23082 0.707934 4.94729 1.89186 3.21765 3.69925C1.48801 5.50662 0.410305 7.83501 0.15384 10.3186C-0.102626 12.8022 0.47668 15.3005 1.80075 17.4203L2.06787 17.8638L0.923783 22.0221L5.18402 20.9183L5.59802 21.1667ZM11.3828 22.7358C11.3836 22.7358 11.3844 22.7358 11.3852 22.7358H11.3807C11.3814 22.7358 11.3821 22.7358 11.3828 22.7358Z"
                                          fill="#00426D"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_37_1597">
                                        <rect width="22.915" height="22.915" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </a></li>
                </ul>
                <a href="tel:+7911 594 88 80" class="header__phone phone-left">+7911 594 88 80</a>
                <a href="tel:+7 (8182) 40 88 80" class="header__phone phone-right">+7 (8182) <span>40 88 80</span></a>
            </div>
        </div>
        <div class="header__bottom">
            <div class="header__container">
                <button type="button" class="menu__icon icon-menu"><span></span></button>
                <a href="/" class="header__logo"><img src="/img/logo.svg" data-src="/img/logo.svg" alt=""></a>
                <!--	<a href="" class="header__logo mobile"><img src="img/logomobile.svg" data-src="img/logomobile.svg" alt=""></a>-->

                <div class="header__inline">
                    <div class="header__menu menu">
                        <nav class="menu__body">
                            <ul class="menu__list">

                                <li class="menu__item"><a href="https://eclient.cr29.ru/?mod=counters" target="_blank" class="menu__link">Передача показаний</a></li>
                                <li class="menu__item"><a href="/tech" class="menu__link">Технологическое
                                        присоединение</a></li>
                                <li class="menu__item"><a href="/rates" class="menu__link">Тарифы</a></li>
                                <li class="menu__item"><a href="/news" class="menu__link">Новости</a></li>
                                <li class="menu__item"><a href="/vakancies" class="menu__link">Вакансии</a></li>
                                <li class="menu__item"><a href="/contacts" class="menu__link">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    </header>
    @show
    @section('main')
    @show
    @section('footer')
        <footer class="footer">
        <div class="footer__top">
            <div class="footer__container">
                <button type="button" class="menu__icon icon-menu"><span></span></button>
                <a href="/" class="footer__logo"><img src="/img/logo.svg" data-src="/img/logo.svg" alt=""></a>
                <!--	<a href="" class="footer__logo mobile"><img src="img/logomobile.svg" data-src="img/logomobile.svg" alt=""></a>-->

                <div class="footer__inline">
                    <div class="footer__menu menu">
                        <nav class="menu__body">
                            <ul class="menu__list">

                                <li class="menu__item"><a href="#" class="menu__link">Передача показаний</a></li>
                                <li class="menu__item"><a href="/tech" class="menu__link">Технологическое присоединение</a>
                                </li>
                                <li class="menu__item"><a href="/rates" class="menu__link">Тарифы</a></li>
                                <li class="menu__item"><a href="/news" class="menu__link">Новости</a></li>
                                <li class="menu__item"><a href="/vakancies" class="menu__link">Вакансии</a></li>
                                <li class="menu__item"><a href="/contacts" class="menu__link">Контакты</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
        <div class="footer__bottom">
            <div class="footer__container">
                <p class="footer__text text">©«ООО "Архангельские городские тепловые сети" 2023 »</p>
                <span class="footer__text text"><a href="#">Политика конфиденциальности</a></span>
            </div>

        </div>
    </footer>
    @show
    @section('scripts')
        <script
            src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js?_v=20230524135203"></script>
        <script>
            Fancybox.bind('[data-fancybox]', {
                // Custom options for all galleries
            });
        </script>
    @show
    @section('dialog')
        <div id="dialog-content" style="display:none;max-width:90%">
        <form id="jobform">
            <div class="aplication__columns">
                <div class="aplication__column">
                    <input autocomplete="off" type="text" id="fiojob" name="form[]" data-error="Ошибка" placeholder="Ф.И.О."
                           class="input">
                    <input autocomplete="off" type="phone" id="phonejob" name="form[]" data-error="Ошибка"
                           placeholder="Введите ваш телефон" class="input">

                    <input type="submit" value="Отправить"/>
                    <span class="personal">Нажимая кнопку отправить
							вы даете согласие на обработку персональных данных</span>
                </div>
                <div class="aplication__column">
                    <textarea rows="10" cols="45" id="messagejob" name="text" placeholder="Комментарий"></textarea>
                </div>
            </div>
        </form>
    </div>
    @show
</div>
<script src="/js/app.min.js?_v=20230524135203"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script>

    $('#contactForm').on('submit',function(event){
        event.preventDefault();

        let fio = $('#fio').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let message = $('#message').val();

        $.ajax({
            url: "/send-from-main-page",
            type:"POST",
            data:{
                "_token": "{{ csrf_token() }}",
                fio:fio,
                email:email,
                phone:phone,
                message:message,
            },
            success:function(response){
                if (response.success == 1) {
                    $( '#contactForm' ).each(function(){
                        this.reset();
                    });
                    $('#message').val("Сообщение успешно отправлено.")
                }
            },
        });

        $('#jobform').on('submit',function(event){
            event.preventDefault();

            let fio = $('#fiojob').val();
            let phone = $('#phonejob').val();
            let message = $('#messagejob').val();

            $.ajax({
                url: "/send-from-main-page",
                type:"POST",
                data:{
                    "_token": "{{ csrf_token() }}",
                    fio:fio,
                    phone:phone,
                    message:message,
                },
                success:function(response){
                    if (response.success == 1) {
                        $( '#jobform' ).each(function(){
                            this.reset();
                        });
                        $('#messagejob').val("Сообщение успешно отправлено.")
                    }
                },
            });
        });
    });
</script>
</body>

</html>

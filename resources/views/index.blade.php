@extends('layouts.base')
@section('main')
    <main class="page">
        <section class="about">
            <div class="about__container container">
                <h2 class="about__title title">ООО «Архангельские городские&nbsp;тепловые&nbsp;сети»</h2>
                <p class="about__text text">Занимаемся обслуживанием тепловых сетей и передачей тепловой энергии
                    на территории Северного и Исакогорского округов города Архангельска.
                </p>
                <picture><source srcset="img/aboutlogo.webp" type="image/webp"><img src="img/aboutlogo.png" alt="" class="about__img"></picture>
            </div>
        </section>
        <section class="aplication">
            <div class="aplication__wrapper">
                <div class="aplication__container container">
                    <h2 class="aplication__title title">Прием обращений</h2>
                    <p class="aplication__text text">Нажмите, чтобы оставить заявку</p>
                    <form id="contactForm" method="post"  enctype="multipart/form-data">
                    @csrf 
                        <input type="hidden" id="forms" value="Письмо с главной страницы" name="forms">
                        <div class="aplication__columns">
                            <div class="aplication__column">
                                <input autocomplete="off" type="text" name="fio" id="fio" required="required" data-error="Ошибка" placeholder="Ф.И.О." class="input">
                                <input autocomplete="off" type="phone" name="phone" id="phone" required="required" data-error="Ошибка" placeholder="Введите ваш телефон" class="input">
                                <input autocomplete="off" type="email" name="email" id="email" required="required" data-error="Ошибка" placeholder="Введите ваш адрес" class="input">
                                <input type="submit" id="submit" value="Отправить" />
                                <span class="personal">Нажимая кнопку отправить
										вы даете согласие на обработку персональных данных</span>
                            </div>
                            <div class="aplication__column">
                                <textarea id="message1" rows="10" cols="45" name="message1" placeholder="Опишите вопрос или пожелание"></textarea>
                                
                                <div onclick="document.querySelector('input[type=file]').click()" style="color: #fff;font-size: 14px;cursor: pointer;text-align: right;margin-top: 5px;"><img src="img/mail-vector.png" style=" vertical-align: sub; margin-right: 5px; ">Прикрепить файл</div>
                                <input type="file" id="attachment" name="attachment" style="display:none">
      
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <section class="map">
            <div class="map__container container">
                <h2 class="map__title title">Территория обслуживания&nbsp;сетей</h2>
                <p class="map__text text">Предоставляем услуги по горячему водоснабжению потребителям жилых домов по следующим
                    адресам:</p>
                <div data-spollers class="spollers">
                    <div class="spollers__item loop__item">
                        <button type="button" data-spoller class="spollers__title">СПИСОК ОБСЛУЖИВАЕМЫХ ДОМОВ</button>
                        <div class="spollers__body">
                            <h3>Исакагорский округ</h3>
                            <ul class="list-hause">
                                <li>ул. Клепача д. 5, 7, 9, 11</li>
                                <li>ул. Магистральная д. 40, 41, 42, 43</li>
                                <li>Мул. Локомотивная д. 31</li>
                                <li>Лахтинское шоссе д. 18, 19, 20, 21, 22, 23, 24</li>
                            </ul>
                            <h3>Северный округ</h3>
                            <ul>
                            <li>40 лет Великой Победы, д.2, 3, 4, 5</li>
                            <li>Добролюбова д. 15, 17, 18, 18\1, 20, 22, 24</li>
                            <li>ул. Ильича д. 2, 2\1, 4, 12</li>
                                <li>ул. Индустриальная д. 12, 14, 16</li>
                                <li>ул. Каботажная д. 5, 7, 9, 11</li>
                                <li>ул. Кутузова д. 1, 3, 7, 9, 11</li>
                                <li>ул. Малиновского д.2</li>
                                <li>ул. Мусинского д. 9, 11</li>
                                <li>ул. Партизанская д. 3, 6, 12, 12\1, 12\2, 28, 28\1, 28\2</li>
                                <li>ул. Репина д. 7, 9, 11, 11\1, 14, 15, 15\1, 16, 16\1, 17, 18, 20, 21, 22, 24</li>
                                <li>ул. Титова д. 6, 9, 13, 15, 15\1, 20, 20\1</li>
                                <li>ул. Ударников д. 7, 8, 10, 11, 12, 15, 15\1, 16, 17, 18, 26</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <picture><source srcset="img/map.webp" type="image/webp"><img src="img/map.jpg" alt="" class="map__img"></picture>
            </div>
        </section>
        <section class="tech">
            <div class="tech__container container">
                <h2 class="tech__title title">Технологическое присоединение&nbsp;к&nbsp;сетям</h2>
                <a href="tech" class="arrow-right">Смотреть все<svg width="93" height="16" viewBox="0 0 93 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.7071 8.70711C93.0976 8.31659 93.0976 7.68342 92.7071 7.2929L86.3431 0.928935C85.9526 0.538411 85.3195 0.538411 84.9289 0.928935C84.5384 1.31946 84.5384 1.95262 84.9289 2.34315L90.5858 8L84.9289 13.6569C84.5384 14.0474 84.5384 14.6805 84.9289 15.0711C85.3195 15.4616 85.9526 15.4616 86.3431 15.0711L92.7071 8.70711ZM-3.50357e-08 9L92 9L92 7L3.50357e-08 7L-3.50357e-08 9Z" fill="#08446D" />
                    </svg>
                </a>
                <div class="tech__items">
                    @foreach($docs as $doc)
                        <div class="tech__loop loop__item">
                            <button type="button" data-spoller class="spollers__title">{{ $doc->title }}</button>
                            <a href="storage/{{ $doc->file }}" class="link" target="_blank"><span class="file-link">Скачать</span><span class="file-ext">{{ $doc->extension }}</span></a>
                        </div>
                    @endforeach

                </div>
            </div>
        </section>
        <section class="rate">
            <div class="rate__container container">
                <h2 class="rate__title title">Тарифы</h2>
                <a href="rates" class="arrow-right">Смотреть все<svg width="93" height="16" viewBox="0 0 93 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.7071 8.70711C93.0976 8.31659 93.0976 7.68342 92.7071 7.2929L86.3431 0.928935C85.9526 0.538411 85.3195 0.538411 84.9289 0.928935C84.5384 1.31946 84.5384 1.95262 84.9289 2.34315L90.5858 8L84.9289 13.6569C84.5384 14.0474 84.5384 14.6805 84.9289 15.0711C85.3195 15.4616 85.9526 15.4616 86.3431 15.0711L92.7071 8.70711ZM-3.50357e-08 9L92 9L92 7L3.50357e-08 7L-3.50357e-08 9Z" fill="#08446D" />
                    </svg>
                </a>
                <div class="rate__items">
                    @foreach($rates as $rate)
                        <div class="rate__loop loop__item">
                            <button type="button" data-spoller class="spollers__title">{{ $rate->title }}</button>
                            <a href="storage/{{ $rate->file }}" class="link" target="_blank"><span class="file-link">Скачать</span><span class="file-ext">{{ $rate->extension }}</span></a>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>
        <section class="news">
            <div class="news__container container">
                <h2 class="news__title title">Новости</h2>
                <a href="news" class="arrow-right">Все новости<svg width="93" height="16" viewBox="0 0 93 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.7071 8.70711C93.0976 8.31659 93.0976 7.68342 92.7071 7.2929L86.3431 0.928935C85.9526 0.538411 85.3195 0.538411 84.9289 0.928935C84.5384 1.31946 84.5384 1.95262 84.9289 2.34315L90.5858 8L84.9289 13.6569C84.5384 14.0474 84.5384 14.6805 84.9289 15.0711C85.3195 15.4616 85.9526 15.4616 86.3431 15.0711L92.7071 8.70711ZM-3.50357e-08 9L92 9L92 7L3.50357e-08 7L-3.50357e-08 9Z" fill="#08446D" />
                    </svg>
                </a>
                <div class="news__items">
                    @foreach($news as $item)
                        <div class="news__item" onclick="location.href='/single/{{ $item->id }}'" style="background: url(storage/{{ $item->image }}) no-repeat center center; background-size: cover;">
                            <div class="news__item-container">
                                <a href="{{ route('single', ['id' => $item->id]) }}"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="10" cy="10" r="10" fill="#00519E" />
                                        <path d="M12.8821 10.4988L11.6424 10.9164C11.3002 11.0303 11.0264 11.296 10.9123 11.6452L10.494 12.8827C10.1366 13.9532 8.63073 13.9305 8.2961 12.86L6.88911 8.34261C6.61532 7.44674 7.4443 6.61159 8.33412 6.8925L12.8669 8.29706C13.9316 8.63112 13.9469 10.142 12.8821 10.4988Z" fill="#F4F6FB" />
                                    </svg>
                                    <span>Читать полностью</span></a>
                                <h3 class="news__item-title">{{ $item->title }}</h3>
                                <p class="news__item-text">{{ $item->intro }}</p>
                            </div>
                        </div>
                    @endforeach

                </div>
            </div>
        </section>
        <section class="faq">
            <div class="faq__container container">
                <h2 class="faq__title title">Вопросы и ответы</h2>
               
                <div data-spollers class="faq__spollers spollers">
                    @php
                        $index=1;
                    @endphp
                    @foreach($faqs as $faq)

                        <div class="faq__item loop__item">
                            <span>{{ $index++ }}</span>
                            <button type="button" data-spoller class="spollers__title">{{ $faq->title }}</button>
                            <div class="spollers__body">
                                <p>{{ $faq->description }}</p>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>
    </main>
@endsection

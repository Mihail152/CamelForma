@extends('layouts.base')
@section('main')
    <main class="page">
        <section class="news">
            <div class="news__container container">
                <h2 class="news__title title">Новости</h2>
                <div class="news__items">
                    @foreach($news as $item)
                        <div class="news__item" style="background: url(storage/{{ $item->image }}) no-repeat center center; background-size: cover;">
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

    </main>
@endsection

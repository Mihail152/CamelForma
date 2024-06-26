@extends('layouts.base')
@section('main')
    <main class="page single">

        <section class="news">
            <div class="news__container container">
                <h2 class="news__title title">{{ $item->title }}</h2>
                <a href="/news" class="arrow-right">Все новости<svg width="93" height="16" viewBox="0 0 93 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.7071 8.70711C93.0976 8.31659 93.0976 7.68342 92.7071 7.2929L86.3431 0.928935C85.9526 0.538411 85.3195 0.538411 84.9289 0.928935C84.5384 1.31946 84.5384 1.95262 84.9289 2.34315L90.5858 8L84.9289 13.6569C84.5384 14.0474 84.5384 14.6805 84.9289 15.0711C85.3195 15.4616 85.9526 15.4616 86.3431 15.0711L92.7071 8.70711ZM-3.50357e-08 9L92 9L92 7L3.50357e-08 7L-3.50357e-08 9Z" fill="#08446D" />
                    </svg>
                </a>
                <div class="news__content">
                    {!! $item->description !!}
                </div>
            </div>
        </section>

    </main>

@endsection

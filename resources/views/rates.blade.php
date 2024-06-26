@extends('layouts.base')
@section('main')
    <main class="page">
        <section class="rate">
            <div class="rate__container container">
                <h2 class="rate__title title">Тарифы</h2>
                @foreach($rates as $item)
                    <div class="rate__items">
                        <div class="rate__loop loop__item">
                            <button type="button" data-spoller class="spollers__title">{{ $item->title }}</button>
                            <a href="storage/{{ $item->file }}" class="link"><span class="file-link" target="_blank">Скачать</span><span class="file-ext">{{ $item->extension }}</span></a>
                        </div>
                    </div>
                @endforeach
            </div>
        </section>
    </main>
@endsection

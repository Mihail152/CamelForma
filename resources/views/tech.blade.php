@extends('layouts.base')
@section('main')
    <main class="page">
        <section class="tech">
            <div class="tech__container container">
                <h2 class="tech__title title">Технологическое присоединение&nbsp;к&nbsp;сетям</h2>
                @foreach($docs as $doc)
                    <div class="tech__items">
                        <div class="tech__loop loop__item">
                            <button type="button" data-spoller class="spollers__title">{{ $doc->title }}</button>
                            <a href="storage/{{ $doc->file }}" class="link"><span class="file-link" target="_blank">Скачать</span><span class="file-ext">{{ $doc->extension }}</span></a>
                        </div>
                    </div>
                @endforeach

            </div>
        </section>

    </main>
@endsection

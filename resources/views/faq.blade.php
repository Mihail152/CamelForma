@extends('layouts.base')
@section('main')
    <main class="page">
        <section class="faq">
            <div class="faq__container container">
                <h2 class="faq__title title">Вопросы и ответы</h2>

                <div data-spollers class="faq__spollers spollers">
                    @php
                        $index=1;
                    @endphp
                    @foreach($faqs as $faq)
                        <div class="faq__item loop__item">
                            <span>{{ $index }}</span>
                            <button type="button" data-spoller class="spollers__title">{{ $faq->title }}</button>
                            <div class="spollers__body">
                                <p>{{ $faq->description }}</p>
                            </div>
                        </div>
                        @php
                            $index++;
                        @endphp
                    @endforeach

                </div>
            </div>
        </section>
    </main>
@endsection

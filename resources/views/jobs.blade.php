@extends('layouts.base')
@section('main')
    <main class="page">
        <section class="job">
            <div class="job__container container">
                <h2 class="job__title title">Вакансии</h2>

                <div class="job__items">
                    @foreach($jobs as $job)
                        <div class="job__item" style="background: url(storage/{{ $job->image }}) no-repeat center center; background-size: cover;">
                            <div class="job__item-container">
                                <h3 class="job__item-title">{{ $job->title }}</h3>
                                <a href="#" data-fancybox data-src="#dialog-content">Откликнуться</a>

                                <span class="job__price">ЗП от {{ $job->price_from }} - {{ $job->price_to }} ₽</span>
                                <p class="job__item-text">
                                    {!! $job->description !!}
                                </p>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </section>
    </main>
@endsection

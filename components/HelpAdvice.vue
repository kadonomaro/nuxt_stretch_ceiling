<script>
    export default {
        name: "HelpAdvice",
    };
</script>

<template functional>
    <section id="advice" class="help-advice typography box-shadow">
        <h2 class="section-title">Советы по выбору</h2>
        <div class="help-advice__text">
            <p>
                Самый простой способ получить информацию по выбору полотна,
                освещению, особенностям монтажа, стоимости натяжного потолка —
                Бесплатный вызов замерщика
                <a href="tel:79111111111">+7 (911) 111 11-11</a>
            </p>
        </div>

        <div class="help-advice__text">
            <h3>Стоимость с установкой</h3>
            <p>
                Самый быстрый и простой способ узнать примерную стоимость
                натяжного потолка это воспользоваться нашим калькулятором
            </p>
        </div>

        <div class="help-advice__text">
            <h3>Выбор освещения</h3>
            <p>
                Мы можем предложить Вам точечные светильники, которые
                устанавливают отдельно или вместе с люстрой в любом месте
                натяжного потолка. Для декоративной подсветки отдельно
                используют светодиодную ленту или возможно сделать подсветку
                полотна изнутри.
            </p>
        </div>

        <div class="help-advice__text">
            <h3>Выбор количества уровней</h3>
            <p>
                Натяжной потолок можно сделать в один уровень, а можно в
                несколько уровней. На многоуровневом натяжном потолке есть
                возможность комбинировать цвета и фактуры, схемы освещения,
                создавать криволинейные траектории. Сложность конструкции влияет
                на величину отступа натяжного потолка от базового.
            </p>
        </div>

        <div class="help-advice__text">
            <h3>Плюсы и минусы</h3>
            <h4>Плюсы</h4>
            <ul>
                <li>
                    Широкий выбор полотен доступно более 200 цветов и несколько
                    десятков фактур.
                </li>
                <li>
                    Идеальная поверхность натяжной потолок скрывает
                    электропроводку, коммуникации, неровности и дефекты базового
                    потолка.
                </li>
                <li>
                    Возможность создать оригинальное световое оформление,
                    установив источники света в любом месте натяжного потолка.
                </li>
                <li>
                    Быстрый монтаж натяжного потолка на любой стадии ремонта,
                    всего за несколько часов.
                </li>
                <li>
                    Возможность использовать в любых отапливаемых помещениях с
                    температурным режимом от 0°С до 50°С.
                </li>
                <li>
                    Идеальный вариант для бассейнов, саун, ванных. Потолки
                    устойчивы к влаге, конденсату и пару.
                </li>
                <li>
                    Полотно не впитывает запахов и легко моется отличное решение
                    для кухонных зон.
                </li>
                <li>
                    Дополнительная защита от затопления. После слива воды
                    потолок можно вернуть в первоначальное состояние.
                </li>
                <li>
                    Пластичность и прочность пленки ПВХ, по результатам
                    испытаний, выдерживает до 150 кг/м2. Не трескается и не
                    деформируется при усадке дома.
                </li>
                <li>
                    Полотно неприхотливо в эксплуатации, не требует особого
                    ухода, достаточно несколько раз в год протирать пыль.
                </li>
                <li>
                    Легко демонтируется и при повторном монтаже сохраняет
                    первоначальный вид и качество.
                </li>
                <li>
                    Долговечность. Срок службы 50 лет. Потолок не изменит цвет и
                    не провиснет. Гарантия до 10 лет
                </li>
            </ul>

            <h4>Минусы</h4>
            <ul>
                <li>
                    Боязнь острых предметов. Полотно можно проколоть или
                    порезать острым предметом. Но многие повреждения легко
                    устранить заплаткой, установкой светильника или диффузора,
                    или частично перекроить полотно
                </li>
                <li>
                    Стыковочный шов. Присутствие стыковочных швов в области
                    соединения полотен если они имеют ширину меньшую, чем ширина
                    комнаты. Появление бесшовных натяжных потолков нового
                    поколения устранило данный недостаток
                </li>
                <li>
                    Уменьшение высоты потолка отступ натяжного потолка от
                    базового может составлять от 5 до 15 см. Это зависит от
                    неровностей базового потолка, проложенных коммуникаций,
                    закладных под светильники, люстры и т.д.
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
    .help-advice {
        padding: 16px;
        background-color: #fff;
        @include bp($bp-desktop-sm) {
            padding: 24px;
        }
    }

    .help-advice__text {
        &:not(:last-child) {
            margin-bottom: 12px;
            @include bp($bp-desktop-sm) {
                margin-bottom: 24px;
            }
        }
    }
</style>

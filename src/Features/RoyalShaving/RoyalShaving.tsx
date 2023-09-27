import { ReactElement } from 'react';
import Image from 'next/image';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import { LinkOptions } from '../../types/link';
import { ServicePromo } from '../../components/ServicePromo';
import { ServiceAboutSection } from '../../components/ServiceAboutSection';
import { StageHeader } from './components/StageHeader/StageHeader';
import { StageSection } from './components/StageSection';
import { StageContent } from './components/StageContent';

interface RoyalShavingProps {
  mainNavList: LinkOptions;
}

export const RoyalShaving = ({ mainNavList }: RoyalShavingProps): ReactElement => {
  return (
    <>
      <div
        className="flex
        flex-col
        justify-between
        bg-[url('/images/royal/royal-d.jpg')]
        bg-no-repeat
        bg-[top_-8rem_center]
        bg-[length:100%,_cover]
        relative
        after:bg-[url('/images/bg/white-grunge.svg')]
        after:z-10
        after:h-12
        after:bg-repeat-x
        after:bg-[top_1rem_center]
        after:bg-[length:50rem]
        after:left-0
        after:w-full"
      >
        <Layout>
          <Header mainNavList={mainNavList} />
          <ServicePromo titleTop="Королевское" titleBottom="бритьё" iconVariant="shavette" />
        </Layout>
      </div>
      <main>
        <ServiceAboutSection
          aboutSectionSrc="/images/royal/tnh.png"
          aboutSectionAlt="Королевское бритьё в Oldboy Barbershop"
          headline="Бритьё, достойное королей"
          decorationVariant="razor"
        >
          <p
            className="
            service__subtitle
            font-button_font
            text-base 
            font-semibold 
            leading-loose 
            tracking-wider 
            text-orange-bg 
            uppercase"
          >
            Термин «королевское бритьё» непосредственно связан с именем Уильяма Труфита, открывшего
            свою первую цирюльню в 1805-м году в Лондоне, и впоследствии ставшего основателем марки
            &ldquo;Truefitt & Hill&rdquo;. Его заведение заслужило высочайшую репутацию среди
            английских аристократов и получило признание монархов Великобритании — именно продукция
            Труфита получила эксклюзивные привилегии королевского двора. Тогда же были заложены
            основы этой статусной процедуры.
          </p>
          <p className="service__text">
            Что же необходимо для того, чтобы бритьё стало «королевским»?
          </p>
          <p className="service__text">
            Во-первых, правильная опасная бритва и барбер, умеющий с ней обращаться. Наши опытные
            мастера прошли специальное обучение и повышение квалификации по стандартам и правилам
            &ldquo;Truefitt &amp; Hill&rdquo;.
          </p>
          <p className="service__text">
            Во-вторых, мужская косметика премиум-класса от &ldquo;Truefitt & Hill&rdquo;. Это
            по-настоящему элитные средства для бритья и ухода за кожей. Масла, мыло и бальзамы
            высочайшего качества на основе проверенных за два века рецептов, и с применением самых
            современных технологий.
          </p>
          <p className="service__text">
            Королевское бритьё — это настоящий ритуал, состоящий из нескольких этапов:
          </p>
        </ServiceAboutSection>
        <StageSection variant="row">
          <StageHeader
            headerTitleTop="1. Нанесение"
            headerTitleBottom="масла"
            headerPosition="headerLeft"
            titlePosition="titleLeft"
            imagePosition="imageLeft"
          >
            <Image
              src="/images/royal/royal1.jpg"
              alt="Королевское Бритьё в Oldboy Barbershop: Нанесение масла"
              sizes="(width:100%)"
              width="1240"
              height="666"
              className="w-full object-cover"
              role="img"
            />
          </StageHeader>
          <StageContent
            contentPosition="contentRight"
            headlinePosition="headlineRight"
            stageHeadline="Первый этап: нанесение масла"
          >
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              В самом начале барбер наносит на кожу подготавливающее к бритью масло &ldquo;Truefitt
              &amp; Hill&rdquo;, которое смягчает волосы, что обеспечивает комфортное и безопасное
              бритьё, а впоследствии предотвращает появление вросших волос.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-orange-bg font-bold">
              Остающаяся на коже тонкая пленка масла обладает гидрофильными свойствами
              и&nbsp;способствует плавному скольжению лезвия опасной бритвы.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              Кроме того, активные компоненты масел (среди которых масло авокадо, семян сафлора,
              кокоса, цитрусовых, экстракты огурца и алоэ) улучшают состояние кожи: выравнивают
              текстуру и&nbsp;уменьшают чувствительность за счет усиленного увлажнения клеток
              эпидермиса. Исчезает ощущение стянутости и сухости. Масло &ldquo;Truefitt &amp;
              Hill&rdquo; обладает обеззараживающими и&nbsp;антиокислительными свойствами.
            </p>
          </StageContent>
        </StageSection>
        <StageSection variant="rowReverse">
          <StageHeader
            headerTitleTop="2. Распаривание"
            headerTitleBottom="кожи"
            headerPosition="headerRight"
            titlePosition="titleRight"
            imagePosition="imageRight"
          >
            <Image
              src="/images/royal/royal2.jpg"
              alt="Королевское Бритьё в Oldboy Barbershop: Распаривание кожи"
              sizes="(width:100%)"
              width="1240"
              height="666"
              className="w-full object-cover"
              role="img"
            />
          </StageHeader>
          <StageContent
            contentPosition="contentLeft"
            headlinePosition="headlineLeft"
            stageHeadline="Второй этап: распаривание кожи полотенцем"
          >
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              В специальном паровом шкафу ждут своего времени разогретые махровые полотенца.
              Идеально подобранная температура и влажность не нанесут вашей коже ожогов или
              дискомфорта, но&nbsp;подготовят бороду к бритью.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              Кожа очищается, раскрываются поры, щетина размягчается. Приливающая кровь приподнимает
              волоски, которые под горячим компрессом становятся мягче и прямее, благодаря чему
              бритьё будет чище и безопаснее. Распаривание значительно снижает уровень раздражения
              и&nbsp;количество микропорезов.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-orange-bg font-bold">
              В работе используются два полотенца: спустя некоторое время барбер меняет остывающий
              компресс на новый.
            </p>
          </StageContent>
        </StageSection>
        <StageSection variant="row">
          <StageHeader
            headerTitleTop="3. Нанесение"
            headerTitleBottom="пены"
            headerPosition="headerLeft"
            titlePosition="titleLeft"
            imagePosition="imageLeft"
          >
            <Image
              src="/images/royal/royal3.jpg"
              alt="Королевское Бритьё в Oldboy Barbershop: Нанесение пены"
              sizes="(width:100%)"
              width="1240"
              height="666"
              className="w-full object-cover"
              role="img"
            />
          </StageHeader>
          <StageContent
            contentPosition="contentRight"
            headlinePosition="headlineRight"
            stageHeadline="Третий этап: нанесение пены"
          >
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              На следующем этапе мастер использует свежеприготовленную пену, получаемую
              из&nbsp;специального мыла на основе натуральных компонентов высочайшего качества.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-orange-bg font-bold">
              Для взбивания пены и её нанесения на лицо применяется особая чаша и помазок
              из&nbsp;уникальной шерсти барсука класса &ldquo;Silvertip&rdquo;. Её нежнейшие
              волоски, собираемые с&nbsp;небольшого участка в области шеи животного, отлично
              удерживают влагу и создают пену необходимой консистенции.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              Барбер покрывает обриваемые участки кожи теплой пеной.
            </p>
          </StageContent>
        </StageSection>
        <StageSection variant="rowReverse">
          <StageHeader
            headerTitleTop="4. Бритьё"
            headerTitleBottom="опасной бритвой"
            headerPosition="headerRight"
            titlePosition="titleRight"
            imagePosition="imageRight"
          >
            <Image
              src="/images/royal/royal4.jpg"
              alt="Королевское Бритьё в Oldboy Barbershop: Бритье опасной бритвой"
              sizes="(width:100%)"
              width="1240"
              height="666"
              className="w-full object-cover"
              role="img"
            />
          </StageHeader>
          <StageContent
            contentPosition="contentLeft"
            headlinePosition="headlineLeft"
            stageHeadline="Четвёртый этап: бритьё опасной бритвой"
          >
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              Теперь можно приступать к самой ответственной части всей процедуры. Бритьё опасной
              бритвой требует немалого опыта, и мы гордимся, что наши специалисты достигли в этом
              деле настоящего мастерства.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-orange-bg font-bold">
              Все инструменты обязательно проходят тщательнейшую обработку и обеззараживание,
              а&nbsp;сами лезвия, естественно, одноразовые.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              Барбер натягивает кожу там, где это необходимо и именно с тем усилием, которое
              требуется на&nbsp;каждом участке лица. Максимально острое лезвие бритвы, подчиняясь
              ювелирным движениям руки мастера, под необходимым углом скользит по коже, гладко и
              начисто срезая волоски.
            </p>
          </StageContent>
        </StageSection>
        <StageSection variant="row">
          <StageHeader
            headerTitleTop="5. Холодный"
            headerTitleBottom="компресс"
            headerPosition="headerLeft"
            titlePosition="titleLeft"
            imagePosition="imageLeft"
          >
            <Image
              src="/images/royal/royal5.jpg"
              alt="Королевское Бритьё в Oldboy Barbershop: Холодный компресс"
              sizes="(width:100%)"
              width="1240"
              height="666"
              className="w-full object-cover"
              role="img"
            />
          </StageHeader>
          <StageContent
            contentPosition="contentRight"
            headlinePosition="headlineRight"
            stageHeadline="Пятый этап: холодный компресс"
          >
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              После бритья кожу любого типа следует успокоить. Для этого барбер накладывает на лицо
              холодный компресс, который стягивает поры и снимает раздражение. Никаких кремов или
              бальзамов с содержанием спирта. Поры сужены, кожа обеззаражена, никакого дискомфорта.
            </p>
          </StageContent>
        </StageSection>
        <StageSection variant="rowReverse">
          <StageHeader
            headerTitleTop="6. Средство после бритья"
            headerTitleBottom=""
            headerPosition="headerRight"
            titlePosition="titleRight"
            imagePosition="imageRight"
          >
            <Image
              src="/images/royal/royal6.jpg"
              alt="Королевское Бритьё в Oldboy Barbershop: Нанесение средства после бритья"
              sizes="(width:100%)"
              width="1240"
              height="666"
              className="w-full object-cover"
              role="img"
            />
          </StageHeader>
          <StageContent
            contentPosition="contentLeft"
            headlinePosition="headlineLeft"
            stageHeadline="Шестой этап: нанесение средства после бритья"
          >
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              После снятия охлаждающего компресса, барбер легкими, массирующими движениями наносит
              на обритые участки специальный бальзам от &ldquo;Truefitt &amp; Hill&rdquo; на основе
              лечебного экстракта алоэ и аллантоина, повышающего регенерацию клеток кожи.
            </p>
          </StageContent>
        </StageSection>
        <StageSection variant="row">
          <StageHeader
            headerTitleTop="7. Нанесение"
            headerTitleBottom="одеколона"
            headerPosition="headerLeft"
            titlePosition="titleLeft"
            imagePosition="imageLeft"
          >
            <Image
              src="/images/royal/royal7.jpg"
              alt="Королевское Бритьё в Oldboy Barbershop: Нанесение одеколона"
              sizes="(width:100%)"
              width="1240"
              height="666"
              className="w-full object-cover"
              role="img"
            />
          </StageHeader>
          <StageContent
            contentPosition="contentRight"
            headlinePosition="headlineRight"
            stageHeadline="Седьмой этап: нанесение одеколона"
          >
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              Финальным штрихом в процедуре королевского бритья является одеколон. И он заслуживает
              отдельного упоминания.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-orange-bg font-bold">
              Эксклюзивные ароматы от &ldquo;Truefitt &amp; Hill&rdquo; — яркий пример элегантной
              мужественности.
            </p>
            <p className="text-lg font-button_font leading-[1.75] text-header-bg">
              Идеально подобранные ноты и высочайшее качество компонентов делают одеколоны этого
              британского бренда настоящим украшением вашего обновленного образа.
            </p>
          </StageContent>
        </StageSection>
      </main>
    </>
  );
};

export default RoyalShaving;

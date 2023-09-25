'use client';

import { Footer } from '@/components/Footer';
import Image from 'next/image';
import { Header } from '../../../components/Header';

export default async function Beard(): Promise<Object> {
  const [barbershopsInfoResponse, footerListsResponse] = await Promise.all([
    fetch('http://localhost:3000/api/barbershopsInfo'),
    fetch('http://localhost:3000/api/footerLists'),
  ]);
  const [
    { branchesTotal, countriesTotal, capitalsTotal },
    { footerMainList, footerServicesList, footerInfoList },
  ] = await Promise.all([barbershopsInfoResponse.json(), footerListsResponse.json()]);

  const defaultTextClassName = 'leading-8 my-5 text-lg';
  const defaultImageClassName = 'my-8 max-h-[32rem] object-cover';

  return (
    <div>
      <header
        className="
        bg-black
        py-8
        bg-[url('/images/beard/beard-bg.jpg')]
        bg-no-repeat
        bg-cover
        bg-[position:center_bottom,_left_bottom_0.3rem]
        after:bg-[url('/images/bg/white-grunge.svg')]
        after:bg-repeat-x
        after:w-full
        after:h-20
        after:absolute
        after:bg-[length:400px]
        after:bottom-[10]
        
        "
      >
        <div className="px-12">
          <Header mainNavList={[]} />

          <div className="flex pb-20">
            <div>
              <p className=" text-transform: skew-y-15 bg-orange-title h-1 mt-12 w-10/12 2xl:w-full 2xl:mb-2" />
              <div className="text-transform: skew-y-15 w-80 mb-3 leading-[4rem] 2xl:leading-[4.7rem]">
                <p className="text-white text-6xl font-rex 2xl:text-7xl">Усы </p>
                <p className="text-white text-6xl font-rex 2xl:text-7xl">и борода</p>
              </div>
              <p className=" text-transform: skew-y-15 bg-orange-title h-1 mb-2 w-10/12 2xl:w-full" />
              <p className="text-white text-lg font-rex text-transform: skew-y-15 ">
                Oldboy Barbershop <br /> только качество
              </p>
            </div>
            <div className="text-transform: skew-y-15 absolute left-80 top-50 2xl:left-96">
              <Image
                src="/images/beard/scissors-gold.svg"
                alt="scissors"
                width={130}
                height={100}
              />
            </div>
          </div>
        </div>
      </header>
      <main className="p-10 mt-0 mx-auto mb-14 max-w-screen-2xl lg:flex">
        <div className="relative pr-10 mb-12 lg:mb-0">
          <div className="w-60 lg:w-80">
            <Image
              src="/images/beard/beard-image1.jpeg"
              alt="Image"
              width={100}
              height={0}
              className="w-full rounded "
            />
            <Image
              src="/images/beard/scissors-decor.png"
              alt="scissors"
              width={100}
              height={100}
              className="w-96 absolute -top-14 left-20 lg:top-32 lg:-left-10"
            />
          </div>
        </div>
        <div>
          <h2 className="font-rex text-4xl">Стрижка усов и бороды, оформление</h2>
          <p className={defaultTextClassName}>
            Борода и усы для мужчины важная особенность издревле. И если вы думаете, что «отпустить
            бороду» или «отрастить усы» — значит просто дать волосам на лице расти как они хотят, то
            вы сильно ошибаетесь. За ними нужен особый уход как ежедневный, так и профессиональный.
          </p>
          <Image
            src="/images/beard/beard-image2.jpeg"
            width={1200}
            height={400}
            alt="Picture of the author"
            className={defaultImageClassName}
          />
          <p className={defaultTextClassName}>
            Специалисты рекомендуют мужчинам посещать барбершоп хотя бы раз в месяц для поддержания
            бороды и усов в ухоженном, здоровом виде как внешне, так и внутренне. Мастера OldBoy
            предлагают Вам услугу модной стрижки бороды и усов. Мало просто подстричь волосы на лице
            — барберы с большим опытом и оригинальными чувством стиля подчеркнут их индивидуальную
            форму, придавая опрятный и аккуратный вид с помощью ножниц, опасной бритвы, машинок и
            триммеров. А также обязательно проконсультируют по вопросам ухода за бородой и укладки
            усов уже в домашних условиях, учитывая все особенности вашей структуры волос.
          </p>
          <Image
            src="/images/beard/beard-image3.jpeg"
            width={1200}
            height={400}
            alt="Picture of the author"
            className={defaultImageClassName}
          />
          <p className={defaultTextClassName}>
            OldBoy Barbershop стал узнаваем и очень популярен среди носителей бороды, начиная с
            самого открытия в 2014 году. По сей день OldBoy считается одним из самых востребованных
            в мире среди парней и мужчин, которые ухаживают за собой и своими волосами.
          </p>
          <Image
            src="/images/beard/beard-image4.jpeg"
            width={1200}
            height={400}
            alt="Picture of the author"
            className={defaultImageClassName}
          />
          <p className={defaultTextClassName}>
            В сети барбершопов OldBoy царит неповторимая атмосфера брутальности и мужества;
            обратившись однажды за стрижкой бороды или усов, клиенты возвращаются вновь и пробуют
            другие процедуры по уходу за лицом и волосами. Ведь помимо обычной коррекции или стрижки
            наши барберы подбирают вам индивидуальный, неповторимый стиль. Это зависит от
            профессионализма: выбор правильной длины бороды и усов, аккуратности оформления формы и
            контура — все эти аспекты наши мастера подберут индивидуально для вашего лица. В случае
            необходимости они сформируют границы роста волос на лице при помощи специальных
            инструментов.
          </p>
          <h2 className="font-rex text-4xl">Стоимость услуги</h2>

          <Image
            src="/images/beard/beard-image5.jpeg"
            width={1200}
            height={400}
            alt="Picture of the author"
            className={defaultImageClassName}
          />
          <p className={defaultTextClassName}>
            Цены на услуги стрижки бороды и усов в сети барбершопов OldBoy варьируются от 200 до
            1200 рублей в зависимости от города, в котором вы хотите посетить мастера.
            Высококачественное профессиональное бритье и моделирование усов и бороды в салоне Oldboy
            даст результат, который невозможно достичь в домашних условиях, а также мы предоставляем
            комфорт, брутальную атмосферу, хорошую компанию и кофе, или напитки покрепче.
          </p>
        </div>
      </main>
      <footer>
        <Footer
          branchesTotal={branchesTotal}
          countriesTotal={countriesTotal}
          capitalsTotal={capitalsTotal}
          footerMainTitle="Меню"
          footerServicesTitle="Услуги"
          footerInfoTitle="Информация"
          footerMainList={footerMainList}
          footerServicesList={footerServicesList}
          footerInfoList={footerInfoList}
        />
      </footer>
    </div>
  );
}

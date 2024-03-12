/* eslint-disable @next/next/no-img-element */
import SearchForm from '@/components/SearchForm';
import { trending_data } from '@/data/trending';
import Image from 'next/image';
// import bg from '../public/bg.jpg';

export default function Home() {
  return (
    <main className="">
      <section className="">
        <div className="absolute bg-cover max-h-96 h-[440px] w-full bg-[url(../public/bg.jpeg)] bg-no-repeat z-0" />
        <div className="relative mx-auto max-w-6xl p-6 pt-16 lg:px-8 z-10">
          <h2 className="font-bold text-5xl text-white leading-snug">
            Wanderlust days <br />
            and cozy nights
          </h2>
          <h3 className="text-white py-5 text-xl">
            Choose from cabins, houses and more
          </h3>
        </div>
      </section>

      <section className="m-4 mt-12 -mb-14 px-2 lg:px-4 z-[999] relative">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-7xl mt-[100px] p-6 shadow-md rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular choices for travellers from around the world
          </p>
        </div>

        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                key={item.id}
                className="w-80 h-72 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />

              <p className="font-bold">{item.title}</p>
              <p className="">{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

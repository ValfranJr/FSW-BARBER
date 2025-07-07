import { Button } from "./_components/ui/button";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import {  SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";
import { quickSearchOptions } from "./_constants/search";
import BookingItem from "./_components/booking-item";



const Home = async () => {
  const barbershops = await db.barbershop.findMany({});
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div >
      {/* header */}
      <Header />
      <div className="p-5">
        {/* Texto */}
        <h2 className="text-xl font-bold">Olá, Valfran!</h2>
        <p>Sábado, 05 de julho</p>
        {/* Busca */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* Busca Rápida */}
        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
           <Button className="gap-2" variant="secondary" key={option.title}>
            <Image alt={option.title} src={option.imageUrl} width={16} height={16}></Image>
            {option.title}</Button>

          ))}

        </div>

        {/* Imagem */}
        <div className="relative w-full h-[150px] mt-6 rounded-xl ">
          <Image alt="agende nos melhores com Fsw Barber"
            src="/banner-01.png"
            fill
            className="object-content"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
        {/* Agendamento */}
        <BookingItem />

        {/* Recomendados */}
        <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        {/* Populares */}
        <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map(barbershop => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      {/* footer */}
    </div>
  );
}
export default Home;
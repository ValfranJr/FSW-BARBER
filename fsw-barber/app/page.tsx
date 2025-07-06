import { Button } from "./_components/ui/button";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { EyeIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

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
          <Button className="gap-2" variant="secondary">
            <Image alt="cabelo" src="/cabelo.svg" width={16} height={16}></Image>
            Cabelo</Button>
          <Button className="gap-2" variant="secondary">
            <Image alt="barba" src="/barba.svg" width={16} height={16}></Image>
            Barba</Button>
          <Button className="gap-2" variant="secondary">
            <Image alt="acabamento" src="/acabamento.svg" width={16} height={16}></Image>
            Acabamento</Button>
          <Button className="gap-2" variant="secondary">
            <Image alt="acabamento" src="/acabamento.svg" width={16} height={16}></Image>
            Pézinho</Button>
          <Button className="gap-2" variant="secondary">
            <EyeIcon size={16} />
            Sobrancelha</Button>

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
        <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">Agendamentos</h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" alt="Avatar" />
                </Avatar>
                <p className="text-sm">Barberia FSW</p>
              </div>
            </div>
            {/* Direita */}
            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Julho</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>

          </CardContent>
        </Card>
        {/* Recomendados */}
        <h2 className="uppercase text-gray-400 font-bold text-xs mt-6 mb-3">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map(barbershop => (
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
      <footer>
        <Card >
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">© 2023 Copyright <span className="font-bold">FSW Barber</span></p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
export default Home;
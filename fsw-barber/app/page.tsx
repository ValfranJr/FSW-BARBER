import { Button } from "./_components/ui/button";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";

const Home = () => {
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
        <Card className="mt-6">
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

      </div>
    </div>
  );
}
export default Home;
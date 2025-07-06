import { Button } from "./_components/ui/button";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div >
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Valfran!</h2>
        <p>Sábado, 05 de julho</p>
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6 rounded-xl">
          <Image alt="agende nos melhores com Fsw Barber"
            src="/Banner.png"
            fill
            className="object-content" />
        </div>
      </div>
    </div>
  );
}
export default Home;
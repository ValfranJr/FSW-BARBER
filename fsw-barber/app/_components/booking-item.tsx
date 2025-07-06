import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

const BookingItem = () => {
    return (
        <>
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
        </>
    );
}
export default BookingItem;